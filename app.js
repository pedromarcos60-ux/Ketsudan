// Lógica da aplicação Ketsudan

document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // ESTADO GLOBAL DO APLICATIVO
  // ==========================================
  let currentUser = null;
  let currentQuizQuestions = [];
  let currentQuestionIndex = 0;
  let currentQuizType = ""; // "preferencias" ou "situacional"
  let quizAnswers = {
    "Tecnologia": 0,
    "Saúde": 0,
    "Artes/Design": 0,
    "Negócios": 0,
    "Humanas": 0
  };
  let activeCategoryFilter = "Todas";
  let activeSearchTerm = "";

  // Inicializar banco de dados IndexedDB
  KetsudanDB.init().then(() => {
    console.log("IndexedDB pronto para uso no app.");
    // Carregar dados salvos no localStorage (se existirem)
    const savedUser = localStorage.getItem("ketsudan_user");
    if (savedUser) {
      currentUser = JSON.parse(savedUser);
      atualizarInterfaceUsuario();
    }
  }).catch(err => {
    console.error("Falha ao inicializar o banco de dados:", err);
  });

  // ==========================================
  // ROTEAMENTO SPA (Single Page Application)
  // ==========================================
  const views = document.querySelectorAll(".view");
  const navLinks = document.querySelectorAll(".nav-link");

  function navegarPara(viewId) {
    // Ocultar todas as views e remover classe de animação
    views.forEach(view => {
      view.classList.remove("active-view");
    });

    // Exibir a view correspondente
    const targetView = document.getElementById(`${viewId}-view`);
    if (targetView) {
      targetView.classList.add("active-view");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Atualizar classe ativa na barra de navegação
    navLinks.forEach(link => {
      if (link.getAttribute("data-target") === viewId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Controlar estados internos específicos ao navegar
    if (viewId === "testes") {
      gerenciarVisualizacaoTestes();
    } else if (viewId === "profissoes") {
      renderizarProfissoes();
    } else if (viewId === "relatos") {
      renderizarRelatos();
    }
  }

  // Eventos de clique no menu de navegação
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-target");
      navegarPara(target);
    });
  });

  // Clique na Logo (Volta para Home)
  document.getElementById("logo-btn").addEventListener("click", () => navegarPara("home"));

  // Cliques na página Inicial (Home)
  document.getElementById("cta-start-btn").addEventListener("click", () => {
    navegarPara("testes");
  });
  document.getElementById("cta-explore-btn").addEventListener("click", () => {
    navegarPara("profissoes");
  });

  // ==========================================
  // AUTENTICAÇÃO SIMULADA (localStorage)
  // ==========================================
  const authNavBtn = document.getElementById("auth-nav-btn");
  const userProfileSummary = document.getElementById("user-profile-summary");
  const userDisplayName = document.getElementById("user-display-name");
  const logoutBtn = document.getElementById("logout-btn");

  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  const loginError = document.getElementById("login-error");
  const registerError = document.getElementById("register-error");

  // Botão "Criar conta gratuita →" (no painel de login) → navega para cadastro
  document.getElementById("go-to-register-btn").addEventListener("click", () => {
    navegarPara("register");
    setTimeout(() => document.getElementById("register-name").focus(), 150);
  });

  // Botão "← Fazer login" (no painel de cadastro) → navega para login
  document.getElementById("go-to-login-btn").addEventListener("click", () => {
    navegarPara("login");
    setTimeout(() => document.getElementById("login-email").focus(), 150);
  });

  // Botão "Entrar / Cadastrar" no cabeçalho → navega para login
  authNavBtn.addEventListener("click", () => {
    navegarPara("login");
  });

  // Botão da área de testes bloqueada → navega para login
  document.getElementById("guest-to-auth-btn").addEventListener("click", () => {
    navegarPara("login");
  });

  // =================================================
  // LÓGICA DO FORMULÁRIO DE CADASTRO
  // =================================================

  const schoolSelect = document.getElementById("register-school");
  const schoolOutroGroup = document.getElementById("school-outro-group");
  const schoolOutroInput = document.getElementById("register-school-outro");
  const registerEmailInput = document.getElementById("register-email");
  const emailHint = document.getElementById("email-hint");
  const registerPasswordInput = document.getElementById("register-password");
  const togglePasswordBtn = document.getElementById("toggle-password-btn");
  const pwStrengthFill = document.getElementById("pw-strength-fill");
  const registerSuccess = document.getElementById("register-success");

  // Mostrar/ocultar campo "Outro" na escolaridade
  if (schoolSelect) {
    schoolSelect.addEventListener("change", () => {
      if (schoolSelect.value === "outro") {
        if (schoolOutroGroup) schoolOutroGroup.classList.remove("hidden");
        if (schoolOutroInput) schoolOutroInput.required = true;
      } else {
        if (schoolOutroGroup) schoolOutroGroup.classList.add("hidden");
        if (schoolOutroInput) {
          schoolOutroInput.required = false;
          schoolOutroInput.value = "";
        }
      }
    });
  }

  // Verificar e-mail duplicado em tempo real (no blur)
  registerEmailInput.addEventListener("blur", async () => {
    const email = registerEmailInput.value.trim();
    if (!email) return;
    try {
      const user = await KetsudanDB.getUser(email);
      if (user) {
        emailHint.textContent = "⚠ Este e-mail já está cadastrado.";
        emailHint.className = "field-hint hint-error";
        registerEmailInput.classList.add("input-error");
      } else {
        emailHint.textContent = "✓ E-mail disponível.";
        emailHint.className = "field-hint hint-ok";
        registerEmailInput.classList.remove("input-error");
      }
    } catch (err) {
      console.error("Erro ao verificar e-mail duplicado:", err);
    }
  });

  registerEmailInput.addEventListener("input", () => {
    emailHint.textContent = "";
    emailHint.className = "field-hint";
    registerEmailInput.classList.remove("input-error");
  });

  // Verificar força da senha em tempo real
  function verificarForcaSenha(pw) {
    const rules = {
      length: pw.length >= 8,
      upper:  /[A-Z]/.test(pw),
      number: /[0-9]/.test(pw),
      symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(pw)
    };

    // Atualizar ícone de cada regra
    const atualizar = (id, ok) => {
      const el = document.getElementById(`rule-${id}`);
      if (!el) return;
      const textos = {
        length: "Mínimo 8 caracteres",
        upper:  "Pelo menos 1 letra maiúscula",
        number: "Pelo menos 1 número",
        symbol: "Pelo menos 1 símbolo (!@#$...)"
      };
      el.textContent = `${ok ? "✓" : "✗"} ${textos[id]}`;
      el.classList.toggle("rule-ok", ok);
      el.classList.toggle("rule-fail", !ok);
    };

    atualizar("length", rules.length);
    atualizar("upper",  rules.upper);
    atualizar("number", rules.number);
    atualizar("symbol", rules.symbol);

    // Calcular nível de força (0-4)
    const score = Object.values(rules).filter(Boolean).length;
    const cores = ["#960018", "#c0392b", "#e67e22", "#27ae60", "#16a085"];
    const larguras = ["0%", "25%", "50%", "75%", "100%"];
    pwStrengthFill.style.width = larguras[score];
    pwStrengthFill.style.backgroundColor = cores[score];

    return rules;
  }

  registerPasswordInput.addEventListener("input", () => {
    verificarForcaSenha(registerPasswordInput.value);
  });

  // Mostrar/ocultar senha
  togglePasswordBtn.addEventListener("click", () => {
    const isHidden = registerPasswordInput.type === "password";
    registerPasswordInput.type = isHidden ? "text" : "password";
    togglePasswordBtn.textContent = isHidden ? "🙈" : "👁";
  });

  // Submeter Formulário de Cadastro
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    registerError.classList.add("hidden");
    registerSuccess.classList.add("hidden");

    const name  = document.getElementById("register-name").value.trim();
    const email = registerEmailInput.value.trim();
    const schoolVal = schoolSelect ? schoolSelect.value : "";
    const school = schoolVal === "outro"
      ? ((schoolOutroInput ? schoolOutroInput.value.trim() : "") || "Outro")
      : schoolVal;
    const password = registerPasswordInput.value;

    // Validar apelido
    if (!name) {
      registerError.textContent = "Por favor, informe como gostaria de ser chamado(a).";
      registerError.classList.remove("hidden");
      return;
    }

    // Validar escolaridade "Outro"
    if (schoolVal === "outro" && (!schoolOutroInput || !schoolOutroInput.value.trim())) {
      registerError.textContent = "Por favor, especifique sua escolaridade no campo \"Outro\".";
      registerError.classList.remove("hidden");
      return;
    }

    // Validar força da senha
    const rules = verificarForcaSenha(password);
    if (!rules.length || !rules.upper || !rules.number || !rules.symbol) {
      registerError.textContent = "A senha não atende todos os requisitos de segurança. Verifique as regras acima.";
      registerError.classList.remove("hidden");
      return;
    }

    try {
      // Verificar se já existe usuário com esse email no IndexedDB
      const userExists = await KetsudanDB.getUser(email);

      if (userExists) {
        registerError.textContent = "Este e-mail já está cadastrado. Tente fazer login.";
        registerError.classList.remove("hidden");
        return;
      }

      // Registrar Usuário no IndexedDB
      const newUser = { name, email, school, password, registeredAt: new Date().toISOString() };
      await KetsudanDB.saveUser(newUser);

      // Fazer login automático
      currentUser = { name, email, school };
      localStorage.setItem("ketsudan_user", JSON.stringify(currentUser));
      
      // Reset do form e atualização de tela
      registerForm.reset();
      schoolOutroGroup.classList.add("hidden");
      emailHint.textContent = "";
      pwStrengthFill.style.width = "0%";
      document.querySelectorAll(".pw-rule").forEach(r => {
        r.classList.remove("rule-ok", "rule-fail");
      });
      atualizarInterfaceUsuario();
      navegarPara("testes");
    } catch (err) {
      console.error("Erro ao cadastrar usuário:", err);
      registerError.textContent = "Erro interno ao conectar ao banco de dados.";
      registerError.classList.remove("hidden");
    }
  });

  // Submeter Formulário de Login
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginError.classList.add("hidden");

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    try {
      // Verificar se o usuário existe no IndexedDB
      const user = await KetsudanDB.getUser(email);

      if (!user || user.password !== password) {
        loginError.textContent = "E-mail ou senha incorretos.";
        loginError.classList.remove("hidden");
        return;
      }

      // Realizar Login
      currentUser = { name: user.name, email: user.email, school: user.school };
      localStorage.setItem("ketsudan_user", JSON.stringify(currentUser));

      loginForm.reset();
      atualizarInterfaceUsuario();
      navegarPara("testes");
    } catch (err) {
      console.error("Erro ao autenticar usuário:", err);
      loginError.textContent = "Erro interno ao conectar ao banco de dados.";
      loginError.classList.remove("hidden");
    }
  });

  // Evento de Logout
  logoutBtn.addEventListener("click", () => {
    currentUser = null;
    localStorage.removeItem("ketsudan_user");
    atualizarInterfaceUsuario();
    navegarPara("home");
  });

  // Atualiza botões do cabeçalho
  function atualizarInterfaceUsuario() {
    if (currentUser) {
      authNavBtn.classList.add("hidden");
      userProfileSummary.classList.remove("hidden");
      userDisplayName.textContent = currentUser.name.split(" ")[0]; // Pega apenas primeiro nome
    } else {
      authNavBtn.classList.remove("hidden");
      userProfileSummary.classList.add("hidden");
    }
  }

  // ==========================================
  // FLUXO DO TESTE VOCACIONAL (QUIZ)
  // ==========================================
  const testesGuestState = document.getElementById("testes-guest-state");
  const testesSelectionState = document.getElementById("testes-selection-state");
  const testesQuizState = document.getElementById("testes-quiz-state");
  const testesResultState = document.getElementById("testes-result-state");

  const startTestPrefBtn = document.getElementById("start-test-pref");
  const startTestSituBtn = document.getElementById("start-test-situ");
  const quitQuizBtn = document.getElementById("quit-quiz-btn");
  const btnRestartQuiz = document.getElementById("btn-restart-quiz");
  const btnGoToProfessions = document.getElementById("btn-go-to-professions");
  const btnStartTeste2 = document.getElementById("btn-start-teste2");

  const quizTitleDisplay = document.getElementById("quiz-title-display");
  const quizProgressText = document.getElementById("quiz-progress-text");
  const quizProgressBar = document.getElementById("quiz-progress-bar");
  const quizQuestionText = document.getElementById("quiz-question-text");
  const quizOptionsList = document.getElementById("quiz-options-list");

  // Guarda a área revelada pelo Teste 1 na sessão atual
  let areaPrimarioTeste = null;

  // Mapa dos bancos de perguntas do Teste 2 por área
  const bancoPorArea = {
    "Tecnologia":   "testeSituacionalTecnologia",
    "Saúde":        "testeSituacionalSaude",
    "Artes/Design": "testeSituacionalArtes",
    "Negócios":     "testeSituacionalNegocios",
    "Humanas":      "testeSituacionalHumanas"
  };

  // Controla o que exibir na aba de testes dependendo do login
  function gerenciarVisualizacaoTestes() {
    testesGuestState.classList.add("hidden");
    testesSelectionState.classList.add("hidden");
    testesQuizState.classList.add("hidden");
    testesResultState.classList.add("hidden");

    if (!currentUser) {
      testesGuestState.classList.remove("hidden");
    } else {
      testesSelectionState.classList.remove("hidden");
      atualizarEstadoTeste2();
      renderizarHistoricoTestes();
    }
  }

  // Atualiza o card do Teste 2 (bloqueado/desbloqueado) com base na área revelada
  function atualizarEstadoTeste2() {
    const cardTeste2 = document.getElementById("card-teste-2");
    const btnTeste2 = document.getElementById("start-test-situ");
    const descTeste2 = document.getElementById("teste2-desc");

    if (!cardTeste2 || !btnTeste2) return;

    if (areaPrimarioTeste) {
      // Desbloquear o card
      cardTeste2.classList.remove("locked");
      btnTeste2.disabled = false;
      btnTeste2.textContent = `Iniciar Teste de ${areaPrimarioTeste} →`;
      if (descTeste2) {
        descTeste2.textContent = `Cenários específicos da área de ${areaPrimarioTeste} para identificar as profissões mais compatíveis com o seu perfil.`;
      }
    } else {
      // Manter bloqueado
      cardTeste2.classList.add("locked");
      btnTeste2.disabled = true;
      btnTeste2.textContent = "Teste Bloqueado";
    }
  }

  // Evento para Iniciar Teste 1 — Preferências (revela a área)
  startTestPrefBtn.addEventListener("click", () => {
    iniciarQuiz("preferencias", ketsudanData.testePreferencias);
  });

  // Evento para Iniciar Teste 2 — Situacional específico da área
  startTestSituBtn.addEventListener("click", () => {
    if (!areaPrimarioTeste) return;
    const chave = bancoPorArea[areaPrimarioTeste];
    const banco = ketsudanData[chave];
    if (banco) {
      iniciarQuiz("situacional", banco);
    }
  });

  // Botão "Fazer Teste 2" dentro da tela de resultado do Teste 1
  if (btnStartTeste2) {
    btnStartTeste2.addEventListener("click", () => {
      if (!areaPrimarioTeste) return;
      const chave = bancoPorArea[areaPrimarioTeste];
      const banco = ketsudanData[chave];
      if (banco) {
        testesResultState.classList.add("hidden");
        iniciarQuiz("situacional", banco);
      }
    });
  }

  // Inicializador do Quiz
  function iniciarQuiz(tipo, bancoDePerguntas) {
    currentQuizQuestions = bancoDePerguntas;
    currentQuestionIndex = 0;
    currentQuizType = tipo;

    if (tipo === "preferencias") {
      // Teste 1 — Pontuação por área
      quizAnswers = {
        "Tecnologia": 0,
        "Saúde": 0,
        "Artes/Design": 0,
        "Negócios": 0,
        "Humanas": 0
      };
      quizTitleDisplay.textContent = "Etapa 1 — Descobrir Minha Área";
    } else {
      // Teste 2 — Pontuação por profissão (objeto vazio que cresce dinamicamente)
      quizAnswers = {};
      quizTitleDisplay.textContent = `Etapa 2 — Profissões em ${areaPrimarioTeste}`;
    }

    testesSelectionState.classList.add("hidden");
    testesResultState.classList.add("hidden");
    testesQuizState.classList.remove("hidden");

    renderizarPergunta();
  }

  // Renderiza a pergunta atual
  function renderizarPergunta() {
    const pergunta = currentQuizQuestions[currentQuestionIndex];
    const totalPerguntas = currentQuizQuestions.length;

    quizProgressText.textContent = `Pergunta ${currentQuestionIndex + 1} de ${totalPerguntas}`;
    const pctProgresso = ((currentQuestionIndex + 1) / totalPerguntas) * 100;
    quizProgressBar.style.width = `${pctProgresso}%`;
    quizQuestionText.textContent = pergunta.pergunta;

    quizOptionsList.innerHTML = "";
    pergunta.opcoes.forEach((opcao, indice) => {
      const letra = String.fromCharCode(65 + indice);

      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `
        <span class="option-marker">${letra}</span>
        <span class="option-content-text">${opcao.texto}</span>
      `;

      btn.addEventListener("click", () => {
        if (currentQuizType === "preferencias") {
          // Teste 1: pontuar área
          quizAnswers[opcao.area] = (quizAnswers[opcao.area] || 0) + (opcao.peso || 1);
        } else {
          // Teste 2: pontuar profissão por ID
          quizAnswers[opcao.profissao] = (quizAnswers[opcao.profissao] || 0) + 1;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < totalPerguntas) {
          renderizarPergunta();
        } else {
          calcularExibirResultados();
        }
      });

      quizOptionsList.appendChild(btn);
    });
  }

  // Sair do questionário antes de terminar
  quitQuizBtn.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja cancelar o teste? Suas respostas atuais serão perdidas.")) {
      testesQuizState.classList.add("hidden");
      testesSelectionState.classList.remove("hidden");
    }
  });

  // Fechar tela de resultados e voltar para seleção
  btnRestartQuiz.addEventListener("click", () => {
    testesResultState.classList.add("hidden");
    // Resetar sessão para permitir refazer do zero
    areaPrimarioTeste = null;
    atualizarEstadoTeste2();
    testesSelectionState.classList.remove("hidden");
  });

  // Ir para profissões a partir do resultado
  btnGoToProfessions.addEventListener("click", () => {
    testesResultState.classList.add("hidden");
    navegarPara("profissoes");
  });

  // Calcula os pontos e desenha a tela de resultado correta
  async function calcularExibirResultados() {
    testesQuizState.classList.add("hidden");
    testesResultState.classList.remove("hidden");

    if (currentQuizType === "preferencias") {
      // === RESULTADO DO TESTE 1: revelar área ===
      let areaDominante = "Tecnologia";
      let maiorPontuacao = -1;
      for (const [area, pontos] of Object.entries(quizAnswers)) {
        if (pontos > maiorPontuacao) {
          maiorPontuacao = pontos;
          areaDominante = area;
        }
      }

      // Guardar área na sessão e desbloquear Teste 2
      areaPrimarioTeste = areaDominante;
      atualizarEstadoTeste2();

      // Atualizar o botão "Fazer Teste 2" com o nome da área
      if (btnStartTeste2) {
        btnStartTeste2.textContent = `Fazer Teste 2 — Aprofundar em ${areaDominante} →`;
      }

      // Salvar no histórico
      if (currentUser) {
        try {
          await KetsudanDB.saveTestResult(currentUser.email, "Preferências (Área)", quizAnswers, areaDominante);
        } catch (err) {
          console.error("Erro ao salvar resultado:", err);
        }
      }

      // Mostrar resultado do Teste 1 e esconder Teste 2
      document.getElementById("result-teste1-content").classList.remove("hidden");
      document.getElementById("result-teste2-content").classList.add("hidden");

      exibirResultadoTeste1(quizAnswers, areaDominante);

    } else {
      // === RESULTADO DO TESTE 2: profissões rankeadas ===

      // Ranquear profissões por pontuação
      const ranking = Object.entries(quizAnswers)
        .sort(([, a], [, b]) => b - a);

      // Salvar no histórico com a área como dominante
      if (currentUser) {
        try {
          await KetsudanDB.saveTestResult(currentUser.email, `Profissões em ${areaPrimarioTeste}`, quizAnswers, areaPrimarioTeste);
        } catch (err) {
          console.error("Erro ao salvar resultado:", err);
        }
      }

      // Mostrar resultado do Teste 2 e esconder Teste 1
      document.getElementById("result-teste1-content").classList.add("hidden");
      document.getElementById("result-teste2-content").classList.remove("hidden");

      exibirResultadoTeste2(ranking, areaPrimarioTeste);
    }
  }

  // Renderiza resultado do Teste 1 (área dominante + gráfico)
  function exibirResultadoTeste1(answers, dominantArea) {
    const totalPontos = Object.values(answers).reduce((a, b) => a + b, 0);

    const descricoesArea = {
      "Tecnologia": "Você demonstra grande afinidade com resolução de problemas lógicos, análise de dados e criação de soluções digitais. Profissões desta área envolvem programar softwares, gerenciar dados e lidar com infraestruturas inteligentes.",
      "Saúde": "Seu perfil indica forte vocação para empatia, escuta e cuidado direto com a saúde física e mental das pessoas. Carreiras nesta área se concentram no bem-estar humano, tratamentos médicos, terapias e cuidados preventivos.",
      "Artes/Design": "Você é movido pela expressão visual, criação e narrativa. Áreas artísticas e de design trabalham a união de estética com criatividade, desenhando experiências, ilustrando ideias ou modelando mundos virtuais.",
      "Negócios": "Você demonstra talento para organização, liderança e visão estratégica. A área de negócios engloba finanças, marketing estratégico, gerenciamento de projetos e a tomada de decisões cruciais para que empresas tenham sucesso.",
      "Humanas": "Seu perfil valoriza a comunicação, a leitura, a história e o desenvolvimento social e intelectual. Esta área foca no ensino, investigação jornalística, entendimento de comportamentos sociais e na transformação educativa da sociedade."
    };

    const svgsArea = {
      "Tecnologia": `
        <svg viewBox="0 0 120 120" width="100%" height="100%" class="result-svg-illustration">
          <rect x="20" y="25" width="80" height="50" rx="4" fill="#1b0003" stroke="#d4a373" stroke-width="2"/>
          <line x1="45" y1="75" x2="35" y2="95" stroke="#d4a373" stroke-width="3" stroke-linecap="round"/>
          <line x1="75" y1="75" x2="85" y2="95" stroke="#d4a373" stroke-width="3" stroke-linecap="round"/>
          <line x1="30" y1="95" x2="90" y2="95" stroke="#d4a373" stroke-width="3" stroke-linecap="round"/>
          <line x1="30" y1="35" x2="60" y2="35" stroke="#960018" stroke-width="2" stroke-linecap="round"/>
          <line x1="30" y1="45" x2="80" y2="45" stroke="#f5e1ce" stroke-width="2" stroke-linecap="round"/>
          <line x1="30" y1="55" x2="50" y2="55" stroke="#d4a373" stroke-width="2" stroke-linecap="round"/>
          <line x1="30" y1="65" x2="70" y2="65" stroke="#f5e1ce" stroke-width="2" stroke-linecap="round"/>
          <circle cx="85" cy="63" r="6" fill="#960018" opacity="0.8"/>
          <text x="82" y="66" font-family="'Noto Serif JP'" font-size="8" fill="#f5e1ce" font-weight="bold">技</text>
        </svg>
      `,
      "Saúde": `
        <svg viewBox="0 0 120 120" width="100%" height="100%" class="result-svg-illustration">
          <path d="M 60 30 Q 30 50 60 90 Q 90 50 60 30" fill="none" stroke="#d4a373" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M 40 40 C 40 80 80 80 80 40" fill="none" stroke="#f5e1ce" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 60 72 C 60 100 85 95 85 95" fill="none" stroke="#f5e1ce" stroke-width="2" stroke-linecap="round"/>
          <circle cx="85" cy="95" r="5" fill="#960018" stroke="#f5e1ce" stroke-width="1.5"/>
          <path d="M 33 35 L 47 35 M 73 35 L 87 35" stroke="#d4a373" stroke-width="3" stroke-linecap="round"/>
          <circle cx="95" cy="65" r="6" fill="#960018" opacity="0.8"/>
          <text x="92" y="68" font-family="'Noto Serif JP'" font-size="8" fill="#f5e1ce" font-weight="bold">医</text>
        </svg>
      `,
      "Artes/Design": `
        <svg viewBox="0 0 120 120" width="100%" height="100%" class="result-svg-illustration">
          <circle cx="60" cy="60" r="35" fill="none" stroke="#d4a373" stroke-width="1.5" stroke-dasharray="5 3"/>
          <line x1="30" y1="90" x2="85" y2="35" stroke="#f5e1ce" stroke-width="3" stroke-linecap="round"/>
          <polygon points="30,90 35,85 27,83" fill="#d4a373"/>
          <line x1="90" y1="30" x2="45" y2="75" stroke="#d4a373" stroke-width="4" stroke-linecap="round"/>
          <path d="M 45 75 Q 38 82 35 92 Q 45 88 50 80 Z" fill="#960018"/>
          <circle cx="90" cy="75" r="6" fill="#960018" opacity="0.8"/>
          <text x="87" y="78" font-family="'Noto Serif JP'" font-size="8" fill="#f5e1ce" font-weight="bold">美</text>
        </svg>
      `,
      "Negócios": `
        <svg viewBox="0 0 120 120" width="100%" height="100%" class="result-svg-illustration">
          <rect x="20" y="35" width="80" height="50" fill="none" stroke="#d4a373" stroke-width="2"/>
          <line x1="20" y1="50" x2="100" y2="50" stroke="#d4a373" stroke-width="2"/>
          <line x1="36" y1="35" x2="36" y2="85" stroke="#f5e1ce" stroke-width="1"/>
          <line x1="52" y1="35" x2="52" y2="85" stroke="#f5e1ce" stroke-width="1"/>
          <line x1="68" y1="35" x2="68" y2="85" stroke="#f5e1ce" stroke-width="1"/>
          <line x1="84" y1="35" x2="84" y2="85" stroke="#f5e1ce" stroke-width="1"/>
          <circle cx="36" cy="42" r="3" fill="#960018"/>
          <circle cx="52" cy="42" r="3" fill="#960018"/>
          <circle cx="68" cy="42" r="3" fill="#960018"/>
          <circle cx="84" cy="42" r="3" fill="#960018"/>
          <circle cx="36" cy="60" r="3" fill="#f5e1ce"/>
          <circle cx="52" cy="60" r="3" fill="#f5e1ce"/>
          <circle cx="85" cy="73" r="7" fill="#960018" opacity="0.9"/>
          <text x="82" y="76" font-family="'Noto Serif JP'" font-size="9" fill="#f5e1ce" font-weight="bold">商</text>
        </svg>
      `,
      "Humanas": `
        <svg viewBox="0 0 120 120" width="100%" height="100%" class="result-svg-illustration">
          <path d="M 20 85 C 40 85 55 80 60 70 C 65 80 80 85 100 85 L 100 45 C 80 45 65 40 60 30 C 55 40 40 45 20 45 Z" fill="#300006" stroke="#d4a373" stroke-width="2"/>
          <line x1="60" y1="30" x2="60" y2="70" stroke="#d4a373" stroke-width="1.5"/>
          <path d="M 28 53 L 48 53 M 28 61 L 44 61 M 28 69 L 48 69" stroke="#f5e1ce" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
          <path d="M 72 53 L 92 53 M 72 61 L 88 61 M 72 69 L 92 69" stroke="#f5e1ce" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
          <circle cx="95" cy="30" r="6" fill="#960018" opacity="0.8"/>
          <text x="92" y="33" font-family="'Noto Serif JP'" font-size="8" fill="#f5e1ce" font-weight="bold">文</text>
        </svg>
      `
    };

    document.getElementById("dominant-area-name").textContent = dominantArea.toUpperCase();
    document.getElementById("dominant-area-desc").textContent = descricoesArea[dominantArea];

    const mediaContainer = document.getElementById("dominant-area-media");
    if (mediaContainer) {
      mediaContainer.innerHTML = svgsArea[dominantArea] || "";
    }

    // Gráfico de barras
    const barsContainer = document.getElementById("chart-bars-container");
    barsContainer.innerHTML = "";
    const nomesAmigaveis = {
      "Tecnologia": "Tecnologia",
      "Saúde": "Saúde & Cuidado",
      "Artes/Design": "Artes & Design",
      "Negócios": "Negócios & Gestão",
      "Humanas": "Ciências Humanas"
    };

    Object.entries(answers).forEach(([area, pontos]) => {
      const porcentagem = totalPontos > 0 ? Math.round((pontos / totalPontos) * 100) : 0;
      const row = document.createElement("div");
      row.className = "chart-row";
      row.innerHTML = `
        <div class="chart-row-label">
          <span>${nomesAmigaveis[area]}</span>
          <span>${porcentagem}%</span>
        </div>
        <div class="chart-row-bar-bg">
          <div class="chart-row-bar-fill ${area === dominantArea ? "dominant-bar" : ""}" style="width: 0%;"></div>
        </div>
      `;
      barsContainer.appendChild(row);
      setTimeout(() => {
        const fill = row.querySelector(".chart-row-bar-fill");
        if (fill) fill.style.width = `${porcentagem}%`;
      }, 150);
    });
  }

  // Renderiza resultado do Teste 2 (profissões rankeadas)
  function exibirResultadoTeste2(ranking, area) {
    const container = document.getElementById("result2-ranking-container");
    const label = document.getElementById("result2-area-label");
    container.innerHTML = "";

    if (label) {
      label.textContent = `Resultado baseado nas suas respostas em cenários de ${area}. As profissões estão ordenadas por compatibilidade.`;
    }

    const medalhas = ["🥇", "🥈", "🥉"];
    const totalPontos = ranking.reduce((sum, [, pts]) => sum + pts, 0);

    ranking.forEach(([profissaoId, pontos], index) => {
      const prof = ketsudanData.profissoes.find(p => p.id === profissaoId);
      if (!prof) return;

      const porcentagem = totalPontos > 0 ? Math.round((pontos / totalPontos) * 100) : 0;
      const card = document.createElement("div");
      card.className = `ranking-card ${index === 0 ? "ranking-top" : ""}`;
      card.innerHTML = `
        <div class="ranking-position">${medalhas[index] || `#${index + 1}`}</div>
        <div class="ranking-info">
          <div class="ranking-name">${prof.icone} ${prof.nome}</div>
          <div class="ranking-bar-wrap">
            <div class="ranking-bar-fill" style="width: 0%;"></div>
          </div>
          <div class="ranking-compat">${porcentagem}% de compatibilidade</div>
        </div>
        <button class="ranking-detail-btn" data-prof-id="${prof.id}">Ver detalhes →</button>
      `;

      card.querySelector(".ranking-detail-btn").addEventListener("click", () => {
        abrirModalProfissao(prof.id);
      });

      container.appendChild(card);


  // Obtém os resultados de teste do banco de dados e os exibe na aba de seleção
  async function renderizarHistoricoTestes() {
    const historicoSection = document.getElementById("testes-historico-section");
    const container = document.getElementById("historico-list-container");
    const clearBtn = document.getElementById("btn-clear-history");

    if (!currentUser) {
      historicoSection.classList.add("hidden");
      return;
    }

    try {
      const results = await KetsudanDB.getTestResults(currentUser.email);
      historicoSection.classList.remove("hidden");
      container.innerHTML = "";

      // Recuperar o resultado do Teste 1 para desbloquear o Teste 2 caso ele já tenha sido feito
      const lastTeste1 = results.find(res => res.testType.startsWith("Preferências"));
      if (lastTeste1 && !areaPrimarioTeste) {
        areaPrimarioTeste = lastTeste1.dominantArea;
        atualizarEstadoTeste2();
      }

      if (results.length === 0) {
        clearBtn.classList.add("hidden");
        container.innerHTML = `
          <div class="no-history">
            <span class="no-history-icon">⛩️</span>
            <p>Você ainda não possui testes salvos no histórico. Mapeie seu perfil acima!</p>
          </div>
        `;
        return;
      }

      clearBtn.classList.remove("hidden");

      // Adicionar evento para limpar o histórico
      clearBtn.onclick = async () => {
        if (confirm("Deseja realmente limpar todo o seu histórico de testes? Esta ação é irreversível.")) {
          await KetsudanDB.clearTestResults(currentUser.email);
          areaPrimarioTeste = null;
          atualizarEstadoTeste2();
          renderizarHistoricoTestes();
        }
      };

      const iconesArea = {
        "Tecnologia": "💻",
        "Saúde": "🧠",
        "Artes/Design": "🎨",
        "Negócios": "💼",
        "Humanas": "🏫"
      };

      results.forEach(res => {
        const dataStr = new Date(res.timestamp).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });

        const item = document.createElement("div");
        item.className = "historico-item";
        item.innerHTML = `
          <div class="historico-item-left">
            <div class="historico-badge">${iconesArea[res.dominantArea] || "決"}</div>
            <div class="historico-info">
              <h4>${res.testType}</h4>
              <span class="historico-date">${dataStr}</span>
            </div>
          </div>
          <div class="historico-item-right">
            <div class="historico-result-area">
              <span class="historico-result-label">Resultado principal</span>
              <div class="historico-result-val">${res.dominantArea}</div>
            </div>
            <button class="btn-view-stored-result" data-id="${res.id}">Ver Detalhes →</button>
          </div>
        `;

        // Adicionar evento no botão "Ver Detalhes" para carregar o resultado correto
        item.querySelector(".btn-view-stored-result").addEventListener("click", () => {
          testesSelectionState.classList.add("hidden");
          testesResultState.classList.remove("hidden");
          
          if (res.testType.startsWith("Preferências")) {
            document.getElementById("result-teste1-content").classList.remove("hidden");
            document.getElementById("result-teste2-content").classList.add("hidden");
            exibirResultadoTeste1(res.answers, res.dominantArea);
          } else {
            document.getElementById("result-teste1-content").classList.add("hidden");
            document.getElementById("result-teste2-content").classList.remove("hidden");
            const ranking = Object.entries(res.answers).sort(([, a], [, b]) => b - a);
            exibirResultadoTeste2(ranking, res.dominantArea);
          }
        });

        container.appendChild(item);
      });
    } catch (err) {
      console.error("Erro ao renderizar o histórico de testes:", err);
      container.innerHTML = `<p class="error-message">Erro ao carregar o histórico de testes do banco de dados.</p>`;
    }
  }


  // ==========================================
  // GUIA DE PROFISSÕES (BUSCA E FILTRO)
  // ==========================================
  const searchInput = document.getElementById("search-profession-input");
  const filterTagsContainer = document.getElementById("category-filter-tags");
  const professionsGridContainer = document.getElementById("professions-grid-container");

  // Função auxiliar para normalizar texto removendo acentos
  const normalizarTexto = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  };

  // Escutar digitação na barra de busca
  searchInput.addEventListener("input", (e) => {
    activeSearchTerm = normalizarTexto(e.target.value);
    renderizarProfissoes();
  });

  // Escutar clique nos botões de filtro de categoria
  filterTagsContainer.addEventListener("click", (e) => {
    const tag = e.target.closest(".filter-tag");
    if (!tag) return;

    // Atualizar tag ativa no HTML
    filterTagsContainer.querySelectorAll(".filter-tag").forEach(btn => {
      btn.classList.remove("active-tag");
      btn.setAttribute("aria-selected", "false");
    });
    tag.classList.add("active-tag");
    tag.setAttribute("aria-selected", "true");

    activeCategoryFilter = tag.getAttribute("data-category");
    renderizarProfissoes();
  });

  // Renderizar a lista filtrada de profissões
  function renderizarProfissoes() {
    professionsGridContainer.innerHTML = "";

    // Filtrar profissões do banco
    const profsFiltradas = ketsudanData.profissoes.filter(prof => {
      const correspondeCategoria = activeCategoryFilter === "Todas" || prof.categoria === activeCategoryFilter;
      const correspondeBusca = normalizarTexto(prof.nome).includes(activeSearchTerm) || 
                                normalizarTexto(prof.descricao).includes(activeSearchTerm) ||
                                normalizarTexto(prof.categoria).includes(activeSearchTerm);
      return correspondeCategoria && correspondeBusca;
    });

    if (profsFiltradas.length === 0) {
      professionsGridContainer.innerHTML = `
        <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
          <span style="font-size: 2rem; display: block; margin-bottom: 1rem;">🍂</span>
          <p>Nenhuma profissão foi encontrada com os filtros atuais.</p>
        </div>
      `;
      return;
    }

    // Gerar cards
    profsFiltradas.forEach(prof => {
      const card = document.createElement("div");
      card.className = "profession-card";
      card.innerHTML = `
        <div>
          <span class="prof-category-badge">${prof.categoria}</span>
          <div class="prof-card-header">
            <div class="prof-icon-wrapper">${prof.icone}</div>
            <h3 class="prof-card-title">${prof.nome}</h3>
          </div>
          <p class="prof-card-desc">${prof.descricao}</p>
        </div>
        <div class="prof-card-footer">
          <div class="prof-salary-info">
            <span class="prof-salary-label">Salário Médio</span>
            <span class="prof-salary-val">${prof.salarioEntrada} - ${prof.salarioSenior}</span>
          </div>
          <button class="btn-card-more" data-id="${prof.id}">Ver Detalhes →</button>
        </div>
      `;

      // Evento no botão de detalhes
      card.querySelector(".btn-card-more").addEventListener("click", () => {
        abrirModalProfissao(prof.id);
      });

      professionsGridContainer.appendChild(card);
    });
  }

  // ==========================================
  // MURAL DE RELATOS
  // ==========================================
  const relatosContainerList = document.getElementById("relatos-container-list");

  function renderizarRelatos() {
    relatosContainerList.innerHTML = "";

    ketsudanData.relatos.forEach(relato => {
      const card = document.createElement("article");
      card.className = "relato-card";
      card.innerHTML = `
        <div class="relato-meta">
          <div class="relato-author-info">
            <h3>${relato.nome}, ${relato.idade} anos</h3>
            <span class="relato-author-sub">${relato.profissao}</span>
          </div>
          <span class="relato-category">${relato.area}</span>
        </div>
        <p class="relato-text">"${relato.depoimento}"</p>
        <div class="relato-footer">
          <div class="relato-hanko-signature" title="Assinatura tradicional">${relato.assinatura}</div>
        </div>
      `;
      relatosContainerList.appendChild(card);
    });
  }

  // ==========================================
  // MODAL DE DETALHES DE PROFISSÃO
  // ==========================================
  const modal = document.getElementById("profession-detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalOverlay = document.getElementById("modal-overlay-btn");

  function abrirModalProfissao(profId) {
    const prof = ketsudanData.profissoes.find(p => p.id === profId);
    if (!prof) return;

    // Preencher cabeçalho
    document.getElementById("modal-prof-icon").textContent = prof.icone;
    document.getElementById("modal-prof-name").textContent = prof.nome;
    document.getElementById("modal-prof-category").textContent = prof.categoria;

    // Preencher descrição geral
    document.getElementById("modal-prof-desc").textContent = prof.descricao;

    // Preencher atividades principais
    const actList = document.getElementById("modal-prof-activities");
    actList.innerHTML = "";
    prof.atividades.forEach(act => {
      const li = document.createElement("li");
      li.textContent = act;
      actList.appendChild(li);
    });

    // Salários
    document.getElementById("modal-prof-sal-entry").textContent = prof.salarioEntrada;
    document.getElementById("modal-prof-sal-senior").textContent = prof.salarioSenior;

    // Habilidades tags
    const skillsContainer = document.getElementById("modal-prof-skills");
    skillsContainer.innerHTML = "";
    prof.habilidades.forEach(skill => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = skill;
      skillsContainer.appendChild(tag);
    });

    // Mercado
    document.getElementById("modal-prof-market").textContent = prof.mercado;

    // Exibir o modal
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Bloqueia scroll de fundo
  }

  function fecharModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Restaura scroll de fundo
  }

  // Eventos para fechar o modal
  modalCloseBtn.addEventListener("click", fecharModal);
  modalOverlay.addEventListener("click", fecharModal);
  
  // Tecla Esc fecha o modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      fecharModal();
    }
  });

});

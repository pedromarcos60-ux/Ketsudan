// Dados globais do projeto Ketsudan
const ketsudanData = {
  // Lista de Profissões e dados do mercado brasileiro
  profissoes: [
    {
      id: "dev-software",
      nome: "Desenvolvedor(a) de Software",
      categoria: "Tecnologia",
      icone: "💻",
      descricao: "Profissional responsável por criar, programar e dar manutenção a aplicativos, sites, sistemas operacionais e softwares de automação.",
      atividades: [
        "Escrever código limpo e eficiente utilizando linguagens de programação.",
        "Identificar e corrigir bugs (erros no código).",
        "Planejar a arquitetura de novas funcionalidades de sistemas.",
        "Trabalhar em conjunto com designers UX/UI para criar boas interfaces."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Raciocínio lógico", "Resolução de problemas", "Trabalho em equipe", "Inglês técnico", "Linguagens como JavaScript, Python ou Java"],
      mercado: "Altíssima demanda no Brasil e no exterior. O mercado de tecnologia continua em expansão, com grande flexibilidade para trabalho remoto."
    },
    {
      id: "cientista-dados",
      nome: "Cientista de Dados",
      categoria: "Tecnologia",
      icone: "📊",
      descricao: "Especialista em analisar grandes volumes de dados para encontrar padrões, fazer previsões e ajudar empresas a tomar decisões estratégicas.",
      atividades: [
        "Coletar e limpar dados de diferentes fontes.",
        "Construir modelos de inteligência artificial e aprendizado de máquina.",
        "Criar relatórios visuais e gráficos para explicar descobertas complexas.",
        "Colaborar com equipes de negócios para entender problemas operacionais."
      ],
      salarioEntrada: "R$ 5.000",
      salarioSenior: "R$ 18.000+",
      habilidades: ["Estatística e matemática", "Programação (Python/R)", "SQL", "Comunicação clara", "Curiosidade intelectual"],
      mercado: "Uma das profissões mais valorizadas da atualidade. Empresas de finanças, saúde, varejo e tecnologia buscam intensamente por esses profissionais."
    },
    {
      id: "psicologo",
      nome: "Psicólogo(a)",
      categoria: "Saúde",
      icone: "🧠",
      descricao: "Profissional que estuda os processos mentais, o comportamento humano e ajuda pessoas a lidarem com questões emocionais, mentais e sociais.",
      atividades: [
        "Realizar sessões de psicoterapia individuais ou em grupo.",
        "Diagnosticar e tratar distúrbios emocionais e comportamentais.",
        "Trabalhar no setor de Recursos Humanos de empresas (recrutamento e bem-estar).",
        "Desenvolver pesquisas sobre o comportamento humano."
      ],
      salarioEntrada: "R$ 2.800",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Escuta ativa", "Empatia profunda", "Comunicação não-verbal", "Ética profissional", "Pensamento analítico"],
      mercado: "Crescimento acelerado nos últimos anos devido à maior conscientização sobre a importância da saúde mental. Há espaço em clínicas, hospitais, escolas e corporações."
    },
    {
      id: "enfermeiro",
      nome: "Enfermeiro(a)",
      categoria: "Saúde",
      icone: "🩺",
      descricao: "Profissional de saúde que atua diretamente no cuidado, tratamento e reabilitação de pacientes, além da gestão de equipes de saúde.",
      atividades: [
        "Administrar medicamentos e realizar tratamentos prescritos.",
        "Prestar primeiros socorros e assistência em cirurgias.",
        "Monitorar o estado de saúde geral e sinais vitais dos pacientes.",
        "Orientar pacientes e familiares sobre cuidados de saúde preventivos."
      ],
      salarioEntrada: "R$ 3.800",
      salarioSenior: "R$ 8.500+",
      habilidades: ["Resistência física e emocional", "Empatia", "Trabalho sob pressão", "Atenção a detalhes", "Liderança"],
      mercado: "Mercado muito estável e com alta empregabilidade. Hospitais públicos e privados, clínicas de repouso e home care demandam constantemente enfermeiros capacitados."
    },
    {
      id: "designer-ux-ui",
      nome: "Designer de UX/UI",
      categoria: "Artes/Design",
      icone: "🎨",
      descricao: "Responsável por desenhar a experiência (UX) e a interface visual (UI) de produtos digitais, como aplicativos e sites, tornando-os fáceis e agradáveis de usar.",
      atividades: [
        "Realizar pesquisas com usuários para entender suas dores e necessidades.",
        "Criar esboços de telas (wireframes) e protótipos interativos.",
        "Definir paleta de cores, tipografia e elementos visuais de um app.",
        "Testar a usabilidade com usuários reais para colher feedbacks."
      ],
      salarioEntrada: "R$ 3.200",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Criatividade visual", "Empatia", "Noções de psicologia do usuário", "Ferramentas como Figma e Adobe XD", "Boa comunicação"],
      mercado: "Excelente mercado, impulsionado pela transformação digital das empresas. Profissionais que combinam habilidades artísticas com análises lógicas são muito disputados."
    },
    {
      id: "animador-digital",
      nome: "Animador(a) Digital / Modelador 3D",
      categoria: "Artes/Design",
      icone: "🎬",
      descricao: "Profissional que cria imagens em movimento, efeitos visuais e cenários 2D/3D para jogos, filmes, comerciais de TV e mídias sociais.",
      atividades: [
        "Criar conceitos de personagens e cenários (concept art).",
        "Desenvolver animações fluidas quadro a quadro ou digitais.",
        "Modelar e texturizar objetos tridimensionais (3D).",
        "Colaborar com roteiristas e diretores de arte para dar vida a histórias."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Domínio de softwares de animação/3D (Maya, Blender)", "Noção de anatomia e movimento", "Paciência e atenção a detalhes", "Narrativa visual"],
      mercado: "Mercado aquecido na indústria de jogos de videogame e animação. Possibilidade de trabalhar como freelancer para produtoras de todo o mundo."
    },
    {
      id: "administrador",
      nome: "Administrador(a) de Empresas",
      categoria: "Negócios",
      icone: "💼",
      descricao: "Profissional que planeja, organiza, gerencia e lidera os recursos financeiros, materiais e humanos de uma organização para alcançar metas.",
      atividades: [
        "Planejar metas estratégicas e financeiras de curto e longo prazo.",
        "Coordenar equipes e gerenciar o clima organizacional da empresa.",
        "Analisar relatórios financeiros, faturamento e fluxo de caixa.",
        "Negociar com fornecedores, parceiros e grandes clientes."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 14.000+",
      habilidades: ["Liderança", "Visão estratégica", "Boa comunicação", "Raciocínio lógico-matemático", "Resolução de conflitos"],
      mercado: "Um dos campos mais amplos do mercado de trabalho. Todas as empresas, de pequenos comércios a multinacionais e ONGs, necessitam de gestão profissional."
    },
    {
      id: "marketing-digital",
      nome: "Especialista em Marketing Digital",
      categoria: "Negócios",
      icone: "📣",
      descricao: "Planeja e executa estratégias de comunicação na internet para atrair clientes, promover marcas e aumentar vendas através de redes sociais e buscas.",
      atividades: [
        "Gerenciar campanhas de anúncios pagos (Google Ads, Meta Ads).",
        "Analisar métricas de tráfego, cliques e conversões de vendas.",
        "Criar estratégias de conteúdo para redes sociais e blogs.",
        "Otimizar sites para aparecerem no topo do Google (SEO)."
      ],
      salarioEntrada: "R$ 2.600",
      salarioSenior: "R$ 11.000+",
      habilidades: ["Comunicação persuasiva", "Análise de dados", "Criatividade", "Adaptabilidade", "Uso de ferramentas de analytics"],
      mercado: "Mercado muito dinâmico e em constante mudança. Praticamente todas as empresas físicas e digitais dependem do marketing para sobreviver e crescer."
    },
    {
      id: "professor",
      nome: "Professor(a) / Educador(a)",
      categoria: "Humanas",
      icone: "🏫",
      descricao: "Profissional dedicado ao ensino, à transmissão de conhecimentos e ao desenvolvimento crítico e intelectual de alunos em diferentes níveis escolares.",
      atividades: [
        "Planejar e ministrar aulas didáticas e interessantes.",
        "Elaborar atividades avaliativas e acompanhar o desenvolvimento dos alunos.",
        "Participar de reuniões pedagógicas e conselhos de classe.",
        "Desenvolver metodologias de ensino inovadoras e inclusivas."
      ],
      salarioEntrada: "R$ 3.200 (piso nacional)",
      salarioSenior: "R$ 8.000+",
      habilidades: ["Didática e paciência", "Oratória e comunicação", "Gestão de grupo", "Paixão pelo conhecimento", "Empatia com jovens/crianças"],
      mercado: "Alta empregabilidade, pois a educação é um serviço essencial e perpétuo. O ensino híbrido e o desenvolvimento de cursos digitais abriram novas fronteiras."
    },
    {
      id: "jornalista",
      nome: "Jornalista / Produtor(a) de Conteúdo",
      categoria: "Humanas",
      icone: "✍️",
      descricao: "Investiga fatos, redige notícias, realiza entrevistas e produz reportagens para jornais, TVs, portais de internet, podcasts e assessorias.",
      atividades: [
        "Apurar notícias e checar a veracidade das fontes de informação.",
        "Realizar entrevistas com especialistas e testemunhas.",
        "Escrever textos, roteiros ou apresentar programas e podcasts.",
        "Cobrir acontecimentos em tempo real de interesse público."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Excelente escrita e gramática", "Curiosidade investigativa", "Ética profissional", "Boa comunicação e oratória", "Agilidade"],
      mercado: "O jornalismo tradicional passa por mudanças, mas o mercado de produção de conteúdo, mídias digitais, assessoria de imprensa e podcasts está muito forte."
    }
  ],

  // Banco de perguntas do Teste 1: Preferências de Atividades
  testePreferencias: [
    {
      id: 1,
      pergunta: "Em um final de semana livre, qual dessas atividades você faria com mais entusiasmo?",
      opcoes: [
        { texto: "Aprender a programar um jogo ou montar um pequeno circuito eletrônico.", area: "Tecnologia", peso: 2 },
        { texto: "Fazer trabalho voluntário em um hospital ou dar apoio a um amigo que está triste.", area: "Saúde", peso: 2 },
        { texto: "Desenhar, pintar, tocar um instrumento ou editar um vídeo criativo.", area: "Artes/Design", peso: 2 },
        { texto: "Planejar a venda de algum produto, criar uma rifa ou organizar as finanças de um grupo.", area: "Negócios", peso: 2 },
        { texto: "Escrever uma crônica, ler um livro sobre história ou participar de um clube de debates.", area: "Humanas", peso: 2 }
      ]
    },
    {
      id: 2,
      pergunta: "Se você tivesse que escolher um projeto escolar para liderar, você escolheria:",
      opcoes: [
        { texto: "Desenvolver o site do projeto ou criar uma planilha automatizada de dados.", area: "Tecnologia", peso: 2 },
        { texto: "Fazer uma pesquisa sobre saúde comunitária ou primeiros socorros.", area: "Saúde", peso: 2 },
        { texto: "Fazer a identidade visual, os cartazes e o design da apresentação.", area: "Artes/Design", peso: 2 },
        { texto: "Gerenciar o orçamento do projeto, os prazos e definir quem faz o quê.", area: "Negócios", peso: 2 },
        { texto: "Escrever o relatório final, redigir o roteiro do vídeo ou apresentar as ideias.", area: "Humanas", peso: 2 }
      ]
    },
    {
      id: 3,
      pergunta: "Que tipo de documentário ou canal no YouTube você assiste com mais frequência?",
      opcoes: [
        { texto: "Como a inteligência artificial, foguetes ou computadores funcionam por dentro.", area: "Tecnologia", peso: 2 },
        { texto: "Descobertas médicas, o funcionamento do cérebro humano ou mistérios do corpo.", area: "Saúde", peso: 2 },
        { texto: "Análise de filmes, bastidores de animações ou tutoriais de fotografia e arte.", area: "Artes/Design", peso: 2 },
        { texto: "A história de grandes marcas, estratégias de negócios ou finanças pessoais.", area: "Negócios", peso: 2 },
        { texto: "Fatos históricos, filosofia, sociologia ou geopolítica mundial.", area: "Humanas", peso: 2 }
      ]
    },
    {
      id: 4,
      pergunta: "Se você ganhasse um kit de ferramentas de presente, qual esperaria que fosse?",
      opcoes: [
        { texto: "Um kit de robótica, Arduino ou licença de software de desenvolvimento.", area: "Tecnologia", peso: 2 },
        { texto: "Um estetoscópio, kit de primeiros socorros ou um livro de anatomia.", area: "Saúde", peso: 2 },
        { texto: "Uma mesa digitalizadora para desenhar ou kit de tintas e pincéis profissionais.", area: "Artes/Design", peso: 2 },
        { texto: "Um curso sobre liderança de equipes e como investir dinheiro.", area: "Negócios", peso: 2 },
        { texto: "Um leitor digital (Kindle) com acesso a centenas de livros clássicos.", area: "Humanas", peso: 2 }
      ]
    },
    {
      id: 5,
      pergunta: "Qual das seguintes conquistas te daria mais orgulho pessoal?",
      opcoes: [
        { texto: "Desenvolver um aplicativo útil que resolve o problema diário de milhares de pessoas.", area: "Tecnologia", peso: 2 },
        { texto: "Apoiar a recuperação física ou emocional de alguém que estava passando por dificuldades.", area: "Saúde", peso: 2 },
        { texto: "Criar uma obra de arte, logotipo ou curta-metragem que emocione o público.", area: "Artes/Design", peso: 2 },
        { texto: "Fundar uma startup de sucesso ou liderar um projeto de impacto financeiro positivo.", area: "Negócios", peso: 2 },
        { texto: "Dar uma palestra inspiradora ou escrever um artigo de opinião muito compartilhado.", area: "Humanas", peso: 2 }
      ]
    }
  ],

  // Banco de perguntas do Teste 2: Cenários Situacionais de Carreira
  testeSituacional: [
    {
      id: 1,
      pergunta: "Você entra para um grupo de trabalho escolar onde as pessoas não se conhecem e estão perdidas. O que você faz?",
      opcoes: [
        { texto: "Analiso o problema pelo lado lógico e começo a buscar soluções técnicas ou ferramentas para facilitar o trabalho.", area: "Tecnologia", peso: 2 },
        { texto: "Percebo que as pessoas estão tensas e busco conversar individualmente para que todos se sintam acolhidos e confortáveis.", area: "Saúde", peso: 2 },
        { texto: "Sugiro ideias criativas de visual e formato para fugir do óbvio e chamar atenção na apresentação.", area: "Artes/Design", peso: 2 },
        { texto: "Tomo a iniciativa, distribuo as tarefas de acordo com as habilidades de cada um e estipulo cronogramas de entrega.", area: "Negócios", peso: 2 },
        { texto: "Começo a pesquisar as bases históricas e conceituais do tema para garantir que o conteúdo seja profundo e embasado.", area: "Humanas", peso: 2 }
      ]
    },
    {
      id: 2,
      pergunta: "Imagine que você recebeu a tarefa de planejar uma campanha para arrecadar fundos para a formatura da escola. Qual seria seu papel?",
      opcoes: [
        { texto: "Criar o site de vendas e configurar um sistema seguro de pagamento digital.", area: "Tecnologia", peso: 2 },
        { texto: "Organizar ações voltadas ao bem-estar dos alunos, como dinâmicas de acolhimento para incentivar a união física.", area: "Saúde", peso: 2 },
        { texto: "Desenhar o design dos moletons de formatura, logotipos e materiais gráficos de divulgação.", area: "Artes/Design", peso: 2 },
        { texto: "Definir os preços dos produtos, calcular a margem de lucro e negociar descontos com fornecedores.", area: "Negócios", peso: 2 },
        { texto: "Redigir textos persuasivos para as redes sociais e fazer discursos para convencer as turmas.", area: "Humanas", peso: 2 }
      ]
    },
    {
      id: 3,
      pergunta: "Uma rede social famosa apresentou uma falha geral no sistema. Como essa situação chama sua atenção?",
      opcoes: [
        { texto: "Fico curioso(a) para entender qual bug no servidor causou a queda e como eles vão consertar a infraestrutura.", area: "Tecnologia", peso: 2 },
        { texto: "Penso no impacto emocional que o isolamento digital e o vício em redes podem causar na saúde mental dos usuários.", area: "Saúde", peso: 2 },
        { texto: "Fico avaliando como o design e a disposição dos elementos visuais mudam quando a rede está em 'modo de segurança'.", area: "Artes/Design", peso: 2 },
        { texto: "Imagino o tamanho do prejuízo financeiro que as empresas que anunciam na plataforma estão sofrendo por minuto.", area: "Negócios", peso: 2 },
        { texto: "Reflito sobre como a falta da rede social altera a comunicação social e as relações humanas no dia a dia.", area: "Humanas", peso: 2 }
      ]
    },
    {
      id: 4,
      pergunta: "Se você pudesse estagiar por uma semana em uma grande empresa, qual setor escolheria visitar?",
      opcoes: [
        { texto: "O laboratório de desenvolvimento e infraestrutura de rede, observando a engenharia de sistemas.", area: "Tecnologia", peso: 2 },
        { texto: "O departamento médico e o setor de qualidade de vida e ergonomia do trabalhador.", area: "Saúde", peso: 2 },
        { texto: "O setor de criação publicitária, design gráfico e branding da marca.", area: "Artes/Design", peso: 2 },
        { texto: "A sala da diretoria executiva, entendendo as decisões financeiras e reuniões de liderança.", area: "Negócios", peso: 2 },
        { texto: "O setor de responsabilidade social, treinamento e desenvolvimento educacional dos colaboradores.", area: "Humanas", peso: 2 }
      ]
    },
    {
      id: 5,
      pergunta: "Em um jogo de tabuleiro estratégico com amigos, qual é o seu estilo de jogo?",
      opcoes: [
        { texto: "Calculo probabilidades lógicas, analiso regras ocultas e uso estratégias sistemáticas.", area: "Tecnologia", peso: 2 },
        { texto: "Tento manter o jogo pacífico, ajudo jogadores novatos e busco evitar que alguém fique frustrado.", area: "Saúde", peso: 2 },
        { texto: "Gosto de interagir de forma teatral, focar na estética das peças e criar jogadas bonitas e inesperadas.", area: "Artes/Design", peso: 2 },
        { texto: "Faço alianças estratégicas, negocio trocas de recursos vantajosas e jogo focado em acumular pontos e vencer.", area: "Negócios", peso: 2 },
        { texto: "Fico observando o comportamento dos jogadores, os blefes e tentando entender a psicologia de cada participante.", area: "Humanas", peso: 2 }
      ]
    }
  ],

  // Relatos Reais (ou representativos) inspiradores para a seção de depoimentos
  relatos: [
    {
      nome: "Mariana Souza",
      idade: 25,
      profissao: "Desenvolvedora Front-End",
      area: "Tecnologia",
      depoimento: "Entrei na tecnologia pelo curso técnico, assim como você, Pamella! No começo achava que programação era só para gênios da matemática, mas descobri que é sobre criatividade e resolução de problemas práticos. Criar interfaces que facilitam a vida de milhares de pessoas é extremamente gratificante. Estudar constantemente faz parte, mas ver seu código rodando compensa tudo.",
      assinatura: "決"
    },
    {
      nome: "Bruno Medeiros",
      idade: 32,
      profissao: "Psicólogo Clínico",
      area: "Saúde",
      depoimento: "A psicologia me ensinou a olhar o ser humano sem julgamentos. No dia a dia da clínica, o maior desafio é criar um espaço seguro para que as pessoas possam expressar suas dores e vulnerabilidades. A maior recompensa é ver a evolução e o autoconhecimento dos meus pacientes ao longo do tempo. É uma carreira que exige muita escuta e dedicação afetiva.",
      assinatura: "心"
    },
    {
      nome: "Letícia Ribeiro",
      idade: 28,
      profissao: "Designer UX/UI",
      area: "Artes/Design",
      depoimento: "Eu sempre gostei de desenhar, mas queria trabalhar com tecnologia. O design de experiência de usuário uniu o melhor dos dois mundos. Eu pesquiso o comportamento das pessoas, entendo suas frustrações com aplicativos e desenho telas fáceis e bonitas de usar. O design não é só estética, é função, utilidade e empatia.",
      assinatura: "美"
    },
    {
      nome: "Thiago Ramos",
      idade: 34,
      profissao: "Administrador e Empreendedor",
      area: "Negócios",
      depoimento: "Administrar é tomar decisões sob incertezas. Criei minha própria agência de consultoria financeira após alguns anos no setor corporativo. Liderar pessoas e ver uma ideia sair do papel para gerar empregos e lucros é fascinante. Requer disciplina, inteligência emocional e visão de futuro. O Ketsudan é um belo exemplo de empreendedorismo social!",
      assinatura: "行"
    },
    {
      nome: "Camila Fernandes",
      idade: 29,
      profissao: "Professora de História",
      area: "Humanas",
      depoimento: "Dar aulas é acender faíscas de curiosidade. A história não fala apenas do passado, mas ajuda o jovem a entender por que a sociedade é como é hoje. Enfrentamos desafios estruturais na educação no Brasil, mas quando um aluno tem aquele momento de 'estalo' e compreende um conceito complexo, a sensação de dever cumprido é indescritível.",
      assinatura: "学"
    }
  ]
};

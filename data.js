// Dados globais do projeto Ketsudan
const ketsudanData = {
  // Lista de Profissões e dados do mercado brasileiro
  profissoes: [

    // ==================== TECNOLOGIA ====================
    {
      id: "dev-software",
      nome: "Desenvolvedor(a) de Software",
      categoria: "Tecnologia",
      icone: "💻",
      descricao: "Cria, programa e mantém sistemas, aplicativos e soluções digitais de ponta a ponta, do back-end ao front-end.",
      atividades: [
        "Escrever código limpo e eficiente em linguagens como Python, Java ou JavaScript.",
        "Identificar e corrigir erros (bugs) nos sistemas.",
        "Planejar arquiteturas de novas funcionalidades.",
        "Colaborar com equipes de design e produto."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 18.000+",
      habilidades: ["Raciocínio lógico", "Programação", "Resolução de problemas", "Inglês técnico", "Trabalho em equipe"],
      mercado: "Altíssima demanda no Brasil e no mundo. Possibilidade de trabalho remoto global, salários competitivos e crescimento acelerado."
    },
    {
      id: "programador",
      nome: "Programador(a)",
      categoria: "Tecnologia",
      icone: "⌨️",
      descricao: "Traduz necessidades e projetos em código funcional, construindo as instruções que fazem sistemas e programas funcionar.",
      atividades: [
        "Escrever código para sistemas, sites ou aplicativos.",
        "Testar e depurar o código desenvolvido.",
        "Documentar o código para facilitar manutenção futura.",
        "Integrar sistemas e APIs de terceiros."
      ],
      salarioEntrada: "R$ 2.800",
      salarioSenior: "R$ 14.000+",
      habilidades: ["Lógica de programação", "Atenção a detalhes", "Linguagens de programação", "Versionamento (Git)", "Autodidatismo"],
      mercado: "Papel fundamental em qualquer empresa de tecnologia. Profissionais com domínio de múltiplas linguagens são muito valorizados."
    },
    {
      id: "engenheiro-software",
      nome: "Engenheiro(a) de Software",
      categoria: "Tecnologia",
      icone: "🏗️",
      descricao: "Aplica princípios da engenharia para projetar, desenvolver e gerenciar sistemas de software complexos e escaláveis.",
      atividades: [
        "Projetar a arquitetura de sistemas de larga escala.",
        "Definir padrões e boas práticas de desenvolvimento.",
        "Revisar código de outros desenvolvedores (code review).",
        "Garantir a performance, segurança e escalabilidade dos sistemas."
      ],
      salarioEntrada: "R$ 5.000",
      salarioSenior: "R$ 25.000+",
      habilidades: ["Arquitetura de sistemas", "Design patterns", "Liderança técnica", "Algoritmos avançados", "Inglês fluente"],
      mercado: "Uma das carreiras mais bem pagas da área de tecnologia. Empresas globais como Google, Amazon e Meta buscam esses profissionais."
    },
    {
      id: "cientista-dados",
      nome: "Cientista de Dados",
      categoria: "Tecnologia",
      icone: "📊",
      descricao: "Analisa grandes volumes de dados para descobrir padrões, fazer previsões e apoiar decisões estratégicas de negócios.",
      atividades: [
        "Coletar, limpar e organizar grandes conjuntos de dados.",
        "Construir modelos de machine learning e inteligência artificial.",
        "Criar visualizações e relatórios para comunicar descobertas.",
        "Colaborar com equipes de produto e negócios."
      ],
      salarioEntrada: "R$ 5.000",
      salarioSenior: "R$ 20.000+",
      habilidades: ["Estatística e matemática", "Python/R", "SQL", "Machine Learning", "Comunicação clara"],
      mercado: "Uma das profissões mais valorizadas atualmente. Bancos, varejo, saúde e tecnologia disputam intensamente esses profissionais."
    },
    {
      id: "analista-dados",
      nome: "Analista de Dados",
      categoria: "Tecnologia",
      icone: "📈",
      descricao: "Coleta, organiza e interpreta dados para gerar relatórios e insights que auxiliam na tomada de decisões empresariais.",
      atividades: [
        "Extrair e transformar dados de diferentes fontes.",
        "Criar dashboards e relatórios visuais.",
        "Identificar tendências e padrões nos dados.",
        "Apresentar resultados para gestores e equipes de negócio."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["SQL", "Excel avançado", "Power BI ou Tableau", "Raciocínio analítico", "Comunicação"],
      mercado: "Alta demanda em todos os setores. Empresas de todos os tamanhos precisam de profissionais que transformem dados em decisões."
    },
    {
      id: "eng-ia",
      nome: "Engenheiro(a) de Inteligência Artificial",
      categoria: "Tecnologia",
      icone: "🤖",
      descricao: "Desenvolve sistemas e modelos de IA capazes de aprender, raciocinar e executar tarefas com autonomia computacional.",
      atividades: [
        "Desenvolver e treinar modelos de deep learning e NLP.",
        "Otimizar algoritmos de inteligência artificial.",
        "Integrar modelos de IA em produtos e serviços reais.",
        "Pesquisar novas técnicas e arquiteturas de IA."
      ],
      salarioEntrada: "R$ 8.000",
      salarioSenior: "R$ 35.000+",
      habilidades: ["Deep Learning", "TensorFlow/PyTorch", "Matemática avançada", "Python", "Pesquisa científica"],
      mercado: "Uma das áreas de maior crescimento do mundo. A IA está revolucionando todos os setores da economia, criando enorme demanda."
    },
    {
      id: "ciberseguranca",
      nome: "Especialista em Cibersegurança",
      categoria: "Tecnologia",
      icone: "🛡️",
      descricao: "Protege sistemas, redes e dados de organizações contra ataques digitais, invasões e vulnerabilidades de segurança.",
      atividades: [
        "Monitorar redes em busca de ameaças e atividades suspeitas.",
        "Realizar testes de invasão (pentests) para identificar falhas.",
        "Implementar políticas e ferramentas de segurança.",
        "Responder a incidentes e ataques cibernéticos."
      ],
      salarioEntrada: "R$ 5.000",
      salarioSenior: "R$ 22.000+",
      habilidades: ["Redes e protocolos", "Ethical hacking", "Análise de malware", "Criptografia", "Atenção a detalhes"],
      mercado: "Demanda em explosão com o aumento de crimes digitais. Bancos, governos e grandes empresas investem pesadamente em cibersegurança."
    },
    {
      id: "analista-sistemas",
      nome: "Analista de Sistemas",
      categoria: "Tecnologia",
      icone: "🖥️",
      descricao: "Estuda, documenta e propõe soluções tecnológicas para resolver problemas de negócio, fazendo a ponte entre TI e usuários.",
      atividades: [
        "Levantar e documentar requisitos de sistemas junto aos usuários.",
        "Mapear processos e propor melhorias tecnológicas.",
        "Coordenar o desenvolvimento e implantação de sistemas.",
        "Garantir que o sistema atenda às necessidades do negócio."
      ],
      salarioEntrada: "R$ 3.800",
      salarioSenior: "R$ 13.000+",
      habilidades: ["Análise de requisitos", "Modelagem de processos", "UML/BPMN", "Comunicação", "Visão de negócio"],
      mercado: "Profissional essencial em projetos de transformação digital. Empresas de todos os setores precisam desse papel estratégico."
    },
    {
      id: "dev-web",
      nome: "Desenvolvedor(a) Web",
      categoria: "Tecnologia",
      icone: "🌐",
      descricao: "Constrói e mantém sites e aplicações web, cuidando tanto da interface visual (front-end) quanto do servidor (back-end).",
      atividades: [
        "Desenvolver interfaces de sites responsivos e acessíveis.",
        "Construir APIs e integrar com bancos de dados.",
        "Otimizar a performance e velocidade de carregamento.",
        "Garantir compatibilidade com diferentes navegadores e dispositivos."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 15.000+",
      habilidades: ["HTML/CSS/JavaScript", "React ou Vue", "Node.js ou PHP", "Banco de dados", "Git"],
      mercado: "Alta empregabilidade e muitas opções de freelance. Todo negócio precisa de presença digital, criando demanda constante."
    },
    {
      id: "dev-mobile",
      nome: "Desenvolvedor(a) Mobile",
      categoria: "Tecnologia",
      icone: "📱",
      descricao: "Cria aplicativos para dispositivos móveis iOS e Android, garantindo boa experiência de uso e performance.",
      atividades: [
        "Desenvolver aplicativos nativos ou híbridos para celular.",
        "Publicar e manter apps nas lojas App Store e Google Play.",
        "Otimizar o consumo de bateria e dados dos aplicativos.",
        "Integrar funcionalidades como GPS, câmera e notificações push."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 17.000+",
      habilidades: ["Swift/Kotlin ou React Native/Flutter", "UX Mobile", "APIs REST", "Git", "Performance mobile"],
      mercado: "Mercado em constante crescimento com o aumento do uso de smartphones. Startups e grandes empresas buscam esses profissionais."
    },
    {
      id: "designer-ux-ui",
      nome: "Designer UX/UI",
      categoria: "Tecnologia",
      icone: "🎨",
      descricao: "Projeta a experiência e a interface visual de produtos digitais, tornando-os fáceis, bonitos e agradáveis de usar.",
      atividades: [
        "Pesquisar as necessidades e comportamentos dos usuários.",
        "Criar wireframes e protótipos interativos de interfaces.",
        "Definir identidade visual digital de produtos e apps.",
        "Testar a usabilidade com usuários reais e iterar."
      ],
      salarioEntrada: "R$ 3.200",
      salarioSenior: "R$ 14.000+",
      habilidades: ["Figma/Adobe XD", "Pesquisa com usuários", "Empatia", "Design Systems", "Prototipagem"],
      mercado: "Demanda crescente com a transformação digital. Profissionais que unem criatividade e análise são muito disputados."
    },
    {
      id: "dba",
      nome: "Administrador(a) de Banco de Dados",
      categoria: "Tecnologia",
      icone: "🗄️",
      descricao: "Gerencia, organiza, protege e otimiza os bancos de dados de empresas, garantindo disponibilidade e integridade das informações.",
      atividades: [
        "Instalar, configurar e monitorar sistemas de banco de dados.",
        "Criar backups e planos de recuperação de desastres.",
        "Otimizar queries e performance do banco de dados.",
        "Gerenciar permissões de acesso e segurança dos dados."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 15.000+",
      habilidades: ["SQL avançado", "Oracle/MySQL/PostgreSQL", "Performance tuning", "Backup e recovery", "Segurança de dados"],
      mercado: "Toda organização que armazena dados precisa desse profissional. Setor financeiro e de saúde são os maiores empregadores."
    },
    {
      id: "eng-redes",
      nome: "Engenheiro(a) de Redes",
      categoria: "Tecnologia",
      icone: "🔌",
      descricao: "Projeta, implementa e mantém infraestruturas de redes de computadores, garantindo conectividade, segurança e performance.",
      atividades: [
        "Configurar roteadores, switches e firewalls de redes.",
        "Monitorar tráfego e performance da rede.",
        "Implementar soluções de rede wireless e cabeada.",
        "Diagnosticar e solucionar falhas de conectividade."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 14.000+",
      habilidades: ["Protocolos TCP/IP", "Cisco/Juniper", "Segurança de redes", "VPN e firewall", "Diagnóstico de problemas"],
      mercado: "Infraestrutura de redes é crítica para qualquer empresa. Demanda estável com aumento das redes 5G e IoT."
    },
    {
      id: "cloud-computing",
      nome: "Especialista em Cloud Computing",
      categoria: "Tecnologia",
      icone: "☁️",
      descricao: "Projeta e gerencia infraestruturas em nuvem (AWS, Azure, Google Cloud), garantindo escalabilidade, segurança e eficiência.",
      atividades: [
        "Migrar sistemas e dados para ambientes de nuvem.",
        "Otimizar custos e recursos de infraestrutura cloud.",
        "Implementar práticas de DevOps e CI/CD.",
        "Gerenciar segurança e conformidade em ambientes cloud."
      ],
      salarioEntrada: "R$ 6.000",
      salarioSenior: "R$ 25.000+",
      habilidades: ["AWS/Azure/GCP", "Kubernetes/Docker", "DevOps", "Infraestrutura como código", "Segurança cloud"],
      mercado: "Uma das áreas de maior crescimento em TI. Todas as empresas estão migrando para a nuvem, gerando demanda massiva."
    },
    {
      id: "tecnico-informatica",
      nome: "Técnico(a) em Informática",
      categoria: "Tecnologia",
      icone: "🔧",
      descricao: "Realiza suporte técnico, manutenção de equipamentos e instalação de sistemas, sendo o ponto de apoio tecnológico para usuários.",
      atividades: [
        "Realizar suporte técnico presencial e remoto.",
        "Instalar, configurar e manter computadores e periféricos.",
        "Diagnosticar e solucionar problemas de hardware e software.",
        "Gerenciar contas de usuário e permissões de acesso."
      ],
      salarioEntrada: "R$ 1.800",
      salarioSenior: "R$ 6.000+",
      habilidades: ["Manutenção de hardware", "Sistemas operacionais", "Redes básicas", "Suporte ao usuário", "Paciência"],
      mercado: "Boa porta de entrada na área de TI. Alta demanda em empresas de médio porte, escolas e órgãos públicos."
    },
    {
      id: "eng-computacao",
      nome: "Engenheiro(a) de Computação",
      categoria: "Tecnologia",
      icone: "⚙️",
      descricao: "Atua na interface entre hardware e software, desenvolvendo desde processadores e circuitos até sistemas embarcados e firmware.",
      atividades: [
        "Projetar circuitos eletrônicos e sistemas embarcados.",
        "Desenvolver firmware e drivers de baixo nível.",
        "Otimizar sistemas para desempenho máximo com recursos mínimos.",
        "Pesquisar e desenvolver novos componentes tecnológicos."
      ],
      salarioEntrada: "R$ 5.000",
      salarioSenior: "R$ 20.000+",
      habilidades: ["C/C++", "Eletrônica digital", "Sistemas embarcados", "FPGA", "Matemática avançada"],
      mercado: "Forte demanda na indústria automotiva, aeroespacial e de IoT. Formação sólida com excelente retorno financeiro."
    },
    {
      id: "dev-jogos",
      nome: "Desenvolvedor(a) de Jogos",
      categoria: "Tecnologia",
      icone: "🎮",
      descricao: "Cria a lógica, os sistemas e a programação de jogos digitais para diferentes plataformas, como PC, console e celular.",
      atividades: [
        "Programar mecânicas de jogo (física, IA de inimigos, colisões).",
        "Integrar arte, áudio e sistemas de jogo.",
        "Otimizar a performance para rodar em diferentes hardwares.",
        "Realizar testes de qualidade (QA) e corrigir bugs."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Unity/Unreal Engine", "C# ou C++", "Matemática (vetores e física)", "Lógica de jogos", "Git"],
      mercado: "Indústria global bilionária em expansão. Brasil tem mercado crescente e muitas oportunidades para freelancers internacionais."
    },
    {
      id: "arquiteto-software",
      nome: "Arquiteto(a) de Software",
      categoria: "Tecnologia",
      icone: "📐",
      descricao: "Define a estrutura técnica de sistemas complexos, tomando decisões estratégicas sobre tecnologias, padrões e a organização do código.",
      atividades: [
        "Definir a arquitetura técnica de grandes sistemas.",
        "Escolher tecnologias, frameworks e padrões de projeto.",
        "Garantir que o sistema seja escalável, seguro e manutenível.",
        "Mentorar equipes técnicas e revisar decisões de design."
      ],
      salarioEntrada: "R$ 12.000",
      salarioSenior: "R$ 35.000+",
      habilidades: ["Arquiteturas (microservices, monolito)", "Design patterns", "Visão sistêmica", "Liderança", "Amplo conhecimento técnico"],
      mercado: "Papel sênior de altíssimo valor nas grandes empresas. Requer muitos anos de experiência, mas oferece os melhores salários da área."
    },

    // ==================== SAÚDE ====================
    {
      id: "medico",
      nome: "Médico(a)",
      categoria: "Saúde",
      icone: "⚕️",
      descricao: "Diagnostica, trata e previne doenças, cuidando da saúde física e mental dos pacientes em diversas especialidades.",
      atividades: [
        "Realizar consultas, exames clínicos e diagnósticos.",
        "Prescrever tratamentos, medicamentos e encaminhar especialistas.",
        "Acompanhar a recuperação e evolução dos pacientes.",
        "Participar de plantões em hospitais e prontos-socorros."
      ],
      salarioEntrada: "R$ 8.000",
      salarioSenior: "R$ 40.000+",
      habilidades: ["Conhecimento médico amplo", "Empatia", "Tomada de decisão sob pressão", "Ética", "Comunicação com pacientes"],
      mercado: "Carreira de altíssima demanda e prestígio. Especializações como cardiologia e oncologia oferecem os maiores ganhos."
    },
    {
      id: "enfermeiro",
      nome: "Enfermeiro(a)",
      categoria: "Saúde",
      icone: "🩺",
      descricao: "Cuida diretamente dos pacientes, administra medicamentos, realiza procedimentos e coordena equipes de saúde.",
      atividades: [
        "Administrar medicamentos e realizar curativos e procedimentos.",
        "Monitorar sinais vitais e estado geral dos pacientes.",
        "Orientar pacientes e familiares sobre cuidados de saúde.",
        "Coordenar e supervisionar a equipe de técnicos de enfermagem."
      ],
      salarioEntrada: "R$ 3.800",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Técnicas de enfermagem", "Resistência emocional", "Empatia", "Trabalho sob pressão", "Liderança"],
      mercado: "Alta empregabilidade permanente. Hospitais, clínicas, home care e saúde pública demandam constantemente esses profissionais."
    },
    {
      id: "psicologo",
      nome: "Psicólogo(a)",
      categoria: "Saúde",
      icone: "🧠",
      descricao: "Estuda e trata os processos mentais e o comportamento humano, ajudando pessoas a superar dificuldades emocionais e psicológicas.",
      atividades: [
        "Realizar sessões de psicoterapia individual ou em grupo.",
        "Aplicar testes psicológicos e elaborar laudos.",
        "Atuar em empresas no setor de RH e saúde organizacional.",
        "Desenvolver pesquisas sobre comportamento humano."
      ],
      salarioEntrada: "R$ 2.800",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Escuta ativa", "Empatia profunda", "Técnicas terapêuticas", "Ética profissional", "Análise comportamental"],
      mercado: "Crescimento acelerado com o aumento da consciência sobre saúde mental. Clínicas, hospitais, escolas e empresas contratam psicólogos."
    },
    {
      id: "nutricionista",
      nome: "Nutricionista",
      categoria: "Saúde",
      icone: "🥗",
      descricao: "Avalia o estado nutricional e elabora planos alimentares personalizados para promover saúde, tratar doenças e melhorar o desempenho.",
      atividades: [
        "Realizar avaliação nutricional e anamnese alimentar.",
        "Elaborar dietas e planos alimentares personalizados.",
        "Acompanhar pacientes em consultas de retorno.",
        "Atuar em hospitais, escolas, academias e indústria alimentícia."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Bioquímica e nutrição", "Comunicação", "Empatia", "Planejamento alimentar", "Atualização científica"],
      mercado: "Demanda crescente com o aumento do interesse em saúde e qualidade de vida. Esportes e nutrição clínica são as áreas de maior remuneração."
    },
    {
      id: "fisioterapeuta",
      nome: "Fisioterapeuta",
      categoria: "Saúde",
      icone: "🦴",
      descricao: "Previne e trata disfunções do movimento humano, utilizando técnicas manuais, exercícios e equipamentos terapêuticos.",
      atividades: [
        "Avaliar e diagnosticar limitações físicas e de movimento.",
        "Elaborar e executar planos de tratamento individualizados.",
        "Realizar técnicas como massagem, eletroterapia e RPG.",
        "Acompanhar a reabilitação de pacientes pós-cirúrgicos e lesionados."
      ],
      salarioEntrada: "R$ 2.800",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Anatomia e biomecânica", "Técnicas manuais", "Empatia", "Comunicação", "Atualização em novas técnicas"],
      mercado: "Alta demanda em clínicas, hospitais e esportes. Fisioterapia esportiva e neurológica são especialidades em ascensão."
    },
    {
      id: "dentista",
      nome: "Dentista",
      categoria: "Saúde",
      icone: "🦷",
      descricao: "Cuida da saúde bucal dos pacientes, realizando diagnósticos, tratamentos e procedimentos de prevenção e estética dental.",
      atividades: [
        "Realizar consultas e exames bucais preventivos.",
        "Tratar cáries, doenças gengivais e problemas de mordida.",
        "Executar procedimentos como implantes, clareamento e ortodontia.",
        "Orientar pacientes sobre higiene bucal adequada."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 20.000+",
      habilidades: ["Técnicas odontológicas", "Destreza manual", "Atenção a detalhes", "Empatia", "Gestão de consultório"],
      mercado: "Profissão de alta demanda e autonomia. Odontologia estética e implantodontia são especialidades com excelente remuneração."
    },
    {
      id: "farmaceutico",
      nome: "Farmacêutico(a)",
      categoria: "Saúde",
      icone: "💊",
      descricao: "Responsável pelo desenvolvimento, manipulação, dispensação e controle de medicamentos, garantindo o uso seguro e eficaz.",
      atividades: [
        "Orientar pacientes sobre o uso correto de medicamentos.",
        "Manipular e controlar a qualidade de fórmulas farmacêuticas.",
        "Realizar análises clínicas e bioquímicas.",
        "Atuar na indústria farmacêutica, hospitais e drogarias."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Química farmacêutica", "Atenção a detalhes", "Conhecimento de medicamentos", "Ética", "Comunicação com pacientes"],
      mercado: "Versátil atuação em farmácias, hospitais, indústria, vigilância sanitária e pesquisa. Mercado estável com boa remuneração."
    },
    {
      id: "biomedico",
      nome: "Biomédico(a)",
      categoria: "Saúde",
      icone: "🔬",
      descricao: "Aplica conhecimentos de biologia e medicina para realizar análises clínicas, pesquisas e desenvolver diagnósticos laboratoriais.",
      atividades: [
        "Realizar análises de sangue, urina e outros fluidos biológicos.",
        "Operar e interpretar resultados de equipamentos de diagnóstico.",
        "Atuar em pesquisas biomédicas e desenvolvimento de exames.",
        "Trabalhar em hemocentros, laboratórios e clínicas de fertilização."
      ],
      salarioEntrada: "R$ 2.800",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Biologia molecular", "Análises clínicas", "Atenção a detalhes", "Laboratório", "Pesquisa científica"],
      mercado: "Área em expansão, especialmente em biologia molecular, genética e medicina diagnóstica de precisão."
    },
    {
      id: "fonoaudiologo",
      nome: "Fonoaudiólogo(a)",
      categoria: "Saúde",
      icone: "🗣️",
      descricao: "Avalia e trata distúrbios da comunicação humana, incluindo voz, fala, linguagem, audição e deglutição.",
      atividades: [
        "Avaliar e diagnosticar distúrbios de fala e linguagem.",
        "Realizar terapia fonoaudiológica individual.",
        "Tratar disfagia (dificuldade de deglutição) em pacientes.",
        "Atender crianças com autismo, gagueira e atrasos na fala."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 8.000+",
      habilidades: ["Anatomia da fala e audição", "Empatia", "Paciência", "Técnicas terapêuticas", "Trabalho com crianças"],
      mercado: "Demanda crescente com o aumento do diagnóstico de autismo e disfagias. Escolas, hospitais e clínicas contratam esses profissionais."
    },
    {
      id: "terapeuta-ocupacional",
      nome: "Terapeuta Ocupacional",
      categoria: "Saúde",
      icone: "🖐️",
      descricao: "Ajuda pessoas com deficiências, doenças ou sequelas a recuperar ou desenvolver habilidades para atividades do dia a dia.",
      atividades: [
        "Avaliar as capacidades funcionais do paciente.",
        "Desenvolver programas de reabilitação personalizados.",
        "Adaptar ambientes e atividades para promover independência.",
        "Atender crianças com transtornos de desenvolvimento e idosos."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 8.000+",
      habilidades: ["Empatia e criatividade", "Anatomia e neurologia", "Adaptação de ambiente", "Paciência", "Técnicas de reabilitação"],
      mercado: "Expansão com o envelhecimento da população e maior diagnóstico de autismo. Hospitais e centros de reabilitação são os principais empregadores."
    },
    {
      id: "veterinario",
      nome: "Veterinário(a)",
      categoria: "Saúde",
      icone: "🐾",
      descricao: "Cuida da saúde animal, realizando consultas, cirurgias, diagnósticos e prevenção de doenças em animais domésticos e silvestres.",
      atividades: [
        "Realizar consultas, exames e diagnósticos em animais.",
        "Executar cirurgias e procedimentos veterinários.",
        "Prescrever e administrar medicamentos e vacinas.",
        "Atuar em saúde pública, controle de zoonoses e vigilância sanitária."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Medicina veterinária", "Amor por animais", "Destreza cirúrgica", "Comunicação com tutores", "Diagnóstico clínico"],
      mercado: "Mercado aquecido com o crescimento do número de pets e da humanização dos animais. Veterinários especializados têm excelente renda."
    },
    {
      id: "educador-fisico",
      nome: "Educador(a) Físico(a)",
      categoria: "Saúde",
      icone: "🏋️",
      descricao: "Planeja e orienta atividades físicas e esportivas, promovendo saúde, bem-estar e desempenho físico em diferentes contextos.",
      atividades: [
        "Prescrever treinos personalizados para objetivos individuais.",
        "Orientar a execução correta de exercícios para evitar lesões.",
        "Atuar em academias, clubes, escolas e reabilitação.",
        "Desenvolver programas de condicionamento físico em empresas."
      ],
      salarioEntrada: "R$ 2.000",
      salarioSenior: "R$ 8.000+",
      habilidades: ["Anatomia e fisiologia", "Prescrição de exercícios", "Motivação", "Comunicação", "Conhecimento esportivo"],
      mercado: "Alta demanda em academias, clubes esportivos e personal training. Mercado de wellness corporativo em crescimento."
    },
    {
      id: "tecnico-radiologia",
      nome: "Técnico(a) em Radiologia",
      categoria: "Saúde",
      icone: "🩻",
      descricao: "Opera equipamentos de imagem médica como raio-X, tomografia e ressonância magnética para apoiar diagnósticos clínicos.",
      atividades: [
        "Realizar e posicionar pacientes para exames de imagem.",
        "Operar equipamentos de raio-X, tomógrafo e ressonância.",
        "Processar e arquivar imagens digitais.",
        "Garantir a segurança do paciente durante os procedimentos."
      ],
      salarioEntrada: "R$ 2.200",
      salarioSenior: "R$ 6.500+",
      habilidades: ["Operação de equipamentos de imagem", "Radioproteção", "Atenção a detalhes", "Cuidado com o paciente", "Informática"],
      mercado: "Boa demanda em hospitais, clínicas de imagem e prontos-socorros. Técnicos especializados em tomografia e ressonância são mais valorizados."
    },
    {
      id: "esteticista",
      nome: "Esteticista",
      categoria: "Saúde",
      icone: "✨",
      descricao: "Realiza tratamentos estéticos faciais e corporais para promover beleza, bem-estar e autoestima dos clientes.",
      atividades: [
        "Realizar procedimentos como limpeza de pele, peeling e drenagem.",
        "Aplicar técnicas de massagem e tratamentos corporais.",
        "Orientar clientes sobre cuidados de pele e rotina de beleza.",
        "Operar equipamentos de estética como radiofrequência e laser."
      ],
      salarioEntrada: "R$ 1.800",
      salarioSenior: "R$ 8.000+",
      habilidades: ["Técnicas estéticas", "Cosmetologia", "Empatia", "Comunicação", "Destreza manual"],
      mercado: "Mercado em expansão com o crescimento do setor de beleza. Profissionais autônomos com clientela fidelizada têm excelente renda."
    },
    {
      id: "sanitarista",
      nome: "Sanitarista",
      categoria: "Saúde",
      icone: "🏥",
      descricao: "Trabalha na promoção e proteção da saúde coletiva, atuando em políticas públicas e controle de doenças na população.",
      atividades: [
        "Planejar e executar programas de saúde pública.",
        "Analisar dados epidemiológicos e indicadores de saúde.",
        "Investigar surtos e epidemias.",
        "Atuar na vigilância sanitária e controle de vetores."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Epidemiologia", "Saúde coletiva", "Políticas públicas", "Análise de dados", "Comunicação em saúde"],
      mercado: "Papel fundamental em órgãos públicos como Ministério da Saúde, secretarias e OMS. Pandemia aumentou o reconhecimento da área."
    },
    {
      id: "obstetra",
      nome: "Obstetra",
      categoria: "Saúde",
      icone: "🤰",
      descricao: "Especialista médico(a) focado no cuidado da mulher durante a gestação, parto e período pós-parto.",
      atividades: [
        "Realizar acompanhamento pré-natal de gestantes.",
        "Conduzir partos normais e cesarianas.",
        "Diagnosticar e tratar complicações na gravidez.",
        "Orientar sobre saúde da mulher no ciclo reprodutivo."
      ],
      salarioEntrada: "R$ 10.000",
      salarioSenior: "R$ 35.000+",
      habilidades: ["Medicina obstétrica", "Trabalho sob pressão", "Empatia com gestantes", "Técnica cirúrgica", "Diagnóstico por imagem"],
      mercado: "Especialidade médica de alta demanda e remuneração. Plantões hospitalares são a principal fonte de renda desta carreira."
    },
    {
      id: "neuropsicólogo",
      nome: "Neuropsicólogo(a)",
      categoria: "Saúde",
      icone: "🧬",
      descricao: "Avalia e trata as relações entre o funcionamento cerebral e o comportamento, ajudando pacientes com lesões neurológicas ou transtornos.",
      atividades: [
        "Aplicar testes neuropsicológicos para avaliar funções cognitivas.",
        "Diagnosticar sequelas de AVC, Alzheimer e traumatismos cranianos.",
        "Desenvolver programas de reabilitação cognitiva.",
        "Produzir laudos e pareceres técnicos para equipes de saúde."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Neurociência", "Avaliação psicológica", "Pesquisa científica", "Empatia", "Comunicação com familiares"],
      mercado: "Área em rápido crescimento dado o envelhecimento da população e aumento dos diagnósticos de transtornos neurológicos."
    },
    {
      id: "terapeuta-respiratorio",
      nome: "Terapeuta Respiratório",
      categoria: "Saúde",
      icone: "🫁",
      descricao: "Avalia e trata doenças e condições que afetam a respiração, trabalhando com pacientes em UTIs, hospitais e domicílio.",
      atividades: [
        "Operar ventiladores mecânicos em UTI.",
        "Realizar fisioterapia respiratória em pacientes internados.",
        "Avaliar a função pulmonar através de espirometrias.",
        "Orientar pacientes com doenças crônicas como asma e DPOC."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Anatomia respiratória", "Ventilação mecânica", "Trabalho sob pressão", "Técnicas de fisioterapia", "Monitoramento clínico"],
      mercado: "Demanda aumentada após a pandemia de COVID-19, que evidenciou a importância do profissional nas UTIs brasileiras."
    },

    // ==================== ARTES E DESIGN ====================
    {
      id: "designer-grafico",
      nome: "Designer Gráfico(a)",
      categoria: "Artes/Design",
      icone: "🖌️",
      descricao: "Cria soluções visuais para comunicar mensagens de forma eficaz através de identidades visuais, peças gráficas e materiais digitais.",
      atividades: [
        "Criar logotipos, identidades visuais e manuais de marca.",
        "Desenvolver peças para redes sociais, anúncios e embalagens.",
        "Diagramar livros, revistas e materiais editoriais.",
        "Trabalhar com tipografia, cores e composição visual."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Adobe Illustrator/Photoshop", "Criatividade", "Teoria das cores", "Tipografia", "Briefing de clientes"],
      mercado: "Alta demanda em agências de publicidade, empresas e como freelancer. Portfólio forte é o diferencial competitivo."
    },
    {
      id: "designer-interiores",
      nome: "Designer de Interiores",
      categoria: "Artes/Design",
      icone: "🛋️",
      descricao: "Planeja e cria ambientes internos funcionais e esteticamente agradáveis, combinando mobiliário, cores, iluminação e decoração.",
      atividades: [
        "Criar projetos de ambientes residenciais e comerciais.",
        "Selecionar materiais, móveis e elementos decorativos.",
        "Apresentar projetos em 3D para clientes.",
        "Acompanhar e coordenar a execução das obras e reformas."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["AutoCAD/SketchUp", "Percepção espacial", "Criatividade", "Gestão de projetos", "Relacionamento com clientes"],
      mercado: "Mercado aquecido pelo boom da construção civil e do interesse em decoração de interiores. Trabalho autônomo tem alta rentabilidade."
    },
    {
      id: "designer-moda",
      nome: "Designer de Moda",
      categoria: "Artes/Design",
      icone: "👗",
      descricao: "Cria coleções de roupas e acessórios, da concepção ao produto final, unindo estética, tendências e funcionalidade.",
      atividades: [
        "Pesquisar tendências de moda nacionais e internacionais.",
        "Criar croquis e fichas técnicas de peças de vestuário.",
        "Selecionar tecidos e materiais para as coleções.",
        "Acompanhar a produção e o controle de qualidade das peças."
      ],
      salarioEntrada: "R$ 2.000",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Desenho de moda", "Costura e modelagem", "Criatividade", "Visão de tendências", "Softwares de design"],
      mercado: "Brasil é um dos maiores mercados de moda do mundo. Segmentos de moda sustentável e inclusiva estão em alta crescimento."
    },
    {
      id: "ilustrador",
      nome: "Ilustrador(a)",
      categoria: "Artes/Design",
      icone: "✏️",
      descricao: "Cria imagens e ilustrações para livros, revistas, jogos, mídias digitais e outros suportes, expressando ideias de forma visual.",
      atividades: [
        "Criar ilustrações editoriais para livros e revistas.",
        "Desenvolver artes para games, apps e animações.",
        "Produzir storyboards e concept art.",
        "Trabalhar em projetos de branding e publicidade."
      ],
      salarioEntrada: "R$ 2.000",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Desenho técnico e artístico", "Photoshop/Procreate", "Criatividade", "Narrativa visual", "Estilos variados"],
      mercado: "Mercado aquecido em jogos digitais e conteúdo para internet. Freelancers internacionais com portfólio digital têm acesso ao mercado global."
    },
    {
      id: "animador",
      nome: "Animador(a)",
      categoria: "Artes/Design",
      icone: "🎬",
      descricao: "Cria personagens e cenas em movimento para filmes, séries, jogos e publicidade, usando técnicas 2D e 3D.",
      atividades: [
        "Animar personagens com movimentos fluidos e expressivos.",
        "Criar animações para comerciais, séries e jogos.",
        "Trabalhar com rigging (armação) e simulação de física.",
        "Colaborar com roteiristas e diretores para dar vida às histórias."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["After Effects/Maya/Blender", "Princípios de animação", "Storytelling visual", "Paciência", "Trabalho em equipe"],
      mercado: "Indústria global de streaming e jogos cria demanda constante. Freelancers para produtoras internacionais têm excelente rentabilidade."
    },
    {
      id: "diretor-arte",
      nome: "Diretor(a) de Arte",
      categoria: "Artes/Design",
      icone: "🎭",
      descricao: "Lidera e define a identidade visual de projetos publicitários, editoriais ou audiovisuais, supervisionando toda a equipe criativa.",
      atividades: [
        "Definir e manter a identidade visual de campanhas e projetos.",
        "Coordenar e orientar a equipe de design e criação.",
        "Apresentar conceitos criativos para clientes.",
        "Colaborar com redatores e produtores no processo criativo."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 18.000+",
      habilidades: ["Visão criativa ampla", "Liderança", "Briefing e apresentação", "Adobe Suite", "Tendências de design"],
      mercado: "Cargo de liderança em agências de publicidade e comunicação. Experiência consolidada é fundamental para alcançar essa posição."
    },
    {
      id: "fotografo",
      nome: "Fotógrafo(a)",
      categoria: "Artes/Design",
      icone: "📷",
      descricao: "Captura imagens de alta qualidade para diferentes finalidades: moda, fotojornalismo, publicidade, eventos e arte.",
      atividades: [
        "Fotografar em estúdio ou em locações externas.",
        "Editar e tratar fotos em softwares como Lightroom e Photoshop.",
        "Coordenar equipes de produção fotográfica.",
        "Gerenciar portfólio e relacionamento com clientes."
      ],
      salarioEntrada: "R$ 2.000",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Técnica fotográfica", "Edição de imagens", "Criatividade", "Iluminação", "Gestão de clientes"],
      mercado: "Trabalho autônomo com forte presença nas áreas de moda, casamentos e publicidade. Fotojornalismo tem mercado mais restrito, mas relevante."
    },
    {
      id: "arquiteto",
      nome: "Arquiteto(a)",
      categoria: "Artes/Design",
      icone: "🏛️",
      descricao: "Projeta e planeja edificações e espaços urbanos, unindo função, estética, sustentabilidade e normas técnicas de construção.",
      atividades: [
        "Desenvolver projetos arquitetônicos residenciais e comerciais.",
        "Criar plantas, cortes, fachadas e detalhamentos técnicos.",
        "Acompanhar obras para garantir a execução do projeto.",
        "Coordenar projetos complementares de estrutura e instalações."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 15.000+",
      habilidades: ["AutoCAD/Revit", "Criatividade espacial", "Normas técnicas NBR", "Gestão de projetos", "Sustentabilidade"],
      mercado: "Mercado cíclico ligado à construção civil. Arquitetura sustentável e projetos de retrofit são tendências em alta."
    },
    {
      id: "artista-visual",
      nome: "Artista Visual",
      categoria: "Artes/Design",
      icone: "🖼️",
      descricao: "Cria obras de arte em diversas mídias — pintura, escultura, instalação ou arte digital — para exposições e mercado de arte.",
      atividades: [
        "Criar obras de arte em diferentes suportes e técnicas.",
        "Participar de editais, residências artísticas e exposições.",
        "Comercializar obras em galerias e plataformas digitais.",
        "Desenvolver projetos de arte pública e intervenções urbanas."
      ],
      salarioEntrada: "R$ 1.500",
      salarioSenior: "R$ 20.000+",
      habilidades: ["Técnicas artísticas variadas", "Criatividade", "Narrativa artística", "Networking no meio artístico", "Empreendedorismo"],
      mercado: "Mercado desafiador mas com crescente valorização. NFTs e arte digital abriram novas possibilidades de comercialização global."
    },
    {
      id: "editor-video",
      nome: "Editor(a) de Vídeo",
      categoria: "Artes/Design",
      icone: "🎞️",
      descricao: "Monta e edita materiais audiovisuais, selecionando os melhores takes e aplicando efeitos para criar a narrativa visual ideal.",
      atividades: [
        "Editar cenas e montar a estrutura narrativa do vídeo.",
        "Aplicar correção de cor e tratamento de imagem.",
        "Adicionar trilhas sonoras, efeitos e motion graphics.",
        "Exportar vídeos nos formatos adequados para cada plataforma."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Premiere Pro/DaVinci Resolve", "Storytelling", "Senso estético", "After Effects", "Organização"],
      mercado: "Alta demanda com o crescimento de plataformas de streaming, YouTube e produção de conteúdo para redes sociais."
    },
    {
      id: "game-designer",
      nome: "Game Designer",
      categoria: "Artes/Design",
      icone: "🕹️",
      descricao: "Concebe e projeta a experiência, as regras, os sistemas e a jogabilidade de jogos eletrônicos ou analógicos.",
      atividades: [
        "Criar documentos de design (GDD) com as regras e mecânicas do jogo.",
        "Projetar fases, progressão e balanceamento de dificuldade.",
        "Colaborar com programadores e artistas na implementação.",
        "Testar e iterar o jogo com base no feedback de jogadores."
      ],
      salarioEntrada: "R$ 2.800",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Design de jogos", "Pensamento sistêmico", "Criatividade", "Psicologia do jogador", "Storytelling"],
      mercado: "Indústria de jogos é uma das maiores do entretenimento mundial. Estúdios brasileiros crescem e abrem vagas com frequência."
    },
    {
      id: "cenografo",
      nome: "Cenógrafo(a)",
      categoria: "Artes/Design",
      icone: "🎪",
      descricao: "Cria e executa ambientes cênicos para teatro, cinema, televisão e eventos, transformando espaços em realidades visuais imersivas.",
      atividades: [
        "Projetar cenários e espaços cênicos para produções.",
        "Selecionar mobiliário, objetos e elementos de cena.",
        "Coordenar a equipe de construção e montagem do cenário.",
        "Trabalhar em harmonia com diretores e figurinistas."
      ],
      salarioEntrada: "R$ 2.000",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Criatividade espacial", "Desenho técnico", "Pesquisa histórica e cultural", "Gestão de equipe", "Conhecimento de materiais"],
      mercado: "Atuação em teatro, cinema, TV, eventos e live marketing. Profissional versátil com boa demanda no mercado de entretenimento."
    },
    {
      id: "publicitario",
      nome: "Publicitário(a)",
      categoria: "Artes/Design",
      icone: "📣",
      descricao: "Cria campanhas e estratégias de comunicação para promover marcas, produtos e serviços em diferentes mídias.",
      atividades: [
        "Criar conceitos criativos para campanhas publicitárias.",
        "Desenvolver roteiros de comerciais e peças publicitárias.",
        "Apresentar e defender ideias para clientes e diretores.",
        "Coordenar a produção de materiais gráficos e audiovisuais."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Criatividade", "Redação publicitária", "Estratégia de comunicação", "Pesquisa de mercado", "Storytelling"],
      mercado: "Presença nas grandes agências de publicidade, empresas e como consultor autônomo. Mercado digital ampliou muito as possibilidades."
    },
    {
      id: "diretor-criativo",
      nome: "Diretor(a) Criativo(a)",
      categoria: "Artes/Design",
      icone: "💡",
      descricao: "Lidera a visão criativa de uma empresa, agência ou produto, garantindo coerência estética e inovação em todas as expressões da marca.",
      atividades: [
        "Definir a direção criativa e o tom de voz da marca.",
        "Supervisionar a produção de conteúdo, design e comunicação.",
        "Inspirar e liderar a equipe criativa.",
        "Apresentar estratégias criativas para stakeholders e clientes."
      ],
      salarioEntrada: "R$ 7.000",
      salarioSenior: "R$ 25.000+",
      habilidades: ["Visão estratégica criativa", "Liderança", "Storytelling", "Conhecimento amplo de mídias", "Gestão de equipe"],
      mercado: "Cargo de alta liderança em agências, marcas de moda, estúdios e empresas de tecnologia. Exige portfólio robusto e muita experiência."
    },
    {
      id: "modelador-3d",
      nome: "Modelador(a) 3D",
      categoria: "Artes/Design",
      icone: "🧊",
      descricao: "Cria modelos tridimensionais digitais de personagens, cenários e objetos para jogos, filmes, animações e visualizações.",
      atividades: [
        "Modelar e texturizar objetos e personagens em 3D.",
        "Realizar rigging (armação) para animação de personagens.",
        "Criar renders e visualizações arquitetônicas.",
        "Colaborar com equipes de animação e desenvolvimento de jogos."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Blender/Maya/3ds Max", "Texturização", "Anatomia digital", "Criatividade", "Atenção a detalhes"],
      mercado: "Alta demanda em jogos, cinema e publicidade. Mercado de visualização arquitetônica 3D cresce com o setor da construção civil."
    },
    {
      id: "produtor-audiovisual",
      nome: "Produtor(a) Audiovisual",
      categoria: "Artes/Design",
      icone: "🎥",
      descricao: "Organiza, gerencia e viabiliza a produção de projetos audiovisuais como filmes, séries, documentários e publicidades.",
      atividades: [
        "Gerenciar orçamentos, cronogramas e equipes de produção.",
        "Coordenar todas as etapas da produção: pré, produção e pós.",
        "Negociar com fornecedores, locações e prestadores de serviço.",
        "Garantir a viabilidade técnica e artística do projeto."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Gestão de projetos", "Orçamento e finanças", "Liderança", "Negociação", "Conhecimento técnico audiovisual"],
      mercado: "Expansão com o crescimento de plataformas de streaming. Demanda por conteúdo original brasileiro está em alta no mercado global."
    },
    {
      id: "designer-produto",
      nome: "Designer de Produto",
      categoria: "Artes/Design",
      icone: "📦",
      descricao: "Projeta produtos físicos ou digitais pensando em funcionalidade, usabilidade, estética e viabilidade de fabricação.",
      atividades: [
        "Pesquisar necessidades dos usuários e criar conceitos de produto.",
        "Desenvolver protótipos físicos ou digitais para testes.",
        "Trabalhar com engenheiros e fabricantes na produção.",
        "Garantir que o produto seja funcional, seguro e atraente."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Pensamento centrado no usuário", "Prototipagem", "SolidWorks/Figma", "Materiais e processos", "Criatividade"],
      mercado: "Alta demanda em startups de tecnologia e empresas de bens de consumo. Combinar design físico e digital é um diferencial raro e valorizado."
    },
    {
      id: "quadrinista",
      nome: "Quadrinista",
      categoria: "Artes/Design",
      icone: "💬",
      descricao: "Cria histórias em quadrinhos, graphic novels e mangás, desenhando personagens, narrativas visuais e roteiros ilustrados.",
      atividades: [
        "Criar roteiros e storyboards de histórias em quadrinhos.",
        "Desenhar personagens e ambientes com expressividade e detalhes.",
        "Finalizar artes com nanquim, aquarela ou digitalmente.",
        "Publicar em editoras, plataformas digitais ou de forma independente."
      ],
      salarioEntrada: "R$ 1.500",
      salarioSenior: "R$ 8.000+",
      habilidades: ["Desenho narrativo", "Roteiro", "Expressão facial e corporal", "Criatividade", "Storytelling"],
      mercado: "Mercado indie e digital em crescimento. Plataformas internacionais de publicação de quadrinhos permitem alcance global para artistas brasileiros."
    },

    // ==================== NEGÓCIOS ====================
    {
      id: "administrador",
      nome: "Administrador(a)",
      categoria: "Negócios",
      icone: "💼",
      descricao: "Planeja, organiza e gerencia recursos humanos, financeiros e materiais de organizações para alcançar metas estratégicas.",
      atividades: [
        "Planejar estratégias e metas de curto e longo prazo.",
        "Coordenar equipes e gerenciar o clima organizacional.",
        "Analisar relatórios financeiros e indicadores de desempenho.",
        "Negociar com fornecedores, parceiros e clientes."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 16.000+",
      habilidades: ["Liderança", "Visão estratégica", "Gestão financeira", "Comunicação", "Resolução de problemas"],
      mercado: "Uma das formações mais versáteis do mercado. Empresas de todos os setores e tamanhos precisam de bons administradores."
    },
    {
      id: "economista",
      nome: "Economista",
      categoria: "Negócios",
      icone: "📉",
      descricao: "Analisa fenômenos econômicos, mercados e políticas para entender e prever o comportamento da economia e assessorar decisões.",
      atividades: [
        "Analisar indicadores econômicos e tendências de mercado.",
        "Elaborar relatórios e previsões econômicas.",
        "Assessorar empresas e governos em decisões estratégicas.",
        "Pesquisar impactos de políticas públicas na economia."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 18.000+",
      habilidades: ["Econometria", "Análise de dados", "Raciocínio analítico", "Estatística", "Comunicação técnica"],
      mercado: "Alta demanda em bancos, consultorias, setor público e multinacionais. Especialização em finanças ou regulação é muito valorizada."
    },
    {
      id: "contador",
      nome: "Contador(a)",
      categoria: "Negócios",
      icone: "🧾",
      descricao: "Registra, analisa e interpreta as informações financeiras de empresas, garantindo conformidade fiscal e tomadas de decisão corretas.",
      atividades: [
        "Realizar escrituração contábil e elaborar balanços.",
        "Apurar e recolher impostos e obrigações fiscais.",
        "Elaborar demonstrações financeiras e relatórios gerenciais.",
        "Assessorar empresas em planejamento tributário."
      ],
      salarioEntrada: "R$ 2.800",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Contabilidade e tributação", "Excel avançado", "Legislação fiscal", "Atenção a detalhes", "Ética profissional"],
      mercado: "Alta empregabilidade. Toda empresa precisa de contabilidade. Planejamento tributário e auditoria são as áreas de maior remuneração."
    },
    {
      id: "gestor-financeiro",
      nome: "Gestor(a) Financeiro(a)",
      categoria: "Negócios",
      icone: "💰",
      descricao: "Controla e planeja as finanças de uma organização, gerenciando fluxo de caixa, investimentos e estratégias de rentabilidade.",
      atividades: [
        "Elaborar e monitorar o orçamento da empresa.",
        "Analisar viabilidade financeira de investimentos e projetos.",
        "Gerenciar fluxo de caixa e capital de giro.",
        "Apresentar relatórios financeiros para a diretoria."
      ],
      salarioEntrada: "R$ 4.500",
      salarioSenior: "R$ 20.000+",
      habilidades: ["Finanças corporativas", "Excel e ferramentas financeiras", "Análise de risco", "Liderança", "Visão estratégica"],
      mercado: "Papel estratégico em qualquer empresa. CFOs e diretores financeiros estão entre os executivos mais bem pagos do mercado."
    },
    {
      id: "empreendedor",
      nome: "Empreendedor(a)",
      categoria: "Negócios",
      icone: "🚀",
      descricao: "Identifica oportunidades de mercado e transforma ideias em negócios viáveis, assumindo riscos em busca de crescimento e inovação.",
      atividades: [
        "Validar ideias de negócio e desenvolver o modelo de receita.",
        "Captar recursos de investidores e fomentos.",
        "Liderar e construir equipes multidisciplinares.",
        "Escalar o negócio com foco no cliente e no crescimento sustentável."
      ],
      salarioEntrada: "Variável",
      salarioSenior: "Ilimitado",
      habilidades: ["Resiliência", "Visão de oportunidade", "Liderança", "Tolerância a riscos", "Capacidade de adaptação"],
      mercado: "O Brasil tem um ecossistema de startups em crescimento. Com a ideia certa e execução forte, o potencial de ganho é ilimitado."
    },
    {
      id: "analista-marketing",
      nome: "Analista de Marketing",
      categoria: "Negócios",
      icone: "📣",
      descricao: "Planeja e executa estratégias de comunicação e marketing para atrair clientes, fortalecer marcas e aumentar vendas.",
      atividades: [
        "Criar e executar campanhas de marketing digital e offline.",
        "Analisar métricas e KPIs de campanhas.",
        "Gerenciar redes sociais e produção de conteúdo.",
        "Realizar pesquisas de mercado e análise de concorrência."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Marketing digital", "Análise de dados", "Google Ads/Meta Ads", "SEO", "Criatividade e comunicação"],
      mercado: "Alta demanda em todo tipo de empresa. Profissionais que unem criatividade e análise de dados são os mais valorizados no setor."
    },
    {
      id: "gestor-comercial",
      nome: "Gestor(a) Comercial",
      categoria: "Negócios",
      icone: "🤝",
      descricao: "Lidera e coordena equipes de vendas, definindo estratégias para atingir metas comerciais e expandir a carteira de clientes.",
      atividades: [
        "Definir metas e estratégias de vendas para a equipe.",
        "Acompanhar e analisar os indicadores de vendas (KPIs).",
        "Desenvolver e treinar a equipe comercial.",
        "Negociar grandes contratos com clientes estratégicos."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 18.000+",
      habilidades: ["Liderança comercial", "Negociação", "CRM", "Análise de métricas", "Comunicação persuasiva"],
      mercado: "Papel crítico em qualquer empresa com foco em vendas. Remuneração frequentemente inclui comissões e bonificações por resultados."
    },
    {
      id: "consultor-empresarial",
      nome: "Consultor(a) Empresarial",
      categoria: "Negócios",
      icone: "📋",
      descricao: "Analisa problemas organizacionais e propõe soluções estratégicas para aumentar a eficiência e competitividade de empresas.",
      atividades: [
        "Diagnosticar problemas e ineficiências nas operações da empresa.",
        "Desenvolver e apresentar planos de melhoria e reestruturação.",
        "Acompanhar a implementação das recomendações.",
        "Capacitar equipes e lideranças nas novas práticas."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 25.000+",
      habilidades: ["Pensamento analítico", "Comunicação executiva", "Gestão de projetos", "Conhecimento setorial", "Apresentações"],
      mercado: "Grandes consultorias como McKinsey e BCG são empregadores-chave. Consultores autônomos com especialidade nicho têm alta rentabilidade."
    },
    {
      id: "rh",
      nome: "Profissional de RH",
      categoria: "Negócios",
      icone: "👥",
      descricao: "Cuida do capital humano da empresa, gerenciando recrutamento, desenvolvimento, bem-estar e cultura organizacional.",
      atividades: [
        "Recrutar, selecionar e integrar novos colaboradores.",
        "Desenvolver programas de treinamento e desenvolvimento.",
        "Gerir cargos, salários e benefícios.",
        "Promover o bem-estar, a diversidade e a cultura organizacional."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Psicologia organizacional", "Comunicação", "Empatia", "Gestão de conflitos", "Análise de dados de people"],
      mercado: "Essencial em empresas de médio e grande porte. RH estratégico e people analytics estão transformando a área."
    },
    {
      id: "corretor-imoveis",
      nome: "Corretor(a) de Imóveis",
      categoria: "Negócios",
      icone: "🏠",
      descricao: "Intermedia a compra, venda e locação de imóveis, assessorando clientes em transações imobiliárias de forma ética e eficiente.",
      atividades: [
        "Captar e apresentar imóveis para potenciais compradores.",
        "Avaliar imóveis e orientar clientes sobre preços de mercado.",
        "Negociar propostas e intermediar contratos.",
        "Acompanhar a documentação e o processo de compra."
      ],
      salarioEntrada: "R$ 1.500 + comissões",
      salarioSenior: "R$ 20.000+ com comissões",
      habilidades: ["Negociação", "Conhecimento do mercado imobiliário", "Comunicação", "Rede de relacionamentos", "Ética"],
      mercado: "Alta rentabilidade baseada em comissões. Mercado aquecido em grandes cidades e regiões de crescimento imobiliário."
    },
    {
      id: "comercio-exterior",
      nome: "Analista de Comércio Exterior",
      categoria: "Negócios",
      icone: "🌍",
      descricao: "Gerencia processos de importação e exportação, garantindo conformidade com regulamentações aduaneiras e otimizando operações logísticas.",
      atividades: [
        "Elaborar e analisar documentos de importação e exportação.",
        "Classificar mercadorias e calcular tributos aduaneiros.",
        "Negociar fretes e contratos com parceiros internacionais.",
        "Manter-se atualizado sobre legislação e acordos comerciais."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Legislação aduaneira", "Inglês avançado", "Logística internacional", "Negociação", "Sistemas de comércio exterior"],
      mercado: "Demanda estável em empresas exportadoras e importadoras. Crescimento do e-commerce internacional amplia as oportunidades."
    },
    {
      id: "gestor-projetos",
      nome: "Gestor(a) de Projetos",
      categoria: "Negócios",
      icone: "📊",
      descricao: "Planeja, coordena e controla projetos, garantindo que sejam entregues dentro do prazo, orçamento e escopo definidos.",
      atividades: [
        "Definir escopo, cronograma e orçamento de projetos.",
        "Coordenar equipes multidisciplinares.",
        "Identificar e mitigar riscos nos projetos.",
        "Comunicar o andamento dos projetos para stakeholders."
      ],
      salarioEntrada: "R$ 4.000",
      salarioSenior: "R$ 18.000+",
      habilidades: ["Metodologias (PMI, Agile, Scrum)", "Liderança", "Comunicação", "Gestão de riscos", "Ferramentas como Jira e Trello"],
      mercado: "Alta demanda em tecnologia, construção, indústria e consultorias. Certificação PMP é um diferencial valorizado."
    },
    {
      id: "auditor",
      nome: "Auditor(a)",
      categoria: "Negócios",
      icone: "🔍",
      descricao: "Examina e verifica a conformidade das operações, registros financeiros e processos de uma organização com normas e regulamentos.",
      atividades: [
        "Revisar demonstrações financeiras e lançamentos contábeis.",
        "Avaliar controles internos e identificar fragilidades.",
        "Emitir relatórios e pareceres de auditoria.",
        "Recomendar melhorias nos processos auditados."
      ],
      salarioEntrada: "R$ 3.500",
      salarioSenior: "R$ 18.000+",
      habilidades: ["Contabilidade avançada", "Ética e integridade", "Atenção a detalhes", "Análise de risco", "Comunicação técnica"],
      mercado: "Alta demanda nas grandes firmas de auditoria (Big Four) e em departamentos de controle interno de grandes empresas."
    },
    {
      id: "gerente-produto",
      nome: "Gerente de Produto",
      categoria: "Negócios",
      icone: "🗺️",
      descricao: "Define a visão e estratégia de produtos digitais ou físicos, fazendo a ponte entre negócio, tecnologia e experiência do usuário.",
      atividades: [
        "Definir o roadmap e prioridades de desenvolvimento do produto.",
        "Analisar dados de uso e feedback de usuários.",
        "Colaborar com equipes de design, engenharia e marketing.",
        "Tomar decisões estratégicas sobre funcionalidades e lançamentos."
      ],
      salarioEntrada: "R$ 6.000",
      salarioSenior: "R$ 25.000+",
      habilidades: ["Visão de produto", "Análise de dados", "Comunicação", "Metodologias ágeis", "Empatia com o usuário"],
      mercado: "Uma das carreiras em maior destaque no setor de tecnologia. Empresas de produto como Nubank, iFood e Spotify disputam esses profissionais."
    },
    {
      id: "analista-investimentos",
      nome: "Analista de Investimentos",
      categoria: "Negócios",
      icone: "📈",
      descricao: "Pesquisa e avalia ativos financeiros, elaborando recomendações de investimento para fundos, bancos ou clientes individuais.",
      atividades: [
        "Analisar demonstrações financeiras de empresas.",
        "Avaliar o potencial de retorno e risco de investimentos.",
        "Elaborar relatórios de análise fundamentalista ou técnica.",
        "Recomendar carteiras de investimentos para clientes."
      ],
      salarioEntrada: "R$ 5.000",
      salarioSenior: "R$ 30.000+",
      habilidades: ["Finanças e valuation", "Excel e Python", "Análise fundamentalista", "Inglês fluente", "Certificações (CFA, CNPI)"],
      mercado: "Setor financeiro de alta remuneração. Bancos de investimento, gestoras de fundos e corretoras são os principais empregadores."
    },
    {
      id: "logistica",
      nome: "Profissional de Logística",
      categoria: "Negócios",
      icone: "🚚",
      descricao: "Planeja e gerencia o fluxo de mercadorias desde a aquisição de insumos até a entrega ao cliente final com eficiência.",
      atividades: [
        "Planejar rotas e gerenciar transportadoras e fretes.",
        "Controlar estoques e níveis de inventário.",
        "Gerir armazéns, centros de distribuição e operações de entrega.",
        "Otimizar a cadeia de suprimentos para reduzir custos."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Gestão de supply chain", "ERP (SAP)", "Negociação", "Análise de dados", "Logística reversa"],
      mercado: "E-commerce e globalização elevaram a importância da logística. Profissionais de Supply Chain são cada vez mais estratégicos."
    },
    {
      id: "ecommerce",
      nome: "Gestor(a) de E-commerce",
      categoria: "Negócios",
      icone: "🛒",
      descricao: "Gerencia operações de lojas virtuais, desde a estratégia de vendas e marketing digital até a logística e experiência do cliente.",
      atividades: [
        "Gerenciar catálogos de produtos, preços e promoções.",
        "Analisar métricas de conversão e vendas online.",
        "Coordenar campanhas de tráfego pago e SEO.",
        "Melhorar a experiência de compra do usuário na loja."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 14.000+",
      habilidades: ["Marketing digital", "Plataformas de e-commerce (VTEX, Shopify)", "Análise de dados", "Logística", "UX"],
      mercado: "E-commerce brasileiro cresce exponencialmente. Profissionais que unem marketing e gestão operacional são muito valorizados."
    },
    {
      id: "executivo-vendas",
      nome: "Executivo(a) de Vendas",
      categoria: "Negócios",
      icone: "🤝",
      descricao: "Prospecta, negocia e fecha contratos de vendas B2B, sendo responsável por manter e expandir a carteira de clientes corporativos.",
      atividades: [
        "Prospectar e qualificar potenciais clientes (leads).",
        "Apresentar e demonstrar produtos ou serviços para decisores.",
        "Negociar propostas comerciais e condições de contrato.",
        "Manter relacionamento pós-venda para garantir renovações."
      ],
      salarioEntrada: "R$ 3.000 + comissões",
      salarioSenior: "R$ 25.000+ com comissões",
      habilidades: ["Negociação", "Comunicação persuasiva", "CRM (Salesforce)", "Resiliência", "Networking"],
      mercado: "Alta demanda em empresas de tecnologia (SaaS), indústria e serviços. Remuneração variável pode ser muito atrativa com comissões."
    },

    // ==================== CIÊNCIAS HUMANAS ====================
    {
      id: "professor",
      nome: "Professor(a)",
      categoria: "Humanas",
      icone: "🏫",
      descricao: "Transmite conhecimento e desenvolve o senso crítico e intelectual de alunos em diferentes níveis educacionais.",
      atividades: [
        "Planejar e ministrar aulas didáticas e envolventes.",
        "Elaborar avaliações e acompanhar o progresso dos alunos.",
        "Participar de reuniões pedagógicas e conselhos de classe.",
        "Desenvolver metodologias de ensino inovadoras e inclusivas."
      ],
      salarioEntrada: "R$ 3.200",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Didática e comunicação", "Paciência", "Empatia com alunos", "Planejamento pedagógico", "Paixão pelo conhecimento"],
      mercado: "Alta empregabilidade com estabilidade no setor público. Ensino superior e EAD abrem novas possibilidades e remunerações."
    },
    {
      id: "historiador",
      nome: "Historiador(a)",
      categoria: "Humanas",
      icone: "🏛️",
      descricao: "Estuda, pesquisa e interpreta eventos e processos do passado para compreender a formação das sociedades e culturas humanas.",
      atividades: [
        "Pesquisar em arquivos históricos e fontes primárias.",
        "Produzir artigos científicos, livros e relatórios históricos.",
        "Atuar na preservação do patrimônio histórico e cultural.",
        "Lecionar história em escolas e universidades."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Pesquisa documental", "Análise crítica de fontes", "Escrita acadêmica", "Conhecimento histórico amplo", "Preservação de patrimônio"],
      mercado: "Atuação em educação, museus, arquivos, patrimônio histórico e pesquisa acadêmica. Concursos públicos são porta de entrada importante."
    },
    {
      id: "geografo",
      nome: "Geógrafo(a)",
      categoria: "Humanas",
      icone: "🗺️",
      descricao: "Estuda o espaço geográfico e as relações entre o meio ambiente, a sociedade e a economia, atuando em planejamento e pesquisa.",
      atividades: [
        "Analisar dados geoespaciais e elaborar mapas e relatórios.",
        "Atuar no planejamento urbano e uso do solo.",
        "Realizar estudos ambientais e de impacto territorial.",
        "Lecionar geografia em escolas e universidades."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Geoprocessamento (SIG/GIS)", "Cartografia", "Análise ambiental", "Estatística", "Escrita técnica"],
      mercado: "Alta demanda em planejamento urbano, ambiental e em empresas de tecnologia geoespacial. Conhecimento em GIS é muito valorizado."
    },
    {
      id: "sociologo",
      nome: "Sociólogo(a)",
      categoria: "Humanas",
      icone: "👥",
      descricao: "Estuda os fenômenos sociais, as relações humanas e as estruturas da sociedade, contribuindo para compreender e transformar a realidade.",
      atividades: [
        "Pesquisar dinâmicas sociais, desigualdades e conflitos.",
        "Elaborar estudos e diagnósticos sociológicos.",
        "Assessorar políticas públicas e organizações sociais.",
        "Lecionar sociologia em escolas e universidades."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Pesquisa social qualitativa e quantitativa", "Análise crítica", "Escrita acadêmica", "Teorias sociais", "Comunicação"],
      mercado: "Atuação em pesquisa, consultoria, políticas públicas e educação. Órgãos governamentais e ONGs são grandes empregadores."
    },
    {
      id: "antropologo",
      nome: "Antropólogo(a)",
      categoria: "Humanas",
      icone: "🌐",
      descricao: "Estuda as culturas, costumes e organizações sociais humanas em perspectiva comparativa e histórica.",
      atividades: [
        "Realizar pesquisas etnográficas em comunidades e grupos.",
        "Analisar práticas culturais, rituais e simbolismos.",
        "Produzir relatórios e laudos antropológicos.",
        "Contribuir para políticas de proteção a povos indígenas e tradicionais."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Pesquisa etnográfica", "Escuta e observação", "Escrita acadêmica", "Diversidade cultural", "Análise comparativa"],
      mercado: "Atuação em academia, órgãos públicos (FUNAI, IPHAN) e empresas que precisam de estudos de impacto socioambiental."
    },
    {
      id: "cientista-politico",
      nome: "Cientista Político(a)",
      categoria: "Humanas",
      icone: "🏛️",
      descricao: "Analisa sistemas políticos, instituições, partidos e processos eleitorais, contribuindo para o entendimento do poder e da democracia.",
      atividades: [
        "Pesquisar comportamento eleitoral e dinâmicas políticas.",
        "Analisar políticas públicas e seus impactos.",
        "Assessorar partidos, candidatos e instituições governamentais.",
        "Produzir conteúdo analítico para mídia e think tanks."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Análise política e eleitoral", "Pesquisa científica", "Escrita", "Comunicação", "Conhecimento de políticas públicas"],
      mercado: "Atuação em consultoria política, acadêmia, mídia, ONGs e organizações internacionais. Eleições aquecidas o mercado periodicamente."
    },
    {
      id: "filosofo",
      nome: "Filósofo(a)",
      categoria: "Humanas",
      icone: "💭",
      descricao: "Investiga questões fundamentais sobre a existência, o conhecimento, a ética e a linguagem, contribuindo para o pensamento crítico.",
      atividades: [
        "Pesquisar e produzir textos filosóficos acadêmicos.",
        "Lecionar filosofia em escolas e universidades.",
        "Aplicar raciocínio filosófico em ética empresarial e bioética.",
        "Colaborar com áreas como IA, direito e política."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 9.000+",
      habilidades: ["Pensamento crítico", "Argumentação", "Escrita filosófica", "Leitura de textos clássicos", "Ética aplicada"],
      mercado: "Crescente aplicação na filosofia da IA, bioética e ética corporativa. Educação pública e pesquisa são os principais campos de atuação."
    },
    {
      id: "assistente-social",
      nome: "Assistente Social",
      categoria: "Humanas",
      icone: "🤝",
      descricao: "Apoia indivíduos, famílias e comunidades em situação de vulnerabilidade, acessando políticas públicas e serviços sociais.",
      atividades: [
        "Realizar estudos e diagnósticos socioeconômicos.",
        "Acompanhar famílias em situação de vulnerabilidade.",
        "Orientar sobre acesso a benefícios e políticas públicas.",
        "Atuar em conselhos tutelares, CRAS, CREAS e hospitais."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 7.500+",
      habilidades: ["Empatia e escuta", "Conhecimento de políticas públicas", "Comunicação", "Ética profissional", "Trabalho em rede"],
      mercado: "Alta demanda no setor público, hospitais, empresas (RH) e ONGs. Concursos públicos oferecem boa estabilidade para assistentes sociais."
    },
    {
      id: "jornalista",
      nome: "Jornalista",
      categoria: "Humanas",
      icone: "✍️",
      descricao: "Investiga fatos, redige notícias e produz reportagens para veículos de comunicação, podcasts, portais e assessorias.",
      atividades: [
        "Apurar e verificar fatos e informações com fontes confiáveis.",
        "Redigir textos jornalísticos em diferentes formatos.",
        "Cobrir acontecimentos em tempo real.",
        "Criar conteúdo para redes sociais e portais digitais."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Escrita e gramática", "Ética jornalística", "Checagem de fatos", "Comunicação oral", "Curiosidade investigativa"],
      mercado: "Jornalismo digital e de dados está em crescimento. Assessoria de imprensa e criação de conteúdo corporativo são alternativas rentáveis."
    },
    {
      id: "advogado",
      nome: "Advogado(a)",
      categoria: "Humanas",
      icone: "⚖️",
      descricao: "Assessora e representa clientes em questões jurídicas, atuando em tribunais, negociações e consultoria legal.",
      atividades: [
        "Defender clientes em processos judiciais e administrativos.",
        "Elaborar contratos, petições e peças jurídicas.",
        "Assessorar empresas em questões de compliance e regulação.",
        "Negociar acordos e soluções extrajudiciais."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 25.000+",
      habilidades: ["Conhecimento jurídico", "Argumentação", "Escrita técnica", "Negociação", "Ética profissional"],
      mercado: "Mercado competitivo mas com alta remuneração em especialidades como direito tributário, trabalhista e digital. OAB é obrigatória."
    },
    {
      id: "diplomata",
      nome: "Diplomata",
      categoria: "Humanas",
      icone: "🌐",
      descricao: "Representa o Estado brasileiro no exterior, negociando acordos, fortalecendo relações internacionais e protegendo cidadãos.",
      atividades: [
        "Negociar acordos bilaterais e multilaterais.",
        "Representar o Brasil em organismos internacionais.",
        "Emitir vistos, passaportes e atender cidadãos no exterior.",
        "Elaborar relatórios políticos e econômicos sobre o país anfitrião."
      ],
      salarioEntrada: "R$ 12.000",
      salarioSenior: "R$ 25.000+",
      habilidades: ["Relações internacionais", "Inglês e outros idiomas", "Diplomacia e negociação", "Escrita formal", "Cultura global"],
      mercado: "Carreira de prestígio do serviço público. Aprovação no concurso do Instituto Rio Branco (MRE) é o caminho de entrada."
    },
    {
      id: "arqueologo",
      nome: "Arqueólogo(a)",
      categoria: "Humanas",
      icone: "🏺",
      descricao: "Estuda culturas e sociedades do passado através da escavação e análise de artefatos, estruturas e outros vestígios materiais.",
      atividades: [
        "Planejar e executar escavações arqueológicas.",
        "Analisar e catalogar artefatos encontrados.",
        "Produzir relatórios de pesquisa e artigos científicos.",
        "Atuar em projetos de licenciamento ambiental e salvamento arqueológico."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 10.000+",
      habilidades: ["Técnicas de escavação", "Análise de artefatos", "Pesquisa histórica", "Redação científica", "Trabalho de campo"],
      mercado: "Crescente demanda em obras de infraestrutura que exigem laudos arqueológicos. Academia e patrimônio histórico são as bases tradicionais."
    },
    {
      id: "pedagogo",
      nome: "Pedagogo(a)",
      categoria: "Humanas",
      icone: "📚",
      descricao: "Organiza e coordena o processo educacional, desenvolvendo métodos de ensino e supervisionando o trabalho pedagógico das escolas.",
      atividades: [
        "Coordenar o planejamento pedagógico de escolas.",
        "Orientar professores em metodologias de ensino.",
        "Atender e acompanhar alunos com dificuldades de aprendizagem.",
        "Desenvolver materiais didáticos e projetos educacionais."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 8.000+",
      habilidades: ["Didática e pedagogia", "Empatia com crianças", "Liderança educacional", "Psicologia do desenvolvimento", "Comunicação"],
      mercado: "Alta empregabilidade em escolas públicas e privadas. RH corporativo também busca pedagogos para T&D (treinamento e desenvolvimento)."
    },
    {
      id: "tradutor",
      nome: "Tradutor(a)",
      categoria: "Humanas",
      icone: "🗣️",
      descricao: "Converte textos ou discursos de um idioma para outro, preservando o sentido, o tom e as nuances culturais do conteúdo original.",
      atividades: [
        "Traduzir textos técnicos, literários, jurídicos e comerciais.",
        "Realizar interpretação simultânea em eventos e reuniões.",
        "Revisar traduções para garantir qualidade e precisão.",
        "Trabalhar com ferramentas de tradução assistida (CAT tools)."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Fluência em dois ou mais idiomas", "Escrita precisa", "Cultura geral ampla", "Atenção a detalhes", "Vocabulário técnico"],
      mercado: "Alta demanda para inglês, espanhol, alemão e mandarim. Tradução juramentada tem regulamentação específica e boa remuneração."
    },
    {
      id: "bibliotecario",
      nome: "Bibliotecário(a)",
      categoria: "Humanas",
      icone: "📖",
      descricao: "Organiza, cataloga e gerencia acervos de informações em bibliotecas físicas e digitais, facilitando o acesso ao conhecimento.",
      atividades: [
        "Catalogar e classificar obras do acervo bibliográfico.",
        "Atender e orientar usuários na busca por informações.",
        "Gerenciar sistemas de gestão de bibliotecas.",
        "Promover atividades culturais e de incentivo à leitura."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 7.000+",
      habilidades: ["Ciência da informação", "Organização", "CRB (Conselho Regional)", "Atendimento ao público", "Tecnologia da informação"],
      mercado: "Estabilidade em bibliotecas públicas e universitárias. Gestão do conhecimento em empresas é uma área emergente para esses profissionais."
    },
    {
      id: "relacoes-internacionais",
      nome: "Profissional de Relações Internacionais",
      categoria: "Humanas",
      icone: "✈️",
      descricao: "Analisa e atua nas relações entre países, organizações e atores internacionais, em áreas de comércio, diplomacia e cooperação.",
      atividades: [
        "Analisar cenários geopolíticos e relações entre países.",
        "Atuar em negociações e acordos internacionais.",
        "Trabalhar em comércio exterior e cooperação internacional.",
        "Assessorar empresas multinacionais e organizações globais."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 15.000+",
      habilidades: ["Geopolítica e direito internacional", "Inglês e outros idiomas", "Análise política", "Negociação intercultural", "Comunicação"],
      mercado: "Atuação em organismos internacionais (ONU, Banco Mundial), ONG's, multinacionais e no serviço diplomático."
    },
    {
      id: "criminologo",
      nome: "Criminólogo(a)",
      categoria: "Humanas",
      icone: "🔍",
      descricao: "Estuda as causas, formas e prevenção do crime, atuando na análise criminal, políticas de segurança e sistemas de justiça.",
      atividades: [
        "Analisar padrões criminais e elaborar perfis de criminosos.",
        "Assessorar polícias e ministério público em investigações.",
        "Desenvolver políticas públicas de prevenção ao crime.",
        "Realizar pesquisas sobre criminalidade e violência."
      ],
      salarioEntrada: "R$ 3.000",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Criminologia e sociologia do crime", "Análise criminal", "Psicologia forense", "Investigação", "Redação técnica"],
      mercado: "Demanda crescente em segurança pública, forças policiais, ministério público e consultorias de segurança privada."
    },
    {
      id: "pesquisador-cs",
      nome: "Pesquisador(a) em Ciências Sociais",
      categoria: "Humanas",
      icone: "📋",
      descricao: "Conduz investigações científicas sobre fenômenos sociais, econômicos e culturais, produzindo conhecimento para transformar a sociedade.",
      atividades: [
        "Elaborar e executar projetos de pesquisa científica.",
        "Coletar e analisar dados qualitativos e quantitativos.",
        "Publicar artigos em revistas científicas nacionais e internacionais.",
        "Apresentar descobertas em congressos e seminários."
      ],
      salarioEntrada: "R$ 2.500",
      salarioSenior: "R$ 12.000+",
      habilidades: ["Metodologia de pesquisa", "Análise de dados", "Escrita acadêmica", "Pensamento crítico", "Inglês acadêmico"],
      mercado: "Atuação principal em universidades e institutos de pesquisa. Financiamento por bolsas (FAPESP, CNPq) e projetos nacionais e internacionais."
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

  // ==========================================
  // BANCOS DE PERGUNTAS DO TESTE 2 — POR ÁREA
  // Cada opção aponta para um profissao.id específico
  // ==========================================

  testeSituacionalTecnologia: [
    {
      id: 1,
      pergunta: "Você faz parte de uma equipe de tecnologia em crescimento. Qual papel faz mais sentido para você?",
      opcoes: [
        { texto: "Escrever o código que faz a aplicação funcionar, do back-end ao front-end.", profissao: "dev-software" },
        { texto: "Analisar os dados dos usuários e transformar números em decisões estratégicas.", profissao: "analista-dados" },
        { texto: "Proteger o sistema contra invasões, vazamentos e vulnerabilidades.", profissao: "ciberseguranca" },
        { texto: "Criar a interface visual que torna o produto intuitivo e bonito de usar.", profissao: "designer-ux-ui" }
      ]
    },
    {
      id: 2,
      pergunta: "Um sistema crítico da empresa caiu às 3h da manhã. Como você age?",
      opcoes: [
        { texto: "Analiso os logs do código e corrijo o bug o mais rápido possível.", profissao: "programador" },
        { texto: "Verifico a infraestrutura na nuvem, os servidores e os containers.", profissao: "cloud-computing" },
        { texto: "Examino se houve acesso não autorizado ou ataque cibernético.", profissao: "ciberseguranca" },
        { texto: "Gerencio os backups e recupero a integridade do banco de dados.", profissao: "dba" }
      ]
    },
    {
      id: 3,
      pergunta: "O que mais te emociona no universo da tecnologia?",
      opcoes: [
        { texto: "Treinar modelos de IA que aprendem e raciocinam de forma autônoma.", profissao: "eng-ia" },
        { texto: "Criar um aplicativo que milhões de pessoas usam no celular todo dia.", profissao: "dev-mobile" },
        { texto: "Construir sistemas que escalam para suportar bilhões de requisições.", profissao: "arquiteto-software" },
        { texto: "Desenvolver o código de jogos e trazer mecânicas inovadoras à vida.", profissao: "dev-jogos" }
      ]
    },
    {
      id: 4,
      pergunta: "Qual das seguintes situações de trabalho te parece mais satisfatória?",
      opcoes: [
        { texto: "Entregar um sistema web completo, do servidor até a tela do usuário.", profissao: "dev-web" },
        { texto: "Descobrir um padrão nos dados que ninguém tinha percebido antes.", profissao: "cientista-dados" },
        { texto: "Configurar a rede corporativa garantindo velocidade e segurança.", profissao: "eng-redes" },
        { texto: "Mapear os requisitos de um sistema e traduzir necessidades do negócio em soluções.", profissao: "analista-sistemas" }
      ]
    },
    {
      id: 5,
      pergunta: "Como você prefere deixar sua marca na área de tecnologia?",
      opcoes: [
        { texto: "Desenvolvendo o hardware e firmware de dispositivos inteligentes.", profissao: "eng-computacao" },
        { texto: "Dando suporte e garantindo que toda a infraestrutura de TI funcione.", profissao: "tecnico-informatica" },
        { texto: "Gerenciando a migração completa de uma empresa para a nuvem.", profissao: "cloud-computing" },
        { texto: "Construindo a arquitetura técnica que toda a equipe de engenharia vai seguir.", profissao: "engenheiro-software" }
      ]
    }
  ],

  testeSituacionalSaude: [
    {
      id: 1,
      pergunta: "Um paciente chega à sua frente com uma queixa séria. Como você prefere ajudá-lo?",
      opcoes: [
        { texto: "Faço o diagnóstico clínico completo e prescrevo o tratamento adequado.", profissao: "medico" },
        { texto: "Cuido diretamente, administro medicamentos e monitoro os sinais vitais.", profissao: "enfermeiro" },
        { texto: "Ouço sua dor emocional e ofereço suporte psicológico especializado.", profissao: "psicologo" },
        { texto: "Avaliou seus hábitos alimentares e elaboro um plano nutricional personalizado.", profissao: "nutricionista" }
      ]
    },
    {
      id: 2,
      pergunta: "Onde você se imagina trabalhando na área da saúde?",
      opcoes: [
        { texto: "Em uma UTI operando ventiladores mecânicos e monitorando a respiração.", profissao: "terapeuta-respiratorio" },
        { texto: "Em uma clínica de reabilitação ajudando pacientes a recuperarem os movimentos.", profissao: "fisioterapeuta" },
        { texto: "Em um laboratório realizando análises de sangue e diagnósticos moleculares.", profissao: "biomedico" },
        { texto: "Em uma farmácia ou indústria manipulando e controlando a qualidade de medicamentos.", profissao: "farmaceutico" }
      ]
    },
    {
      id: 3,
      pergunta: "Qual aspecto do cuidado humano te toca mais profundamente?",
      opcoes: [
        { texto: "Ajudar crianças com necessidades especiais a desenvolverem independência no dia a dia.", profissao: "terapeuta-ocupacional" },
        { texto: "Cuidar da saúde bucal e realizar procedimentos estéticos e preventivos.", profissao: "dentista" },
        { texto: "Tratar distúrbios de fala, linguagem e comunicação em crianças e adultos.", profissao: "fonoaudiologo" },
        { texto: "Cuidar da saúde e do bem-estar de animais domésticos e silvestres.", profissao: "veterinario" }
      ]
    },
    {
      id: 4,
      pergunta: "Como você contribuiria para a saúde da população em larga escala?",
      opcoes: [
        { texto: "Planejando políticas de saúde pública e investigando surtos e epidemias.", profissao: "sanitarista" },
        { texto: "Realizando diagnósticos por imagem como raio-X, tomografia e ressonância.", profissao: "tecnico-radiologia" },
        { texto: "Avaliando funções cognitivas e reabilitando pacientes com AVC ou Alzheimer.", profissao: "neuropsicólogo" },
        { texto: "Acompanhando gestantes e conduzindo partos com segurança.", profissao: "obstetra" }
      ]
    },
    {
      id: 5,
      pergunta: "Qual frase melhor descreve sua motivação na área da saúde?",
      opcoes: [
        { texto: "Quero prescrever exercícios e transformar a vida das pessoas pelo movimento.", profissao: "educador-fisico" },
        { texto: "Quero tratar doenças complexas e salvar vidas em situações críticas.", profissao: "medico" },
        { texto: "Quero cuidar da mente, ajudar a superar traumas e ansiedade.", profissao: "psicologo" },
        { texto: "Quero promover beleza, autoestima e bem-estar com estética avançada.", profissao: "esteticista" }
      ]
    }
  ],

  testeSituacionalArtes: [
    {
      id: 1,
      pergunta: "Você recebe um projeto criativo livre. Qual te anima mais?",
      opcoes: [
        { texto: "Criar a identidade visual completa de uma marca do zero.", profissao: "designer-grafico" },
        { texto: "Projetar a decoração de um apartamento unindo função e estética.", profissao: "designer-interiores" },
        { texto: "Criar uma coleção de roupas que conta uma história visual.", profissao: "designer-moda" },
        { texto: "Ilustrar um livro com um estilo visual totalmente autoral.", profissao: "ilustrador" }
      ]
    },
    {
      id: 2,
      pergunta: "Em qual ambiente você se imagina criando todos os dias?",
      opcoes: [
        { texto: "Em um estúdio de animação dando vida a personagens expressivos.", profissao: "animador" },
        { texto: "No set de um comercial, definindo cada detalhe visual da cena.", profissao: "diretor-arte" },
        { texto: "Em um estúdio fotográfico capturando retratos e emoções únicas.", profissao: "fotografo" },
        { texto: "No computador, modelando mundos tridimensionais em Blender ou Maya.", profissao: "modelador-3d" }
      ]
    },
    {
      id: 3,
      pergunta: "Qual tipo de projeto criativo te faz sentir mais realizado?",
      opcoes: [
        { texto: "Lançar um jogo indie com mecânicas e storytelling originais.", profissao: "game-designer" },
        { texto: "Publicar uma graphic novel com história e arte completamente autorais.", profissao: "quadrinista" },
        { texto: "Produzir um documentário que gera impacto social real.", profissao: "produtor-audiovisual" },
        { texto: "Editar um vídeo com ritmo e estética que prende o espectador do início ao fim.", profissao: "editor-video" }
      ]
    },
    {
      id: 4,
      pergunta: "Qual frase resume sua visão criativa?",
      opcoes: [
        { texto: "Quero criar campanhas que mudam a percepção do público sobre uma marca.", profissao: "publicitario" },
        { texto: "Quero ser a mente criativa que define o tom visual de toda a empresa.", profissao: "diretor-criativo" },
        { texto: "Quero projetar produtos que unam forma, função e inovação.", profissao: "designer-produto" },
        { texto: "Quero construir cenários imersivos que transportam o público para outro mundo.", profissao: "cenografo" }
      ]
    },
    {
      id: 5,
      pergunta: "Onde você quer que seu trabalho seja visto e reconhecido?",
      opcoes: [
        { texto: "Em galerias e museus, com obras que provocam reflexão.", profissao: "artista-visual" },
        { texto: "Nos edifícios e espaços da cidade que projeto como arquiteto.", profissao: "arquiteto" },
        { texto: "Nas telas e aplicativos que milhões de pessoas usam diariamente.", profissao: "designer-ux-ui" },
        { texto: "Nos créditos de um filme ou série animada de grande impacto.", profissao: "animador" }
      ]
    }
  ],

  testeSituacionalNegocios: [
    {
      id: 1,
      pergunta: "Você assume a liderança de uma empresa em crise. O que você prioriza?",
      opcoes: [
        { texto: "Analiso o fluxo de caixa e crio um plano financeiro de recuperação.", profissao: "gestor-financeiro" },
        { texto: "Redesenho os processos e proponho uma reestruturação organizacional.", profissao: "consultor-empresarial" },
        { texto: "Verifico a contabilidade e as obrigações fiscais para identificar irregularidades.", profissao: "auditor" },
        { texto: "Analiso o mercado e os indicadores econômicos para traçar a estratégia.", profissao: "economista" }
      ]
    },
    {
      id: 2,
      pergunta: "Qual das seguintes rotinas de trabalho te parece mais natural?",
      opcoes: [
        { texto: "Prospectar clientes, negociar propostas e fechar contratos.", profissao: "executivo-vendas" },
        { texto: "Recrutar talentos e construir uma cultura organizacional forte.", profissao: "rh" },
        { texto: "Gerenciar cronograma, escopo e equipes de um projeto complexo.", profissao: "gestor-projetos" },
        { texto: "Criar campanhas digitais e analisar métricas de engajamento.", profissao: "analista-marketing" }
      ]
    },
    {
      id: 3,
      pergunta: "Qual aspecto do mundo dos negócios te fascina mais?",
      opcoes: [
        { texto: "Criar uma startup do zero e escalar com investimentos.", profissao: "empreendedor" },
        { texto: "Gerenciar importações e exportações negociando internacionalmente.", profissao: "comercio-exterior" },
        { texto: "Analisar ações e construir carteiras de investimentos rentáveis.", profissao: "analista-investimentos" },
        { texto: "Garantir que as demonstrações financeiras estejam corretas e em dia.", profissao: "contador" }
      ]
    },
    {
      id: 4,
      pergunta: "Onde você se imagina atuando profissionalmente?",
      opcoes: [
        { texto: "Avaliando imóveis e fechando negociações com compradores e vendedores.", profissao: "corretor-imoveis" },
        { texto: "Numa empresa de tecnologia definindo o roadmap do produto.", profissao: "gerente-produto" },
        { texto: "Num centro de distribuição otimizando rotas e controlando estoques.", profissao: "logistica" },
        { texto: "Gerenciando uma loja virtual de alto volume com foco em conversão.", profissao: "ecommerce" }
      ]
    },
    {
      id: 5,
      pergunta: "Como você gosta de liderar ou contribuir nos negócios?",
      opcoes: [
        { texto: "Motivando e coordenando a equipe comercial para bater metas.", profissao: "gestor-comercial" },
        { texto: "Tomando decisões estratégicas baseadas em dados financeiros.", profissao: "gestor-financeiro" },
        { texto: "Administrando recursos humanos, materiais e financeiros com visão ampla.", profissao: "administrador" },
        { texto: "Identificando ineficiências e propondo melhorias nos processos.", profissao: "consultor-empresarial" }
      ]
    }
  ],

  testeSituacionalHumanas: [
    {
      id: 1,
      pergunta: "Você tem a oportunidade de transformar vidas. Como você escolhe fazer isso?",
      opcoes: [
        { texto: "Entrando numa sala de aula e ensinando com paixão e didática.", profissao: "professor" },
        { texto: "Escrevendo uma matéria investigativa que expõe uma injustiça social.", profissao: "jornalista" },
        { texto: "Representando juridicamente alguém que não tem voz nem recursos.", profissao: "advogado" },
        { texto: "Acompanhando famílias vulneráveis e conectando-as a políticas públicas.", profissao: "assistente-social" }
      ]
    },
    {
      id: 2,
      pergunta: "Qual das seguintes pesquisas te fascina mais?",
      opcoes: [
        { texto: "Desvendar como sociedades antigas viviam através de artefatos e escavações.", profissao: "arqueologo" },
        { texto: "Entender por que as pessoas cometem crimes e como a sociedade pode preveni-los.", profissao: "criminologo" },
        { texto: "Analisar o comportamento político de uma nação em período eleitoral.", profissao: "cientista-politico" },
        { texto: "Comparar culturas e rituais de povos indígenas ao redor do mundo.", profissao: "antropologo" }
      ]
    },
    {
      id: 3,
      pergunta: "Como você prefere contribuir com o conhecimento humano?",
      opcoes: [
        { texto: "Escrevendo artigos acadêmicos sobre fenômenos sociais contemporâneos.", profissao: "sociologo" },
        { texto: "Organizando e catalogando o conhecimento em bibliotecas físicas e digitais.", profissao: "bibliotecario" },
        { texto: "Traduzindo obras literárias e técnicas para múltiplos idiomas.", profissao: "tradutor" },
        { texto: "Pesquisando as relações entre espaço geográfico, ambiente e sociedade.", profissao: "geografo" }
      ]
    },
    {
      id: 4,
      pergunta: "Onde você se imagina atuando nas Ciências Humanas?",
      opcoes: [
        { texto: "Numa embaixada brasileira negociando acordos bilaterais no exterior.", profissao: "diplomata" },
        { texto: "Num projeto aplicando filosofia à ética da inteligência artificial.", profissao: "filosofo" },
        { texto: "Numa escola coordenando projetos pedagógicos e orientando professores.", profissao: "pedagogo" },
        { texto: "Num instituto analisando crises geopolíticas e relações internacionais.", profissao: "relacoes-internacionais" }
      ]
    },
    {
      id: 5,
      pergunta: "Qual é sua maior motivação nas áreas humanas?",
      opcoes: [
        { texto: "Entender como os eventos do passado moldaram o mundo em que vivemos.", profissao: "historiador" },
        { texto: "Conduzir pesquisas científicas que fundamentem políticas públicas melhores.", profissao: "pesquisador-cs" },
        { texto: "Defender os direitos de alguém num processo judicial complexo.", profissao: "advogado" },
        { texto: "Despertar o senso crítico e a curiosidade nos jovens estudantes.", profissao: "professor" }
      ]
    }
  ],

  // Relatos Reais inspiradores para a seção de depoimentos
  relatos: [
    {
      nome: "Mariana Souza",
      idade: 25,
      profissao: "Desenvolvedora Front-End",
      area: "Tecnologia",
      depoimento: "Entrei na tecnologia pelo curso técnico! No começo achava que programação era só para gênios da matemática, mas descobri que é sobre criatividade e resolução de problemas práticos. Criar interfaces que facilitam a vida de milhares de pessoas é extremamente gratificante. Estudar constantemente faz parte, mas ver seu código rodando compensa tudo.",
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
      depoimento: "Administrar é tomar decisões sob incertezas. Criei minha própria agência de consultoria financeira após alguns anos no setor corporativo. Liderar pessoas e ver uma ideia sair do papel para gerar empregos e lucros é fascinante. Requer disciplina, inteligência emocional e visão de futuro.",
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

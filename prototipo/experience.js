/* Navegação interna do protótipo — Grupo 08.
 * Camada de demonstração sem backend, inscrições ou verificação automática de vagas.
 * Referências institucionais consultadas em novembro de 2026.
 */
(function () {
  'use strict';
  const root = document.getElementById('portalApp');
  if (!root) return;
  const L = (pt, en) => ({ pt: pt, en: en || pt });
  const URLs = {
    aluno: 'https://unifor.br/dri/aluno',
    docente: 'https://unifor.br/iro/faculty-support',
    convenio: 'https://unifor.br/dri/convenios',
    contatos: 'https://unifor.br/dri/contatos',
    guida: 'https://unifor.br/documents/20143/3197315/guia-aluno-intercambista-2024.pdf',
    manual: 'https://unifor.br/documents/d/nei/manual-de-boas-praticas-de-internacionalizacao-atualizado-digital-2026',
    secretaria: 'https://www.unifor.br/cesta-de-servicos/secretaria-academica',
    intercambio: 'https://unifor.br/-/unifor-inicia-inscricoes-para-o-programa-de-intercambio-academico-2027.1-neste-sabado-1-',
    buddy: 'https://unifor.br/web/graduacao/-/unifor-seleciona-alunos-para-o-buddy-program-2026.2',
    edu: 'https://unifor.br/dri/aluno',
    noticia: 'https://unifor.br/-/unifor-amplia-convenios-com-universidades-internacionais',
    docsads: 'https://unifor.br/documents/d/nei/analise-e-desenvolvimento-de-sistemas-2025',
    docseng: 'https://unifor.br/documents/d/nei/engenharia-da-computacao-2025',
    docsenf: 'https://unifor.br/documents/d/nei/enfermagem-2025',
    docsdireito: 'https://unifor.br/documents/d/guest/universidades-conveniadas-direito-2025',
    docspos: 'https://unifor.br/documents/d/nei/universidades-conveniadas-pos-graduacao-2024-2'
  };
  const i18n = {
    pt: {
      home: 'Voltar ao início', cap: 'EXPERIÊNCIA INTERATIVA', title: 'Central de internacionalização',
      subtitle: 'Explore informações e prepare suas dúvidas sem sair da aplicação. Links institucionais aparecem no contexto certo.',
      programs: 'Programas', news: 'Notícias', universities: 'Universidades', documents: 'Documentação', faculty: 'Docentes',
      incoming: 'Internacionais', guides: 'Orientações', planning: 'Minha jornada', contacts: 'Contato',
      source: 'Fonte institucional', external: 'Abrir documento ou página oficial ↗', updated: 'Pesquisa documental: novembro/2026',
      disclaimer: 'Protótipo acadêmico independente. Os conteúdos abaixo são sínteses orientativas, não editais, confirmação de vagas ou aprovação institucional.',
      details: 'Ver detalhes', back: 'Voltar', next: 'Próximos passos', faq: 'Perguntas frequentes',
      find: 'Buscar universidade ou país', allCountries: 'Todos os países', allCourses: 'Todos os cursos',
      results: 'resultados de referência', noResults: 'Nenhum resultado com os filtros escolhidos. Experimente outra busca.',
      examples: 'Amostra de referências documentadas — não é catálogo completo nem lista de vagas abertas.',
      applies: 'Área relacionada', history: 'Registro institucional; disponibilidade atual não confirmada.',
      modal: 'Detalhes da instituição', about: 'O que consultar', sources: 'Onde confirmar',
      records: 'Listas por curso', formHint: 'Consulte a lista oficial do seu curso (edições 2024–2025).',
      searchGuides: 'Procure um tema', openGuide: 'Ler orientação completa',
      noEnroll: 'A candidatura e a aprovação ocorrem somente pelos canais oficialmente divulgados.',
      docProgress: 'Checklist orientativo', docsNote: 'Marque somente para organizar sua leitura. Nenhum dado é enviado ou salvo.',
      reset: 'Desmarcar checklist', planCta: 'Montar meu roteiro',
      start: 'Começar', planResult: 'Roteiro de consulta sugerido', generated: 'Este roteiro não avalia elegibilidade e não representa inscrição.',
      contactTitle: 'Fale com a equipe responsável', contactText: 'Antes de tomar decisões, confirme prazos, elegibilidade, vagas, valores e documentos com a DRI.',
      dateText: 'Ano da fonte', selectedProgram: 'Modalidade', selectedCountry: 'Destino de interesse', selectedCourse: 'Área acadêmica',
      print: 'Imprimir roteiro', student: 'Graduação', post: 'Pós-graduação', eng: 'Engenharia/Tecnologia',
      health: 'Saúde', law: 'Direito', other: 'Outras áreas',
      missing: 'Página não encontrada', missingDesc: 'A rota solicitada não faz parte desta versão do protótipo.',
      error: 'Não há informações suficientes para confirmar o destino selecionado.'
    },
    en: {
      home: 'Back to home', cap: 'INTERACTIVE EXPERIENCE', title: 'Internationalization center',
      subtitle: 'Explore guidance and prepare your questions without leaving the application. Official links appear in context.',
      programs: 'Programs', news: 'News', universities: 'Universities', documents: 'Documentation', faculty: 'Faculty',
      incoming: 'International students', guides: 'Guides', planning: 'My journey', contacts: 'Contact',
      source: 'Institutional source', external: 'Open official document or page ↗', updated: 'Document research: November 2026',
      disclaimer: 'Independent academic prototype. The guidance is not an official call, proof of available places, or institutional approval.',
      details: 'View details', back: 'Back', next: 'Next steps', faq: 'Frequently asked questions',
      find: 'Search university or country', allCountries: 'All countries', allCourses: 'All fields',
      results: 'reference results', noResults: 'No results for these filters. Try another search.',
      examples: 'A curated reference sample — not an exhaustive catalog or open-place listing.',
      applies: 'Related field', history: 'Institutional reference; current availability not confirmed.',
      modal: 'Institution details', about: 'What to check', sources: 'Where to confirm',
      records: 'Lists by course', formHint: 'Browse official lists by degree (2024–2025 editions).',
      searchGuides: 'Search a subject', openGuide: 'Read full guidance',
      noEnroll: 'Applications and selection take place through officially announced channels only.',
      docProgress: 'Guidance checklist', docsNote: 'Check items only to organize your reading. No data is submitted or saved.',
      reset: 'Clear checklist', planCta: 'Build my route',
      start: 'Start', planResult: 'Suggested consultation route', generated: 'This does not determine eligibility or submit an application.',
      contactTitle: 'Contact the responsible team', contactText: 'Confirm dates, eligibility, places, costs and documents with DRI before making decisions.',
      dateText: 'Source year', selectedProgram: 'Program type', selectedCountry: 'Destination of interest', selectedCourse: 'Academic field',
      print: 'Print route', student: 'Undergraduate', post: 'Postgraduate', eng: 'Engineering/Technology',
      health: 'Health sciences', law: 'Law', other: 'Other fields',
      missing: 'Page not found', missingDesc: 'The requested route is not part of this prototype version.',
      error: 'Insufficient information to confirm the selected destination.'
    }
  };


  // A interface está localizada. Documentos acadêmicos externos seguem no idioma original.
  i18n.es=Object.assign({},i18n.en,{
    home:'Volver al inicio',cap:'EXPERIENCIA INTERACTIVA',title:'Centro de internacionalización',
    subtitle:'Explore orientaciones y prepare sus dudas sin salir del portal. Los enlaces oficiales aparecen en su contexto.',
    programs:'Programas',news:'Noticias',universities:'Universidades',documents:'Documentación',faculty:'Docentes',
    incoming:'Estudiantes internacionales',guides:'Orientaciones',planning:'Mi recorrido',contacts:'Contacto',
    source:'Fuente institucional',external:'Abrir documento o página oficial ↗',updated:'Fuentes consultadas en noviembre de 2026',
    disclaimer:'Prototipo académico independiente. Estas orientaciones no son convocatorias, garantías de plazas ni aprobación institucional.',
    details:'Ver detalles',back:'Volver',next:'Próximos pasos',faq:'Preguntas frecuentes',
    find:'Buscar universidad o país',allCountries:'Todos los países',allCourses:'Todas las áreas',
    results:'resultados de referencia',noResults:'No hay resultados con estos filtros. Pruebe otra búsqueda.',
    examples:'Muestra de referencias documentadas; no es un catálogo completo ni un listado de plazas abiertas.',
    applies:'Área relacionada',history:'Registro institucional; disponibilidad actual no confirmada.',
    modal:'Detalles de la institución',about:'Qué consultar',sources:'Dónde confirmar',
    records:'Listas por carrera',formHint:'Consulte la lista oficial de su carrera (ediciones 2024–2025).',
    searchGuides:'Buscar un tema',openGuide:'Leer la orientación completa',
    noEnroll:'Las solicitudes y aprobaciones se realizan únicamente por los canales oficiales.',
    docProgress:'Lista de preparación',docsNote:'Marque solo para organizar su lectura. No se envían datos.',
    reset:'Desmarcar lista',planCta:'Preparar mi recorrido',
    start:'Comenzar',planResult:'Recorrido de consulta sugerido',generated:'Este recorrido no evalúa la elegibilidad ni representa una solicitud.',
    contactTitle:'Comuníquese con el equipo responsable',contactText:'Confirme fechas, requisitos, plazas, costos y documentos con la DRI antes de tomar decisiones.',
    dateText:'Año de la fuente',selectedProgram:'Modalidad',selectedCountry:'País de interés',selectedCourse:'Área académica',
    print:'Imprimir recorrido',student:'Grado',post:'Posgrado',eng:'Ingeniería/Tecnología',
    health:'Salud',law:'Derecho',other:'Otras áreas',
    missing:'Página no encontrada',missingDesc:'La dirección solicitada no forma parte de esta versión del prototipo.',
    error:'No hay información suficiente para confirmar el destino.'
  });
  const SpanishTerms={
    'Intercâmbio e mobilidade':'Intercambio y movilidad',
    'Documentos e vistos':'Documentos y visados',
    'Vida acadêmica':'Vida académica',
    'Custos e hospedagem':'Costos y alojamiento',
    'Apoio e contatos':'Apoyo y contactos',

    'Intercâmbio acadêmico':'Intercambio académico',
    'Dupla titulação':'Doble titulación',
    'Universidades e convênios':'Universidades y convenios',
    'Modalidades de intercâmbio':'Modalidades de intercambio',
    'Preparação para a mobilidade':'Preparación para la movilidad',
    'Apoio ao estudante · DRI':'Apoyo al estudiante · DRI',
    'Apoio ao estudante':'Apoyo al estudiante',
    'Canais de atendimento':'Canales de atención',
    'Secretaria Acadêmica':'Secretaría Académica',
    'Portal da universidade':'Portal de la universidad',
    'Como funciona':'Cómo funciona',
    'Minha jornada':'Mi recorrido',
    'Portais estrangeiros':'Portales extranjeros',
    'Conhecer universidade':'Conocer universidad',
    'Ver universidades':'Ver universidades',
    'Consultar documentos':'Consultar documentos',
    'Ver programas':'Ver programas',
    'Voltar':'Volver',
    'Fontes oficiais':'Fuentes oficiales',
    'Documentação':'Documentación',
    'Documentos':'Documentos',
    'Universidades':'Universidades',
    'Programas':'Programas',
    'Orientações':'Orientaciones',
    'Docentes':'Docentes',
    'Internacionais':'Internacionales',
    'Notícias':'Noticias',
    'Contatos':'Contactos',
    'Contato':'Contacto',
    'Etapas do processo':'Etapas del proceso',
    'Ver detalhes':'Ver detalles',
    'Próximos passos':'Próximos pasos',
    'Área acadêmica':'Área académica',
    'Todos os países':'Todos los países',
    'Todos os cursos':'Todas las carreras',
    'Educação e oportunidades':'Educación y oportunidades',
    'Todos':'Todos',
    'Busque uma instituição':'Busque una institución',
    'Pesquisar':'Buscar',
    'Espanha':'España',
    'Alemanha':'Alemania',
    'Países Baixos':'Países Bajos',
    'Estados Unidos':'Estados Unidos',
    'França':'Francia',
    'México':'México',
    'Canadá':'Canadá',
    'Portugal':'Portugal',
    'Argentina':'Argentina'
  };

  // Pesquisa 26/11/2026: portais oficiais dos destinos e da orientação EducationUSA.
  // A vinculação institucional não demonstra vagas, elegibilidade ou abertura de candidatura.
  const verifiedDestinations = [
    {
      id:'porto', name:'Universidade do Porto', country:'Portugal', flag:'🇵🇹',
      tag:L('Universidade conveniada de referência','Institutional partnership reference'),
      summary:L('Entenda a mobilidade IN na U.Porto, as etapas de candidatura online e o que acontece antes da carta de aceitação.','Explore incoming mobility, online procedures and acceptance requirements at U.Porto.'),
      origin:'https://unifor.br/dri/convenios',
      process:'https://www.up.pt/portal/en/study/mobility/study-at-uporto/',
      extra:'https://international.up.pt/international_mobility_application',
      steps:L([
        'Na Unifor, consulte a DRI e confirme se seu curso e semestre participam do acordo.',
        'Converse com a coordenação sobre disciplinas e aproveitamento curricular.',
        'Se houver indicação e seleção institucional, examine as etapas do portal de mobilidade da U.Porto.',
        'A candidatura à instituição de destino ocorre pelo canal próprio e conforme instruções específicas.',
        'A aceitação só é formal após a carta emitida pela universidade de destino.'
      ],[
        'Ask DRI about the active agreement and program eligibility.',
        'Check credit recognition with your coordinator.',
        'If nominated, read U.Porto incoming procedures.',
        'Apply through the destination institution only as instructed.',
        'Acceptance is formal only after the university issues its acceptance letter.'
      ]),
      note:L('O link de candidatura da U.Porto não substitui a seleção e a eventual nomeação feitas pela universidade de origem.','The U.Porto application link does not replace your home university selection and nomination.'),
      subjects:L(['Mobilidade IN','Candidatura online','Carta de aceitação'],['Incoming mobility','Online application','Acceptance letter'])
    },
    {
      id:'salamanca', name:'Universidad de Salamanca', country:'Espanha', flag:'🇪🇸',
      tag:L('Universidade conveniada de referência','Institutional partnership reference'),
      summary:L('Conheça o serviço de relações internacionais, orientações a estudantes estrangeiros e informações acadêmicas.','Explore international relations, guidance for incoming students and academic procedures.'),
      origin:'https://unifor.br/dri/convenios',
      process:'https://internacional.usal.es/movilidad-in/',
      extra:'https://internacional.usal.es/estudiantes-in/',
      steps:L([
        'Verifique junto à DRI se a mobilidade para Salamanca está contemplada no edital e no seu curso.',
        'Confirme com sua coordenação o plano de estudos e reconhecimento de créditos.',
        'Leia o programa de mobilidade IN da Universidad de Salamanca.',
        'Após orientação institucional, consulte os documentos, coordenador internacional e instruções aos visitantes.',
        'Verifique requisitos de seguro, matrícula e chegada conforme o canal oficial.'
      ],[
        'Confirm the call and eligibility with DRI.',
        'Discuss classes and credit recognition.',
        'Read University of Salamanca incoming mobility instructions.',
        'Follow the host institution guidance and coordinator directions.',
        'Check insurance and arrival procedures at the official source.'
      ]),
      note:L('A página da universidade explica procedimentos para visitantes; não comprova vaga disponível para alunos da Unifor.','The host page explains incoming procedures but does not confirm available places for UNIFOR students.'),
      subjects:L(['Mobilidade IN','Coordenador internacional','Documentos'],['Incoming mobility','International coordinator','Documents'])
    },
    {
      id:'cuyo', name:'Universidad Nacional de Cuyo', country:'Argentina', flag:'🇦🇷',
      tag:L('Universidade conveniada de referência','Institutional partnership reference'),
      summary:L('Consulte como funciona a mobilidade bilateral em Mendoza e a orientação para estudantes estrangeiros.','Read about bilateral mobility in Mendoza and incoming student procedures.'),
      origin:'https://unifor.br/dri/convenios',
      process:'https://www.uncuyo.edu.ar/relacionesinternacionales/estudiantes/estudiantes-de-intercambio-en-mendoza',
      extra:'https://www.uncuyo.edu.ar/international-students',
      steps:L([
        'Consulte a DRI e confirme se há acordo de intercâmbio vigente e vagas para seu perfil.',
        'Pesquise as unidades acadêmicas e a compatibilidade das disciplinas.',
        'Leia o regulamento de estudantes estrangeiros da UNCuyo.',
        'Para mobilidade por convênio bilateral, siga o encaminhamento e a nomeação oficial da instituição de origem.',
        'Confira orientações migratórias, prazos e acolhimento na universidade anfitriã.'
      ],[
        'Check active partnership, eligibility and places with DRI.',
        'Review academic compatibility and departments.',
        'Read UNCuyo international student guidance.',
        'Follow the official nomination process for bilateral mobility.',
        'Check immigration, deadlines and orientation details.'
      ]),
      note:L('A UNCuyo orienta que estudantes de convênio bilateral sejam indicados oficialmente pela universidade de origem.','UNCuyo instructs bilateral agreement students to be nominated by their home institution.'),
      subjects:L(['Convênio bilateral','Indicação institucional','Mobilidade em Mendoza'],['Bilateral agreement','Home nomination','Study in Mendoza'])
    }
  ];

  // Referências documentadas no site institucional da Unifor e canais da anfitriã.
  // Evitar usar as páginas de candidatura diretamente antes da seleção de origem.
  const destinationReferences2026 = [
  {
    "id": "minho",
    "name": "Universidade do Minho",
    "country": "Portugal",
    "flag": "🇵🇹",
    "field": "tecnologia",
    "city": "Braga e Guimarães",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://alunos.uminho.pt/EN/incomingstudents/Pages/ProcedimentosCandidaturas.aspx",
    "extra": "https://www.uminho.pt/EN/education/support-for-students/international-relations-services/Incoming/Pages/Procedimentos-de-candidatura.aspx",
    "focus": "candidatura, indicação e aceitação pela instituição",
    "detail": "O processo de mobilidade incoming inclui instruções para a universidade de origem e avaliação pela coordenação. A aceitação é comunicada oficialmente.",
    "fieldLabel": "Tecnologia e engenharias"
  },
  {
    "id": "aveiro",
    "name": "Universidade de Aveiro",
    "country": "Portugal",
    "flag": "🇵🇹",
    "field": "tecnologia",
    "city": "Aveiro",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://www.ua.pt/pt/divisaointernacional/durante-mobilidade-incoming",
    "extra": "https://forms.ua.pt/index.php?lang=en&r=survey%2Findex&sid=952522",
    "focus": "orientações para incoming e contrato de estudos",
    "detail": "A instituição organiza a chegada e a execução da mobilidade acadêmica; alterações ao plano de estudos passam pela aprovação das coordenações.",
    "fieldLabel": "Tecnologia e engenharias"
  },
  {
    "id": "braganca",
    "name": "Instituto Politécnico de Bragança",
    "country": "Portugal",
    "flag": "🇵🇹",
    "field": "tecnologia",
    "city": "Bragança",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://portalold.ipb.pt/index.php/en/gri/mobility-from-non-european-heis",
    "extra": "https://atlas.ipb.pt/pt/internacionalizar/erasmus/mobilidade-estudantes",
    "focus": "documentação e intercâmbio de instituições não europeias",
    "detail": "O IPB informa quais documentos podem ser exigidos após seleção pela instituição de origem. O portal de Erasmus apresenta outras modalidades e não assegura o mesmo regime.",
    "fieldLabel": "Tecnologia e engenharias"
  },
  {
    "id": "deggendorf",
    "name": "Deggendorf Institute of Technology",
    "country": "Alemanha",
    "flag": "🇩🇪",
    "field": "tecnologia",
    "city": "Deggendorf",
    "origin": "https://www.unifor.br/web/graduacao/ciencias-economicas",
    "process": "https://www.th-deg.de/en/Internationales",
    "extra": "https://www.th-deg.de/studying-in-english",
    "focus": "programas de intercâmbio internacionais e disciplinas em inglês",
    "detail": "A instituição descreve opções de intercâmbio em áreas como negócios e tecnologia, além de oferta de disciplinas em inglês. A relação de dupla titulação ou intercâmbio depende do curso na Unifor.",
    "fieldLabel": "Negócios e tecnologia"
  },
  {
    "id": "hwr-berlin",
    "name": "Berlin School of Economics and Law (HWR Berlin)",
    "country": "Alemanha",
    "flag": "🇩🇪",
    "field": "gestao",
    "city": "Berlim",
    "origin": "https://www.unifor.br/web/graduacao/administracao",
    "process": "https://www.hwr-berlin.de/en/study/international-study/exchange-students-at-the-hwr-berlin/",
    "extra": "https://www.hwr-berlin.de/en/study/international-study/exchange-students-at-the-hwr-berlin/organizing-your-studies-at-department-1",
    "focus": "intercâmbio, Business & Economics e organização de disciplinas",
    "detail": "A HWR Berlin orienta estudantes intercambistas por departamentos e informa como organizar o semestre. A Unifor também menciona modalidades acadêmicas específicas em Administração.",
    "fieldLabel": "Administração e negócios"
  },
  {
    "id": "oviedo",
    "name": "Universidad de Oviedo",
    "country": "Espanha",
    "flag": "🇪🇸",
    "field": "geral",
    "city": "Oviedo",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://biologia.uniovi.es/es/movilidades-de-convenios",
    "extra": "https://sede.uniovi.es/web/facultad-de-filosof%C3%ADa-y-letras/convenios-internacionales",
    "focus": "convênios internacionais e serviços de mobilidade",
    "detail": "A universidade descreve modalidades de mobilidade internacional em páginas de suas faculdades. Antes de consultar requisitos, confirme a unidade acadêmica e o edital correspondente.",
    "fieldLabel": "Áreas acadêmicas diversas"
  },
  {
    "id": "rotterdam",
    "name": "Rotterdam University of Applied Sciences",
    "country": "Países Baixos",
    "flag": "🇳🇱",
    "field": "tecnologia",
    "city": "Roterdã",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://www.rotterdamuas.com/study-information/faq-exchange/incoming-exchange-students/application-process/",
    "extra": "https://www.rotterdamuas.com/study-information/enrolment/application-procedures/default-content/exchange-programme-application-procedure/",
    "focus": "candidatura de intercâmbio e reconhecimento acadêmico",
    "detail": "O Centre of International Affairs descreve candidatura, confirmação de aceitação e procedimentos de matrícula. Os acordos de disciplinas devem ser alinhados com os coordenadores.",
    "fieldLabel": "Tecnologia e projetos aplicados"
  },
  {
    "id": "imt-albi",
    "name": "IMT Mines Albi",
    "country": "França",
    "flag": "🇫🇷",
    "field": "tecnologia",
    "city": "Albi",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://www.imt-mines-albi.fr/en/join-general-engineering-program-bac-3-or-bac-4-international-partner-school",
    "extra": "https://www.imt-mines-albi.fr/en/joining-a-training-course/how-can-i-join-imt-mines-albi-engineering-school",
    "focus": "mobilidade em engenharia e indicação pela instituição parceira",
    "detail": "A IMT Mines Albi publica procedimentos próprios de intercâmbio e dupla titulação para estudantes de instituições parceiras, com necessidade de indicação oficial.",
    "fieldLabel": "Engenharias"
  },
  {
    "id": "sonora",
    "name": "Universidad de Sonora",
    "country": "México",
    "flag": "🇲🇽",
    "field": "geral",
    "city": "Hermosillo",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://movilidad.unison.mx/estudiante-entrante/",
    "extra": "https://movilidad.unison.mx/international-incoming-students/",
    "focus": "indicação institucional e portal de mobilidade entrante",
    "detail": "A Universidad de Sonora orienta que candidatos sejam indicados pela instituição de origem no portal específico de mobilidade. Não é inscrição livre para qualquer interessado.",
    "fieldLabel": "Áreas acadêmicas diversas"
  },
  {
    "id": "pucp",
    "name": "Pontificia Universidad Católica del Perú",
    "country": "Peru",
    "flag": "🇵🇪",
    "field": "geral",
    "city": "Lima",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://internacional.pucp.edu.pe/estudiantes-internacionales-2/estudia-en-la-pucp/",
    "extra": "https://internacional.pucp.edu.pe/estudiantes-internacionales-2/tramites/",
    "focus": "nomeação, estudos e documentação para visitantes",
    "detail": "Para intercâmbio, a PUCP explica que a instituição de origem realiza a nomeação e disponibiliza procedimentos para estudantes internacionais.",
    "fieldLabel": "Áreas acadêmicas diversas"
  },
  {
    "id": "uniandes",
    "name": "Universidad de los Andes",
    "country": "Colômbia",
    "flag": "🇨🇴",
    "field": "gestao",
    "city": "Bogotá",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://www.uniandes.edu.co/internacionalizacion/en/node/114761",
    "extra": "https://www.uniandes.edu.co/internacionalizacion/es/socios",
    "focus": "intercâmbio semestral e programas acadêmicos para visitantes",
    "detail": "A Uniandes publica informações sobre mobilidade entrante e atividades acadêmicas internacionais, com regras que variam conforme a modalidade e a faculdade.",
    "fieldLabel": "Administração e áreas diversas"
  },
  {
    "id": "concordia",
    "name": "Concordia University",
    "country": "Canadá",
    "flag": "🇨🇦",
    "field": "geral",
    "city": "Montréal",
    "origin": "https://unifor.br/web/guest/-/quer-ser-um-cidadao-global-saiba-mais-sobre-as-parcerias-internacionais-da-unifor",
    "process": "https://www.concordia.ca/international/students-from-abroad/inbound-exchange.html",
    "extra": "https://www.concordia.ca/international/students-from-abroad/inbound-exchange/apply.html",
    "focus": "intercâmbio incoming ou visitante pagante",
    "detail": "A Concordia diferencia intercâmbio por universidade parceira de visitante internacional com pagamento de taxas. A menção da Unifor é histórica e não confirma que o acordo esteja vigente.",
    "fieldLabel": "Áreas acadêmicas diversas",
    "historical": true
  },
  {
    "id": "appstate",
    "name": "Appalachian State University",
    "country": "Estados Unidos",
    "flag": "🇺🇸",
    "field": "geral",
    "city": "Boone, Carolina do Norte",
    "origin": "https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema",
    "process": "https://international.appstate.edu/incoming-exchange-students",
    "extra": "https://international.appstate.edu/international-students/orientation-and-pre-arrival",
    "focus": "intercâmbio, contato com a instituição de origem e orientação na chegada",
    "detail": "A Appalachian State orienta estudantes de intercâmbio a procurar inicialmente o escritório internacional da universidade de origem e disponibiliza informações sobre chegada.",
    "fieldLabel": "Áreas acadêmicas diversas"
  }
];
  verifiedDestinations.push(...destinationReferences2026.map(d => ({
    id:d.id, name:d.name, country:d.country, flag:d.flag, field:d.field,
    city:d.city, focus:d.focus, fieldLabel:d.fieldLabel, historical:!!d.historical,
    origin:d.origin, process:d.process, extra:d.extra,
    summary:L(d.name+' — '+d.detail, d.name+' — '+d.focus+'. Verify the current agreement and eligibility with UNIFOR.'),
    subjects:L([d.fieldLabel,d.focus], [d.fieldLabel,d.focus]),
    steps:L([
      'Consulte a referência institucional da Unifor e confirme com a DRI se há acordo ativo para seu curso.',
      'Verifique edital vigente, eventual indicação pela Unifor e a compatibilidade de disciplinas.',
      'Conheça o portal de '+d.name+' e pesquise as orientações de mobilidade: '+d.focus+'.',
      d.detail,
      'Confirme a candidatura, documentos e aceitação apenas pelos canais oficiais da instituição anfitriã.'
    ],[
      'Check UNIFOR institutional reference and verify the partnership is active for your degree.',
      'Review the current call, nomination process and academic compatibility with DRI.',
      'Explore official incoming and international student instructions at '+d.name+'.',
      d.focus+'.',
      'Confirm application rules, documents and acceptance directly with the host institution.'
    ]),
    note:L((d.historical?'A menção da Unifor é histórica. ':'')+'A instituição aparece em referências institucionais, mas nenhuma vaga, convênio atual por curso ou candidatura está garantida.', 'Institutional reference only; current partnership, eligibility and places are not guaranteed.')
  })));
  // Mapa estável de áreas para o catálogo principal de universidades.
  verifiedDestinations.forEach(d=>{if(!d.field)d.field=d.id==='porto'?'tecnologia':'geral';});

  // Páginas institucionais: diferentes dos formulários de candidatura.
  const universityHomepages = {
    porto:'https://www.up.pt/',salamanca:'https://usal.es/',cuyo:'https://www.uncuyo.edu.ar/',
    minho:'https://www.uminho.pt/',aveiro:'https://www.ua.pt/',braganca:'https://ipb.pt/',
    deggendorf:'https://www.th-deg.de/', 'hwr-berlin':'https://www.hwr-berlin.de/',
    oviedo:'https://www.uniovi.es/',rotterdam:'https://www.rotterdamuas.com/',
    'imt-albi':'https://www.imt-mines-albi.fr/en',sonora:'https://www.unison.mx/',
    pucp:'https://www.pucp.edu.pe/',uniandes:'https://uniandes.edu.co/',
    concordia:'https://www.concordia.ca/',appstate:'https://www.appstate.edu/'
  };
  const salamanaLinks = [
    { url:'https://internacional.usal.es/programas/marco-convenios/', pt:'Mobilidade por convênios e nomeação', en:'Mobility agreements and nominations' },
    { url:'https://estudiantesinternacionales.usal.es/', pt:'Portal para estudantes internacionais', en:'International students portal' },
    { url:'https://internacional.usal.es/contacto/', pt:'Contatos de Relações Internacionais', en:'International Relations contacts' }
  ];
  verifiedDestinations.forEach(d=>{
    d.homepage=universityHomepages[d.id] || null;
    d.extraSources=d.id==='salamanca'?salamanaLinks:[];
  });

  const externalWhitelist = new Set(
    verifiedDestinations.flatMap(d=>[d.origin,d.process,d.extra,d.homepage,...d.extraSources.map(s=>s.url)]).filter(Boolean)
      .concat(['https://educationusa.state.gov/your-5-steps-us-study'])
  );
  function verifiedExternal(url, label){
    if (typeof url !== 'string' || !url.startsWith('https://') || !externalWhitelist.has(url)) return '';
    const host = new URL(url).hostname;
    return '<a class="xp-resource-link" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer"><span class="xp-resource-link__text"><strong>'+esc(label)+'</strong><small>'+esc(host)+'</small></span><span aria-hidden="true">↗</span></a>';
  }
  function journeyOverview(){
    const stages=lang()!=='en'?[
      ['01','Descobrir','Conheça programas e escolha o objetivo.'],
      ['02','Comparar','Analise universidade e compatibilidade.'],
      ['03','Preparar','Verifique documentos, prazos e custos.'],
      ['04','Confirmar','Procure DRI e siga os canais oficiais.']
    ]:[
      ['01','Discover','Explore programs and define your goal.'],
      ['02','Compare','Check universities and academic fit.'],
      ['03','Prepare','Review documents, dates and expenses.'],
      ['04','Confirm','Talk to DRI and follow official channels.']
    ];
    return '<div class="xp-journey-panel"><div class="xp-journey-panel__intro"><span class="xp-eyebrow">'+(lang()!=='en'?'UM CAMINHO MAIS CLARO':'A CLEARER PATH')+'</span><h2>'+(lang()!=='en'?'Do primeiro interesse à candidatura':'From first interest to the application')+'</h2><p>'+(lang()!=='en'?'Não sabe por onde começar? Acompanhe as etapas e descubra o que você precisa confirmar em cada uma.':'Not sure where to begin? Follow these steps and discover what to verify.')+'</p>'+link('processo',lang()!=='en'?'Entender o processo completo':'Understand the full process','xp-btn--outline')+'</div><div class="xp-journey-steps">'+stages.map(x=>'<div class="xp-journey-step"><span>'+x[0]+'</span><strong>'+x[1]+'</strong><small>'+x[2]+'</small></div>').join('')+'</div></div>';
  }
  function processPage(){
    const all=lang()!=='en'?[
      ['Entenda suas opções','Veja a diferença entre intercâmbio acadêmico, dupla titulação e programas complementares.','programas'],
      ['Confira sua situação acadêmica','Verifique os requisitos do edital e a orientação da coordenação. Convênio não garante participação.','universidades'],
      ['Pesquise o destino','Abra a instituição no nosso portal, consulte o processo do parceiro e depois confirme a validade do vínculo.','destinos'],
      ['Prepare os documentos','Organize histórico, comprovação de idioma e outros itens solicitados no edital; o checklist é apenas orientativo.','documentos'],
      ['Planeje custos e viagem','Pesquise taxas, moradia, seguro, passaporte e questões consulares junto às autoridades competentes.','orientacoes'],
      ['Candidatura e aceitação','Primeiro siga o processo da Unifor, depois as instruções da universidade anfitriã se aplicáveis; aguarde a aceitação formal.','contatos']
    ]:[
      ['Explore your options','Understand exchange, dual degrees and other opportunities.','programas'],
      ['Check academic requirements','Review the call and speak to your coordinator. An agreement does not guarantee eligibility.','universidades'],
      ['Research destinations','Read the partner procedure, then confirm that the agreement is valid.','destinos'],
      ['Prepare documents','Review transcripts, language evidence and requirements from the relevant call.','documentos'],
      ['Plan your budget','Check fees, housing, insurance and visa matters with official authorities.','orientacoes'],
      ['Apply and obtain acceptance','Follow your home institution process first and the host requirements when appropriate.','contatos']
    ];
    return hero(lang()!=='en'?'Como funciona o intercâmbio, do começo ao fim':'How international mobility works, step by step',lang()!=='en'?'Um guia prático do que estudar, decidir e confirmar antes de se candidatar.':'A practical journey covering what to investigate and verify before applying.',lang()!=='en'?'GUIA DE PREPARAÇÃO':'PREPARATION GUIDE',link('planejar',S('planCta'),'xp-btn--gold'))+
      '<div class="xp-process-list">'+all.map((x,i)=>'<article class="xp-process-item"><span class="xp-process-number">'+String(i+1).padStart(2,'0')+'</span><div><h2>'+esc(x[0])+'</h2><p>'+esc(x[1])+'</p>'+link(x[2],S('details'))+'</div></article>').join('')+'</div>'+
      '<div class="xp-paper xp-process-last"><h2>'+(lang()!=='en'?'Antes de preencher qualquer inscrição':'Before completing any application')+'</h2><p>'+(lang()!=='en'?'Não envie documentos pessoais pelo protótipo. Informações aqui organizadas não substituem o edital, nem o processo seletivo institucional ou a carta de aceitação da universidade estrangeira.':'Do not submit personal documents through this prototype. This guide does not replace institutional calls or a host university acceptance letter.')+'</p>'+verifiedExternal(URLs.intercambio,lang()!=='en'?'Exemplo: notícia institucional sobre intercâmbio 2027.1':'Example: institutional exchange news')+'</div>'+note();
  }

  let destinationCountry='all', destinationField='all', destinationQuery='';
  function destinationFieldTitle(key){
    const tags={geral:L('Todas as áreas','General / all fields'),tecnologia:L('Tecnologia e engenharias','Technology and engineering'),gestao:L('Negócios e gestão','Business and management'),saude:L('Saúde','Health')};
    return tr(tags[key]||tags.geral);
  }

  function destinationInstitutionGuide(d){
    if(d.id!=='salamanca') return '<div class="xp-info-pair"><div><h3>'+(lang()!=='en'?'Sobre a universidade':'About the university')+'</h3><p>'+esc(d.city?d.name+' — '+d.city+', '+d.country+'.':d.name+', '+d.country+'.')+'</p><p>'+
       (lang()!=='en'?'Confira no site institucional os cursos, calendário, idiomas e serviços oferecidos aos estudantes internacionais.':'Visit the university website to examine degrees, academic calendar, languages and services for international students.')+
       '</p></div><div><h3>'+(lang()!=='en'?'O que é necessário confirmar':'What to verify')+'</h3>'+
       bullets(lang()!=='en'?['Vigência do convênio e modalidade para seu curso.','Edital, nomeação e critérios da instituição de origem.','Prazos, documentação, equivalência de disciplinas e custos.']:
       ['Agreement validity and eligibility for your degree.','Call, nomination and home university rules.','Deadlines, documents, credits and expenses.'])+'</div></div>';
    const stepsSal=lang()!=='en'?[
      ['1. Confirme a possibilidade de intercâmbio pela Unifor','Antes de qualquer candidatura, procure a DRI e a coordenação para conferir se existe mobilidade aplicável ao seu curso, semestre e modalidade.'],
      ['2. Entenda o programa de mobilidade da USAL','A área Movilidad IN reúne as opções de ingresso por programas internacionais. Na modalidade Marco de Convenios, a universidade de origem realiza a nomeação prévia.'],
      ['3. Prepare o plano de estudos com seu curso','Converse com a coordenação da Unifor sobre disciplinas, créditos e compatibilidade antes de assumir compromissos com matérias na Espanha.'],
      ['4. Siga a candidatura indicada após a nomeação','Somente quando aplicável, consulte as instruções recebidas da USAL para a solicitação eletrônica e documentação do programa, sem presumir que o formulário seja aberto a todos.'],
      ['5. Confira idioma, seguro, requisitos migratórios e moradia','Exigências variam por programa. Verifique os requisitos atuais com a USAL e autoridades competentes, sem usar editais de anos anteriores como regra vigente.'],
      ['6. Organize a chegada, matrícula e reconhecimento','A orientação da USAL recomenda contato com o coordenador internacional do centro para escolha de disciplinas, matrícula e documentos de chegada/saída.']
    ]:[
      ['1. Confirm your options with UNIFOR','Ask DRI and your degree coordinator about program-specific eligibility and available mobility opportunities.'],
      ['2. Understand USAL incoming mobility','Movilidad IN includes several international routes. The framework agreement route requires prior nomination by the home institution.'],
      ['3. Prepare an academic learning plan','Discuss subjects and credit recognition with your UNIFOR coordinator before choosing host classes.'],
      ['4. Follow host instructions after nomination','Only when eligible, follow the USAL electronic application instructions for your specific program.'],
      ['5. Review insurance, language and entry requirements','Verify current rules with USAL and relevant authorities rather than assuming archived calls are valid.'],
      ['6. Prepare enrollment and arrival','The international coordinator at the host center can guide course choices, registration, and arrival/departure documents.']
    ];
    return '<section class="xp-campus-feature"><div class="xp-campus-feature__heading"><span class="xp-eyebrow">UNIVERSIDAD DE SALAMANCA</span><h2>'+(lang()!=='en'?'Como funciona estudar em Salamanca?':'How does studying in Salamanca work?')+'</h2><p>'+
      (lang()!=='en'?'A USAL é uma universidade espanhola com diversos programas internacionais. Nem todas as opções de mobilidade usam o mesmo formulário, calendário ou conjunto de exigências.':
      'USAL is a Spanish university with several international mobility schemes. Different programs may have distinct application processes and requirements.')+'</p></div>'+
      '<ol class="xp-campus-timeline">'+stepsSal.map(([title,description],index)=>'<li><span class="xp-campus-index">'+String(index+1).padStart(2,'0')+'</span><div><h3>'+esc(title)+'</h3><p>'+esc(description)+'</p></div></li>').join('')+'</ol>'+
      '<p class="xp-campus-callout">'+(lang()!=='en'?'A lista da Unifor não confirma seleção, vaga ou convênio atual para qualquer curso. A USAL também mantém modalidades próprias, que não equivalem automaticamente ao intercâmbio da Unifor.':'An institutional listing does not confirm a current agreement or available place. Not all USAL programs apply to UNIFOR exchanges.')+'</p></section>';
  }
  function doubleDegreeGuide(){
    const pt=lang()==='pt';
    const examples=[
      ['Instituto Politécnico de Bragança','Portugal',pt?'Administração e Comércio Exterior':'Business Administration and International Trade','braganca'],
      ['Berlin School of Economics and Law','Alemanha',pt?'Administração e Comércio Exterior':'Business Administration and International Trade','hwr-berlin'],
      ['Deggendorf Institute of Technology','Alemanha',pt?'Ciências Econômicas e Comércio Exterior':'Economics and International Trade','deggendorf']
    ];
    const steps=pt?[
      'Confira se seu curso participa de uma modalidade de dupla titulação e qual instituição está prevista no edital.',
      'Leia o edital específico: exigência de período cursado, vínculo acadêmico, proficiência, passaporte, disciplinas e prazos podem variar.',
      'Consulte a Secretaria Acadêmica sobre o Requerimento 175 e os canais de inscrição definidos para aquela edição.',
      'Organize documentos, comprovantes e eventuais entrevistas conforme a seleção; não envie nada por este protótipo.',
      'Se selecionado, siga o planejamento curricular com as duas instituições e confirme custos, matrícula e reconhecimento.',
      'Conclua as etapas previstas no acordo; a obtenção de diplomas depende do cumprimento dos requisitos das duas instituições.'
    ]:[
      'Confirm whether your degree offers a double-degree program and which host institution is listed in the current call.',
      'Read the specific notice: academic progress, language proof, passport, courses and deadlines vary.',
      'Check the Academic Secretariat for Request 175 and the current application channel.',
      'Prepare official documents and assessments; this prototype does not accept applications.',
      'Once selected, follow the agreed study plan and confirm fees and course recognition.',
      'Complete the required conditions at both institutions; awards are not automatic.'
    ];
    return '<section class="xp-double-degree">'+sectionHeader(pt?'Dupla titulação não é um intercâmbio comum':'A dual degree is different from a standard exchange',
      pt?'Exemplos documentados pela Unifor, sujeitos à edição do edital e ao curso.':'Examples from UNIFOR publications, subject to the current call and degree.')+
      '<div class="xp-info-pair"><div><h3>'+(pt?'Intercâmbio acadêmico':'Academic exchange')+'</h3><p>'+
      (pt?'Você cursa um período no exterior e verifica o aproveitamento das disciplinas com a Unifor. O resultado principal é uma experiência curricular internacional.':'You study abroad and discuss credit recognition with your home university.')+'</p></div>'+
      '<div><h3>'+(pt?'Dupla titulação':'Dual degree')+'</h3><p>'+
      (pt?'Você cumpre uma trajetória específica definida por acordo de dupla titulação, podendo obter os títulos previstos ao satisfazer as exigências acadêmicas de ambas as instituições.':'You follow a specific academic pathway defined by a double-degree agreement, subject to the rules of both institutions.')+'</p></div></div>'+
      sectionHeader(pt?'Exemplos de instituições por curso':'Examples by degree','')+
      '<div class="xp-cards xp-cards--3">'+examples.map(e=>'<article class="xp-card xp-double-school"><span class="xp-eyebrow">'+e[1]+'</span><h3>'+e[0]+'</h3><p>'+e[2]+'</p>'+link('destinos/'+e[3],pt?'Conhecer instituição':'View institution')+'</article>').join('')+'</div>'+
      sectionHeader(pt?'Etapas para se preparar':'Preparation checklist','')+stepsFnForDouble(steps)+
      '<div class="xp-paper xp-double-official"><h3>'+(pt?'Onde consultar a inscrição e os critérios':'Where to check official requirements')+'</h3>'+
      '<p>'+(pt?'O Requerimento 175 está descrito na Secretaria Acadêmica. Os critérios completos devem ser conferidos no edital da edição, nunca presumidos a partir de uma notícia antiga.':'Request 175 is listed by the Academic Secretariat. Full requirements belong to each applicable call.')+'</p>'+
      out(URLs.secretaria,L('Secretaria Acadêmica — Requerimento 175','Academic Secretariat — Request 175'))+
      out('https://www.unifor.br/cesta-de-servicos/praticas-e-projetos-academicos',L('Dupla titulação por curso — Unifor','Dual degrees by degree — UNIFOR'))+
      out('https://unifor.br/-/conquiste-uma-carreira-global-com-as-oportunidades-de-internacionalizacao-da-unifor',L('Exemplo de notícia institucional de 2026','2026 institutional announcement example'))+
      link('documentos',pt?'Conferir documentação':'Review documents')+'</div></section>';
  }
  function stepsFnForDouble(items){return steps(items);}

  function destinationCard(d){
    return '<article class="xp-destination-card"><div class="xp-destination-card__top"><span class="xp-destination-flag" aria-hidden="true">'+d.flag+'</span>'+badge(d.country)+'</div>'+
      '<div class="xp-destination-card__meta">'+esc(d.city||'')+' · '+esc(destinationFieldTitle(d.field))+'</div>'+
      '<h3>'+esc(d.name)+'</h3><p>'+esc(tr(d.summary))+'</p>'+
      '<div class="xp-destination-tags">'+tr(d.subjects).slice(0,2).map(t=>badge(t)).join('')+'</div>'+
      (d.historical?'<p class="xp-destination-warning">'+(lang()!=='en'?'Referência histórica da Unifor.':'Historical UNIFOR reference.')+'</p>':'')+
      '<div class="xp-destination-actions">'+link('destinos/'+d.id,lang()!=='en'?'Informações e portais':'Information and portals')+
      verifiedExternal(d.process,lang()!=='en'?'Portal oficial da universidade':'Official host portal')+'</div></article>';
  }
  function destinationFilters(){
    const countries=[...new Set(verifiedDestinations.map(d=>d.country))].sort((a,b)=>a.localeCompare(b,lang()!=='en'?'pt-BR':'en'));
    const opts=countries.map(c=>'<option value="'+esc(c)+'"'+(destinationCountry===c?' selected':'')+'>'+esc(c)+'</option>').join('');
    const fields=['tecnologia','gestao','geral'];
    return '<form class="xp-destination-filters" role="search" id="xpDestinationForm">'+
      '<label>'+(lang()!=='en'?'Buscar universidade ou cidade':'Find a university or city')+
      '<input id="xpDestinationQuery" type="search" autocomplete="off" value="'+esc(destinationQuery)+'" placeholder="'+(lang()!=='en'?'Ex.: Portugal, engenharia, Montréal':'e.g., Portugal, engineering, Montréal')+'"></label>'+
      '<label>'+(lang()!=='en'?'País':'Country')+'<select id="xpDestinationCountry"><option value="all">'+esc(S('allCountries'))+'</option>'+opts+'</select></label>'+
      '<label>'+(lang()!=='en'?'Área de interesse':'Field of interest')+'<select id="xpDestinationField"><option value="all">'+esc(S('allCourses'))+'</option>'+fields.map(f=>'<option value="'+f+'"'+(destinationField===f?' selected':'')+'>'+esc(destinationFieldTitle(f))+'</option>').join('')+'</select></label>'+
      '<button type="button" id="xpDestinationReset" class="xp-btn xp-btn--outline">'+(lang()!=='en'?'Limpar filtros':'Clear filters')+'</button></form>';
  }
  function paintDestinationResults(){
    const node=root.querySelector('#xpDestinationResults');if(!node)return;
    const rows=verifiedDestinations.filter(d=>
      (destinationCountry==='all'||d.country===destinationCountry)&&
      (destinationField==='all'||d.field===destinationField)&&
      norm([d.name,d.country,d.city,d.fieldLabel,d.focus,tr(d.summary)].join(' ')).includes(norm(destinationQuery))
    );
    node.innerHTML='<p class="xp-results-count" role="status">'+rows.length+' '+(lang()!=='en'?'instituições de referência encontradas':'reference institutions found')+'</p>'+
      (rows.length?'<div class="xp-cards xp-cards--3">'+rows.map(destinationCard).join('')+'</div>':
      '<div class="xp-empty">'+(lang()!=='en'?'Nenhuma instituição corresponde à pesquisa. Limpe os filtros ou tente outra expressão.':'No institution matches these filters. Clear filters or try another search.')+'</div>');
  }
  function destinationsPage(id){
    const d=verifiedDestinations.find(x=>x.id===id);
    if(d){
      return hero(d.name,tr(d.summary),d.flag+' '+d.country,link('destinos',S('back'),'xp-btn--gold'))+
        '<div class="xp-destination-profile"><span>'+esc(d.city||d.country)+'</span><span>'+esc(destinationFieldTitle(d.field))+'</span><span>'+(lang()!=='en'?'Pesquisa documental: novembro de 2026':'Document review: November 2026')+'</span></div>'+
        '<div class="xp-two"><article class="xp-paper xp-maincol">'+
        sectionHeader(lang()!=='en'?'O que você precisa saber':'What you need to know','')+
        '<p class="xp-lead">'+esc(d.focus||'')+'</p>'+
        destinationInstitutionGuide(d)+
        (d.id==='salamanca'?'':sectionHeader(lang()!=='en'?'Passo a passo de consulta':'Suggested research steps','')+steps(tr(d.steps)))+
        '<div class="xp-disclaimer xp-disclaimer--soft"><span>ⓘ</span><p>'+esc(tr(d.note))+'</p></div>'+
        '<div class="xp-source-journey"><span>1 · Unifor / DRI</span><span aria-hidden="true">→</span><span>2 · '+esc(d.name)+'</span><span aria-hidden="true">→</span><span>3 · '+(lang()!=='en'?'Aceitação formal':'Formal acceptance')+'</span></div></article>'+
        '<aside class="xp-aside"><div class="xp-sidebar-card"><h3>'+(lang()!=='en'?'Portais e informações oficiais':'Official portals and resources')+'</h3><p>'+(lang()!=='en'?'A referência da Unifor e os serviços da universidade de destino têm finalidades diferentes. Confirme o processo aplicável.':'UNIFOR listings and host university portals serve different purposes. Confirm the applicable procedure.')+'</p>'+
        verifiedExternal(d.homepage,lang()!=='en'?'Conhecer a universidade — site institucional':'Visit university website')+
        verifiedExternal(d.origin,lang()!=='en'?'Onde a Unifor cita esta instituição':'UNIFOR institutional reference')+
        verifiedExternal(d.process,lang()!=='en'?'Portal de mobilidade / informação do destino':'Host university mobility portal')+
        verifiedExternal(d.extra,lang()!=='en'?'Serviços, orientações ou formulários oficiais':'Official services, forms or guidance')+
        (d.extraSources||[]).map(item=>verifiedExternal(item.url,lang()!=='en'?item.pt:item.en)).join('')+
        '<small>'+esc(S('history'))+'</small></div>'+
        '<div class="xp-sidebar-card"><h3>'+esc(S('next'))+'</h3>'+link('documentos',S('documents'))+link('processo',lang()!=='en'?'Etapas do processo':'Process steps')+link('contatos',S('contacts'))+'</div></aside></div>'+note();
    }
    const totalCountries=new Set(verifiedDestinations.map(d=>d.country)).size;
    return hero(lang()!=='en'?'Universidades e portais internacionais':'Universities and international portals',
      lang()!=='en'?'Pesquise instituições citadas pela Unifor e conheça os serviços oficiais de cada destino, com orientação sobre como iniciar.':'Browse institutions listed in UNIFOR sources and explore their official services and study procedures.',
      lang()!=='en'?'CATÁLOGO DE REFERÊNCIAS':'REFERENCE DIRECTORY',link('processo',lang()!=='en'?'Entenda as etapas':'Understand the steps','xp-btn--gold'))+
      '<div class="xp-reference-overview"><div><strong>'+verifiedDestinations.length+'</strong><span>'+(lang()!=='en'?'universidades selecionadas':'selected institutions')+'</span></div><div><strong>'+totalCountries+'</strong><span>'+(lang()!=='en'?'países representados':'countries represented')+'</span></div><p>'+(lang()!=='en'?'Listagem orientativa, não é o número total de convênios ativos da Unifor.':'Illustrative list, not the total number of currently active UNIFOR agreements.')+'</p></div>'+
      '<div class="xp-disclaimer xp-disclaimer--soft"><span>ⓘ</span><p>'+
      (lang()!=='en'?'As referências vêm de páginas institucionais ou notícias da Unifor. A oferta de intercâmbio depende do curso, de acordo vigente, de editais e de eventual nomeação.':'References come from UNIFOR listings or institutional news. Mobility depends on academic area, active agreements, calls and any required nomination.')+
      '</p></div>'+destinationFilters()+'<div id="xpDestinationResults" aria-live="polite"></div>'+
      '<div class="xp-paper xp-education"><div><span class="xp-eyebrow">EDUCATIONUSA</span><h2>'+
      (lang()!=='en'?'Vai pesquisar instituições nos Estados Unidos?':'Considering the United States?')+
      '</h2><p>'+(lang()!=='en'?'A orientação EducationUSA tem cinco etapas para o estudo no país, mas não equivale a convênio nem candidatura pela Unifor.':'EducationUSA offers five study preparation steps, not a UNIFOR partnership or application.')+
      '</p></div>'+verifiedExternal('https://educationusa.state.gov/your-5-steps-us-study',lang()!=='en'?'Consultar EducaçãoUSA':'Visit EducationUSA')+'</div>'+note();
  }

  const programs = [
    {
      id: 'intercambio', icon: '✈', label: L('Intercâmbio acadêmico', 'Academic exchange'),
      tagline: L('Estude parte do seu curso em uma instituição parceira.', 'Study part of your degree at a partner institution.'),
      intro: L('A mobilidade acadêmica permite realizar atividades em uma instituição estrangeira e planejar, com sua coordenação, o aproveitamento acadêmico ao retornar. Editais e regras podem variar a cada semestre.', 'Academic mobility allows students to study at a foreign institution and coordinate credit recognition upon return. Calls and rules can change by semester.'),
      requirements: L(['Verificar edital vigente, modalidade e semestre de candidatura.', 'Conferir aproveitamento de disciplinas com a coordenação antes da viagem.', 'Checar requisitos de idioma e desempenho acadêmico indicados no edital.', 'Confirmar se o destino aceita estudantes do seu curso.'], ['Check the current call, program and application semester.', 'Confirm course credit recognition with your coordinator before traveling.', 'Check language and academic requirements in the official call.', 'Confirm the destination accepts students from your degree.']),
      steps: L(['Conheça a modalidade e confira os critérios oficiais.', 'Pesquise instituições e cursos compatíveis.', 'Organize histórico, documentos e proficiência conforme edital.', 'Confirme prazos e orientação com a DRI.'], ['Review the program and official criteria.', 'Search compatible institutions and courses.', 'Gather transcripts, documents and language evidence as required.', 'Confirm deadlines and guidance with DRI.']),
      faq: L([['Existe vaga garantida?', 'Não. A existência de convênio não significa vaga disponível; a seleção segue critérios e ofertas do período.'],['Posso escolher qualquer curso da universidade?', 'Não necessariamente. A compatibilidade acadêmica depende da instituição, do convênio e da coordenação.']], [['Is a place guaranteed?', 'No. An agreement does not guarantee availability; selection follows current rules.'], ['Can I take any courses?', 'Not necessarily. Academic compatibility depends on agreements and course approval.']]),
      links: [{url: URLs.aluno, title: L('Apoio ao estudante · DRI', 'DRI student support')},{url: URLs.intercambio, title: L('Notícia institucional sobre seleção 2027.1', 'Institutional article about the 2027.1 call')}]
    },
    {
      id: 'dupla-titulacao', icon: '🎓', label: L('Dupla titulação', 'Dual degree'),
      tagline: L('Conheça modalidades que podem envolver formação em duas instituições.', 'Explore programs that may involve studies at two institutions.'),
      intro: L('A dupla titulação depende de programas acadêmicos e acordos específicos. É importante verificar o curso participante, o percurso curricular, as exigências e os tipos de diploma previstos no acordo.', 'Dual degrees depend on specific academic programs and agreements. Verify eligible degrees, curricular requirements, admissions and the degree awarded.'),
      requirements: L(['Verificar se há programa de dupla titulação para seu curso.', 'Consultar matriz curricular, equivalências e condições de permanência.', 'Conferir documentação, idioma e possíveis taxas.', 'Confirmar processos e prazos junto à DRI e à coordenação.'], ['Verify a dual degree exists for your program.', 'Review curriculum, credit mapping and residence requirements.', 'Check documents, language and possible fees.', 'Confirm procedures and deadlines with DRI and your coordinator.']),
      steps: L(['Identifique o programa disponível.', 'Avalie as exigências acadêmicas e financeiras.', 'Converse com sua coordenação.', 'Siga o processo específico da instituição.'], ['Identify the available program.', 'Review academic and financial requirements.', 'Speak to your coordinator.', 'Follow the specific institutional process.']),
      faq: L([['É igual a um intercâmbio comum?', 'Não. Pode envolver requisitos curriculares e acadêmicos próprios definidos em um acordo específico.']], [['Is it the same as a regular exchange?', 'No. Specific agreements may require a different academic track.']]),
      links: [{url: URLs.aluno, title: L('Programas e orientações ao aluno', 'Student programs and guidance')}]
    },
    {
      id: 'buddy', icon: '🤝', label: L('Buddy Program', 'Buddy Program'),
      tagline: L('Integração de estudantes locais e internacionais.', 'Connections between local and incoming students.'),
      intro: L('Iniciativa de acolhimento e integração intercultural. A participação e os critérios dependem das chamadas divulgadas para cada edição.', 'A cultural integration initiative. Participation and criteria depend on the call for each edition.'),
      requirements: L(['Consultar a edição do programa vigente.', 'Verificar critérios e período de inscrição.', 'Conferir atividades previstas e formas de participação.'], ['Check the current edition.', 'Verify selection criteria and application period.', 'Review program activities and participation.']),
      steps: L(['Leia a apresentação do programa.', 'Verifique se existe chamada aberta.', 'Procure o canal institucional indicado.'], ['Read the program overview.', 'Check for an open call.', 'Contact the listed institutional channel.']),
      faq: L([['É necessário fazer intercâmbio para participar?', 'O Buddy Program é apresentado pela Unifor como atividade de integração. Consulte a chamada específica para saber quem pode participar.']], [['Must I study abroad to participate?', 'The program focuses on integration. Check the relevant call for participation criteria.']]),
      links: [{url: URLs.buddy, title: L('Chamada Buddy Program 2026.2 — referência histórica', 'Buddy Program 2026.2 announcement — archive')}]
    },
    {
      id: 'educationusa', icon: '🇺🇸', label: L('EducationUSA', 'EducationUSA'),
      tagline: L('Informações para quem pretende estudar nos Estados Unidos.', 'Resources for students considering the United States.'),
      intro: L('A iniciativa EducationUSA oferece orientação sobre oportunidades educacionais nos Estados Unidos. É um caminho de informação, não garantia de admissão, visto ou bolsa.', 'EducationUSA provides information about educational opportunities in the United States. Guidance does not guarantee admission, a visa or funding.'),
      requirements: L(['Definir objetivo acadêmico e etapa de formação.', 'Pesquisar instituições e tipos de programa.', 'Planejar documentação, idioma, custos e prazos.'], ['Define your academic goal.', 'Research institutions and programs.', 'Plan documents, language, costs and deadlines.']),
      steps: L(['Conheça os tipos de programa.', 'Organize perguntas sobre admissões.', 'Procure orientação do escritório responsável.'], ['Learn about types of programs.', 'List your admissions questions.', 'Seek official guidance.']),
      faq: L([['O serviço realiza minha inscrição?', 'O processo depende de cada instituição. Consulte diretamente os canais de orientação e admissão oficiais.']], [['Will it submit my application?', 'Each institution has its own admissions process. Use official advising and admissions channels.']]),
      links: [{url: URLs.edu, title: L('Educação internacional · DRI', 'International education · DRI')}]
    },
    {
      id: 'freemover', icon: '🧭', label: L('Free Mover / mobilidade independente', 'Free Mover / independent mobility'),
      tagline: L('Entenda como investigar modalidades sem convênio aplicável.', 'Explore mobility routes without an applicable agreement.'),
      intro: L('A DRI apresenta alternativas para estudantes internacionais de instituições sem convênio, sujeitas a análise, condições acadêmicas e possíveis taxas. Não presuma que a modalidade esteja disponível para todo perfil.', 'DRI describes alternatives for incoming students without an agreement, subject to academic review and possible fees. Availability is not guaranteed for every profile.'),
      requirements: L(['Confirmar com a DRI se a modalidade atende ao seu perfil.', 'Verificar disciplinas, idioma, cronograma e custos.', 'Consultar documentação da instituição de origem e de destino.'], ['Confirm if the route fits your situation.', 'Check courses, language, dates and fees.', 'Review documentation of both institutions.']),
      steps: L(['Explique seu perfil à equipe da DRI.', 'Solicite informações sobre condições e taxas.', 'Siga apenas orientações oficiais atualizadas.'], ['Describe your profile to DRI.', 'Ask about conditions and fees.', 'Follow current official guidance.']),
      faq: L([['A inscrição é gratuita?', 'As condições e eventuais taxas dependem do programa e devem ser confirmadas diretamente com a DRI.']], [['Is it free?', 'Conditions and potential fees depend on the program and must be confirmed with DRI.']]),
      links: [{url: URLs.aluno, title: L('Informações para estudantes visitantes', 'Incoming student information')}]
    }
  ];

  const news = [
    {
      id:'intercambio-2027', year:'2026', title:L('Seleção para intercâmbio acadêmico 2027.1','Academic exchange 2027.1 selection'),
      summary:L('Notícia institucional sobre a abertura do processo seletivo para o primeiro semestre de 2027. Os períodos e regras devem ser consultados no edital correspondente.','Institutional article about the selection process for the first term of 2027. Check the corresponding call for dates and rules.'),
      points:L(['O programa envolve a realização de atividades acadêmicas em instituições internacionais.', 'Cada edição divulga critérios, prazos e modalidades próprias.', 'A notícia é um registro de divulgação, não um formulário de candidatura.'],['The program involves academic activities at international institutions.','Every call has its own requirements and deadlines.','This news item is a record, not an application form.']),
      source:URLs.intercambio
    },
    {
      id:'buddy-2026',year:'2026',title:L('Buddy Program 2026.2: integração intercultural','Buddy Program 2026.2: cultural integration'),
      summary:L('Divulgação da edição 2026.2 do programa de integração entre estudantes locais e internacionais. Edição histórica, não é uma inscrição aberta.','An institutional announcement of the 2026.2 edition connecting local and international students. It is an archive, not an open application.'),
      points:L(['A proposta envolve acolhimento e integração no campus.', 'Os critérios de participação variam conforme a edição.', 'Verifique novas chamadas nos canais da Unifor.'],['The initiative focuses on integration on campus.','Participation rules vary by edition.','Check UNIFOR channels for future calls.']),
      source:URLs.buddy
    },
    {
      id:'convenios',year:'2024',title:L('Ampliação de convênios internacionais','Expansion of international agreements'),
      summary:L('Matéria institucional sobre novas parcerias com instituições em países como Alemanha, Argentina, Estados Unidos, França, Polônia e Portugal.','Institutional article about partnerships in countries including Germany, Argentina, the United States, France, Poland and Portugal.'),
      points:L(['Acordos ampliam possibilidades de cooperação.', 'A existência de convênio não assegura vagas.', 'Consulte a lista atual da DRI para conferir a vigência e o escopo.'],['Agreements create opportunities for collaboration.','An agreement does not guarantee a place.','Consult DRI to check the current scope and validity.']),
      source:URLs.noticia
    }
  ];
  const universities = [
    { id: 'porto-engenharia', country: 'Portugal', flag:'🇵🇹', name:'Faculdade de Engenharia da Universidade do Porto', field:'tecnologia', label:L('Engenharia / Tecnologia','Engineering / Technology'), context:L('Instituição citada em informações institucionais vinculadas a cursos da Unifor. Consulte a lista do seu curso para confirmar elegibilidade.','Institution referenced by UNIFOR course materials. Check the list for your own degree.'), source:'https://unifor.br/web/graduacao/analise-e-desenvolvimento-de-sistema' },
    { id: 'nova-lisboa', country: 'Portugal', flag:'🇵🇹', name:'Faculdade de Ciências e Tecnologia — Universidade NOVA de Lisboa', field:'tecnologia', label:L('Engenharias','Engineering'), context:L('Referência institucional de cooperação em materiais acadêmicos. A disponibilidade de vagas e disciplinas precisa ser verificada.','Institutional academic cooperation reference. Places and courses must be verified.'), source: URLs.aluno },
    { id: 'salamanca', country: 'Espanha', flag:'🇪🇸', name:'Universidad de Salamanca', field:'geral', label:L('Programa Santander Top España','Santander Top España program'), context:L('A Unifor documentou a participação de estudantes e docente em edição do programa. Isto não garante novas chamadas.','UNIFOR documented student and faculty participation in an earlier program edition. This does not guarantee future calls.'), source:'https://unifor.br/pt/-/unifor-divulga-resultado-final-do-programa-santander-top-espana-2026' },
    { id: 'cuyo', country: 'Argentina', flag:'🇦🇷', name:'Universidad Nacional de Cuyo', field:'geral', label:L('Cooperação institucional','Institutional cooperation'), context:L('Instituição mencionada na lista institucional de convênios. Confirme o escopo e a vigência do acordo.','Institution listed among institutional agreements. Confirm scope and current status.'), source:URLs.convenio },
    { id: 'porto-odonto', country: 'Portugal', flag:'🇵🇹', name:'Faculdade de Medicina Dentária — Universidade do Porto', field:'saude', label:L('Saúde / Odontologia','Health / Dentistry'), context:L('Referência citada em notícia institucional sobre cooperação internacional. Consulte curso, modalidades e convênio.','Referenced in an institutional article about cooperation. Check the degree, mobility type and agreement.'), source:URLs.noticia }
  ].concat(verifiedDestinations.filter(d=>!['porto','salamanca','cuyo'].includes(d.id)).map(d=>({
    id:'catalogo-'+d.id,country:d.country,flag:d.flag,name:d.name,field:d.field,
    destinationId:d.id, label:L(d.fieldLabel,d.fieldLabel),source:d.origin,
    context:L(d.focus+' '+d.name+' possui orientações públicas para mobilidade internacional. Confirme os convênios atuais.',d.focus+'. Verify current agreements.')
  })));
  const courseDocs = [
    {name: L('Análise e Desenvolvimento de Sistemas','Systems Analysis and Development'), url:URLs.docsads, year:'2025'},
    {name: L('Engenharia da Computação','Computer Engineering'),url:URLs.docseng,year:'2025'},
    {name: L('Enfermagem','Nursing'),url:URLs.docsenf,year:'2025'},
    {name: L('Direito','Law'),url:URLs.docsdireito,year:'2025'},
    {name: L('Pós-Graduação','Postgraduate'),url:URLs.docspos,year:'2024'}
  ];
  const docs = [
    {id:'antes', icon:'01', title:L('Antes da candidatura','Before applying'), intro:L('Itens para conhecer a modalidade e verificar sua situação acadêmica.','Explore the program and your academic situation.'), tasks:L(['Localizar o edital ou regulamento vigente.', 'Confirmar requisitos do seu curso e da universidade pretendida.', 'Pesquisar o idioma e a comprovação de proficiência.', 'Verificar datas, custos previstos e contatos da DRI.'],['Find the current call or regulations.','Confirm requirements of your degree and intended institution.','Check language and proficiency proof.','Verify dates, costs and DRI contacts.']) },
    {id:'candidatura',icon:'02',title:L('Preparação dos documentos','Preparing documents'),intro:L('A lista exata depende do edital, modalidade e país.','The exact requirements depend on the call, program and destination.'),tasks:L(['Verificar histórico escolar e documentos acadêmicos exigidos.', 'Conferir requerimentos e formulários aplicáveis.', 'Confirmar necessidade de carta, plano de estudos ou currículo.', 'Separar comprovantes dentro do prazo indicado.'],['Check required transcripts and academic documents.','Check applicable institutional forms.','Confirm any letters, study plans or CV requirements.','Prepare documents before the stated deadline.']) },
    {id:'viagem',icon:'03',title:L('Após a seleção / viagem','After selection / travel'),intro:L('As providências variam conforme destino e modalidade.','Procedures vary by country and program.'), tasks:L(['Confirmar carta de aceitação e instruções da universidade anfitriã.', 'Verificar passaporte e condições de visto com autoridades competentes.', 'Verificar seguros, moradia e planejamento financeiro.', 'Formalizar o plano acadêmico e alinhar retorno com a coordenação.'],['Confirm acceptance and host university instructions.','Check passport and visa requirements with relevant authorities.','Check insurance, housing and budget.','Finalize the academic plan and return procedures.']) }
  ];
  const faq = [
    {q:L('Ter convênio significa ter vaga garantida?','Does an agreement guarantee places?'),a:L('Não. Convênios estabelecem possibilidades de cooperação. A oferta de vagas e a elegibilidade dependem da universidade e das chamadas vigentes.','No. Agreements create possibilities for cooperation. Places and eligibility depend on the institution and current calls.')},
    {q:L('Como saber se meu curso pode participar?','How do I know if my degree is eligible?'),a:L('Consulte as listas de referência e confirme com a coordenação e a DRI. A existência de uma instituição na lista não assegura seleção para determinado semestre.','Consult reference lists and confirm with your coordinator and DRI. Being listed does not guarantee admission for a particular term.')},
    {q:L('Que documentos preciso reunir?','What documents will I need?'),a:L('Depende da modalidade e do país. Verifique edital, formulários acadêmicos, proficiência, carta de aceitação e condições consulares quando aplicável.','It depends on program and country. Check the call, forms, proficiency, acceptance letter and consular requirements when relevant.')},
    {q:L('Posso enviar meus documentos por este protótipo?','Can I submit documents through this prototype?'),a:L('Não. Esta demonstração não coleta dados pessoais nem realiza inscrições. Utilize apenas canais institucionais oficiais.','No. This demonstration collects no personal data and accepts no applications. Use official institutional channels.')}
  ];
  const completed = new Set();
  let selectedCountry='all', selectedField='all', query='', selectedDoc='antes', planned=false, selectedGuide='';
  const lang = () => (typeof state !== 'undefined' && ['pt','en','es'].includes(state.language)) ? state.language : 'pt';
  const S = (key) => (i18n[lang()]||i18n.pt)[key] ?? i18n.pt[key];
  const tr = (v) => {if(typeof v==='string')return lang()==='es'?(SpanishTerms[v]||v):v;const x=(v&&(v[lang()]||v.pt))||'';return lang()==='es'&&typeof x==='string'?(SpanishTerms[x]||x):x;};
  // O catálogo P1 possui entradas PT/EN. Para ES, textos longos mantêm PT como
  // referência, mas os títulos das orientações exibidos ao usuário são localizados.
  const spanishGuideLabels={
    intercambio:'Intercambio académico',
    'mobilidade-docente':'Movilidad docente',
    'dupla-titulacao':'Doble titulación',
    'vistos-documentos':'Visados y documentos',
    aproveitamento:'Reconocimiento académico y créditos',
    'colaboracao-docente':'Cooperación académica internacional',
    custos:'Costos y planificación',
    hospedagem:'Alojamiento y llegada',
    'alunos-internacionais':'Primeros pasos para estudiantes internacionales',
    contatos:'¿Cómo contactar a la DRI?',
    'universidades-parceiras':'Universidades asociadas',
    editais:'Convocatorias y solicitudes',
    'documentos-academicos':'Documentos académicos y formularios'
  };
  const guideText=(guide,field)=>
    lang()==='es' && field==='title'
    ? (spanishGuideLabels[guide.id]||tr(guide[field]))
    : tr(guide[field]);
  const guideCategory=(guide)=>
    (typeof categories!=='undefined'&&categories[guide.category])
      ? tr(categories[guide.category]) : S('guides');
  const esc = (str) => String(str == null ? '' : str).replace(/[&<>"']/g, (x) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
  const norm = (str) => String(str || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const safeUrl = (url) => /^(https:\/\/(?:www\.)?unifor\.br\/)/.test(url) ? url : '#/contatos';
  const out = (url, title) => '<a class="xp-source" href="'+esc(safeUrl(url))+'" target="_blank" rel="noopener noreferrer"><span>↗</span><span>'+esc(tr(title))+'</span></a>';
  const link = (path,label,extra='') => '<a class="xp-btn '+extra+'" href="#/'+path+'">'+esc(label)+' <span aria-hidden="true">→</span></a>';
  const iconBox = (symbol) => '<span class="xp-card-icon" aria-hidden="true">'+symbol+'</span>';
  const renderLinks = (links) => '<div class="xp-sources">'+links.map(item=>out(item.url,item.title)).join('')+'</div>';
  const bullets = (items) => '<ul class="xp-checklist">'+items.map(item=>'<li><span aria-hidden="true">✓</span>'+esc(item)+'</li>').join('')+'</ul>';
  const steps = (items) => '<ol class="xp-steps">'+items.map(item=>'<li>'+esc(item)+'</li>').join('')+'</ol>';
  const faqBlock = (items) => '<div class="xp-faq">'+items.map(item=>'<details><summary>'+esc(tr(item.q))+'</summary><p>'+esc(tr(item.a))+'</p></details>').join('')+'</div>';
  const badge = (t) => '<span class="xp-pill">'+esc(t)+'</span>';
  const note = () => '<div class="xp-disclaimer" role="note"><span aria-hidden="true">ⓘ</span><p>'+esc(S('disclaimer'))+'</p></div>';
  function hero(title,desc,kicker,actions=''){
    return '<header class="xp-hero"><div><span class="xp-kicker">'+esc(kicker||S('cap'))+'</span><h1>'+esc(title)+'</h1><p>'+esc(desc)+'</p></div>'+(actions?'<div class="xp-hero-actions">'+actions+'</div>':'')+'</header>';
  }
  function sectionHeader(title,subtitle){return '<div class="xp-section-head"><h2>'+esc(title)+'</h2>'+(subtitle?'<p>'+esc(subtitle)+'</p>':'')+'</div>';}
  function programCards(){
    return '<div class="xp-cards xp-cards--3">'+programs.map(p=>'<a class="xp-card xp-card--link" href="#/programas/'+p.id+'">'+iconBox(p.icon)+'<div><h3>'+esc(tr(p.label))+'</h3><p>'+esc(tr(p.tagline))+'</p></div><span class="xp-card-link">'+esc(S('details'))+' →</span></a>').join('')+'</div>';
  }
  function dashboard(){
    return hero(S('title'),S('subtitle'))+journeyOverview()+'<div class="xp-statbar"><span><strong>5</strong> '+esc(S('programs'))+'</span><span><strong>'+verifiedDestinations.length+'</strong> '+esc(S('records'))+'</span><span><strong>3</strong> '+esc(S('docProgress'))+'</span></div>'+
      sectionHeader(lang()!=='en'?'Por onde deseja começar?':'Where would you like to start?',lang()!=='en'?'Cada etapa abre uma área completa dentro do portal.':'Every choice opens an internal content page.')+
      '<div class="xp-cards xp-cards--3">'+[
        ['✈',S('programs'),'Conheça intercâmbio, dupla titulação e outras oportunidades.','Discover exchange, dual degrees and more.', 'programas'],
        ['🌍',S('universities'),'Explore instituições e listas por curso e país.','Explore institutions and reference lists by degree and country.', 'universidades'],
        ['📋',S('documents'),'Checklists, formulários e guias de preparação.','Checklists, forms and preparation guides.', 'documentos'],
        ['🧑‍🏫',S('faculty'),'Orientações para atividades acadêmicas internacionais.','Guidance for international academic activities.','docentes'],
        ['🎒',S('incoming'),'Acolhimento, integração e preparação para estudar na Unifor.','Arrival, support and studying at UNIFOR.', 'internacionais'],
        ['🧭',S('planning'),'Monte um roteiro orientativo para seu interesse.','Build a consultation route for your interests.','planejar']
      ].map(item=>'<a href="#/'+item[4]+'" class="xp-card xp-card--link">'+iconBox(item[0])+'<h3>'+esc(item[1])+'</h3><p>'+esc(lang()!=='en'?item[2]:item[3])+'</p><span class="xp-card-link">'+esc(S('details'))+' →</span></a>').join('')+'</div>'+
      sectionHeader(lang()!=='en'?'Modalidades em destaque':'Featured programs','')+programCards()+
      '<div class="xp-destinations-invite">'+sectionHeader(lang()!=='en'?'Explore destinos reais':'Explore documented destinations',lang()!=='en'?'Vá além do guia: consulte as páginas das universidades estrangeiras.':'Go beyond generic links: read official host institution procedures.')+'<div class="xp-cards xp-cards--3">'+verifiedDestinations.slice(0,3).map(destinationCard).join('')+'</div>'+link('destinos',lang()!=='en'?'Explorar o catálogo completo':'Browse the full catalog')+'</div>'+
      '<div class="xp-news-link">'+link('noticias',S('news'))+'</div>'+
      '<div class="xp-callout"><div><h3>'+esc(lang()!=='en'?'Está se preparando para uma seleção?':'Planning to apply?')+'</h3><p>'+esc(lang()!=='en'?'Explore um roteiro personalizado de consulta, sem preencher cadastro e sem enviar documentos.':'Explore a personalized reading route without registration or document upload.')+'</p></div>'+link('planejar',S('planCta'),'xp-btn--gold')+'</div>'+note();
  }
  function programsPage(id){
    const p=programs.find(item=>item.id===id);
    if (!p) return hero(S('programs'),lang()!=='en'?'Escolha a modalidade que deseja conhecer.':'Select a program to explore.')+programCards()+note();
    const related = programs.filter(item=>item.id!==p.id).slice(0,3);
    return hero(tr(p.label),tr(p.tagline),S('programs'),link('planejar',S('planCta'),'xp-btn--gold'))+
      '<div class="xp-two"><div class="xp-maincol"><article class="xp-paper"><h2>'+esc(lang()!=='en'?'Como funciona':'How it works')+'</h2><p class="xp-lead">'+esc(tr(p.intro))+'</p>'+
      sectionHeader(lang()!=='en'?'O que verificar antes':'What to verify first','')+bullets(tr(p.requirements))+
      sectionHeader(S('next'),'')+steps(tr(p.steps))+'<p class="xp-muted">'+esc(S('noEnroll'))+'</p></article>'+
      (p.id==='dupla-titulacao'?doubleDegreeGuide():'')+
      '<article class="xp-paper">'+sectionHeader(S('faq'),'')+faqBlock(tr(p.faq).map(([q,a])=>({q:L(q,q),a:L(a,a)})))+'</article></div>'+
      '<aside class="xp-aside"><div class="xp-sidebar-card"><h3>'+esc(S('source'))+'</h3><p>'+esc(lang()!=='en'?'Confira as informações diretamente nas páginas relacionadas à modalidade.':'Check the latest information in the related official pages.')+'</p>'+renderLinks(p.links)+(p.id==='educationusa'?verifiedExternal('https://educationusa.state.gov/your-5-steps-us-study',lang()!=='en'?'Os 5 passos do EducationUSA':'EducationUSA 5 Steps'):'')+'<small>'+esc(S('updated'))+'</small></div>'+
      '<div class="xp-sidebar-card"><h3>'+esc(lang()!=='en'?'Continue sua pesquisa':'Keep exploring')+'</h3>'+link('universidades',S('universities'))+link('documentos',S('documents'))+link('contatos',S('contacts'))+'</div></aside></div>'+
      sectionHeader(lang()!=='en'?'Outros programas':'Other programs','')+'<div class="xp-cards xp-cards--3">'+related.map(item=>'<a class="xp-mini" href="#/programas/'+item.id+'">'+iconBox(item.icon)+'<strong>'+esc(tr(item.label))+'</strong><span>→</span></a>').join('')+'</div>'+note();
  }
  function universityCard(u){
    return '<article class="xp-uni-card"><div class="xp-uni-top"><span class="xp-country-icon">'+u.flag+'</span>'+badge(u.country)+'</div><h3>'+esc(u.name)+'</h3><p>'+esc(tr(u.label))+'</p><div class="xp-uni-footer"><span>'+esc(S('history'))+'</span><a href="#/universidades/'+u.id+'">'+esc(S('details'))+' →</a></div></article>';
  }
  function filters(){
    const countryOpts = [...new Set(universities.map(u=>u.country))].sort((a,b)=>a.localeCompare(b,lang()!=='en'?'pt-BR':'en'));
    const country = '<label>'+esc(S('selectedCountry'))+'<select id="xpCountry"><option value="all">'+esc(S('allCountries'))+'</option>'+countryOpts.map(c=>'<option value="'+c+'"'+(selectedCountry===c?' selected':'')+'>'+c+'</option>').join('')+'</select></label>';
    const fieldOpts = [['geral',L('Geral / intercultural','General / intercultural')],['tecnologia',L('Engenharia e tecnologia','Engineering and technology')],['saude',L('Ciências da saúde','Health sciences')],['gestao',L('Negócios e administração','Business and management')]];
    const field = '<label>'+esc(S('selectedCourse'))+'<select id="xpField"><option value="all">'+esc(S('allCourses'))+'</option>'+fieldOpts.map(([key,value])=>'<option value="'+key+'"'+(selectedField===key?' selected':'')+'>'+esc(tr(value))+'</option>').join('')+'</select></label>';
    return '<div class="xp-filterbar"><label>'+esc(S('find'))+'<input id="xpUniSearch" type="search" autocomplete="off" placeholder="'+esc(S('find'))+'" value="'+esc(query)+'"></label>'+country+field+'</div>';
  }
  function unisPage(id){
    const u=universities.find(item=>item.id===id);
    if(u && u.destinationId)return destinationsPage(u.destinationId);
    if(u){
      return hero(u.name, u.country+' • '+tr(u.label),S('universities'))+
        '<div class="xp-two"><article class="xp-paper xp-maincol"><div class="xp-feature-flag">'+u.flag+'</div>'+
        sectionHeader(lang()!=='en'?'O que sabemos sobre a instituição':'What we know about this institution','')+
        '<p class="xp-lead">'+esc(tr(u.context))+'</p>'+
        sectionHeader(S('about'),'')+bullets(lang()!=='en'?['Verificar cursos e modalidades contemplados pelo convênio.','Confirmar se a instituição possui vagas na chamada vigente.','Conferir disciplinas, idiomas e documentos exigidos.','Consultar a coordenação do seu curso antes da candidatura.']:['Verify eligible courses and programs.','Check places offered in the current call.','Check classes, language and documents.','Speak to your coordinator before applying.'])+
        link('universidades',S('back'))+' '+link(u.id==='salamanca'?'destinos/salamanca':u.id==='cuyo'?'destinos/cuyo':u.id.startsWith('porto-')?'destinos/porto':'destinos',lang()!=='en'?'Conhecer portal da universidade':'Host university portal')+'</article><aside class="xp-aside"><div class="xp-sidebar-card"><h3>'+esc(S('source'))+'</h3>'+out(u.source,L('Referência publicada pela Unifor','UNIFOR institutional reference'))+'<p>'+esc(S('history'))+'</p></div><div class="xp-sidebar-card"><h3>'+esc(S('next'))+'</h3>'+link('documentos',S('documents'))+link('contatos',S('contacts'))+'</div></aside></div>'+note();
    }
    return hero(S('universities'), lang()!=='en'?'Explore referências reais documentadas em páginas institucionais, com filtros e detalhes internos.':'Explore institutions documented in official sources using internal filters.',S('universities'),link('planejar',S('planCta'),'xp-btn--gold'))+
      '<div class="xp-disclaimer xp-disclaimer--soft"><span aria-hidden="true">⌕</span><p>'+esc(S('examples'))+'</p></div>'+
      '<div class="xp-mini-path"><div><strong>'+(lang()!=='en'?'Precisa entender o processo da universidade estrangeira?':'Need host university procedures?')+'</strong><p>'+(lang()!=='en'?'Explore universidades em 11 países e seus portais específicos de mobilidade.':'Explore universities across 11 countries and their official mobility portals.')+'</p></div>'+link('destinos',lang()!=='en'?'Ver portais internacionais':'Explore host portals','xp-btn--primary')+'</div>'+filters()+'<div id="xpUniResults" aria-live="polite"></div>'+
      '<div class="xp-paper xp-doc-references">'+sectionHeader(S('records'),S('formHint'))+
      '<div class="xp-document-links">'+courseDocs.map(item=>'<div class="xp-document-row"><div><strong>'+esc(tr(item.name))+'</strong><small>'+esc(S('dateText'))+': '+item.year+'</small></div>'+out(item.url,L('Consultar lista de referência','Open reference list'))+'</div>').join('')+'</div></div>'+note();
  }
  function paintUniversityResults(){
    const result = root.querySelector('#xpUniResults'); if(!result) return;
    const rows = universities.filter(u=>(selectedCountry==='all'||u.country===selectedCountry)&&(selectedField==='all'||u.field===selectedField)&&norm(u.name+' '+u.country+' '+tr(u.label)).includes(norm(query)));
    result.innerHTML = '<div class="xp-results-count">'+rows.length+' '+esc(S('results'))+'</div>'+(rows.length?'<div class="xp-cards xp-cards--3">'+rows.map(universityCard).join('')+'</div>':'<div class="xp-empty">'+esc(S('noResults'))+'</div>');
  }

  function documentByProgram(){
    const pt=lang()==='pt';
    return '<section class="xp-doc-programs">'+sectionHeader(pt?'Quais documentos conferir em cada modalidade?':'Documents to review by program',
      pt?'As listas abaixo são orientações iniciais. Os itens obrigatórios são definidos em cada edital.':'These are examples. The applicable call defines requirements.')+
      '<div class="xp-info-pair"><article class="xp-paper"><span class="xp-eyebrow">'+(pt?'INTERCÂMBIO ACADÊMICO':'ACADEMIC EXCHANGE')+'</span><h3>'+(pt?'Documentos da mobilidade':'Mobility documents')+'</h3>'+
      bullets(pt?['Edital e formulário da edição aplicável.','Histórico e documentos acadêmicos definidos pela Unifor.','Comprovação de idioma, quando exigida.','Plano de disciplinas e carta de aceitação após seleção.','Passaporte e documentos migratórios conforme país.']:
      ['Applicable call and registration form.','Academic transcripts and required records.','Language proof if requested.','Study plan and acceptance letter when applicable.','Passport and travel documents as required.'])+
      link('programas/intercambio',pt?'Entender o intercâmbio':'About exchange')+
      out(URLs.guida,L('Guia do Intercambista — 2024','Exchange Student Guide — 2024'))+'</article>'+
      '<article class="xp-paper"><span class="xp-eyebrow">'+(pt?'DUPLA TITULAÇÃO':'DOUBLE DEGREE')+'</span><h3>'+(pt?'Documentação do programa específico':'Program-specific documents')+'</h3>'+
      bullets(pt?['Verificar curso, instituição e edital vigente.','Consultar a Secretaria Acadêmica sobre o Requerimento 175, quando aplicável.','Conferir matrícula, histórico e planejamento curricular.','Checar proficiência e cartas quando exigidas.','Validar passaporte e condições do edital correspondente.']:
      ['Check your degree, partner and current call.','Ask the Academic Secretariat about Request 175 when applicable.','Review enrollment and academic documents.','Check language and letters when requested.','Verify passport and current call conditions.'])+
      link('programas/dupla-titulacao',pt?'Conhecer a dupla titulação':'About dual degrees')+
      out(URLs.secretaria,L('Secretaria Acadêmica — Requerimento 175','Academic Secretariat — Request 175'))+'</article></div>'+
      '<p class="xp-doc-programs__notice">'+(pt?'Não envie documentos por este protótipo. Editais antigos não significam inscrições abertas.':'Do not upload documents to this prototype. Archived calls are not open applications.')+'</p></section>';
  }

  function documentsPage(){
    const active=docs.find(d=>d.id===selectedDoc)||docs[0];
    return hero(S('documents'),lang()!=='en'?'Prepare-se por etapas, consulte os documentos e entenda quando buscar orientação oficial.':'Prepare step by step, review documents and find the right official guidance.',S('documents'),link('planejar',S('planCta'),'xp-btn--gold'))+
      '<div class="xp-doc-layout"><div class="xp-doc-navigation" role="tablist" aria-label="'+esc(S('docProgress'))+'">'+docs.map(item=>'<button role="tab" aria-selected="'+(item.id===active.id?'true':'false')+'" data-doc-tab="'+item.id+'">'+esc(item.icon)+' · '+esc(tr(item.title))+'</button>').join('')+'</div><article class="xp-paper xp-doc-sheet"><h2>'+esc(tr(active.title))+'</h2><p>'+esc(tr(active.intro))+'</p><div class="xp-check-tasks">'+tr(active.tasks).map((task,i)=>'<label class="xp-task"><input type="checkbox" data-check="'+active.id+'-'+i+'"'+(completed.has(active.id+'-'+i)?' checked':'')+'><span>'+esc(task)+'</span></label>').join('')+'</div><div class="xp-doc-actions"><small>'+esc(S('docsNote'))+'</small><button id="xpResetChecks" type="button">'+esc(S('reset'))+'</button></div></article></div>'+
      '<div class="xp-paper xp-doc-references">'+sectionHeader(lang()!=='en'?'Documentos e portais de apoio':'Documents and support portals','')+
      '<div class="xp-document-links">'+[
        {name:L('Guia Prático do Intercambista · edição 2024','Exchange Student Guide · 2024'),year:'2024',url:URLs.guida},
        {name:L('Manual de Boas Práticas de Internacionalização · 2026','Internationalization Practices Manual · 2026'),year:'2026',url:URLs.manual},
        {name:L('Secretaria Acadêmica · serviços e requerimentos','Academic Secretariat · forms and requests'),year:'',url:URLs.secretaria},
        {name:L('DRI · apoio ao estudante e FAQ','DRI · student support and FAQ'),year:'',url:URLs.aluno}
      ].map(item=>'<div class="xp-document-row"><div><strong>'+esc(tr(item.name))+'</strong>'+(item.year?'<small>'+esc(S('dateText'))+': '+item.year+'</small>':'')+'</div>'+out(item.url,L('Consultar fonte','Visit source'))+'</div>').join('')+'</div></div>'+documentByProgram()+note();
  }
  function guidesPage(id){
    const list=(typeof guides !== 'undefined')?guides:[];
    const guide=list.find(g=>g.id===id);
    if(guide){
      const c=guideCategory(guide);
      const source=(typeof guideSources!=='undefined')?guideSources[guide.id]:null;
      return hero(guideText(guide,'title'),guideText(guide,'summary'),c,link('orientacoes',S('back')))+
        '<div class="xp-two"><article class="xp-paper xp-maincol">'+sectionHeader(S('next'),'')+steps(tr(guide.steps))+
        sectionHeader(lang()!=='en'?'Perguntas que vale fazer':'Questions worth asking','')+
        bullets(lang()!=='en'?['Este procedimento possui edital ou prazo válido para meu semestre?','Quais documentos e aprovações são necessários para meu perfil?','Quem pode confirmar as condições específicas do meu curso?']:['Is there a valid call or deadline for my semester?','Which documents and approvals apply to my profile?','Who can confirm requirements for my degree?'])+
        '<p class="xp-muted">'+esc(S('noEnroll'))+'</p></article><aside class="xp-aside"><div class="xp-sidebar-card"><h3>'+esc(S('source'))+'</h3>'+(source?out(source.url,L(source.pt,source.en)):'')+'<small>'+esc(S('updated'))+'</small></div><div class="xp-sidebar-card">'+link('documentos',S('documents'))+link('contatos',S('contacts'))+'</div></aside></div>'+note();
    }
    return hero(S('guides'),lang()!=='en'?'Informações por tema, com páginas completas e fontes por assunto.':'Guidance by topic, with detailed pages and contextual sources.',S('guides'))+
      '<div class="xp-filterbar"><label>'+esc(S('searchGuides'))+'<input id="xpGuideSearch" type="search" value="'+esc(selectedGuide)+'" placeholder="'+esc(S('searchGuides'))+'"></label></div><div id="xpGuideResults"></div>'+note();
  }
  function paintGuideResults(){
    const box=root.querySelector('#xpGuideResults');if(!box)return;
    const list=(typeof guides!=='undefined')?guides:[];
    const filtered=list.filter(g=>norm(g.title.pt+' '+g.title.en+' '+guideText(g,'title')+' '+g.summary.pt+' '+g.summary.en).includes(norm(selectedGuide)));
    box.innerHTML='<div class="xp-results-count">'+filtered.length+' '+esc(S('results'))+'</div>'+(filtered.length?'<div class="xp-cards xp-cards--3">'+filtered.map(g=>'<a href="#/orientacoes/'+g.id+'" class="xp-card xp-card--link"><span class="xp-kicker">'+esc(guideCategory(g))+'</span><h3>'+esc(guideText(g,'title'))+'</h3><p>'+esc(guideText(g,'summary'))+'</p><span class="xp-card-link">'+esc(S('openGuide'))+' →</span></a>').join('')+'</div>':'<div class="xp-empty">'+esc(S('noResults'))+'</div>');
  }
  function facultyPage(){
    return hero(S('faculty'),lang()!=='en'?'Mobilidade docente, projetos internacionais e internacionalização acadêmica.':'Faculty mobility, international projects and academic cooperation.',S('faculty'),link('contatos',S('contacts'),'xp-btn--gold'))+
      '<div class="xp-cards xp-cards--3">'+[
        ['🌐',L('Mobilidade docente','Faculty mobility'),L('Orientações para atividades acadêmicas no exterior ou recepção de visitantes.','Guidance for overseas activities and visiting faculty.')],
        ['🔬',L('Pesquisa internacional','International research'),L('Projetos de cooperação e redes de produção científica.','Collaborative research and academic networks.')],
        ['🏛️',L('Currículo internacionalizado','Internationalized curriculum'),L('Cooperação entre cursos e integração de perspectivas internacionais.','Academic cooperation and global perspectives in teaching.')]
      ].map(a=>'<div class="xp-card">'+iconBox(a[0])+'<h3>'+esc(tr(a[1]))+'</h3><p>'+esc(tr(a[2]))+'</p></div>').join('')+'</div>'+
      '<div class="xp-two"><article class="xp-paper xp-maincol">'+sectionHeader(lang()!=='en'?'Como organizar a proposta':'How to prepare your proposal','')+
      steps(lang()!=='en'?['Defina objetivos, tipo de mobilidade e instituição de interesse.','Converse com a coordenação ou gestão acadêmica sobre enquadramento.','Consulte o Manual de Boas Práticas e documentos relevantes.','Busque orientação institucional antes de confirmar compromissos ou despesas.']:['Define goals, mobility type and institution.','Discuss the scope with your academic coordinator.','Review the Internationalization Practices Manual.','Seek institutional guidance before committing to expenses.'])+'</article><aside class="xp-aside"><div class="xp-sidebar-card"><h3>'+esc(S('sources'))+'</h3>'+renderLinks([{url:URLs.manual,title:L('Manual de Boas Práticas · 2026','Practices Manual · 2026')},{url:URLs.docente,title:L('Apoio ao professor · DRI','Faculty support · DRI')},{url:URLs.contatos,title:L('Contatos institucionais','Institutional contacts')}])+'</div></aside></div>'+note();
  }
  function incomingPage(){
    return hero(S('incoming'),lang()!=='en'?'Informações para estudantes estrangeiros que desejam conhecer ou estudar na Unifor.':'Guidance for international students interested in studying at UNIFOR.',S('incoming'),link('contatos',S('contacts'),'xp-btn--gold'))+
      '<div class="xp-two"><article class="xp-paper xp-maincol">'+sectionHeader(lang()!=='en'?'Antes de chegar ao Brasil':'Before coming to Brazil','')+
      steps(lang()!=='en'?['Consulte se sua instituição possui convênio aplicável.','Confirme a modalidade (por convênio ou eventual Free Mover) com a DRI.','Verifique disciplinas, idioma, período e eventuais taxas.','Planeje documentos migratórios e cuidados de saúde nos órgãos competentes.','Informe-se sobre recepção acadêmica e integração com a comunidade universitária.']:['Check whether your home institution has an applicable agreement.','Confirm your mobility route with DRI.','Check classes, language, period and fees.','Review immigration documents and health requirements with the relevant authorities.','Ask about orientation and integration programs.'])+
      sectionHeader(lang()!=='en'?'Acolhimento e integração':'Reception and integration','')+
      '<p>'+esc(lang()!=='en'?'O Buddy Program aparece entre as iniciativas de integração. Os critérios e o funcionamento são informados por edição; não trate chamadas anteriores como abertas.':'Buddy Program is one of the initiatives to welcome international students. Criteria vary by edition; past calls are not open applications.')+'</p>'+link('programas/buddy','Buddy Program')+'</article><aside class="xp-aside"><div class="xp-sidebar-card"><h3>'+esc(S('sources'))+'</h3>'+renderLinks([{url:URLs.aluno,title:L('Apoio ao estudante','Student support')},{url:URLs.contatos,title:L('Atendimento da DRI','DRI contacts')}])+'</div></aside></div>'+note();
  }
  function planningPage(){
    const programsOpts=programs.map(p=>'<option value="'+p.id+'">'+esc(tr(p.label))+'</option>').join('');
    return hero(S('planning'),lang()!=='en'?'Uma trilha de consulta para sua área e destino de interesse — sem cadastro e sem avaliação automática de elegibilidade.':'A consultation path for your academic field and destination — no registration or automatic eligibility decision.',S('planning'))+
      '<div class="xp-paper"><form id="xpPlanForm" class="xp-plan-form"><label>'+esc(S('selectedProgram'))+'<select id="xpPlanProgram">'+programsOpts+'</select></label><label>'+esc(S('selectedCourse'))+'<select id="xpPlanCourse"><option value="grad">'+esc(S('student'))+'</option><option value="eng">'+esc(S('eng'))+'</option><option value="health">'+esc(S('health'))+'</option><option value="law">'+esc(S('law'))+'</option><option value="post">'+esc(S('post'))+'</option><option value="other">'+esc(S('other'))+'</option></select></label><label>'+esc(S('selectedCountry'))+'<select id="xpPlanCountry"><option value="all">'+esc(S('allCountries'))+'</option>'+[...new Set(verifiedDestinations.map(d=>d.country))].sort((a,b)=>a.localeCompare(b,lang()!=='en'?'pt-BR':'en')).map(c=>'<option value="'+esc(c)+'">'+esc(c)+'</option>').join('')+'<option value="other">'+esc(S('other'))+'</option></select></label><button class="xp-btn xp-btn--primary" type="submit">'+esc(S('planCta'))+' →</button></form></div>'+
      '<div id="xpPlanResults" aria-live="polite"></div>'+note();
  }
  function renderPlan(form){
    const p=programs.find(x=>x.id===form.program)||programs[0];
    const matches=universities.filter(u=>form.country==='all'||u.country===form.country);
    const locLabel = form.country==='all'?S('allCountries'):form.country==='other'?S('other'):form.country;
    const details = lang()!=='en'?[
      'Leia as condições da modalidade '+tr(p.label)+'.',
      'Confira as listas institucionais da área '+(form.course==='eng'?'Engenharia/Tecnologia':form.course==='health'?'Saúde':form.course==='law'?'Direito':form.course==='post'?'Pós-graduação':'Graduação')+'.',
      'Pesquise instituições para o destino '+locLabel+' e confirme a vigência do convênio.',
      'Prepare as dúvidas sobre documentos, prazos, custos e equivalências.',
      'Procure a DRI e sua coordenação para validar o processo.'
    ]:[
      'Review requirements for '+tr(p.label)+'.','Review institutional lists for your academic field.','Check institutions and current agreements for '+locLabel+'.','Prepare questions about documents, deadlines, costs and recognition.','Verify next steps with DRI and your coordinator.'
    ];
    const box=root.querySelector('#xpPlanResults');
    if(!box)return;
    box.innerHTML='<div class="xp-paper xp-planned">'+sectionHeader(S('planResult'),S('generated'))+
      '<div class="xp-plan-tags">'+badge(tr(p.label))+badge(locLabel)+'</div>'+steps(details)+
      '<div class="xp-plan-next">'+link('programas/'+p.id,S('programs'))+link('destinos',lang()!=='en'?'Portais estrangeiros':'Host portals')+link('documentos',S('documents'))+'</div>'+
      '<div class="xp-note">'+esc(matches.length?S('examples'):S('error'))+'</div><button id="xpPrint" type="button" class="xp-btn xp-btn--outline">'+esc(S('print'))+' ⎙</button></div>';
    box.scrollIntoView({block:'nearest',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }

  function newsPage(id){
    const article=news.find(item=>item.id===id);
    if(article){
      return hero(tr(article.title),tr(article.summary),S('news'),link('noticias',S('back')))+
        '<div class="xp-two"><article class="xp-paper xp-maincol">'+sectionHeader(lang()!=='en'?'Entenda a notícia':'About this article','')+
        bullets(tr(article.points))+
        '<p class="xp-muted">'+esc(lang()!=='en'?'Registro documental, sem atualização automática de inscrições, vagas ou convênios.':'Documentary record, without automatic updates on places or agreements.')+'</p></article>'+
        '<aside class="xp-aside"><div class="xp-sidebar-card"><h3>'+esc(S('source'))+'</h3>'+
        out(article.source,L('Notícia original da Unifor','Original UNIFOR article'))+'<small>'+esc(S('dateText'))+': '+article.year+'</small></div>'+
        '<div class="xp-sidebar-card">'+link('programas',S('programs'))+link('universidades',S('universities'))+'</div></aside></div>'+note();
    }
    return hero(S('news'),lang()!=='en'?'Notícias e registros institucionais que ajudam a entender programas e parcerias.':'Institutional articles and past announcements about programs and partnerships.',S('news'))+
      '<div class="xp-disclaimer xp-disclaimer--soft"><span aria-hidden="true">⌕</span><p>'+esc(lang()!=='en'?'Arquivo de notícias selecionadas — não é feed atualizado automaticamente.':'Selected articles archive — not an automatically updated news feed.')+'</p></div>'+
      '<div class="xp-cards xp-cards--3">'+news.map(item=>'<a href="#/noticias/'+item.id+'" class="xp-card xp-card--link">'+badge(item.year)+
      '<h3>'+esc(tr(item.title))+'</h3><p>'+esc(tr(item.summary))+'</p><span class="xp-card-link">'+esc(S('details'))+' →</span></a>').join('')+'</div>'+note();
  }
  function contactsPage(){
    return hero(S('contacts'),S('contactText'),S('contacts'))+
      '<div class="xp-cards xp-cards--3"><div class="xp-card">'+iconBox('✉')+'<h3>E-mail</h3><p>dri@unifor.br</p><a class="xp-card-link" href="mailto:dri@unifor.br">dri@unifor.br ↗</a></div><div class="xp-card">'+iconBox('☎')+'<h3>'+esc(lang()!=='en'?'Telefone':'Phone')+'</h3><p>(85) 3477-3834</p><a class="xp-card-link" href="tel:+558534773834">+55 85 3477-3834 ↗</a></div><div class="xp-card">'+iconBox('⌘')+'<h3>'+esc(lang()!=='en'?'Canal institucional':'Institutional channel')+'</h3><p>'+esc(lang()!=='en'?'Equipe responsável pelos diferentes assuntos de internacionalização.':'Office responsible for internationalization questions.')+'</p>'+out(URLs.contatos,L('Abrir contatos oficiais','Open official contacts'))+'</div></div>'+
      '<div class="xp-paper xp-contact-extra"><h2>'+(lang()!=='en'?'Outros canais de internacionalização':'Additional international contacts')+'</h2><p>'+(lang()!=='en'?'Alguns serviços institucionais publicam international@unifor.br e o telefone (85) 3477-3127. Confira na DRI qual canal atende seu processo específico.':'Some institutional pages list international@unifor.br and +55 85 3477-3127. Ask DRI which contact applies to your program.')+'</p><a href="mailto:international@unifor.br">international@unifor.br ↗</a> '+out(URLs.contatos,L('Confirmar canais atuais na DRI','Verify DRI contact details'))+'</div><div class="xp-paper">'+sectionHeader(S('faq'),'')+faqBlock(faq)+'</div>'+note();
  }
  const routeMap=() => [
    ['painel',S('title')],['programas',S('programs')],['universidades',S('universities')],
    ['documentos',S('documents')],['processo',lang()!=='en'?'Como funciona':'How it works'],['destinos',lang()!=='en'?'Portais estrangeiros':'Host portals'],['noticias',S('news')],['docentes',S('faculty')],['internacionais',S('incoming')],
    ['orientacoes',S('guides')],['planejar',S('planning')],['contatos',S('contacts')]
  ];
  function navigation(){
    return '<div class="xp-shell"><div class="xp-breadcrumb"><a href="#inicio">⌂ '+esc(S('home'))+'</a><span aria-hidden="true">/</span><span>'+esc(S('title'))+'</span></div>'+
    '<div class="xp-workspace"><nav class="xp-sidenav" aria-label="'+esc(S('title'))+'"><div class="xp-sidenav-brand">◉ <span>'+esc(S('title'))+'</span></div>'+
    routeMap().map(([path,label])=>'<a href="#/'+path+'" data-path="'+path+'"><span class="xp-nav-dot"></span>'+esc(label)+'</a>').join('')+
    '<div class="xp-sidenav-tip">ⓘ '+esc(S('updated'))+'</div></nav><div class="xp-content" id="xpContent"></div></div></div>';
  }
  function currentRoute(){
    const hash=decodeURIComponent(location.hash||'');
    if(!hash.startsWith('#/'))return null;
    return hash.slice(2).split('?')[0].split('/').filter(Boolean);
  }
  function activate(){
    const parts=currentRoute();
    const main=document.getElementById('conteudo');
    const home=!parts;
    [...main.children].forEach(child=>{child.hidden = home ? child===root : child!==root;});
    document.body.classList.toggle('xp-is-open',!home);
    if(home){const homeNav=document.querySelector('#menu-principal [href="#inicio"]');if(homeNav)homeNav.classList.add('nav-active');if(!location.hash||location.hash==='#inicio')window.scrollTo(0,0);document.title = lang()==='es'?'Portal de Internacionalización | Prototipo — Grupo 08':lang()!=='en'?'Portal de Internacionalização | Protótipo — Grupo 08':'Internationalization Portal | Prototype — Group 08';return;}
    root.hidden=false;
    root.innerHTML=navigation();
    const page=parts[0]||'painel', id=parts[1]||'';
    const view=root.querySelector('#xpContent');
    let content;
    switch(page){
      case 'painel': content=dashboard();break;
      case 'programas':content=programsPage(id);break;
      case 'universidades':content=unisPage(id);break;
      case 'documentos':content=documentsPage();break;
      case 'processo':content=processPage();break;
      case 'destinos':content=destinationsPage(id);break;
      case 'noticias':content=newsPage(id);break;
      case 'docentes':content=facultyPage();break;
      case 'internacionais':content=incomingPage();break;
      case 'orientacoes':content=guidesPage(id);break;
      case 'planejar':content=planningPage();break;
      case 'contatos':content=contactsPage();break;
      default:content=hero(S('missing'),S('missingDesc'))+link('painel',S('home'));
    }
    view.innerHTML=content;
    const active=root.querySelector('.xp-sidenav [data-path="'+page+'"]');
    if(active){active.classList.add('is-active');active.setAttribute('aria-current','page');}
    if(page==='universidades'&&!id)paintUniversityResults();
    if(page==='destinos'&&!id)paintDestinationResults();
    if(page==='orientacoes'&&!id)paintGuideResults();
    const oldHome=document.querySelector('#menu-principal .nav-active');
    if(oldHome)oldHome.classList.remove('nav-active');
    const pageTitleKey={painel:'title',programas:'programs',universidades:'universities',documentos:'documents',processo:'programs',destinos:'universities',noticias:'news',docentes:'faculty',internacionais:'incoming',orientacoes:'guides',planejar:'planning',contatos:'contacts'};
    document.title=S(pageTitleKey[page]||'title')+' | Grupo 08';
    window.scrollTo(0,0);
  }
  root.addEventListener('input',e=>{
    if(e.target.id==='xpUniSearch'){query=e.target.value;paintUniversityResults();}
    if(e.target.id==='xpGuideSearch'){selectedGuide=e.target.value;paintGuideResults();}
    if(e.target.id==='xpDestinationQuery'){destinationQuery=e.target.value;paintDestinationResults();}
  });
  root.addEventListener('change',e=>{
    if(e.target.id==='xpCountry'){selectedCountry=e.target.value;paintUniversityResults();}
    if(e.target.id==='xpField'){selectedField=e.target.value;paintUniversityResults();}
    if(e.target.id==='xpDestinationCountry'){destinationCountry=e.target.value;paintDestinationResults();}
    if(e.target.id==='xpDestinationField'){destinationField=e.target.value;paintDestinationResults();}
    if(e.target.matches('[data-check]')){const k=e.target.dataset.check;if(e.target.checked)completed.add(k);else completed.delete(k);}
  });
  root.addEventListener('click',e=>{
    const doc=e.target.closest('[data-doc-tab]');
    if(doc){selectedDoc=doc.dataset.docTab;activate();root.querySelector('[data-doc-tab="'+selectedDoc+'"]').focus();}
    if(e.target.closest('#xpResetChecks')){completed.clear();activate();}
    if(e.target.closest('#xpPrint'))window.print();
    if(e.target.closest('#xpDestinationReset')){destinationCountry='all';destinationField='all';destinationQuery='';activate();}
  });
  root.addEventListener('submit',e=>{
    if(e.target.id==='xpDestinationForm'){e.preventDefault();paintDestinationResults();}
    if(e.target.id==='xpPlanForm'){
      e.preventDefault();
      renderPlan({program:root.querySelector('#xpPlanProgram').value,course:root.querySelector('#xpPlanCourse').value,country:root.querySelector('#xpPlanCountry').value});
    }
  });
  // Ações do protótipo antigo agora abrem páginas internas. O material original é preservado.
  document.addEventListener('click', e=>{
    const topic=e.target.closest('[data-topic-jump]');
    if(topic){e.preventDefault();e.stopImmediatePropagation();const map={mobilidade:'programas',titulacao:'programas/dupla-titulacao',documentos:'documentos',academico:'orientacoes',planejamento:'planejar',apoio:'contatos'};location.hash='#/'+(map[topic.dataset.topicJump]||'painel');return;}
    const audience=e.target.closest('[data-audience-jump]');
    if(audience){e.preventDefault();e.stopImmediatePropagation();location.hash='#/'+(audience.dataset.audienceJump==='docente'?'docentes':audience.dataset.audienceJump==='internacional'?'internacionais':'programas');return;}
    const cardButton=e.target.closest('#guidesGrid .guide-card button');
    if(cardButton){
      const cards=[...document.querySelectorAll('#guidesGrid .guide-card')];
      const idx=cards.indexOf(cardButton.closest('.guide-card'));
      const guide=(typeof guides!=='undefined')?guides.filter(matchesGuide)[idx]:null;
      if(guide){e.preventDefault();e.stopImmediatePropagation();location.hash='#/orientacoes/'+guide.id;}return;
    }
    const suggest=e.target.closest('[data-search]');
    if(suggest){e.preventDefault();e.stopImmediatePropagation();selectedGuide=lang()!=='en'?suggest.dataset.search:suggest.dataset.searchEn;location.hash='#/orientacoes';return;}
  },true);
  document.addEventListener('submit',e=>{
    if(e.target.id==='heroSearchForm'){e.preventDefault();e.stopImmediatePropagation();selectedGuide=document.getElementById('heroSearchInput').value;location.hash='#/orientacoes';}
  },true);
  // Linguagem herdada do cabeçalho existente; a camada interna também acompanha PT/EN.
  const localeButton=document.getElementById('localeButton');
  if(localeButton && typeof window!=='undefined' && typeof window.addEventListener==='function'){
    window.addEventListener('portal:language',()=>{if(currentRoute())activate();});
  }
  addEventListener('hashchange',()=>{activate();});
  activate();
})();
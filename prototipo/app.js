/**
 * Portal de Internacionalização — demonstração acadêmica (Grupo 08).
 * Toda a base de orientações abaixo é fictícia e existe apenas no navegador.
 * Nenhum dado é enviado a serviços externos. Não existe autenticação real.
 */

const DRI_HOME = 'https://unifor.br/dri/inicial';
const DRI_STUDENT = 'https://unifor.br/dri/aluno';
const DRI_CONTACT = 'https://unifor.br/dri/contatos';

const categories = {
  mobilidade: { pt: 'Intercâmbio e mobilidade', en: 'Exchange and mobility' },
  titulacao: { pt: 'Dupla titulação', en: 'Dual degree' },
  documentos: { pt: 'Documentos e vistos', en: 'Documents and visas' },
  academico: { pt: 'Vida acadêmica', en: 'Academic life' },
  planejamento: { pt: 'Custos e hospedagem', en: 'Costs and accommodation' },
  apoio: { pt: 'Apoio e contatos', en: 'Support and contacts' }
};

const guides = [
  {
    id: 'intercambio', category: 'mobilidade', audience: ['estudante'],
    title: { pt: 'Intercâmbio acadêmico: por onde começar?', en: 'Academic exchange: where to start?' },
    summary: { pt: 'Conheça perguntas essenciais para investigar modalidades, oportunidades e etapas de mobilidade.', en: 'Explore the essential questions about mobility options, opportunities and stages.' },
    steps: {
      pt: ['Consulte as oportunidades e modalidades descritas nos canais oficiais.', 'Verifique a existência de editais atualizados e suas condições específicas.', 'Procure a DRI e a coordenação do curso para confirmar os próximos passos.'],
      en: ['Explore mobility opportunities and options on official channels.', 'Check current calls for applications and their specific conditions.', 'Contact DRI and your course coordination to confirm the next steps.']
    },
    official: DRI_STUDENT
  },
  {
    id: 'mobilidade-docente', category: 'mobilidade', audience: ['docente'],
    title: { pt: 'Mobilidade acadêmica para docentes', en: 'Academic mobility for faculty' },
    summary: { pt: 'Uma introdução aos caminhos de colaboração e atividades acadêmicas internacionais.', en: 'An introduction to opportunities for international collaboration and academic activities.' },
    steps: {
      pt: ['Identifique o tipo de atividade acadêmica que deseja realizar.', 'Consulte iniciativas e regras institucionais aplicáveis ao seu perfil.', 'Solicite orientação ao setor competente antes de qualquer encaminhamento.'],
      en: ['Identify the type of academic activity you plan to pursue.', 'Consult institutional opportunities and rules relevant to your profile.', 'Request guidance from the responsible office before proceeding.']
    },
    official: DRI_HOME
  },
  {
    id: 'dupla-titulacao', category: 'titulacao', audience: ['estudante'],
    title: { pt: 'Entenda a dupla titulação', en: 'Understanding dual degree programs' },
    summary: { pt: 'Saiba o que pesquisar sobre programas, universidades parceiras e condições acadêmicas.', en: 'Learn what to check about programs, partner universities and academic conditions.' },
    steps: {
      pt: ['Verifique se há programas e convênios aplicáveis ao seu curso.', 'Consulte editais, exigências acadêmicas e orientações atualizadas.', 'Confirme detalhes de currículos, diplomas e elegibilidade com a universidade.'],
      en: ['Check whether relevant programs or agreements exist for your course.', 'Consult current calls, academic requirements and official guidance.', 'Confirm curriculum, diploma and eligibility details with the university.']
    },
    official: DRI_STUDENT
  },
  {
    id: 'vistos-documentos', category: 'documentos', audience: ['estudante', 'internacional'],
    title: { pt: 'Vistos e documentação de viagem', en: 'Visas and travel documents' },
    summary: { pt: 'Organize as perguntas sobre documentos, passaporte e exigências de cada destino.', en: 'Organize your questions about travel documents, passports and destination rules.' },
    steps: {
      pt: ['Identifique o país de destino e a finalidade da viagem.', 'Confira os requisitos de documentos e vistos nas autoridades competentes.', 'Consulte a DRI para orientações acadêmicas complementares.'],
      en: ['Identify your destination country and reason for traveling.', 'Check visa and document requirements with the competent authorities.', 'Consult DRI for additional academic guidance.']
    },
    official: DRI_CONTACT
  },
  {
    id: 'aproveitamento', category: 'academico', audience: ['estudante'],
    title: { pt: 'Aproveitamento de disciplinas e créditos', en: 'Course recognition and transfer credits' },
    summary: { pt: 'Entenda com quem confirmar compatibilidade curricular e procedimentos acadêmicos.', en: 'Find out who can confirm curriculum compatibility and academic procedures.' },
    steps: {
      pt: ['Reúna informações sobre disciplinas e cargas horárias propostas.', 'Verifique as orientações da coordenação do seu curso.', 'Não presuma o aproveitamento: solicite confirmação às instâncias responsáveis.'],
      en: ['Gather the proposed courses and workload information.', 'Review the guidance provided by your course coordination.', 'Never assume credits will transfer: seek formal confirmation from the responsible office.']
    },
    official: DRI_HOME
  },
  {
    id: 'colaboracao-docente', category: 'academico', audience: ['docente'],
    title: { pt: 'Colaboração e projetos internacionais', en: 'International collaboration and projects' },
    summary: { pt: 'Informações introdutórias para quem procura atividades internacionais de ensino e pesquisa.', en: 'Introductory information for faculty exploring international teaching and research.' },
    steps: {
      pt: ['Defina a proposta ou o tipo de colaboração desejada.', 'Consulte canais institucionais sobre parcerias e oportunidades.', 'Valide requisitos e autorizações com os responsáveis pelo processo.'],
      en: ['Define the proposed activity or type of collaboration.', 'Consult institutional channels for partnerships and opportunities.', 'Verify requirements and authorizations with the responsible office.']
    },
    official: DRI_HOME
  },
  {
    id: 'custos', category: 'planejamento', audience: ['estudante'],
    title: { pt: 'Planejamento financeiro para mobilidade', en: 'Financial planning for mobility' },
    summary: { pt: 'Uma lista de temas que vale investigar: transporte, moradia, taxas e despesas.', en: 'A checklist of topics to explore: travel, housing, fees and living expenses.' },
    steps: {
      pt: ['Liste custos prováveis de viagem, moradia e rotina.', 'Verifique eventuais condições financeiras previstas em editais.', 'Consulte fontes atuais e faça seu planejamento antes de se comprometer.'],
      en: ['List likely travel, housing and everyday expenses.', 'Check financial conditions in any applicable official calls.', 'Review up-to-date sources and plan before making commitments.']
    },
    official: DRI_STUDENT
  },
  {
    id: 'hospedagem', category: 'planejamento', audience: ['estudante', 'internacional'],
    title: { pt: 'Hospedagem e preparação para a chegada', en: 'Accommodation and arrival preparation' },
    summary: { pt: 'Pontos de atenção para pesquisar moradia e adaptar-se a um novo ambiente.', en: 'Key topics to investigate when looking for housing and adapting to a new place.' },
    steps: {
      pt: ['Consulte orientações disponíveis sobre chegada e hospedagem.', 'Pesquise opções por canais confiáveis e verifique condições diretamente.', 'Confirme com a instituição de destino ou acolhimento quais apoios existem.'],
      en: ['Look for available arrival and accommodation guidance.', 'Research options through reliable sources and verify terms directly.', 'Ask the host institution what support is available.']
    },
    official: DRI_STUDENT
  },
  {
    id: 'alunos-internacionais', category: 'apoio', audience: ['internacional'],
    title: { pt: 'Primeiros passos para estudantes internacionais', en: 'First steps for international students' },
    summary: { pt: 'Explore onde encontrar orientações acadêmicas e canais de apoio da universidade.', en: 'Explore where to find academic guidance and institutional support channels.' },
    steps: {
      pt: ['Confira informações públicas da DRI para estudantes de outras instituições.', 'Liste dúvidas sobre documentação e vida acadêmica.', 'Entre em contato com os responsáveis para obter orientação atualizada.'],
      en: ['Review DRI guidance for students from other institutions.', 'List questions about documents and academic life.', 'Contact the responsible staff for current guidance.']
    },
    official: DRI_STUDENT
  },
  {
    id: 'contatos', category: 'apoio', audience: ['estudante', 'docente', 'internacional'],
    title: { pt: 'Onde tirar dúvidas com a DRI?', en: 'How to contact DRI' },
    summary: { pt: 'Saiba onde consultar os canais institucionais antes de iniciar um procedimento.', en: 'Find the official contact channels before starting a procedure.' },
    steps: {
      pt: ['Identifique o assunto da sua dúvida.', 'Abra a página de contatos da DRI e verifique o canal adequado.', 'Confirme diretamente as orientações, prazos e documentos atuais.'],
      en: ['Identify the topic of your question.', 'Open the official DRI contacts page and choose the appropriate channel.', 'Confirm current guidance, deadlines and documents directly.']
    },
    official: DRI_CONTACT
  }
];

const translations = {
  pt: {
    prototypeTop: 'Protótipo acadêmico · UNIFOR · Grupo 08', officialSite: 'Conheça a DRI oficial',
    navHome: 'Início', navTopics: 'Temas', navGuides: 'Orientações', navHow: 'Como funciona', navContact: 'Contatos', navExplore: 'Explorar portal',
    heroEyebrow: 'INTERNACIONALIZAÇÃO SEM COMPLICAÇÃO', heroTitle1: 'O mundo está', heroTitle2: 'mais perto', heroTitle3: 'do que você imagina.',
    heroLead: 'Encontre informações sobre intercâmbio, dupla titulação, documentos e tudo o que você precisa entender antes de dar o próximo passo.',
    searchLabel: 'Pesquisar orientações', heroPlaceholder: 'O que você procura? Ex.: intercâmbio', heroSearch: 'Pesquisar', popularSearches: 'Buscas populares:',
    suggestExchange: 'Intercâmbio', suggestDocs: 'Documentos', suggestDegree: 'Dupla titulação',
    audienceLabel: 'Este espaço é para você que é...', audienceStudent: 'Estudante da UNIFOR', audienceTeacher: 'Docente', audienceInternational: 'Estudante internacional',
    topicsEyebrow: 'EXPLORE POR INTERESSE', topicsTitle: 'Tudo começa com uma boa orientação.', topicsDescription: 'Os principais assuntos da internacionalização, organizados para você encontrar o que procura com menos etapas.', topicsAll: 'Ver todas as orientações',
    topicMobility: 'Intercâmbio e mobilidade', topicMobilityDesc: 'Explore possibilidades de estudar e ensinar fora.', topicDegree: 'Dupla titulação', topicDegreeDesc: 'Entenda conceitos e caminhos acadêmicos.',
    topicDocuments: 'Documentos e vistos', topicDocumentsDesc: 'Saiba o que consultar antes de viajar.', topicAcademic: 'Vida acadêmica', topicAcademicDesc: 'Disciplinas, créditos e cooperação acadêmica.',
    topicPlanning: 'Custos e hospedagem', topicPlanningDesc: 'Organize suas perguntas sobre planejamento.', topicSupport: 'Apoio e contatos', topicSupportDesc: 'Saiba onde confirmar suas dúvidas.',
    exploreEyebrow: 'CENTRAL DE ORIENTAÇÕES', exploreTitle: 'Encontre respostas para começar.', exploreDescription: 'Explore conteúdos demonstrativos, filtre por público ou pesquise um assunto.', demoBadge: 'Conteúdo demonstrativo',
    searchGuides: 'Pesquisar nas orientações', guidePlaceholder: 'Busque por assunto, palavra-chave...', filterByTopic: 'Filtrar por assunto', filterAllTopics: 'Todos os assuntos',
    filterEveryone: 'Todos os públicos', filterStudents: 'Estudantes', filterTeachers: 'Docentes', filterInternationals: 'Internacionais', clearFilters: 'Limpar filtros ×',
    emptyTitle: 'Nenhuma orientação encontrada.', emptyDescription: 'Tente outra palavra-chave ou remova algum filtro.', emptyReset: 'Mostrar todas as orientações',
    contentDisclaimer: 'As orientações desta demonstração são ilustrativas. Para regras, documentos e prazos vigentes, consulte os canais oficiais da DRI.',
    howEyebrow: 'SIMPLES, DO INÍCIO AO FIM', howTitle: 'O seu primeiro passo, com mais clareza.', howDescription: 'Nosso projeto foi pensado para diminuir dúvidas durante a busca de informações. É uma ferramenta de consulta, não de inscrição ou aprovação.', howCta: 'Começar a explorar',
    step1Title: 'Escolha o seu assunto', step1Description: 'Navegue pelas categorias ou pesquise diretamente o que precisa entender.',
    step2Title: 'Leia a orientação', step2Description: 'Organize suas dúvidas sobre procedimentos, documentos e próximos passos.',
    step3Title: 'Confirme na fonte oficial', step3Description: 'Verifique editais atualizados e procure o setor institucional responsável.',
    editorialCardEyebrow: 'DEMONSTRAÇÃO DE FLUXO', editorialSample: 'Orientação sobre documentos de viagem', editorialSampleDescription: 'Exemplo fictício para demonstrar a revisão de informações antes da publicação.',
    editorialEyebrow: 'INFORMAÇÃO CONFIÁVEL', editorialTitle: 'Informação bem cuidada também faz parte da experiência.', editorialDescription: 'Além de facilitar a consulta, o projeto prevê uma área restrita para editores e publicadores responsáveis por revisar informações antes que elas apareçam ao público.',
    editorialPoint1: 'Rascunhos não aparecem na consulta pública.', editorialPoint2: 'Aprovação por responsáveis autorizados.', editorialPoint3: 'Fontes e datas de revisão identificáveis.',
    editorialLimit: 'Autenticação real e publicação segura dependem de um backend, fora do escopo deste protótipo estático.', editorialWarning: 'Simulação local no navegador: não altera conteúdos reais e não possui login.',
    editorialReset: 'Reiniciar',
    faqEyebrow: 'PERGUNTAS FREQUENTES', faqTitle: 'Dúvidas que merecem respostas claras.', faqDescription: 'Orientações iniciais para você saber o que verificar antes de avançar.', faqTip: 'Dica: sempre confirme requisitos e prazos em editais e canais oficiais.',
    faqQ1: 'O portal faz inscrições para intercâmbio?', faqA1: 'Não. Este protótipo organiza informações para consulta. Inscrições e seleções seguem procedimentos e canais oficiais informados pela universidade.',
    faqQ2: 'Como saber quais documentos são exigidos?', faqA2: 'A documentação depende da modalidade, do destino e das regras vigentes. Use este portal para localizar o assunto e confira o edital ou setor responsável antes de tomar decisões.',
    faqQ3: 'Posso consultar as orientações sem cadastro?', faqA3: 'Sim, na proposta a consulta pública não exige conta. A autenticação é prevista apenas para quem administra e publica conteúdos.',
    faqQ4: 'Estas orientações já são oficiais da UNIFOR?', faqA4: 'Não. Trata-se de uma demonstração acadêmica do Grupo 08. O portal não representa um sistema institucional implantado, e os conteúdos de exemplo não substituem fontes oficiais.',
    contactEyebrow: 'PRECISA DE INFORMAÇÕES OFICIAIS?', contactTitle: 'O seu próximo passo é falar com a DRI.', contactDescription: 'Para orientações vigentes, editais e atendimento institucional, consulte o site oficial da Diretoria de Relações Internacionais da UNIFOR.', contactButton: 'Acessar contatos oficiais',
    footerDescription: 'Protótipo acadêmico de um portal de consulta sobre internacionalização. Desenvolvido como parte da disciplina de Requisitos e Modelagem de Sistemas.', footerNavigate: 'Navegue', footerFaq: 'Dúvidas frequentes', footerReferences: 'Referências', footerRepository: 'Repositório do projeto', footerSchool: 'Projeto de Requisitos e Modelagem de Sistemas', footerDisclaimer: 'Projeto independente, não oficial e sem coleta de dados pessoais.',
    dialogStepsTitle: 'Por onde começar', dialogNotice: 'Orientação ilustrativa. Confirme procedimentos e prazos nas fontes oficiais.', dialogOfficial: 'Consultar DRI oficial',
    results: (count) => `${count} ${count === 1 ? 'orientação encontrada' : 'orientações encontradas'}`,
    seeGuide: 'Ler orientação', demoGuide: 'Guia ilustrativo',
    status: ['Rascunho', 'Em revisão', 'Publicado'],
    editorialAdvance: ['Enviar para revisão', 'Aprovar publicação', 'Recomeçar demonstração'],
    openMenu: 'Abrir menu', closeMenu: 'Fechar menu', increaseFont: 'Aumentar tamanho do texto', normalFont: 'Restaurar tamanho do texto'
  },
  en: {
    prototypeTop: 'Academic prototype · UNIFOR · Group 08', officialSite: 'Visit the official DRI website',
    navHome: 'Home', navTopics: 'Topics', navGuides: 'Guides', navHow: 'How it works', navContact: 'Contacts', navExplore: 'Explore portal',
    heroEyebrow: 'INTERNATIONAL OPPORTUNITIES MADE CLEAR', heroTitle1: 'The world is', heroTitle2: 'closer', heroTitle3: 'than you imagine.',
    heroLead: 'Find information about academic exchanges, dual degrees, documents and everything you need to explore before taking the next step.',
    searchLabel: 'Search guides', heroPlaceholder: 'What are you looking for? E.g., exchange', heroSearch: 'Search', popularSearches: 'Popular searches:',
    suggestExchange: 'Exchange', suggestDocs: 'Documents', suggestDegree: 'Dual degree',
    audienceLabel: 'This space is designed for...', audienceStudent: 'UNIFOR students', audienceTeacher: 'Faculty', audienceInternational: 'International students',
    topicsEyebrow: 'EXPLORE BY INTEREST', topicsTitle: 'Every journey starts with good guidance.', topicsDescription: 'International education topics organized to help you find what you need in fewer steps.', topicsAll: 'See all guides',
    topicMobility: 'Exchange and mobility', topicMobilityDesc: 'Explore studying and teaching abroad.', topicDegree: 'Dual degree', topicDegreeDesc: 'Learn about academic pathways.',
    topicDocuments: 'Documents and visas', topicDocumentsDesc: 'Know what to check before traveling.', topicAcademic: 'Academic life', topicAcademicDesc: 'Courses, credits and collaboration.',
    topicPlanning: 'Costs and accommodation', topicPlanningDesc: 'Prepare your planning questions.', topicSupport: 'Support and contacts', topicSupportDesc: 'Know where to confirm your questions.',
    exploreEyebrow: 'GUIDANCE CENTER', exploreTitle: 'Find answers to get started.', exploreDescription: 'Explore sample content, filter by audience or search a topic.', demoBadge: 'Sample content',
    searchGuides: 'Search guides', guidePlaceholder: 'Search topics and keywords...', filterByTopic: 'Filter by topic', filterAllTopics: 'All topics',
    filterEveryone: 'All audiences', filterStudents: 'Students', filterTeachers: 'Faculty', filterInternationals: 'International', clearFilters: 'Clear filters ×',
    emptyTitle: 'No guides found.', emptyDescription: 'Try a different keyword or remove a filter.', emptyReset: 'Show all guides',
    contentDisclaimer: 'This demonstration contains illustrative content. For current rules, documents and deadlines, consult official DRI channels.',
    howEyebrow: 'SIMPLE, START TO FINISH', howTitle: 'Your first step, with more clarity.', howDescription: 'Our project aims to simplify the search for information. It is a guidance tool, not an application or approval service.', howCta: 'Start exploring',
    step1Title: 'Choose a topic', step1Description: 'Browse categories or search directly for what you need to understand.',
    step2Title: 'Read the guide', step2Description: 'Organize your questions about procedures, documents and next steps.',
    step3Title: 'Check the official source', step3Description: 'Verify current calls and contact the responsible institutional office.',
    editorialCardEyebrow: 'WORKFLOW DEMONSTRATION', editorialSample: 'Travel documents guidance', editorialSampleDescription: 'A fictional example illustrating the review process before publication.',
    editorialEyebrow: 'TRUSTWORTHY INFORMATION', editorialTitle: 'Well-managed information is part of the experience.', editorialDescription: 'Alongside public access, the project proposes a restricted area for editors and publishers to review guidance before it reaches visitors.',
    editorialPoint1: 'Drafts are not visible to the public.', editorialPoint2: 'Approval by authorized staff.', editorialPoint3: 'Identifiable sources and review dates.',
    editorialLimit: 'Real authentication and secure publishing require a backend, beyond this static prototype.', editorialWarning: 'Local browser simulation: does not modify real content and has no login.',
    editorialReset: 'Reset',
    faqEyebrow: 'FREQUENTLY ASKED QUESTIONS', faqTitle: 'Questions deserve clear answers.', faqDescription: 'Initial guidance about what to check before moving forward.', faqTip: 'Tip: always confirm requirements and deadlines in official calls and institutional channels.',
    faqQ1: 'Can I apply for an exchange through this portal?', faqA1: 'No. This prototype organizes information for consultation. Applications and selections follow official institutional procedures and channels.',
    faqQ2: 'How do I know which documents are required?', faqA2: 'Required documents depend on the program, destination and current rules. Use the portal to find a topic, then check the official call or contact the responsible office.',
    faqQ3: 'Can I browse guides without an account?', faqA3: 'Yes. The proposed public information area does not require an account. Authentication is planned only for people who manage and publish content.',
    faqQ4: 'Are these guides official UNIFOR information?', faqA4: 'No. This is an academic demonstration by Group 08. It is not an official institutional system, and sample content does not replace official sources.',
    contactEyebrow: 'NEED OFFICIAL INFORMATION?', contactTitle: 'Your next step is to contact DRI.', contactDescription: 'For current guidance, calls and institutional assistance, please consult the official UNIFOR International Relations Directorate website.', contactButton: 'Visit official contacts',
    footerDescription: 'Academic prototype of an internationalization guidance portal. Developed for the Requirements and Systems Modeling course.', footerNavigate: 'Navigate', footerFaq: 'Frequently asked questions', footerReferences: 'References', footerRepository: 'Project repository', footerSchool: 'Requirements and Systems Modeling project', footerDisclaimer: 'Independent, unofficial project with no personal data collection.',
    dialogStepsTitle: 'Where to start', dialogNotice: 'Illustrative guidance. Check procedures and deadlines with official sources.', dialogOfficial: 'Visit official DRI',
    results: (count) => `${count} ${count === 1 ? 'guide found' : 'guides found'}`,
    seeGuide: 'Read guide', demoGuide: 'Sample guide',
    status: ['Draft', 'Under review', 'Published'],
    editorialAdvance: ['Send for review', 'Approve publication', 'Restart demonstration'],
    openMenu: 'Open menu', closeMenu: 'Close menu', increaseFont: 'Increase text size', normalFont: 'Reset text size'
  }
};

const state = { language: 'pt', query: '', topic: 'all', audience: 'todos', editorialStage: 0 };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const t = (key) => translations[state.language][key];

function normalized(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function matchesGuide(guide) {
  const topicMatches = state.topic === 'all' || guide.category === state.topic;
  const audienceMatches = state.audience === 'todos' || guide.audience.includes(state.audience);
  const searchable = [guide.title.pt, guide.title.en, guide.summary.pt, guide.summary.en,
    categories[guide.category].pt, categories[guide.category].en, ...guide.steps.pt, ...guide.steps.en].join(' ');
  return topicMatches && audienceMatches && normalized(searchable).includes(normalized(state.query));
}

function createCard(guide) {
  const element = document.createElement('article');
  element.className = 'guide-card';

  const tags = document.createElement('div');
  tags.className = 'guide-card__top';
  const category = document.createElement('span');
  category.className = 'guide-tag';
  category.textContent = categories[guide.category][state.language];
  const sample = document.createElement('span');
  sample.className = 'guide-tag guide-tag--secondary';
  sample.textContent = t('demoGuide');
  tags.append(category, sample);

  const title = document.createElement('h3');
  title.textContent = guide.title[state.language];
  const summary = document.createElement('p');
  summary.textContent = guide.summary[state.language];

  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = `${t('seeGuide')} →`;
  button.setAttribute('aria-label', `${t('seeGuide')}: ${guide.title[state.language]}`);
  button.addEventListener('click', () => openGuide(guide.id));
  element.append(tags, title, summary, button);
  return element;
}

function renderGuides() {
  const visible = guides.filter(matchesGuide);
  const grid = $('#guidesGrid');
  grid.replaceChildren(...visible.map(createCard));
  $('#resultsCount').textContent = t('results')(visible.length);
  $('#emptyState').hidden = visible.length > 0;
  $('#topicFilter').value = state.topic;
  $$('.filter-chip').forEach((button) => {
    const active = button.dataset.audienceFilter === state.audience;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function openGuide(id) {
  const guide = guides.find((item) => item.id === id);
  if (!guide) return;
  $('#dialogCategory').textContent = categories[guide.category][state.language];
  $('#dialogTitle').textContent = guide.title[state.language];
  $('#dialogDescription').textContent = guide.summary[state.language];
  $('#dialogSteps').replaceChildren(...guide.steps[state.language].map((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    return li;
  }));
  $('#dialogOfficialLink').href = guide.official;
  $('#guideDialog').showModal();
}

function goToGuides() {
  $('#explorar').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
}

function setAudience(audience) {
  state.audience = audience;
  renderGuides();
  goToGuides();
}

function setTopic(topic) {
  state.topic = topic;
  state.audience = 'todos';
  state.query = '';
  $('#guideSearch').value = '';
  renderGuides();
  goToGuides();
}

function searchFor(query) {
  state.query = query.trim();
  state.topic = 'all';
  state.audience = 'todos';
  $('#guideSearch').value = state.query;
  renderGuides();
  goToGuides();
}

function clearFilters() {
  state.query = '';
  state.topic = 'all';
  state.audience = 'todos';
  $('#guideSearch').value = '';
  renderGuides();
}

function updateEditorial() {
  const stage = state.editorialStage;
  const badge = $('#editorStatus');
  badge.textContent = t('status')[stage];
  badge.classList.toggle('is-review', stage === 1);
  badge.classList.toggle('is-published', stage === 2);
  [$('#stage1'), $('#stage2'), $('#stage3')].forEach((element, index) => element.classList.toggle('is-complete', index <= stage));
  $('#advanceStage').replaceChildren(document.createTextNode(`${t('editorialAdvance')[stage]} `));
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('class', 'icon icon--small');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '#icon-arrow');
  icon.append(use);
  $('#advanceStage').append(icon);
}

function applyLanguage() {
  document.documentElement.lang = state.language === 'pt' ? 'pt-BR' : 'en';
  $$('[data-i18n]').forEach((element) => {
    const value = t(element.dataset.i18n);
    if (typeof value === 'string') {
      // Preserve icons embedded in buttons and links.
      const nonTextChildren = Array.from(element.children);
      element.replaceChildren(document.createTextNode(value));
      nonTextChildren.forEach((child) => element.append(child));
    }
  });
  $$('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
  });
  $('#localeButton').textContent = state.language === 'pt' ? 'EN' : 'PT';
  $('#localeButton').setAttribute('aria-label', state.language === 'pt' ? 'Switch to English' : 'Mudar para português');
  $('#menuButton').setAttribute('aria-label', t($('#menuButton').getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu'));
  $('#fontButton').setAttribute('aria-label', t(document.documentElement.classList.contains('font-large') ? 'normalFont' : 'increaseFont'));
  $('#closeDialog').setAttribute('aria-label', state.language === 'pt' ? 'Fechar orientação' : 'Close guide');
  $$('.audience-filters').forEach((element) => element.setAttribute('aria-label', state.language === 'pt' ? 'Filtrar por público' : 'Filter by audience'));
  updateEditorial();
  renderGuides();
  if (state.language === 'pt') {
    document.title = 'Portal de Internacionalização | Protótipo — Grupo 08';
  } else {
    document.title = 'Internationalization Portal | Prototype — Group 08';
  }
}

$('#heroSearchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  searchFor($('#heroSearchInput').value);
});
$('#guideSearch').addEventListener('input', (event) => {
  state.query = event.target.value;
  renderGuides();
});
$('#topicFilter').addEventListener('change', (event) => {
  state.topic = event.target.value;
  renderGuides();
});
$$('[data-audience-filter]').forEach((button) => button.addEventListener('click', () => setAudience(button.dataset.audienceFilter)));
$$('[data-audience-jump]').forEach((button) => button.addEventListener('click', () => setAudience(button.dataset.audienceJump)));
$$('[data-topic-jump]').forEach((button) => button.addEventListener('click', () => setTopic(button.dataset.topicJump)));
$$('[data-search]').forEach((button) => button.addEventListener('click', () => searchFor(state.language === 'pt' ? button.dataset.search : button.dataset.searchEn)));
$('#clearFilters').addEventListener('click', clearFilters);
$('#clearEmpty').addEventListener('click', clearFilters);

$('#localeButton').addEventListener('click', () => {
  state.language = state.language === 'pt' ? 'en' : 'pt';
  applyLanguage();
});

$('#fontButton').addEventListener('click', () => {
  const isLarge = document.documentElement.classList.toggle('font-large');
  $('#fontButton').setAttribute('aria-pressed', String(isLarge));
  $('#fontButton').setAttribute('aria-label', t(isLarge ? 'normalFont' : 'increaseFont'));
});

$('#menuButton').addEventListener('click', () => {
  const isOpen = $('#menu-principal').classList.toggle('is-open');
  $('#menuButton').setAttribute('aria-expanded', String(isOpen));
  $('#menuButton').setAttribute('aria-label', t(isOpen ? 'closeMenu' : 'openMenu'));
});

$$('#menu-principal a').forEach((link) => link.addEventListener('click', () => {
  $('#menu-principal').classList.remove('is-open');
  $('#menuButton').setAttribute('aria-expanded', 'false');
  $('#menuButton').setAttribute('aria-label', t('openMenu'));
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && $('#menu-principal').classList.contains('is-open')) {
    $('#menu-principal').classList.remove('is-open');
    $('#menuButton').setAttribute('aria-expanded', 'false');
    $('#menuButton').focus();
  }
});

$('#advanceStage').addEventListener('click', () => {
  state.editorialStage = (state.editorialStage + 1) % 3;
  updateEditorial();
});
$('#resetStage').addEventListener('click', () => {
  state.editorialStage = 0;
  updateEditorial();
});
$('#closeDialog').addEventListener('click', () => $('#guideDialog').close());
$('#guideDialog').addEventListener('click', (event) => {
  if (event.target === $('#guideDialog')) $('#guideDialog').close();
});

applyLanguage();

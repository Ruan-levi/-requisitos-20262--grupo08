# Protótipo web — Portal de Internacionalização

## Artefatos e demonstração da P2

- [Galeria dos 25 wireframes](wireframes/index.html), com SVG editável, inclusive telas administrativas propostas.
- [Protótipo funcionando no GitHub Pages](https://ruan-levi.github.io/-requisitos-20262--grupo08/).
- [SRS IEEE 830 v2](../Requisitos/Especificacao/06-SRS-IEEE830-P2.md) e [consistência UML](../Requisitos/Especificacao/07-matriz-consistencia-P2.md).
- [Plano da Sprint 2 / envio no AVA](../GestaoConfiguracao/06-plano-entrega-P2.md).

**Importante:** a existência dos wireframes de login/permissões não significa implantação de autenticação ou de backend.

**Projeto:** UNIFOR · Requisitos e Modelagem de Sistemas · Grupo 08 · 2026.2  
**Tecnologias:** HTML5, CSS3, JavaScript puro, sem dependências externas.  
**Objetivo:** demonstrar a experiência de navegação pensada nos requisitos do [Portal de Internacionalização](../Requisitos/Elicitacao/01-documento-de-visao.md).

> **Atenção:** esta é uma **demonstração acadêmica e não oficial**. As orientações dentro do site são exemplos ilustrativos, não normas, editais ou informações aprovadas pela UNIFOR. O protótipo não processa inscrições, não recebe documentos pessoais, não envia formulários e não implementa login real.

## Como abrir no VS Code

1. Abra o repositório no **Visual Studio Code**.
2. Abra o arquivo [`prototipo/index.html`](index.html).
3. Se preferir, utilize a extensão **Live Server** e escolha **Open with Live Server**.
4. Alternativamente, com Python instalado, abra o terminal na **raiz do repositório** e execute:

   ```bash
   python -m http.server 5500 --directory prototipo
   ```

5. Acesse `http://localhost:5500` em seu navegador.

Não é necessário executar `npm install`: este é um protótipo estático sem pacotes NPM.

Para conferir os testes de catálogo, links, rotas e requisitos demonstráveis, execute na raiz do repositório:

```bash
node --test prototipo/tests/*.test.cjs
```

Os testes utilizam apenas recursos nativos do Node.js.

## Como está organizado

```text
prototipo/
├── index.html                  # Estrutura, áreas e acessibilidade da página
├── style.css                   # Identidade visual e responsividade
├── app.js                      # Busca, filtros, cursos, fontes, idioma e demonstração editorial
├── experience.js               # Rotas e páginas internas de consulta
├── experience.css              # Layout das páginas internas
├── README.md                   # Este guia
├── tests/
│   ├── catalog.test.cjs       # Testes do catálogo e idiomas
│   ├── experience.test.cjs    # Testes estruturais da experiência
│   └── audit.test.cjs         # Testes de contato e navegação
└── assets/
    ├── conexoes-globais.svg   # Ilustração original do conceito internacional
    └── icone.svg              # Ícone original do protótipo
```

## O que pode ser demonstrado

**Nota:** as linhas abaixo registram funcionalidades da interface original e dos primeiros guias. A versão 2 incorpora páginas internas de programas, universidades, documentos, docentes, internacionais, notícias e jornada, explicadas em [Experiência interna ampliada](#experiência-interna-ampliada-v2). Algumas ações agora abrem páginas internas em vez de links externos.

| Funcionalidade | Teste prático | Artefatos relacionados |
|---|---|---|
| Página inicial e categorias | Clicar em **Intercâmbio e mobilidade**, **Documentos** ou outro tema. | RF01, RF04 |
| Central de fontes específicas | Abrir **Convênios**, **Guia Prático**, **Apoio ao Estudante** ou **Contatos** diretamente na Unifor. | RF05–RF06 |
| Busca de universidades por curso | Em **Universidades**, escolher ADS, Engenharia da Computação, Enfermagem, Direito ou Pós; abrir o documento oficial com a lista histórica. | RF01, RF05 |
| Pesquisa por palavra-chave | Digitar `intercâmbio`, `visto`, `custos` ou `docentes`. | RF02 |
| Filtro por público | Escolher **Estudantes**, **Docentes** ou **Internacionais** e combinar com categorias. | RF03 |
| Conteúdo explicativo | Abrir **Ler orientação**, ver passos, título da fonte e data da pesquisa; ou clicar diretamente em **Fonte oficial** no cartão. | RF04–RF06, RF08 |
| Interface em inglês | Usar o botão **EN** no cabeçalho para traduzir a interface e os exemplos. | Exemplo de RF07; tradução institucional ainda não aprovada |
| Texto ampliado | Usar o botão **A+**. Redimensionar a janela ou navegar pelo teclado. | Protótipo de RNF01, RNF02 e RNF06 |
| Fluxo editorial | Clicar em **Enviar para revisão**, depois **Aprovar publicação**. | Demonstração de RF11–RF12; sem backend |
| FAQ e contato institucional | Abrir as perguntas e o link externo para a DRI. | RF05–RF06 |

Os textos e os guias são definidos em um **catálogo local de demonstração** em `app.js`. Não há banco de dados nem persistência dos registros editoriais. Nenhuma ação de publicação altera conteúdo remoto.

### Fontes institucionais utilizadas

| Tema do protótipo | Destino oficial | Observação |
|---|---|---|
| Universidades e convênios | [DRI — Convênios](https://unifor.br/dri/convenios) | Página institucional, não catálogo de vagas em tempo real |
| Mobilidade, seleção, dupla titulação e dúvidas | [DRI — Apoio ao Estudante](https://unifor.br/dri/aluno) | Condições podem mudar por edital |
| Passaporte e procedimentos | [Guia Prático do Intercambista — 2024](https://unifor.br/documents/20143/3197315/guia-aluno-intercambista-2024.pdf) | Edição histórica, sempre confirmar atualização |
| Políticas e aproveitamento acadêmico | [Manual de Boas Práticas — 2026](https://unifor.br/documents/d/nei/manual-de-boas-praticas-de-internacionalizacao-atualizado-digital-2026) | Material institucional de referência |
| Formulários e requerimentos | [Secretaria Acadêmica](https://www.unifor.br/cesta-de-servicos/secretaria-academica) | Informações oficiais sobre processos administrativos |
| Equipe responsável | [DRI — Contatos](https://unifor.br/dri/contatos) | Confirmar contatos diretamente na fonte |

**Buscador por curso:** são links para documentos de 2024/2025 encontrados no domínio oficial da Unifor, não uma base atualizada automaticamente de todas as universidades. O visitante é alertado disso antes de abrir um documento. O selo **Fonte pesquisada em 19/11/2026** registra apenas a consulta documental realizada pelo grupo, não uma revisão ou aprovação de conteúdo pela DRI.

## Publicação pelo GitHub Pages

O arquivo [`.github/workflows/publicar-prototipo.yml`](../.github/workflows/publicar-prototipo.yml) executa validação antes de publicar **apenas a pasta `prototipo/`** a partir da branch `main`. A rotina [CI de validação](../.github/workflows/validar-prototipo.yml) verifica pull requests e atualizações.

Para ativar a hospedagem pela primeira vez, um administrador do repositório deverá selecionar:

1. GitHub → **Settings** → **Pages**.
2. Em **Build and deployment → Source**, escolher **GitHub Actions**.
3. Conferir a execução **Publicar protótipo (GitHub Pages)** na aba **Actions**.

Depois da primeira execução bem-sucedida, a URL aparecerá na seção **Pages** e no resultado da ação de deploy. As atualizações posteriores serão publicadas pelo fluxo automático.

## Limites do protótipo e próximos passos

- **Não é o site real da DRI.** A referência visual e temática é [unifor.br/dri/inicial](https://unifor.br/dri/inicial), sem reproduzir sua marca gráfica, textos integrais ou ferramentas institucionais.
- Os links externos direcionam ao portal real para que informações atuais sejam consultadas diretamente na fonte; não representam integração técnica.
- Acessibilidade e tradução têm **demonstrações iniciais**, mas a conformidade WCAG e revisões institucionais precisam de validação especializada.
- Autenticação, permissões, edição persistente, histórico e aprovação real de conteúdos dependem de sistema com backend, não oferecido por uma página estática.
- As necessidades e funcionalidades são **propostas acadêmicas não validadas por entrevistas reais**.

Consulte o [documento de necessidades dos usuários](../Requisitos/Elicitacao/05-necessidades-dos-usuarios.md), os [requisitos RF/RNF](../Requisitos/Especificacao/01-requisitos-funcionais-e-nao-funcionais.md) e o [backlog](../Requisitos/Especificacao/03-backlog-priorizado.md).


## Experiência interna ampliada (v2)

**Auditoria de apresentação:** veja [resultado da análise e checklist](../GestaoConfiguracao/05-auditoria-apresentacao-2026-11-26.md).

O portal incorpora uma **aplicação de navegação interna** integrada à página inicial, sem criar contas ou encaminhar visitantes à DRI a cada clique:

- **Central de serviços:** `#/painel` — entradas separadas para estudantes, docentes e visitantes internacionais.
- **Programas:** `#/programas` e páginas internas para intercâmbio acadêmico, dupla titulação, Buddy Program, EducationUSA e Free Mover. Cada página contém explicações, verificação de requisitos, etapas, perguntas frequentes e fontes contextuais.
- **Universidades:** `#/universidades` — exemplos institucionais documentados, filtros por país e área, páginas de detalhe por instituição e arquivos históricos por curso. **Não é um sistema de vagas ou lista exaustiva de convênios ativos.**
- **Documentos:** `#/documentos` — checklists em três fases, referências a guia, manual, secretaria e links oficiais. Marcar itens não salva nem envia dados.
- **Docentes:** `#/docentes` — caminhos para mobilidade, pesquisa e cooperação.
- **Estudantes internacionais:** `#/internacionais` — orientações de chegada, convênios, Free Mover e acolhimento.
- **Orientações:** `#/orientacoes` — busca e páginas internas detalhadas para todos os guias do catálogo anterior.
- **Minha jornada:** `#/planejar` — formulário orientativo de modalidade, área e destino, com roteiro local, imprimível e sem avaliação automática de elegibilidade.
- **Contatos:** `#/contatos` — FAQ e acesso aos canais oficiais.

A interface principal preserva português/inglês, ajuste de texto, navegação em teclado e adaptação a telas pequenas. Toda informação de parceria sem confirmação atual é identificada como **referência histórica/institucional**, e a candidatura permanece nos canais oficiais.

Arquivos novos: `experience.js` e `experience.css` (camada de navegação interna), mais `tests/experience.test.cjs`. O protótipo anterior continua presente em `index.html`, `app.js` e `style.css`. Links a serviços oficiais são contextuais, e não substituem informações internas.

### Verificações

```bash
node --test prototipo/tests/*.test.cjs
```

O workflow do GitHub Pages executa esses testes antes de publicar. A verificação visual nos principais navegadores e dispositivos ainda deve ser executada como parte da revisão de protótipo; testes automatizados não são certificação de acessibilidade.

O planejamento das telas para edição posterior no Figma está em [FIGMA-HANDOFF.md](FIGMA-HANDOFF.md). Não foi criado nem alterado arquivo no Figma nesta etapa.

## Redesign de navegação e portais estrangeiros

O pacote atual incorpora `redesign.css` sobre as folhas de estilo existentes, melhorando hierarquia tipográfica, espaçamento, cartões, responsividade, orientação por etapas e comunicação sobre fontes.

Rotas adicionais: `#/processo` (seis etapas) e `#/destinos`, com páginas específicas para Porto, Salamanca e Cuyo, que explicam como cada universidade recebe estudantes internacionais e oferecem links externos contextualizados. EducationUSA recebe tratamento separado como recurso de orientação nos Estados Unidos. Veja [pesquisa e links verificados](../GestaoConfiguracao/07-pesquisa-dri-destinos-e-redesign.md).

[Arquivo de redesign no Figma](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc) · [Portal publicado](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/painel).

Estas melhorias não introduzem backend, vagas em tempo real nem envio de documentos. Os testes automatizados não substituem a validação visual e de acessibilidade.

## Catálogo internacional ampliado — 16 universidades / 11 países

A rota `#/destinos` agora possui pesquisa por nome/cidade, filtros de país e de área, contagem de resultados e limpar filtros. Cada `#/destinos/:id` apresenta passos orientativos, referência Unifor, portal da instituição estrangeira e serviço complementar oficial. A lista `#/universidades` também incorpora os registros novos e permite chegar aos mesmos detalhes.

[Catálogo de fontes completo](../GestaoConfiguracao/08-catalogo-universidades-internacionais-2026.md) · [Abrir destinos](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/destinos).

Não são dados de vagas em tempo real. A pesquisa e os filtros não transmitem dados pessoais. O portfólio representa uma seleção de instituições mencionadas em fontes institucionais, não a base integral da DRI.

## Revisão para o pitch — DRI e universidades estrangeiras

A [auditoria transversal](../GestaoConfiguracao/09-auditoria-transversal-pitch-2026.md) explica o que está funcionando e o que permanece como protótipo. A tela da [Salamanca](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/destinos/salamanca) detalha seis etapas e disponibiliza links próprios para site institucional, mobilidade de entrada, Marco de Convenios, portal do estudante e contatos. O programa de [dupla titulação](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas/dupla-titulacao) diferencia as modalidades, associa exemplos de parceiros/cursos e conduz à Secretaria Acadêmica para consultar o Requerimento 175. A área de [documentação](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/documentos) possui orientações específicas por modalidade.

O planejamento passou a oferecer todos os países representados no catálogo, mantendo sua natureza orientativa e sem cadastro. Testes automatizados de renderização verificam as páginas de destino e a consistência desses caminhos.

## Atualização dos wireframes — versão do pitch

A [galeria de 25 wireframes](wireframes/index.html) foi revisada a partir da versão atual: catálogo de 16 instituições/11 países, filtro por país e área, dossiê Salamanca com seis etapas, dupla titulação e Requerimento 175, documentos por modalidade, processo em seis etapas, públicos, notícias, jornada e layout para celular. **Nenhuma funcionalidade foi modificada na aplicação**; esta atualização diz respeito apenas aos desenhos, inventário e testes.

## Cadastro, login e área pessoal — nova etapa

- [Abrir contas](conta.html) · [Comunicados](publicacoes.html).
- As três opções de registro são aluno, docente e solicitação de gestor. A concessão de administrador está bloqueada sem aprovação backend.
- O cliente `auth-client.js` usa as APIs REST Auth e GraphQL do Nhost; os arquivos `nhost/migrations/` e `nhost/metadata/` definem o banco e o modelo de permissões.
- `auth-config.js` está **intencionalmente vazio**. Não é possível cadastrar ou autenticar usuários reais antes de criar o projeto Nhost, executar a migração e validar as permissões.
- A experiência pública antiga continua acessível sem login. Os arquivos de teste incluem casos de segurança e papéis.
- [Requisitos e casos de uso complementares](../Requisitos/Especificacao/08-extensao-P3-cadastro-perfis.md) · [Implantação e checklist](../GestaoConfiguracao/11-implantacao-autenticacao-nhost.md).

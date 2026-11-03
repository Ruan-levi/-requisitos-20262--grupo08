# 7. Fontes, Premissas e Decisões

## 7.1 Fontes da atividade (fornecidas pelo grupo)

**D1 — UNIFOR (2026.2).** *Propostas de Projetos de Sistemas — Internacionalização e ENADE*. Material didático, 3 páginas. Tema escolhido: **4. Portal de Internacionalização**, p. 2. A publicação declara explicitamente que as propostas são pontos de partida, e não requisitos já validados.

**D2 — UNIFOR.** *Projeto de Extensão — Internacionalização: Engenharia de Requisitos Aplicada ao Contexto Educacional*. Apresentação de 10 slides da disciplina de Requisitos e Modelagem de Sistemas. Subsídios: contexto, públicos-alvo, metodologia, pesquisa e modelagem.

**D3 — Enunciado da Atividade 1 (P1).** Sprint 1 / Milestone M1 (20/10–02/11/2026): Documento de Visão, stakeholders, roteiro e resultados de entrevistas, RF/RNF, regras de negócio, backlog priorizado e três diagramas UML (casos de uso, componentes, implantação).

## 7.2 Decisões de escopo

- O **Tema 4** será tratado como **portal de consulta e orientação**, não plataforma de candidaturas.
- O catálogo de informações, a pesquisa e os contatos oficiais serão priorizados.
- A área restrita será destinada à criação, revisão e publicação de conteúdo.
- Conteúdos em outros idiomas dependerão de revisão; inglês é a primeira opção **proposta**.
- Os diagramas descrevem uma arquitetura **conceitual**, sem indicar que já há sistema implementado.

## 7.3 O que ainda não pode ser afirmado

- Que estudantes, docentes ou representantes foram entrevistados.
- Que uma unidade institucional aprovou requisitos, regras ou nomes de perfis.
- Que DRI e NEI sejam a mesma unidade administrativa.
- Que a UNIFOR autorizou integração com cadastros ou forneceu dados pessoais.
- **Convite ao professor:** a captura incorporada no [registro de evidência](../evidencias/registro-convite-professor.md) comprova **convite enviado, ainda pendente de aceitação**. Não está confirmado acesso efetivo.

## 7.4 Rastreabilidade entre entregáveis

D1/D2 → achados AD01–AD06 → RF01–RF14 e RNF01–RNF09 → RN01–RN11 → US01–US12 → casos de uso/componentes/implantação.

A [entrevista simulada](../Requisitos/Elicitacao/04-persona-e-entrevista-simulada.md) contém as hipóteses **SIM01–SIM09**, mantidas **separadas** dos achados documentais e sem alegação de validação empírica.

A [elicitação](../Requisitos/Elicitacao/03-roteiros-e-resultados.md) identifica os achados, e [requisitos](../Requisitos/Especificacao/01-requisitos-funcionais-e-nao-funcionais.md) e [backlog](../Requisitos/Especificacao/03-backlog-priorizado.md) registram as decisões derivadas.

## 7.5 Orientação de integridade documental

**Roteiros elaborados e análise documental realizada não substituem entrevistas reais.** O documento de elicitação deixa essa limitação explícita. Registros de entrevistas, quando existirem, devem incluir data, perfil genérico, respostas efetivamente obtidas e autorização apropriada.

## 7.6 Orientações gerais da disciplina e modelos de referência

Além da P1, foram consideradas as instruções gerais do GitHub: repositório nomeado no padrão **`requisitos-20262--grupoX`**, professor `marcelobezerra-dotcom` como colaborador, histórico de commits por sprint, issues e entregáveis versionados. Os modelos de organização são os repositórios públicos [Lapis-unifor](https://github.com/marcelobezerra-dotcom/Lapis-unifor) e [Feira Livre 2026.1](https://github.com/marcelobezerra-dotcom/requisitos-projeto-feira-livre-2026-01).

A **P1 exige especificamente** documento de visão, stakeholders, roteiros e resultados de entrevistas, requisitos, regras, backlog e diagramas de casos de uso, componentes e implantação. O [SRS preliminar](../Requisitos/Especificacao/04-SRS-preliminar.md) foi incluído **como material complementar**, sem afirmar que SRS, pitch ou protótipo são obrigatórios nesta entrega.

**Conformidade pendente:** o nome atual do repositório possui um hífen inicial extra (`-requisitos-20262--grupo08`), diferente do padrão `requisitos-20262--grupo08`. A correção exige renomeação administrativa no GitHub. As issues existentes foram organizadas pelo Grupo 08 de acordo com a P1; não há confirmação de que sejam cópias literais das issues fornecidas na disciplina.

# 6. Backlog Priorizado — Portal de Internacionalização

**Disciplina:** Requisitos e Modelagem de Sistemas  
**Tema:** 4 — Portal de Internacionalização · **Grupo:** 08  
**Método:** MoSCoW — **Must** (essencial), **Should** (importante), **Could** (opcional).

## 6.1 Histórias de usuário

| ID | História | Prioridade | Requisito(s) | Aceite resumido |
|---|---|---|---|---|
| US01 | Como visitante, quero visualizar categorias de internacionalização para escolher um assunto. | Must | RF01 | Categorias exibidas e acessíveis. |
| US02 | Como estudante, quero pesquisar palavras-chave para localizar orientações. | Must | RF02 | Resultados adequados ou mensagem de vazio. |
| US03 | Como usuário, quero filtrar por tema e público para encontrar conteúdo relevante. | Must | RF03 | Filtros aplicáveis e removíveis. |
| US04 | Como estudante/docente, quero consultar orientações sobre mobilidade e procedimentos. | Must | RF04 | Páginas informativas com títulos e conteúdos. |
| US05 | Como usuário, quero encontrar links e contatos oficiais para confirmar informações. | Must | RF05–RF06 | Fontes e contatos disponíveis. |
| US06 | Como editor, quero autenticar-me para manter conteúdos com segurança. | Must | RF09 | Gestão acessível apenas com autorização. |
| US07 | Como editor, quero criar e atualizar orientações para manter o portal útil. | Must | RF10 | Cadastro e alteração controlados. |
| US08 | Como publicador, quero revisar conteúdos antes de expô-los ao público. | Must | RF11–RF12 | Rascunhos ocultos; aprovação restrita. |
| US09 | Como estudante internacional, quero consultar versões em inglês para compreender orientações. | Should | RF07 | Apenas traduções aprovadas. |
| US10 | Como usuário, quero conhecer a fonte e a data de revisão para avaliar a orientação. | Should | RF08 | Fonte e data visíveis. |
| US11 | Como usuário, quero sinalizar conteúdo desatualizado para ajudar na correção. | Could | RF13 | Registro encaminhado à gestão. |

## 6.2 Justificativa da priorização

O **MVP** deve permitir que o usuário **encontre, leia e confira orientações confiáveis** e que a equipe autorizada **mantenha o conteúdo**. Por isso, busca, organização, fontes e gestão editorial são essenciais. Idiomas adicionais e comunicação de problemas são funcionalidades priorizadas para evolução, sujeitas à validação com os usuários.

## 6.3 Backlog da Sprint 1 / Milestone M1

**Período do enunciado:** 20/10/2026 a 02/11/2026.  
**Objetivo:** **levantamento e modelagem inicial** — não é exigido programar o portal nesta primeira entrega.

| Tarefa | Entregável | Situação |
|---|---|---|
| M1-01 — Definir visão do produto | [Documento de Visão](01-documento-de-visao.md) | Documento elaborado; validação pendente |
| M1-02 — Identificar stakeholders | [Stakeholders](02-stakeholders.md) | Mapeamento preliminar |
| M1-03 — Elicitar necessidades | [Elicitação e entrevistas](03-elicitacao-entrevistas.md) | Análise documental e roteiros; entrevistas não comprovadas |
| M1-04 — Especificar RF/RNF | [Requisitos](04-requisitos.md) | Especificação inicial |
| M1-05 — Definir regras de negócio | [Regras](05-regras-de-negocio.md) | Regras propostas |
| M1-06 — Priorizar backlog | Este documento | Priorização inicial |
| M1-07 — Modelar Casos de Uso | [Diagrama de Casos de Uso](../diagramas/01-casos-de-uso.puml) | Modelo inicial |
| M1-08 — Modelar Componentes | [Diagrama de Componentes](../diagramas/02-componentes.puml) | Modelo inicial |
| M1-09 — Modelar Implantação | [Diagrama de Implantação](../diagramas/03-implantacao.puml) | Modelo conceitual |
| M1-10 — Conferir entrega | README, evidências e GitHub | Verificar convite ao professor e entrega no AVA |

## 6.4 Dependências, riscos e revisão

- Entrevistas e testes de navegação podem alterar a prioridade das histórias.
- Regras editoriais e fontes precisam de validação institucional.
- O MVP deve evitar cadastro e processamento de documentos sensíveis de candidatos.
- A revisão futura deverá registrar mudanças e justificativas, mantendo rastreabilidade entre achados, RF e histórias.

**Status honesto:** as histórias de usuário são propostas acadêmicas e não depoimentos coletados.

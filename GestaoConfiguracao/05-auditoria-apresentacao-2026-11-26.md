# Auditoria para apresentação — 26/11/2026
**Projeto:** Portal de Internacionalização · Requisitos e Modelagem de Sistemas · Grupo 08  
**Data da auditoria:** 25/11/2026  
**Código:** [protótipo](../prototipo/) · [site demonstrável](https://ruan-levi.github.io/-requisitos-20262--grupo08/) · [workflow](../.github/workflows/publicar-prototipo.yml)

## Escopo verificado

A atividade P1 descrita em [orientações da entrega](01-orientacoes-da-entrega-P1.md) exige Documento de Visão, identificação de stakeholders, roteiro/resultados de elicitação, RF/RNF, regras de negócio, backlog e UML (Casos de Uso, Componentes e Implantação). Os documentos estão presentes no repositório. A **entrevista real não foi comprovada**: roteiro e entrevista simulada **não** substituem a aplicação com participantes. A permissão atual do professor `marcelobezerra-dotcom` foi verificada como **`write`** no GitHub em 25/11/2026. A submissão ao AVA permanece sem comprovação.

O protótipo complementar apresenta uma aplicação estática baseada em HTML/CSS/JS, em GitHub Pages. Ele **não implementa** o sistema editorial e administrativo da SRS; isto deve ser mencionado na apresentação para não confundir o público.

## Rastreabilidade dos requisitos funcionais

| RF | Evidência no protótipo | Situação |
|---|---|---|
| RF01 — categorias | Categorias e navegação inicial | Demonstrado |
| RF02 — pesquisa | Busca no catálogo e em orientações | Demonstrado |
| RF03 — tema/público | Filtros na seção original de orientações; experiência interna possui busca sem filtro por público | Parcial quanto à nova tela |
| RF04 — orientações | Páginas de programas e guias, documentação, custos, hospedagem, vida acadêmica | Demonstrado (conteúdo didático) |
| RF05 — fontes | Links externos por contexto (guia, documento, página da DRI) | Demonstrado, precisa conferir todos os destinos |
| RF06 — contatos | Página interna `#/contatos`; canal central `dri@unifor.br`, (85) 3477-3834 | Demonstrado; fonte institucional |
| RF07 — PT/EN aprovados | Alternância interface/itens exemplificativos PT/EN | Parcial: não há aprovação institucional |
| RF08 — fonte e última revisão | Fontes por orientação; data de **pesquisa documental** | Parcial: data da última revisão editorial não implementada |
| RF09 — autenticação | Sem login e autorização real | Não implementado |
| RF10 — editar conteúdo | Conteúdo estático no JS; não há painel CRUD | Não implementado |
| RF11 — estados editoriais | Simulação local rascunho/revisão/publicação | Demonstrativo, não funcional no servidor |
| RF12 — publicador aprova | Simulação local sem permissões | Não implementado |
| RF13 — sinalizar desatualização | Ausente | Não implementado (Could) |
| RF14 — gerenciar perfis | Ausente | Não implementado |

## Requisitos não funcionais

| RNF | Situação de evidência |
|---|---|
| RNF01 — WCAG 2.2 AA | Recursos básicos de foco, teclado e texto ampliado; **não auditado** formalmente |
| RNF02 — responsivo | CSS com breakpoints desktop/tablet/mobile; testar visualmente em aparelhos |
| RNF03 — segurança | GitHub Pages em HTTPS; sem autenticação ou autorização de backend |
| RNF04 — navegadores | **Não há evidência registrada** de testes em Chrome, Edge e Firefox |
| RNF05 — privacidade | Não coleta CPF, fotos ou documentos; checklists locais transitórios |
| RNF06 — usabilidade | Estrutura temática e estados vazios; falta teste real com usuários |
| RNF07 — rastreabilidade | Fonte documental visível; sem auditoria de editor/revisor |
| RNF08 — manutenção | Atualização ainda exige editar código, não painel persistente |
| RNF09 — desempenho | Sem teste de carga que prove a meta de 95% das buscas até 3 s |

## Riscos que precisam ser informados

1. Listas e notícias antigas são **referências históricas**, não vagas, editais ou convênios confirmados para o semestre atual.
2. O portal é **independente e acadêmico**, não um produto oficial implantado pela Unifor.
3. O fluxo editorial de três estados é **demonstração local**; não existe autenticação, banco, auditoria ou publicação remota.
4. A atualização de 25/11/2026 passou **16 de 16 testes automáticos**, incluindo checagem de sintaxe e integridade, e o [GitHub Pages publicou com sucesso](https://github.com/Ruan-levi/-requisitos-20262--grupo08/actions/runs/45739825496). Isso **não comprova** uma revisão visual em navegadores reais ou todos os destinos externos (issues #13 e #14).
5. Houve correção de canal central de contato para `dri@unifor.br` e `+55 85 3477-3834`, conforme [página oficial de Contatos](https://unifor.br/dri/contatos).
6. GitHub Pages pode levar alguns instantes após novo merge para refletir a versão; verificar o status em Actions antes de demonstrar.

## Roteiro de demonstração recomendado (4–6 minutos)

1. **Problema e objetivo (30 s):** estudantes e docentes encontram orientações espalhadas em múltiplas páginas, e o protótipo centraliza a descoberta.
2. **Documentação P1 (40 s):** abrir README e mostrar Visão, Stakeholders, RF/RNF, Regras, Backlog e os três diagramas UML. Explicar a natureza preliminar da elicitação.
3. **Navegação pública (60 s):** abrir [início](https://ruan-levi.github.io/-requisitos-20262--grupo08/) e acessar [Programas](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas), uma modalidade, perguntas frequentes e fonte contextual.
4. **Universidades (50 s):** acessar [Universidades](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/universidades), filtrar por país/área, abrir detalhe e indicar a diferença entre lista de referência e vaga atual.
5. **Documentos e roteiro (60 s):** marcar uma etapa no [checklist](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/documentos) e gerar uma jornada em [Minha jornada](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/planejar).
6. **Qualidade e gestão (40 s):** mostrar [Actions](https://github.com/Ruan-levi/-requisitos-20262--grupo08/actions), [Issues](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues), milestone M1 e o controle das pendências.
7. **Limitações (20 s):** explicitar o que está no protótipo e o que requer sistema com backend.

## Check rápido antes de abrir no projetor

- [ ] Abrir site em aba anônima e confirmar que todas as seções carregam.
- [ ] Testar a busca de orientação e o estado sem resultado.
- [ ] Abrir e fechar FAQ, alternar PT/EN e A+.
- [ ] Testar menus de Programas, Universidades, Documentos e Minha jornada.
- [ ] Confirmar que o link **Fonte oficial** abre o assunto correto e não uma página genérica.
- [ ] Verificar os links do README e diagramas UML.
- [ ] Confirmar último Actions **verde**, e realizar captura para evidência.
- [ ] Evitar apresentar entrevista fictícia como entrevista realizada.
- [ ] Não afirmar que existe login, inscrição, aprovação real ou vagas abertas.

## Gestão GitHub

**M1 — Elicitação e Modelagem Inicial** (histórica): issues #1–#10. Oito concluídas; **#3 e #10 devem continuar abertas** até evidência de entrevista real e ações externas. Manter essas pendências explícitas evita marcar o marco 100% quando não está completo.

**M2 — Protótipo e validação** (marco planejado, **ainda não criado na plataforma**): issues [#13](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/13) (smoke test), [#14](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/14) (fontes), [#15](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/15) (backend editorial), [#16](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/16) (a11y), [#17](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/17) (milestone/Project) e [#18](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/18) (documentação e CI). Esses itens ficam sem milestone no GitHub enquanto a M2 não puder ser criada pelo fluxo de integração.

**CI:** [Validar protótipo](../.github/workflows/validar-prototipo.yml) executa verificações em PRs e pushes da `main`, com 16 testes aprovados em 25/11/2026. **Deploy:** [Publicar protótipo](../.github/workflows/publicar-prototipo.yml) executou validação e publicou com sucesso após [PR #19](https://github.com/Ruan-levi/-requisitos-20262--grupo08/pull/19). Sucesso na CI não equivale a testes de usabilidade completos.

---
**Parecer:** os artefatos escritos da P1 estão majoritariamente organizados, com lacuna real de entrevista e confirmação da submissão no AVA; o protótipo atende a maior parte dos fluxos informativos, mas **não aos RF administrativos**, que fazem parte da proposta de produto, não da implementação estática. Não atribuir nota exata sem rubrica de apresentação mais recente.

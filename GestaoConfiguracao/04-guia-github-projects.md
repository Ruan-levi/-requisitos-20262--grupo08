# GitHub Projects, Sprints e Kanban — Grupo 08

Este guia aplica ao nosso projeto a organização ensinada no [tutorial do LAPIS](https://github.com/marcelobezerra-dotcom/Lapis-unifor/blob/main/GestaoConfiguracao/TUTORIAL_GITHUB_PROJECTS.md), sem duplicar issues já existentes.

## Acompanhamento da primeira atividade

**Milestone:** M1 — Elicitação e Modelagem Inicial · **20/10–02/11/2026**.

| Issues | Entregáveis | Situação |
|---|---|---|
| #1, #2 | Visão e stakeholders | Fechadas |
| #3 | Roteiro e resultados das entrevistas | **Aberta** — entrevista real não comprovada |
| #4, #5, #6 | RF/RNF, regras e backlog | Fechadas |
| #7, #8, #9 | Casos de Uso, Componentes e Implantação | Fechadas |
| #10 | Convite e entrega AVA | **Aberta** |

[Ver issues](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues) · [Ver milestone M1](https://github.com/Ruan-levi/-requisitos-20262--grupo08/milestones).

## Próxima etapa de organização — M2

A M1 é histórica e mantém as issues **#3 (entrevistas reais) e #10 (comprovação externa)** abertas, pois ainda não há evidência de sua conclusão. A **M2 — SRS, Consistência e Prototipação (P2)** foi [criada automaticamente no GitHub](https://github.com/Ruan-levi/-requisitos-20262--grupo08/actions/runs/45829236580) com prazo de referência **23/11/2026**, conforme o enunciado. A issue #17 permanece aberta porque o quadro Project/Kanban não foi comprovado.

| Issue | Atividade da M2 | Estado inicial |
|---|---|---|
| [#13](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/13) | Testes visuais desktop/mobile e navegação | Aberta |
| [#14](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/14) | Verificação de fontes externas e cursos | Aberta |
| [#15](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/15) | Evolução futura do backend editorial | Aberta |
| [#16](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/16) | Acessibilidade, navegadores e idiomas | Aberta |
| [#17](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/17) | Criar milestone M2 e GitHub Project | Aberta |
| [#18](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues/18) | Documentação e GitHub Actions | Concluída: CI verde e publicação após PR #19 |

O marco **M2 já existe** (número 2). O workflow `organizar-m2.yml` vinculou #13, #14, #16–#18 e #20–#23; #15 foi mantida fora da sprint de prototipação por tratar da implementação de backend.

## Como criar um Project do grupo

O **GitHub Project é um quadro de acompanhamento**, diferente da **Milestone**.

1. Na área de **Projects** do GitHub, criar **New project → Board**.
2. Nomear, por exemplo, **Grupo 08 — Portal de Internacionalização**.
3. Configurar visualização **Kanban**, com colunas por **Status**.
4. Usar estágios como **Backlog, Planejado, Em progresso, Em revisão, Concluído**.
5. Adicionar **as issues #1–#10 e #13–#18 já existentes**, sem importar cópias.
6. Se a interface permitir, configurar o campo **Sprint/Iteration** e associar os itens aos períodos.
7. Definir visibilidade apropriada e conferir se o professor consegue consultar a organização.

**Estado atual:** este arquivo orienta a configuração; **não comprova a criação de um GitHub Project**.

## Segurança e cuidado com o tutorial original

O LAPIS contém scripts PowerShell para importar issues e configurar sprints. **Não execute o importador automaticamente neste repositório**, porque as issues já foram criadas e podem ser duplicadas. Caso use um script localmente, **não publique tokens em arquivos, commits, conversas ou capturas**.

## Próximas atividades

Manter SRS, casos de uso, backlog e baselines em revisão incremental. A M2 registra o período formal informado pelo professor, **03/11 a 23/11/2026**. Os commits posteriores preservam a data real de elaboração.

[Gestão de configuração](README.md) · [Controle de mudanças](03-controle-de-mudancas.md).

## Sprint 2 real conforme enunciado da P2

O professor estabeleceu **03/11 a 23/11/2026** para a M2, com foco em **SRS IEEE 830, consistência UML e protótipos**. Os novos registros de trabalho são as issues **#20–#23**. O [workflow organizar-m2.yml](../.github/workflows/organizar-m2.yml) **criou e associou a M2** com [execução bem-sucedida](https://github.com/Ruan-levi/-requisitos-20262--grupo08/actions/runs/45829236580). Isso **não equivale** à criação de um quadro Projects/Kanban; este permanece pendente de comprovação.

A issue #15 de backend real não é exigência de implementação da P2; fica fora da M2. Os wireframes de administração atendem à **prototipação**, e não a um sistema com login efetivamente implantado.

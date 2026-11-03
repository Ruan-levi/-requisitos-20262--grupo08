# Portal de Internacionalização — UNIFOR

**Universidade de Fortaleza (UNIFOR)** · **Requisitos e Modelagem de Sistemas** · **Grupo 08** · **Semestre 2026.2**

**Tema escolhido:** 4 — Portal de Internacionalização  
**Atividade:** Trabalho P1 — Elicitação de Requisitos e Modelagem Inicial  
**Sprint 1 / Milestone M1:** 20/10 a 02/11/2026

## Apresentação do projeto

O **Portal de Internacionalização** é uma proposta acadêmica de sistema web para facilitar a busca de informações por **estudantes e docentes** interessados em serviços e oportunidades internacionais.

A ideia é organizar orientações relacionadas a **intercâmbio, dupla titulação, vistos, documentação, aproveitamento de disciplinas, despesas, hospedagem e canais de atendimento institucional**. O estudo também considera **acessibilidade, organização da informação, versões multilíngues e governança dos conteúdos**.

> **Problema a investigar:** como melhorar a experiência de estudantes e docentes na busca por informações e serviços de internacionalização?

**Escopo proposto:** portal de consulta e orientação, com pesquisa, categorias, fontes oficiais, contatos e área de atualização editorial. **Não inclui** inscrição oficial, aprovação automática, emissão de documentos ou integração com cadastros acadêmicos.

## Entrega 1 — Documentos obrigatórios

| Entregável | Documentação |
|---|---|
| 1. Documento de Visão | [01 — Documento de Visão](documentos/01-documento-de-visao.md) |
| 2. Identificação de Stakeholders | [02 — Stakeholders](documentos/02-stakeholders.md) |
| 3. Roteiro e resultados da elicitação | [03 — Elicitação e Entrevistas](documentos/03-elicitacao-entrevistas.md) |
| 4. Requisitos funcionais e não funcionais | [04 — Requisitos](documentos/04-requisitos.md) |
| 5. Regras de negócio | [05 — Regras de Negócio](documentos/05-regras-de-negocio.md) |
| 6. Backlog priorizado | [06 — Backlog Priorizado](documentos/06-backlog-priorizado.md) |
| Referências e decisões | [07 — Fontes e Decisões](documentos/07-fontes-e-decisoes.md) |

### Diagramas UML

Os diagramas são disponibilizados em **SVG** (visualização direta) e **PlantUML** (fonte editável).

| Modelo exigido | Visualização | Fonte editável |
|---|---|---|
| Casos de Uso | [Visualizar SVG](diagramas/01-casos-de-uso.svg) | [PlantUML](diagramas/01-casos-de-uso.puml) |
| Componentes | [Visualizar SVG](diagramas/02-componentes.svg) | [PlantUML](diagramas/02-componentes.puml) |
| Implantação | [Visualizar SVG](diagramas/03-implantacao.svg) | [PlantUML](diagramas/03-implantacao.puml) |

<details>
<summary><strong>Visualizar — Diagrama de Casos de Uso</strong></summary>

![Diagrama de Casos de Uso](diagramas/01-casos-de-uso.svg)

</details>

<details>
<summary><strong>Visualizar — Diagrama de Componentes</strong></summary>

![Diagrama de Componentes](diagramas/02-componentes.svg)

</details>

<details>
<summary><strong>Visualizar — Diagrama de Implantação</strong></summary>

![Diagrama de Implantação](diagramas/03-implantacao.svg)

</details>

## Metodologia da Sprint M1

1. **Análise documental:** interpretação do Tema 4 e da apresentação de extensão da UNIFOR.
2. **Identificação de stakeholders:** estudantes, docentes, estudantes internacionais e gestores institucionais.
3. **Preparação de entrevistas:** roteiros com perguntas para os grupos de interesse.
4. **Elicitação inicial:** registro de achados documentais e identificação de hipóteses.
5. **Especificação:** RF/RNF, regras de negócio e critérios de aceitação.
6. **Priorização:** backlog MoSCoW e rastreabilidade de requisitos.
7. **Modelagem:** UML de casos de uso, componentes e implantação.

### Transparência sobre a elicitação

**Não foram fornecidas evidências de entrevistas reais com usuários.** O arquivo de elicitação registra os **resultados da análise documental** e os **roteiros preparados para futuras entrevistas**; não atribui falas inventadas a estudantes, docentes ou servidores.

As propostas são **requisitos preliminares**, sujeitos a validação com as partes interessadas. Isso corresponde ao alerta explícito do material institucional de que as oportunidades sugeridas não são requisitos já validados.

## Organização do repositório

```text
-requisitos-20262--grupo08/
├── README.md
├── documentos/
│   ├── 00-orientacoes-da-entrega.md
│   ├── 01-documento-de-visao.md
│   ├── 02-stakeholders.md
│   ├── 03-elicitacao-entrevistas.md
│   ├── 04-requisitos.md
│   ├── 05-regras-de-negocio.md
│   ├── 06-backlog-priorizado.md
│   └── 07-fontes-e-decisoes.md
├── diagramas/
│   ├── LEIA-ME.md
│   ├── 01-casos-de-uso.puml
│   ├── 01-casos-de-uso.svg
│   ├── 02-componentes.puml
│   ├── 02-componentes.svg
│   ├── 03-implantacao.puml
│   └── 03-implantacao.svg
└── evidencias/
    └── LEIA-ME.md
```

## Checklist para submissão no AVA

- [x] Documento de Visão, stakeholders, requisitos, regras e backlog documentados.
- [x] Roteiros de entrevistas e resultados da **análise documental** registrados.
- [x] Diagramas UML de Casos de Uso, Componentes e Implantação disponíveis.
- [x] Estrutura de arquivos e links de navegação organizada.
- [ ] **Realizar e registrar entrevistas reais**, caso exigidas para pontuação plena da elicitação.
- [ ] **Adicionar `marcelobezerra-dotcom` como colaborador** e enviar print real para `evidencias/convite-professor.png`.
- [ ] Confirmar a organização das issues na **Milestone M1**.
- [ ] Enviar o **link deste repositório** e a evidência exigida no AVA.

Consulte as [orientações de evidência](evidencias/LEIA-ME.md).

## Referências da disciplina

- UNIFOR. *Propostas de Projetos de Sistemas — Internacionalização e ENADE*, 2026.2, **Tema 4**, p. 2.
- UNIFOR. *Projeto de Extensão — Internacionalização: Engenharia de Requisitos Aplicada ao Contexto Educacional*, apresentação de Requisitos e Modelagem de Sistemas.

**Observação:** este repositório documenta a **fase de análise e modelagem**, não um portal já implementado ou implantado.

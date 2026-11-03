# 3. Elicitação de Requisitos: Roteiros e Resultados

**Tema:** Portal de Internacionalização · **Sprint:** M1  
**Abordagens:** análise documental + roteiros de entrevistas semiestruturadas + exemplo de entrevista simulada, identificado como ficção.

> **Declaração de integridade:** os resultados apresentados neste documento são **achados da análise documental**. A equipe não forneceu transcrições nem registros de entrevistas realizadas. Portanto, **não há respostas de entrevistados reais a relatar** nesta versão. Para demonstrar a técnica, existe uma **[entrevista simulada com persona fictícia](03b-entrevista-simulada.md)**, que não constitui pesquisa empírica.

## 3.1 Objetivo da elicitação

Investigar a experiência de estudantes e docentes na busca de orientações e compreender as necessidades dos responsáveis por manter e validar os conteúdos de internacionalização. A pesquisa deve priorizar **acessibilidade, organização da informação, idiomas e governança editorial**, conforme o Tema 4.

## 3.2 Fontes analisadas

**D1:** UNIFOR. *Propostas de Projetos de Sistemas — Internacionalização e ENADE*, material didático 2026.2, pp. 1–3, com foco no **Tema 4, p. 2**. O documento avisa expressamente que as propostas são pontos de partida, não requisitos validados.

**D2:** UNIFOR. *Projeto de Extensão — Internacionalização: Engenharia de Requisitos Aplicada ao Contexto Educacional*, apresentação da disciplina (slides sobre contexto, objetivos, escopo e metodologia).

## 3.3 Roteiro A — Estudantes

1. Você já procurou informações sobre intercâmbio ou dupla titulação?
2. Por onde começou a busca?
3. Quais assuntos foram mais difíceis de encontrar?
4. O que gostaria de saber sobre vistos, documentos, despesas e hospedagem?
5. Prefere procurar por palavra-chave ou navegar por categorias?
6. Como identifica se uma informação está atualizada?
7. Seria útil ter orientações em inglês?
8. Que dificuldade de navegação ou acessibilidade você encontrou?
9. Que informações deveriam aparecer logo na página inicial?
10. Qual melhoria considera prioritária?

## 3.4 Roteiro B — Docentes

1. Que orientações de internacionalização utiliza em suas atividades?
2. Quais assuntos precisam de uma área específica para docentes?
3. Onde procura hoje essas informações?
4. Quais dificuldades enfrenta para localizar fontes oficiais?
5. Precisa consultar páginas ou documentos em outros idiomas?
6. Como prefere encontrar o setor responsável por uma orientação?
7. Como verifica se as informações ainda são válidas?
8. Que função você considera indispensável no portal?

## 3.5 Roteiro C — Responsáveis pela internacionalização

1. Quais são as perguntas mais frequentes recebidas?
2. Quais são as fontes institucionais oficiais por assunto?
3. Quem redige, revisa e autoriza a publicação?
4. Como são atualizados editais, contatos, prazos e orientações?
5. Qual é a periodicidade de revisão desejada?
6. Quais conteúdos devem ser públicos ou restritos?
7. Quais idiomas são prioritários?
8. Como evitar que orientações antigas apareçam como vigentes?
9. Quais categorias facilitariam o atendimento ao público?
10. Como avaliar a utilidade de um portal unificado?

## 3.6 Procedimento para entrevistas reais

- Solicitar participação voluntária; explicar finalidade acadêmica.
- Duração sugerida: 10–15 minutos.
- Registrar data, perfil genérico e consentimento, evitando dados pessoais desnecessários.
- Anotar respostas de forma fiel, sem inventar falas.
- Sintetizar necessidades e relacionar cada achado aos requisitos.

## 3.7 Resultados disponíveis — análise documental

| ID | Achado fundamentado na fonte | Evidência | Requisitos derivados (hipóteses) |
|---|---|---|---|
| AD01 | O problema principal é melhorar a busca de informações e serviços por estudantes e docentes. | D1, Tema 4, p. 2 | RF01–RF03 |
| AD02 | As orientações abrangem intercâmbio, dupla titulação, vistos, documentação, aproveitamento, despesas, hospedagem e contatos. | D1, Tema 4, p. 2 | RF04–RF06 |
| AD03 | Acessibilidade, organização da informação, versões multilíngues e governança devem ser investigadas. | D1, Tema 4, p. 2 | RF07–RF12 e RNF01–RNF08 |
| AD04 | A metodologia prevê entrevistas com estudantes e equipe institucional e análise documental. | D2, slides 3 e 6 | Plano de entrevistas e validação |
| AD05 | O material de extensão inclui interesses de estudantes e gestão institucional. | D2, slides 4 e 7 | Separação de acesso público e editorial |
| AD06 | As propostas não constituem requisitos validados. | D1, pp. 1 e 3 | Marcar decisões como propostas, nunca normas oficiais |

**Síntese:** há base documental para propor um **portal informativo com pesquisa, organização temática, links oficiais, acessibilidade e atualização controlada**. A importância relativa de cada recurso ainda requer validação com participantes.

## 3.8 Registro de entrevistas — preenchimento mediante realização

| Campo | Registro |
|---|---|
| Perfil do participante | Não informado |
| Data/modalidade | Não informado |
| Consentimento | Não informado |
| Perguntas aplicadas | Não informadas |
| Respostas efetivamente obtidas | Não informadas |
| Necessidades identificadas | A confirmar com entrevistas |
| Requisitos ajustados após entrevista | A confirmar |

**Não atribuir depoimentos fictícios a estudantes, docentes ou servidores.**

## 3.9 Decisões e limitações da Sprint M1

- **Decisão:** priorizar documentação de um portal informativo; não modelar uma plataforma de seleção/inscrição completa.
- **Hipótese:** pesquisa e categorias tornam as orientações mais fáceis de encontrar.
- **Risco:** sem entrevistas, pode haver divergência entre a proposta e as necessidades reais.
- **Próximo passo:** realizar entrevistas e validar as hipóteses, registrando evidências e revisão do backlog.

**Rastreabilidade:** AD01–AD06 → [Requisitos](04-requisitos.md) → [Backlog](06-backlog-priorizado.md).

## 3.10. Exercício complementar: entrevista fictícia ilustrativa

Para exemplificar a aplicação do roteiro a um cenário coerente com a Proposta 4, foi criado o documento separado **[03b — Entrevista simulada](03b-entrevista-simulada.md)**. A personagem **Marina Costa Ribeiro** e suas respostas são **inteiramente fictícias**. A simulação serve para discussão de hipóteses sobre organização de informação, pesquisa, documentação, aproveitamento de disciplinas, despesas, acessibilidade e fontes oficiais.

**Rastreabilidade acadêmica:** achados **AD** = análise documental; hipóteses **SIM** = simulação fictícia; achados de entrevistas reais = **não coletados**. Hipóteses SIM não validam RF/RNF, nem substituem entrevistas exigidas no enunciado.

**A tarefa de realizar entrevistas verdadeiras deve permanecer aberta** até que sejam fornecidos registros autênticos.

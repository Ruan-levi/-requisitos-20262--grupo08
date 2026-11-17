# Necessidades dos usuários — Portal de Internacionalização

**Disciplina:** Requisitos e Modelagem de Sistemas — UNIFOR  
**Equipe:** Grupo 08 · **Tema:** Proposta 4 — Portal de Internacionalização  
**Versão:** 1.0 · **Situação:** levantamento preliminar, sujeito à validação

> **Natureza deste documento:** as necessidades abaixo foram **identificadas como hipóteses a partir dos materiais da disciplina e da análise documental do projeto**. Não são resultados de entrevistas reais, nem comprovam problemas específicos nos canais atuais da UNIFOR. A equipe ainda precisa validá-las com estudantes, docentes e responsáveis institucionais.

## 1. Contexto: por que propor o portal?

Ao procurar possibilidades de internacionalização acadêmica, uma pessoa pode precisar compreender **intercâmbio, dupla titulação, vistos, documentos, aproveitamento de disciplinas, despesas, hospedagem e canais de atendimento**. Esses assuntos envolvem informações distintas e podem mudar conforme o programa, o país e as orientações institucionais.

O problema investigado pelo Grupo 08 é: **como tornar a busca e a compreensão dessas informações mais simples para estudantes e docentes?**

A hipótese é que um **portal web informativo** ajude a organizar as orientações por assunto e público, permitir buscas diretas, indicar fontes e datas de revisão e mostrar o contato responsável por esclarecer dúvidas. Isso pode reduzir a necessidade de procurar informações em vários caminhos **caso essa dificuldade seja confirmada em pesquisa com usuários**.

**Necessidade central proposta:** encontrar informações institucionais de internacionalização de forma **organizada, clara, acessível e verificável**, sabendo por onde começar e onde confirmar cada orientação.

O portal **não substituirá** os setores responsáveis por candidaturas, aprovação de intercâmbios, emissão de vistos ou análise de aproveitamento acadêmico. Sua função é **informar e encaminhar**.

## 2. Quem poderá se beneficiar?

| Público | Situação de uso possível | Necessidade predominante |
|---|---|---|
| **Estudantes da UNIFOR** | Descobrir opções de mobilidade ou planejar uma experiência no exterior. | Entender oportunidades, etapas, documentos, custos, prazos e contatos. |
| **Docentes** | Consultar orientações relacionadas a ações e oportunidades acadêmicas internacionais. | Localizar procedimentos, informações pertinentes ao seu perfil e setor de referência. |
| **Estudantes internacionais** | Buscar orientações para compreender serviços e procedimentos institucionais. | Ler conteúdos compreensíveis, inclusive em idioma disponível e revisado. |
| **Visitantes interessados** | Conhecer informações públicas antes de entrar em contato com a universidade. | Navegar e consultar sem cadastro obrigatório. |
| **Editores e publicadores autorizados** | Preparar, revisar e disponibilizar orientações. | Manter informações organizadas, com fontes confiáveis e fluxo de aprovação. |
| **Administradores e apoio técnico** | Controlar acessos e apoiar o funcionamento do portal. | Garantir permissões adequadas, segurança, acessibilidade e manutenção. |

> Os papéis editoriais e as responsabilidades institucionais são **propostas para modelagem**. Os materiais citam **DRI** e **NEI**, mas suas atribuições e eventual relação ainda precisam ser confirmadas com a UNIFOR.

## 3. Matriz de necessidades identificadas

As necessidades estão descritas **do ponto de vista de quem usa o portal**. A coluna de resposta proposta indica *como* o sistema poderia atendê-las; não significa que a funcionalidade já esteja implementada.

| ID | Necessidade do usuário | Problema ou dúvida que busca resolver | Resposta proposta do portal | Referência |
|---|---|---|---|---|
| **NU01** | Saber **por onde começar** a pesquisa sobre internacionalização. | Não conhecer as opções nem a sequência inicial de consulta. | Página inicial com categorias e orientações introdutórias. | RF01, RF04; US01, US04 |
| **NU02** | **Encontrar rapidamente** um assunto específico. | Precisar localizar uma informação sem percorrer várias páginas. | Busca por palavras-chave nos conteúdos publicados. | RF02; US02 |
| **NU03** | Ver apenas informações **relevantes ao seu interesse ou perfil**. | Encontrar assuntos diferentes misturados na mesma consulta. | Filtros por tema e público-alvo. | RF03; US03 |
| **NU04** | **Compreender procedimentos e planejamento** de mobilidade. | Ter dúvidas sobre intercâmbio, dupla titulação, vistos, documentos, créditos, custos e hospedagem. | Páginas com orientações temáticas, escritas de maneira clara. | RF04; US04; RNF06 |
| **NU05** | **Confiar na procedência** de uma informação. | Não saber se determinada regra, prazo ou documento é oficial ou atual. | Indicação da fonte, links institucionais e data da última revisão. | RF05, RF08; US05, US10 |
| **NU06** | Saber **com quem falar** quando a consulta não resolver a dúvida. | Não conhecer o canal correto de atendimento para cada assunto. | Contatos e encaminhamentos institucionais relacionados ao tema. | RF06; US05 |
| **NU07** | Consultar informações **pelo celular e pelo computador**. | Ter dificuldades de leitura ou navegação em telas diferentes. | Interface responsiva e navegação consistente. | RNF02, RNF06 |
| **NU08** | Conseguir utilizar o portal **com autonomia e acessibilidade**. | Enfrentar barreiras de contraste, teclado, compreensão ou navegação. | Interface planejada segundo critérios de acessibilidade e testes com usuários. | RNF01, RNF06 |
| **NU09** | Ler orientações em **idioma compreensível**. | Precisar consultar informações sem domínio suficiente do português. | Conteúdo em português e, quando houver tradução revisada, opção em inglês. | RF07; US09 |
| **NU10** | Ter acesso a informações **atualizadas e consistentes**. | Receber orientações antigas ou contraditórias. | Cadastro, revisão, histórico e atualização por equipe autorizada. | RF08, RF10, RF11; US07, US10 |
| **NU11** | Garantir que somente **conteúdos conferidos** sejam publicados. | Risco de divulgação de orientações incompletas ou não verificadas. | Fluxo de rascunho, revisão e aprovação antes da publicação. | RF11, RF12; US08 |
| **NU12** | Proteger a **gestão do conteúdo** contra alterações indevidas. | Pessoas sem autorização modificarem orientações ou permissões. | Autenticação, perfis e controle de acesso editorial. | RF09, RF14; US06, US12; RNF03 |
| **NU13** | Poder **sinalizar informações possivelmente desatualizadas**. | Identificar um conteúdo que parece incorreto sem saber como avisar. | Mecanismo futuro de aviso à equipe, sem exigir dados pessoais. | RF13; US11 |

### Prioridades propostas

- **Essenciais para a versão inicial (MVP):** NU01–NU08 e NU10–NU12. Permitem descobrir, consultar, verificar e manter orientações.
- **Evolução importante:** NU09, com versões em outros idiomas disponibilizadas somente depois de revisão e aprovação.
- **Evolução opcional:** NU13, após validação da utilidade e do processo de tratamento dos avisos.

Essa classificação segue a lógica do [backlog MoSCoW](../Especificacao/03-backlog-priorizado.md) e poderá mudar após entrevistas e testes.

## 4. Situações que demonstram a utilidade do portal

### Cenário A — Estudante interessado em intercâmbio

1. Um estudante deseja conhecer possibilidades de estudo no exterior, mas ainda não sabe por onde começar.
2. Ele acessa a área pública, escolhe **Intercâmbio** ou pesquisa por uma palavra-chave.
3. Encontra orientações sobre procedimentos, documentação, despesas e aproveitamento de disciplinas.
4. Confere **fonte e data da revisão** e, se necessário, consulta o **contato institucional** indicado.

**Valor esperado:** o estudante consegue se orientar e formular perguntas mais específicas antes de procurar atendimento. **Não significa que o portal aprove sua candidatura.**

### Cenário B — Docente buscando uma orientação

1. Um docente procura informações sobre uma possibilidade acadêmica internacional.
2. Utiliza categorias, busca ou filtro direcionado ao seu perfil.
3. Consulta o conteúdo disponível, os documentos de referência e o canal responsável.

**Valor esperado:** acesso mais direto a orientações pertinentes, com encaminhamento para confirmação institucional.

### Cenário C — Responsável por atualizar conteúdos

1. Uma orientação precisa ser revisada porque uma fonte ou procedimento mudou.
2. Um **editor autorizado** modifica o rascunho e informa a fonte.
3. Um **publicador autorizado** verifica e aprova o conteúdo.
4. A versão publicada apresenta informações revisadas e identificáveis.

**Valor esperado:** maior consistência editorial e possibilidade de atualização sem alterações diretas no código do site.

Os cenários são **exemplos de uso propostos**, não relatos de pessoas entrevistadas nem demonstrações de software em produção.

## 5. Benefícios esperados e como verificar

| Benefício pretendido | Forma de avaliação futura |
|---|---|
| **Organização das informações** | Verificar se usuários encontram categorias e assuntos esperados. |
| **Facilidade para localizar orientações** | Realizar testes de busca com tarefas reais e observar tempo, tentativas e dificuldades. |
| **Clareza dos procedimentos** | Pedir que participantes expliquem, com suas palavras, os próximos passos de uma orientação consultada. |
| **Confiabilidade das fontes** | Conferir se o conteúdo exibe documentos institucionais, responsáveis e datas de revisão. |
| **Inclusão e acessibilidade** | Testar navegação por teclado, legibilidade, contraste, responsividade e compreensão. |
| **Manutenção organizada** | Avaliar o fluxo de criação, revisão, aprovação e rastreabilidade de alterações. |

**Importante:** esses benefícios são **objetivos esperados**, não ganhos já medidos.

## 6. O que ainda precisa ser validado com usuários reais

A etapa de elicitação deve confirmar se as dificuldades previstas de fato ocorrem, com qual frequência e quais soluções têm prioridade. Perguntas úteis incluem:

1. Onde você procura hoje informações sobre intercâmbio ou oportunidades internacionais?
2. Quais assuntos são mais difíceis de entender ou localizar? Pode contar um exemplo real?
3. Você prefere pesquisar por palavra-chave, explorar categorias ou combinar os dois?
4. Que informação precisa aparecer para você confiar em uma orientação?
5. Quando surge uma dúvida, como encontra o setor responsável?
6. Você costuma consultar esse tipo de conteúdo por celular ou computador?
7. Que barreiras de acessibilidade ou idioma precisam ser consideradas?
8. Para os responsáveis pelo conteúdo: como funcionam atualmente revisão, atualização e aprovação?

**Registro pendente:** realizar entrevistas verdadeiras com consentimento, registrar achados e revisar NU01–NU13 e os requisitos associados. A [persona e entrevista simulada](04-persona-e-entrevista-simulada.md) é apenas um exercício de análise, **não substitui evidência de campo**.

## 7. Relação com os artefatos do repositório

- [Documento de Visão](01-documento-de-visao.md): define problema, público e limites do produto.
- [Stakeholders](02-stakeholders.md): identifica grupos que poderão usar ou manter o portal.
- [Roteiros e resultados documentais](03-roteiros-e-resultados.md): apresenta as fontes **D1/D2** e os achados **AD01–AD06**.
- [Persona e entrevista simulada](04-persona-e-entrevista-simulada.md): explora hipóteses ilustrativas **SIM01–SIM09**, sem pesquisa real.
- [RF/RNF](../Especificacao/01-requisitos-funcionais-e-nao-funcionais.md): traduz as necessidades em comportamentos e qualidades propostas.
- [Backlog priorizado](../Especificacao/03-backlog-priorizado.md): reúne as histórias **US01–US12** e prioridades.
- [Fontes e decisões](../../GestaoConfiguracao/02-fontes-e-decisoes.md): registra documentos e restrições de escopo.

**Rastreabilidade proposta:** materiais **D1/D2** → achados documentais **AD** → necessidades **NU01–NU13** (hipóteses) → requisitos **RF/RNF** → histórias **US** → validação futura.

---

**Conclusão:** a principal justificativa para o Portal de Internacionalização é **facilitar o acesso e a compreensão de orientações institucionais**, organizando informações, permitindo a busca e indicando fontes e contatos confiáveis. O documento descreve **necessidades potenciais** que orientam o projeto, preservando a necessidade de confirmação com os públicos envolvidos.

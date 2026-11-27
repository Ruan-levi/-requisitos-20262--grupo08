# 🌍 Portal de Internacionalização — Grupo 08

**Requisitos e Modelagem de Sistemas · Unifor · 2026.2 · Proposta 4**

Um protótipo acadêmico pensado para ajudar estudantes e docentes a **entender oportunidades de internacionalização, organizar documentos e encontrar informações confiáveis** sem precisar começar a pesquisa do zero.

## 🚀 Acesse o projeto

| | Acesso | O que você encontra |
|---|---|---|
| 🌐 **Aplicação web** | **[Abrir o portal de internacionalização](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/painel)** | Protótipo navegável, com páginas, filtros, guias e links para instituições estrangeiras |
| 🎨 **Figma** | **[Visualizar o protótipo visual no Figma](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc)** | Telas editáveis do redesign, incluindo início, destinos, Salamanca, dupla titulação e versão mobile |
| 🧩 **Wireframes P2** | [Abrir galeria de wireframes](https://ruan-levi.github.io/-requisitos-20262--grupo08/wireframes/) | 25 telas vetoriais atualizadas (14 revisadas + 11 novas) |
| 📂 **Documentação** | [Consultar os artefatos do projeto](Requisitos/README.md) | Requisitos, especificações, casos de uso e diagramas |

> **Aplicação e Figma têm funções diferentes:** o GitHub Pages demonstra a navegação e as interações; o Figma apresenta o trabalho visual em camadas editáveis. O arquivo do Figma não substitui a aplicação funcional.

## 🔐 Cadastro e login — nova etapa de desenvolvimento

A aplicação recebeu uma **área de contas** com opções de **Aluno**, **Professor / Docente** e **Administrador / Gestor**, além de favoritos, checklist pessoal e um módulo editorial para gestores autorizados.

- **[Abrir interface de login e cadastro](https://ruan-levi.github.io/-requisitos-20262--grupo08/conta.html)**
- [Comunicados publicados pelo módulo editorial](https://ruan-levi.github.io/-requisitos-20262--grupo08/publicacoes.html)
- [Extensão dos requisitos e novos casos de uso](Requisitos/Especificacao/08-extensao-P3-cadastro-perfis.md)
- [Guia de implantação do Nhost e das permissões](GestaoConfiguracao/11-implantacao-autenticacao-nhost.md)

**Estado técnico:** interfaces, cliente Nhost Auth/GraphQL, SQL PostgreSQL, metadados de permissões e testes estão versionados. **O banco Nhost remoto ainda não foi criado/conectado**: até isso acontecer, a página informa que o cadastro está indisponível e não registra credenciais. Não é uma autenticação simulada. Ao solicitar perfil de gestor, a pessoa **não recebe permissões administrativas automaticamente**; a aprovação ocorre no backend.

---
## 💡 Sobre o projeto

**Problema:** informações sobre intercâmbio, dupla titulação, universidades parceiras, documentação e candidaturas estão distribuídas entre páginas da Unifor, editais e portais de instituições estrangeiras. Isso pode dificultar a compreensão do processo.

**Proposta:** reunir essas orientações em uma experiência mais intuitiva, com explicações antes de encaminhar o usuário ao serviço oficial correspondente. O estudante pode descobrir uma modalidade, pesquisar um destino, entender as etapas e consultar documentos em um único fluxo.

**Para quem?** Estudantes da Unifor interessados em experiências internacionais, estudantes estrangeiros e docentes que precisam de informações sobre cooperação acadêmica.

### O que é possível explorar

| Área | Funcionalidade | Acessar |
|---|---|---|
| ✈️ Programas | Intercâmbio, dupla titulação, Buddy Program, EducationUSA e Free Mover | [Programas](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas) |
| 🌎 Universidades | Catálogo orientativo de **16 instituições em 11 países**, com filtros e informações por universidade | [Destinos](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/destinos) |
| 🧭 Como funciona | Etapas para pesquisar, preparar documentos e compreender a candidatura | [Guia do processo](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/processo) |
| 📑 Documentação | Guias oficiais, listas por curso e checklists orientativos por modalidade | [Documentos](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/documentos) |
| 🎓 Dupla titulação | Diferenças em relação ao intercâmbio, exemplos de parceiros e referência ao Requerimento 175 | [Dupla titulação](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas/dupla-titulacao) |
| 🗺️ Minha jornada | Roteiro de pesquisa conforme modalidade, área acadêmica e país de interesse | [Planejar](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/planejar) |
| 💬 Atendimento | Orientações e canais institucionais para confirmar informações | [Contatos](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/contatos) |

As instituições são **referências documentadas**, não uma lista de vagas disponíveis ou de convênios necessariamente ativos para todos os cursos. As candidaturas e a confirmação de requisitos pertencem aos canais oficiais da DRI e das universidades.

---

## 🎤 Pitch — apresentação do projeto

### Nossa ideia em poucas palavras

O Portal de Internacionalização do Grupo 08 nasceu para simplificar a busca por oportunidades acadêmicas no exterior. Em vez de enviar imediatamente o estudante para páginas diferentes, a aplicação explica **o que fazer, por que fazer e onde confirmar cada informação**.

O diferencial não é apenas reunir links: é **orientar a jornada de quem deseja estudar fora**, com informações contextualizadas, pesquisa por destino e acesso direto às páginas específicas das instituições.

### Roteiro sugerido para demonstrar a aplicação

1. **Apresente o problema:** as informações estão espalhadas e nem sempre é simples identificar a próxima etapa.
2. **Mostre a solução:** abra a [central do portal](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/painel) e explique a organização por necessidades.
3. **Demonstre um caso real:** pesquise a [Universidad de Salamanca](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/destinos/salamanca), apresente o passo a passo e mostre os links para o site institucional, mobilidade por convênios e estudantes internacionais.
4. **Apresente outras modalidades:** abra a [dupla titulação](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas/dupla-titulacao) e explique suas diferenças em relação ao intercâmbio comum.
5. **Conclua a jornada:** mostre os [documentos](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/documentos) e o [planejamento orientativo](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/planejar).
6. **Encerre com o desenvolvimento:** apresente o [Figma](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc), o SRS, a UML e os testes do GitHub.

**Mensagem central do pitch:** tornar a internacionalização mais compreensível e acessível, ajudando o estudante a sair da dúvida inicial e chegar à fonte correta, com clareza sobre as etapas e os requisitos.

📖 **[Abrir a auditoria geral e o roteiro detalhado do pitch](GestaoConfiguracao/09-auditoria-transversal-pitch-2026.md)**

---

## 📚 Documentação acadêmica

O projeto começou na **P1 — Elicitação e Modelagem Inicial** e evoluiu na **P2 — Especificação Formal, Consistência e Prototipação**. As versões iniciais foram preservadas para registrar essa evolução.

### P1 — Levantamento e modelagem

| Entregável | Documento |
|---|---|
| Visão do projeto | [Documento de visão](Requisitos/Elicitacao/01-documento-de-visao.md) |
| Partes interessadas | [Stakeholders](Requisitos/Elicitacao/02-stakeholders.md) |
| Elicitação | [Roteiros e análise documental](Requisitos/Elicitacao/03-roteiros-e-resultados.md) |
| Persona | [Entrevista simulada](Requisitos/Elicitacao/04-persona-e-entrevista-simulada.md) |
| Requisitos | [Requisitos funcionais e não funcionais](Requisitos/Especificacao/01-requisitos-funcionais-e-nao-funcionais.md) |
| Regras de negócio | [RN01–RN11](Requisitos/Especificacao/02-regras-de-negocio.md) |
| Planejamento | [Backlog priorizado](Requisitos/Especificacao/03-backlog-priorizado.md) |
| UML inicial | [Casos de uso, componentes e implantação](diagrams/README.md) |

**Nota de transparência:** a entrevista apresentada como persona é uma simulação; a validação com entrevistados reais não deve ser considerada concluída.

### P2 — SRS, UML e prototipação

| Entregável | Documento |
|---|---|
| SRS (IEEE 830) | [Especificação formal v2.0](Requisitos/Especificacao/06-SRS-IEEE830-P2.md) |
| Rastreabilidade | [Matriz de consistência entre requisitos e UML](Requisitos/Especificacao/07-matriz-consistencia-P2.md) |
| Diagramas revisados | [UML P2 em PlantUML e SVG](diagrams/README.md) |
| Wireframes | [25 wireframes atualizados e documentação](prototipo/wireframes/README.md) |
| Protótipo web | [Documentação técnica da aplicação](prototipo/README.md) |
| Planejamento da entrega | [Plano P2 e checklist](GestaoConfiguracao/06-plano-entrega-P2.md) |

### Pesquisas e decisões de experiência

- [Pesquisa da DRI, universidades estrangeiras e melhorias de UX](GestaoConfiguracao/07-pesquisa-dri-destinos-e-redesign.md)
- [Catálogo ampliado de universidades e fontes oficiais](GestaoConfiguracao/08-catalogo-universidades-internacionais-2026.md)
- [Revisão transversal do protótipo para o pitch](GestaoConfiguracao/09-auditoria-transversal-pitch-2026.md)
- [Handoff e orientações para o Figma](prototipo/FIGMA-HANDOFF.md)

## 🛠️ Desenvolvimento e acompanhamento

**Tecnologias do protótipo:** HTML, CSS e JavaScript, hospedados no GitHub Pages. Os arquivos da aplicação ficam em [`prototipo/`](prototipo/); os diagramas e documentos permanecem em pastas próprias.

**Qualidade:** o projeto possui testes automatizados para requisitos documentais, navegação, páginas de destinos e fluxos de preparação. A última revisão da ampliação do catálogo e do pitch registrou **40 testes aprovados**; isso não substitui testes manuais de usabilidade e acessibilidade.

- [GitHub Actions — testes e publicação](https://github.com/Ruan-levi/-requisitos-20262--grupo08/actions)
- [Issues — tarefas e pendências](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues)
- [Milestones M1 e M2](https://github.com/Ruan-levi/-requisitos-20262--grupo08/milestones)
- [Gestão de configuração e histórico](GestaoConfiguracao/README.md)
- [Repositório de referência LAPIS](https://github.com/marcelobezerra-dotcom/Lapis-unifor)

## ⚠️ Limites do protótipo

Este é um **trabalho acadêmico independente**, não um portal oficial da Unifor. As informações orientam a pesquisa, mas **não garantem vagas, bolsas, elegibilidade ou validade atual de convênios**. A aplicação não realiza inscrições, não recebe documentos pessoais e **não possui login**, autenticação administrativa, API ou banco de dados em produção. Telas de gestão representam uma proposta futura. A homologação institucional e a entrega no AVA não devem ser presumidas.

---

**Equipe — Grupo 08:** Ruan Levi Ferreira Macedo · Lorhan Dejan Ferreira Macedo · Hiago Queiroz Barreto

**Universidade de Fortaleza — Unifor · 2026.2**

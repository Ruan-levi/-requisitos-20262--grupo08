# 🌍 internacionaliza. — Portal de Internacionalização

**Universidade de Fortaleza · Grupo 08 · Requisitos e Modelagem de Sistemas · 2026.2**

Protótipo acadêmico de um portal inspirado no atendimento da **Diretoria de Relações Internacionais (DRI)** da Unifor. Ajuda estudantes, docentes e visitantes a descobrir modalidades de internacionalização, pesquisar instituições e compreender as etapas antes de consultar os canais oficiais.

## Acesso rápido

| Plataforma | Acesso |
|---|---|
| 🌐 **Aplicação navegável** | **[Abrir o internacionaliza.](https://ruan-levi.github.io/-requisitos-20262--grupo08/)** |
| 🎨 **Figma** | **[Visualizar as telas do projeto](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc)** |
| 🧩 **Wireframes** | [Galeria com 25 telas](https://ruan-levi.github.io/-requisitos-20262--grupo08/wireframes/) |
| 🔐 **Contas e perfis** | [Aluno, docente e solicitação de gestor](https://ruan-levi.github.io/-requisitos-20262--grupo08/conta.html) |
| 📚 **Requisitos e casos de uso** | [Documentação acadêmica](Requisitos/README.md) |

**Experiência:** modo claro/escuro, português (PT), inglês (EN) e espanhol (ES) para a interface. As preferências são salvas apenas no navegador. Páginas e documentos institucionais extensos podem permanecer no idioma em que foram publicados.

> **Aviso:** demonstração acadêmica independente, **não oficial da Unifor/DRI**. O uso da identidade visual é uma referência de estudo, não uma homologação institucional. A seleção, as vagas e os editais dependem dos canais oficiais.

## O que o protótipo oferece

| Área | Funcionalidades | Demonstração |
|---|---|---|
| Programas | Intercâmbio, dupla titulação, Buddy Program, EducationUSA, Free Mover | [Programas](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas) |
| Universidades | 16 referências em 11 países, filtros e links para portais estrangeiros | [Catálogo](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/destinos) |
| Exemplos por destino | Processo contextualizado, nomeação e páginas oficiais da instituição | [Salamanca](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/destinos/salamanca) |
| Documentação | Guias, fontes da DRI, checklists e documentos por modalidade | [Documentos](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/documentos) |
| Planejamento | Etapas de pesquisa e roteiro orientativo | [Minha jornada](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/planejar) |
| Públicos | Orientações específicas para alunos, docentes e internacionais | [Painel](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/painel) |
| Atendimento | Contatos e links institucionais para confirmar informações | [Contatos](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/contatos) |

**Contas:** existe interface de cadastro e login com perfis de aluno, docente e solicitação de administrador. O sistema **não possui login funcional conectado a um banco Nhost remoto** nesta versão; o cadastro real permanece indisponível até a configuração segura do backend. Escolher “gestor” não concede privilégios administrativos.

## 🎤 Pitch — como demonstrar

O problema que buscamos resolver é a **dispersão de informações** entre a DRI, os editais, os documentos e as universidades estrangeiras. A solução é orientar o estudante em cada etapa, em vez de apresentar apenas uma lista de links.

1. Abra a [central de internacionalização](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/painel) e apresente os públicos e as modalidades.
2. Acesse o [catálogo](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/destinos) e filtre os destinos.
3. Demonstre a [Universidad de Salamanca](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/destinos/salamanca), seu roteiro e seus portais oficiais.
4. Compare [intercâmbio e dupla titulação](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas/dupla-titulacao), mostrando o Requerimento 175 quando aplicável.
5. Apresente os [documentos](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/documentos), a [jornada](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/planejar) e o comportamento responsivo.
6. Encerre mostrando [Figma](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc), casos de uso, UML e testes.

**Mensagem central:** simplificar o caminho do interesse inicial até a fonte institucional responsável.

## Documentação essencial

Os artefatos históricos da P1 e P2 foram preservados porque comprovam as decisões e a evolução dos requisitos:

| Entregável | Abrir |
|---|---|
| Documento de visão e levantamento | [Elicitação](Requisitos/Elicitacao/README.md) |
| Requisitos funcionais e não funcionais | [Requisitos iniciais](Requisitos/Especificacao/01-requisitos-funcionais-e-nao-funcionais.md) |
| SRS — P2 (IEEE 830) | [Especificação formal](Requisitos/Especificacao/06-SRS-IEEE830-P2.md) |
| Rastreabilidade | [Matriz de consistência](Requisitos/Especificacao/07-matriz-consistencia-P2.md) |
| Diagrama de casos de uso, componentes e implantação | [Diagramas UML](diagrams/README.md) |
| Ampliação de cadastro e casos de uso UC10–UC16 | [Extensão de requisitos](Requisitos/Especificacao/08-extensao-P3-cadastro-perfis.md) |
| Protótipo e testes | [Documentação técnica](prototipo/README.md) |
| Configuração futura do Nhost | [Instruções de implantação](GestaoConfiguracao/11-implantacao-autenticacao-nhost.md) |
| Registro e auditorias anteriores | [Gestão de configuração](GestaoConfiguracao/README.md) |

Os relatórios históricos de pesquisa e auditoria permanecem em `GestaoConfiguracao/` para rastreabilidade, sem necessidade de criar um relatório para cada pequena alteração de interface.

## Desenvolvimento

**Stack atual:** HTML5, CSS3 e JavaScript; hospedagem estática no GitHub Pages. O projeto contém cliente Nhost Auth/GraphQL e scripts PostgreSQL/Hasura para implantação futura, ainda sem conexão real.

Rodar os testes a partir da raiz do repositório:

```bash
node --test prototipo/tests/*.test.cjs
```

- [GitHub Actions — CI e publicação](https://github.com/Ruan-levi/-requisitos-20262--grupo08/actions)
- [Issues e pendências](https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues)
- [Referência de marca — Unifor](https://unifor.br/central-de-marca)
- [DRI — Unifor (fonte institucional)](https://unifor.br/dri/inicial)

## Limitações

O protótipo não realiza inscrições, avaliações de elegibilidade ou confirmação automática de bolsas, vagas e convênios. Checklists informativos não representam envio de documentos pessoais. A autenticação precisa de Nhost remoto configurado, migrações verificadas e testes reais antes de receber contas. A homologação pela Unifor e a submissão ao AVA não devem ser presumidas.

**Grupo 08:** Ruan Levi Ferreira Macedo · Lorhan Dejan Ferreira Macedo · Hiago Queiroz Barreto.

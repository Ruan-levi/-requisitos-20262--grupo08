# Revisão de consistência P2 — Matriz SRS × UML × protótipos

**Grupo 08 — Portal de Internacionalização** · **Versão:** 2.0 · **Data:** 26/11/2026  
**Sprint 2 / M2 (enunciado):** 03/11 a 23/11/2026 · **Escopo:** especificação formal, consistência e prototipação.

## 1. Método de revisão

1. Conservar os identificadores RF01–RF14, RNF01–RNF09, RN01–RN11 e US01–US12 da Sprint 1.
2. Revisar o texto da [SRS IEEE 830 v2.0](06-SRS-IEEE830-P2.md) contra os documentos iniciais.
3. Relacionar cada RF a um ou mais casos de uso (UC), à UML revisada e aos [wireframes P2](../../prototipo/wireframes/README.md).
4. Anotar o que está presente **de fato** no [site demonstrativo](https://ruan-levi.github.io/-requisitos-20262--grupo08/) e o que só existe no **sistema futuro**.
5. Registrar divergências sem inventar backend, aceite institucional, usuários reais ou vagas.

## 2. Rastreabilidade dos requisitos funcionais

| RF | Casos de uso SRS | Regra de negócio | Representação UML P2 | Wireframes | Evidência/tela | Avaliação |
|---|---|---|---|---|---|---|
| RF01 | UC01, UC03 | RN06 | Casos de uso: C1/C3; componentes: Portal público | 01, 02, 05 | Início, programas, universidades | Demonstrado |
| RF02 | UC02 | RN01 | Casos: C2; componentes: Busca e filtros | 01, 04 | Busca do catálogo | Demonstrado; API futura |
| RF03 | UC02, UC03 | RN06 | Casos: C2/C3; componentes: Busca e filtros | 04, 05 | Catálogo inicial / universidades | Parcial na nova tela |
| RF04 | UC01–UC05 | RN02, RN08 | Casos: C1/C4; componentes: Catálogo | 02, 03, 07, 08 | Programas / orientações / documentos | Demonstrado |
| RF05 | UC01, UC03–UC05 | RN02, RN08 | Casos: C4; componentes: Fontes externas | 03, 06, 07, 09 | Detalhes, links oficiais | Demonstrado com revisão de URLs pendente |
| RF06 | UC04, UC05 | RN08 | Casos: C4; componentes: Contatos | 09 | Contatos | Demonstrado |
| RF07 | UC05 | RN07 | Casos: C5; componentes: UI de idioma | 01, 09 | PT/EN | Parcial, sem aprovação institucional |
| RF08 | UC02, UC05, UC07 | RN05 | Casos: C4/C7; componentes: revisão | 03, 04, 11 | Fontes consultadas | Parcial, sem histórico |
| RF09 | UC06, UC08 | RN03, RN11 | Casos: C6/C8; componentes: Autenticação | 10, 12 | Wireframe administrativo | Não implementado |
| RF10 | UC07 | RN02, RN03, RN10 | Casos: C7; componentes: Gestão editorial | 11 | Wireframe administrativo | Não implementado |
| RF11 | UC07 | RN01, RN04, RN10 | Casos: C7; componentes: Gestão editorial | 11 | Simulação no site anterior | Somente simulação |
| RF12 | UC07 | RN04, RN07, RN10 | Casos: C7; componentes: Gestão editorial | 11 | Simulação no site anterior | Sem autorização real |
| RF13 | UC09 | — | Casos: C9 evolução; componentes: Sinalizações futuras | 13 | Wireframe evolução | Futuro, não implementado |
| RF14 | UC08 | RN11 | Casos: C8; componentes: Perfis e auditoria | 12 | Wireframe administrativo | Não implementado |

## 3. Consistência dos RNF

| RNF | Elemento modelado | Comprovação disponível / pendência |
|---|---|---|
| RNF01 | Interface navegável e estados de foco no protótipo | Referência WCAG 2.2 AA; testes assistivos e de contraste pendentes |
| RNF02 | GitHub Pages + cliente HTML responsivo | CSS por breakpoints; capturas mobile/tablet e teste manual pendentes |
| RNF03 | Diagrama de implantação distingue plataforma estática de solução com autenticação | HTTPS no Pages; autenticação **não** implementada |
| RNF04 | Navegador como nó na UML | Sem evidência formal nos três navegadores |
| RNF05 | Nenhuma coleta pública de documentos ou dados pessoais no protótipo | Checklists locais, sem backend |
| RNF06 | Busca, estados vazios, menus, FAQ, nomenclatura | Falta avaliação com usuários reais |
| RNF07 | Banco e auditoria apenas na arquitetura-alvo | Sem histórico persistido no protótipo |
| RNF08 | Gestão editorial somente na arquitetura-alvo | Necessário backend para editar sem alterar o código |
| RNF09 | Requisito de desempenho na SRS, infraestrutura conceitual na UML | Sem execução de ensaio de carga; meta é proposta |

## 4. Revisão dos diagramas UML (Sprint 2)

### 4.1 Casos de Uso

Foram incluídos/explicitados **explorar universidades**, **consultar documentação**, **gerar roteiro**, **consultar contatos/idiomas**, **editar/revisar** e **gerenciar perfis**, com separação entre público demonstrável e gestão futura. RF13 permanece opção de evolução. [PlantUML de origem](../../diagrams/01-casos-de-uso-P2.puml).

### 4.2 Componentes

Foi adotada uma separação entre **interface e dados locais do protótipo** e **API, banco, autenticação e auditoria concebidos para produto futuro**. Isso resolve a aparente contradição do diagrama da M1, que exibia API como se estivesse implantada. [PlantUML de origem](../../diagrams/02-componentes-P2.puml).

### 4.3 Implantação

O diagrama de implantação revisado distingue uma **implantação real (navegador → GitHub Pages)** e um **cenário futuro hipotético** com servidor e banco, sem afirmar que a aplicação está em produção institucional. [PlantUML de origem](../../diagrams/03-implantacao-P2.puml).

## 5. Divergências identificadas e tratamento

| Divergência | Tratamento P2 | Resultado |
|---|---|---|
| A SRS da M1 era sintética, com links para RF/RNF em vez de detalhes completos | Nova SRS com contexto, funções, interfaces, requisitos e UC01–UC09 | Formalizada e versionada |
| UML M1 indicava API/banco sem ambiente real | Diagramas P2 distinguem arquitetura projetada e site atual | Esclarecido |
| RF09–RF12/RF14 não existem no site estático | Wireframes específicos para login, editor e permissões, marcados como **proposta** | Representação de prototipação, não implementação |
| RF07 não possui tradução institucional aprovada | Marcar PT/EN como demonstração e manter requisito alvo | Não comprovar aprovação indevida |
| RF08 registra pesquisa, não revisão editorial persistente | Distinguir campos e indicar implementação futura | Requisito parcial |
| Arquivos de wireframe inexistentes até a P2 | Gerar galeria de telas vetoriais editáveis e vinculá-las à SRS | Evidência acrescentada |
| M2 no GitHub não era milestone efetivamente criada | Workflow [Organizar M2](../../.github/workflows/organizar-m2.yml) criou a milestone, vinculou as issues e concluiu [execução com sucesso](https://github.com/Ruan-levi/-requisitos-20262--grupo08/actions/runs/45829236580) | Resolvido (26/11/2026); Project separado pendente |
| Entrevista real não comprovada na M1 | Manter issue #3 aberta; não usar persona simulada como validação | Integridade acadêmica preservada |

## 6. Critérios de aceite da consistência

- [x] Todos os RF01–RF14 estão identificados na SRS e na matriz.
- [x] Todos os RNF01–RNF09 têm análise de validação.
- [x] Os casos de uso têm atores, precondições, fluxo, exceção e pós-condição.
- [x] Há correspondência explícita com telas e diagramas revisados.
- [x] Requisitos futuros são diferenciados dos recursos implementados.
- [ ] Teste de usabilidade com usuários reais e revisão institucional de regras.
- [ ] Verificação real de todos os links de universidades e editais.

**Referências:** [RF/RNF originais](01-requisitos-funcionais-e-nao-funcionais.md) · [SRS v2](06-SRS-IEEE830-P2.md) · [backlog](03-backlog-priorizado.md) · [Diagramas](../../diagrams/README.md) · [wireframes](../../prototipo/wireframes/README.md).

# Especificação de Requisitos de Software (SRS) — Versão Preliminar

**Projeto:** Portal de Internacionalização — UNIFOR · **Grupo 08**  
**Disciplina:** Requisitos e Modelagem de Sistemas · **Etapa:** Trabalho P1 / Sprint M1 (2026.2)  
**Versão:** 0.1 — consolidação acadêmica dos requisitos **propostos**, não validados institucionalmente.

> **Material complementar:** o enunciado específico da P1 exige Documento de Visão, stakeholders, elicitação, requisitos, regras, backlog e três diagramas UML. Esta SRS sintética foi adicionada **como apoio à rastreabilidade e ao versionamento** solicitados nas orientações gerais do GitHub; não substitui os documentos obrigatórios.

## 1. Introdução

### 1.1 Propósito
Consolidar o comportamento, as qualidades, as regras e as restrições propostas para um portal informativo de internacionalização acadêmica.

### 1.2 Problema
Como melhorar a experiência de estudantes e docentes ao procurar orientações e serviços de internacionalização?

### 1.3 Visão do produto
Portal público para consulta de orientações institucionais e painel editorial restrito para publicação de conteúdo. Fontes e informações oficiais devem ser verificadas pelos responsáveis antes da disponibilização.

### 1.4 Fontes
- UNIFOR, *Propostas de Projetos de Sistemas — Internacionalização e ENADE* (2026.2), Tema 4, p. 2.
- UNIFOR, *Projeto de Extensão — Internacionalização: Engenharia de Requisitos Aplicada ao Contexto Educacional*.
- Enunciado da Atividade 1 — Trabalho P1.

## 2. Usuários e contexto de operação

| Ator | Acesso/necessidade |
|---|---|
| Visitante/estudante/docente | Busca pública, filtros, consulta de conteúdos e contatos |
| Editor | Autenticação, criação e alteração de rascunhos |
| Publicador | Revisão e aprovação de conteúdos |
| Administrador | Gestão de permissões editoriais |

O produto é uma **proposta para sistema web responsivo**. O backend, a hospedagem e as integrações ainda não foram selecionados ou implementados.

## 3. Limites do sistema

**Dentro do MVP:** catálogo, pesquisa, filtros, orientações temáticas, referências oficiais, contatos, marca de revisão e painel de conteúdos.  
**Funcionalidades de evolução:** traduções aprovadas e comunicação de conteúdo desatualizado.  
**Fora do escopo:** inscrições oficiais, decisões automáticas de elegibilidade, emissão de vistos, pagamentos, alteração de histórico escolar, integrações institucionais sem autorização.

## 4. Requisitos (especificação de referência)

Os códigos e critérios de aceitação estão definidos integralmente em **[04-requisitos.md](01-requisitos-funcionais-e-nao-funcionais.md)**:

- **RF01–RF08:** navegação, pesquisa, filtragem, orientações, fontes, contatos, idioma e revisão.
- **RF09–RF12:** autenticação, gestão editorial e publicação.
- **RF13:** possibilidade futura de comunicar conteúdo desatualizado.
- **RF14:** administração dos perfis e das permissões.
- **RNF01–RNF09:** acessibilidade, responsividade, segurança, compatibilidade, privacidade, usabilidade, rastreabilidade, manutenibilidade e desempenho.

**Critério de qualidade:** os requisitos que dependem de decisões institucionais são hipóteses de produto, não políticas vigentes já verificadas.

## 5. Regras do domínio e controle de acesso

As regras **RN01–RN11** estão especificadas em **[05-regras-de-negocio.md](02-regras-de-negocio.md)**, abrangendo publicação, conteúdo obrigatório, autenticação, revisão, rastreabilidade, categorias, idiomas, fontes atuais, limitações da plataforma e administração de perfis.

O sistema **não determina elegibilidade para mobilidade** nem substitui instâncias acadêmicas responsáveis pela análise de candidaturas e aproveitamento de disciplinas.

## 6. Modelo de informação conceitual

| Entidade conceitual | Atributos propostos | Relações |
|---|---|---|
| Categoria | id, nome, descrição, público-alvo | 1 categoria contém várias orientações |
| Orientação | id, título, conteúdo, idioma, status, fonte, data_revisao | pertence a uma categoria |
| UsuárioEditorial | id, identificador, perfil, ativo | cria e revisa orientações |
| Revisão | id, orientação_id, responsável_id, data, decisão, observação | vinculada a orientação e usuário |
| FonteInstitucional | id, título, endereço, data_consulta | relacionada a uma ou mais orientações |

**Dados conceituais não representam banco de dados implantado.** Informações de estudantes, CPF, histórico e documentos pessoais **não são necessárias** na primeira versão proposta.

## 7. Casos de uso detalhados (resumo verificável)

### UC01 — Pesquisar orientação
**Ator:** Visitante (inclui estudantes e docentes).  
**Pré-condição:** existe catálogo de orientações publicadas.  
**Fluxo principal:** (1) visitante informa termo; (2) sistema pesquisa itens publicados; (3) apresenta resultados; (4) usuário abre orientação e consulta fonte e data.  
**Alternativa:** nenhum item corresponde; sistema comunica ausência de resultados e permite limpar busca.  
**Pós-condição:** visitante consulta informação; nenhum dado pessoal é exigido.  
**Requisitos:** RF02, RF04, RF05, RF08; RN01.

### UC02 — Publicar orientação revisada
**Atores:** Editor e Publicador.  
**Pré-condição:** usuários autenticados possuem permissões correspondentes.  
**Fluxo principal:** (1) editor cadastra rascunho com título, categoria e fonte; (2) encaminha à revisão; (3) publicador verifica fontes e clareza; (4) aprova; (5) sistema registra responsável e data e publica.  
**Alternativa:** publicador devolve para revisão; conteúdo continua não público.  
**Pós-condição:** apenas versão aprovada pode ser consultada.  
**Requisitos:** RF09–RF12; RN01–RN05, RN10.

### UC03 — Gerenciar permissões
**Ator:** Administrador.  
**Pré-condição:** usuário autenticado com privilégio de administração.  
**Fluxo principal:** (1) administrador seleciona conta editorial; (2) define perfil autorizado; (3) sistema valida permissões; (4) registra alteração.  
**Alternativa:** usuário sem autorização é bloqueado.  
**Requisitos:** RF09, RF14; RN03, RN11, RNF03, RNF07.

## 8. Modelagem UML

| Diagrama exigido | Fonte editável | Visual |
|---|---|---|
| Casos de Uso | [01-casos-de-uso.puml](../../diagrams/01-casos-de-uso.puml) | [SVG](../../diagrams/01-casos-de-uso.svg) |
| Componentes | [02-componentes.puml](../../diagrams/02-componentes.puml) | [SVG](../../diagrams/02-componentes.svg) |
| Implantação | [03-implantacao.puml](../../diagrams/03-implantacao.puml) | [SVG](../../diagrams/03-implantacao.svg) |

A implantação representa uma arquitetura **conceitual**, sem afirmação de deploy em produção.

## 9. Rastreabilidade e priorização

**Fontes D1/D2 → achados documentais AD01–AD06 → RF/RNF → RN → histórias US01–US12 → UML.**  
Consulte [elicitação](../Elicitacao/03-roteiros-e-resultados.md), [backlog](03-backlog-priorizado.md) e [fontes e decisões](../../GestaoConfiguracao/02-fontes-e-decisoes.md).

**A entrevista simulada** em [03b-entrevista-simulada.md](../Elicitacao/04-persona-e-entrevista-simulada.md) usa códigos **SIM**, que representam hipóteses fictícias e **não validam os requisitos**.

## 10. Pendências de validação

- Executar entrevistas reais e registrar resultados com consentimento.
- Verificar com representantes institucionais as categorias, atribuições DRI/NEI e fluxo editorial.
- Revisar critérios mensuráveis de desempenho após dimensionamento.
- Validar acessibilidade e idiomas em testes com usuários.
- Revisar requisitos quando houver evidência adicional.

**Esta SRS é um instrumento acadêmico de planejamento, não uma especificação institucional aprovada.**

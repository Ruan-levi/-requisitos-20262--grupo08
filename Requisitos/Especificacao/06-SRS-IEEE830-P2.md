# Especificação de Requisitos de Software (SRS) — P2 · IEEE 830
**Projeto:** Portal de Internacionalização da Universidade de Fortaleza — Grupo 08  
**Disciplina:** Requisitos e Modelagem de Sistemas · **Período:** 2026.2  
**Entrega:** Trabalho P2 — Sprint 2 / Milestone M2 · 03/11 a 23/11/2026  
**Versão:** 2.0 · **Data:** 26/11/2026 · **Estado:** especificação acadêmica revisada (não homologada pela Unifor)  
**Histórico:** v0.1 [SRS preliminar da P1](04-SRS-preliminar.md); v2.0 detalha requisitos, cenários, aceite e rastreabilidade.

> **Delimitação obrigatória:** este documento **especifica um produto futuro** e relaciona o protótipo desenvolvido. Requisitos de login, persistência e aprovação editorial **não estão implementados** no site estático; a demonstração editorial não comprova permissões reais.

## Controle de versões

| Versão | Base / mudança | Validação |
|---|---|---|
| 0.1 — M1 | Consolidação de escopo, RF/RNF, casos de uso iniciais e diagramas | Análise documental, sem entrevista real |
| 2.0 — M2 | Estrutura IEEE 830, requisitos completos, aceite verificável, interfaces, UC01–UC09, rastreabilidade, wireframes e diferenças entre projeto e protótipo | Revisão documental e de consistência entre artefatos; validação humana pendente |

## Sumário
1. Introdução: propósito, escopo, termos, referências e visão do documento.  
2. Descrição geral: perspectiva, funções, atores, ambiente, restrições e dependências.  
3. Requisitos específicos: interfaces, funções, requisitos não funcionais, dados e regras.  
4. Casos de uso detalhados.  
5. Verificação, consistência e rastreabilidade.  
6. Limitações e aceites da P2.  
7. Apêndices e links.

## 1. Introdução

### 1.1 Propósito

Definir de forma estruturada, verificável e identificada os requisitos do Portal de Internacionalização proposto para facilitar a busca de informações e orientações sobre mobilidade acadêmica. O público desta SRS é formado por estudantes, docentes, integrantes do Grupo 08, orientador da disciplina e possíveis equipes institucionais consultadas futuramente.

### 1.2 Escopo do produto

O portal deverá centralizar **consulta pública**, busca e filtros, explicações sobre intercâmbio, dupla titulação, vistos, documentação, créditos, custos e hospedagem, fontes e contatos oficiais, suporte a idioma e **gestão editorial autorizada**. Não realizará inscrições oficiais, análise automática de elegibilidade, emissão de documentos consulares, pagamentos, matrícula, alterações de histórico ou integração com a Unifor sem autorização.

**Protótipo P2:** aplicação em HTML/CSS/JavaScript no GitHub Pages que demonstra os fluxos públicos, inclusive programas, universidade por filtros, guias, documentos, jornada orientativa e contatos. Área administrativa futura é representada em wireframes e arquitetura conceitual, não por backend real.

### 1.3 Definições e abreviaturas

- **SRS:** Software Requirements Specification / Especificação de Requisitos de Software.
- **IEEE 830:** modelo de estruturação adotado por exigência do Trabalho P2 (Introdução, Descrição Geral, Requisitos Específicos).
- **RF / RNF:** requisito funcional / não funcional; **RN:** regra de negócio; **UC:** caso de uso; **US:** história de usuário.
- **DRI / NEI:** siglas encontradas nas fontes institucionais; a designação e responsabilidade de cada setor requerem confirmação formal.
- **Wireframe:** esquema de estrutura de tela e fluxo, sem compromisso com identidade gráfica final.
- **Protótipo:** demonstração navegável sem sistemas administrativos de produção.
- **Fonte histórica:** link para registro de ano/edição anterior que não comprova vaga, convênio ou edital atual.

### 1.4 Referências

- [Documento de visão — P1](../Elicitacao/01-documento-de-visao.md).
- [Especificação inicial RF01–RF14 e RNF01–RNF09](01-requisitos-funcionais-e-nao-funcionais.md).
- [Regras de negócio RN01–RN11](02-regras-de-negocio.md).
- [Backlog US01–US12](03-backlog-priorizado.md).
- [Elicitação documental e roteiros](../Elicitacao/03-roteiros-e-resultados.md).
- [UML revisada para P2](../../diagrams/README.md).
- [Wireframes P2](../../prototipo/wireframes/README.md).
- **IEEE Std 830-1998**, *Recommended Practice for Software Requirements Specifications* — referência de organização (sem reprodução do texto da norma).
- [Página pública da DRI](https://unifor.br/dri/inicial) — fonte institucional de contexto, **não** aprovação formal do projeto.

### 1.5 Organização deste documento

A seção 2 contextualiza usuários, funções e limitações. A seção 3 define requisitos e aceites. A seção 4 fornece fluxos principal/alternativo. A seção 5 relaciona os modelos e evidências. A seção 6 distingue o protótipo disponível da solução planejada.

## 2. Descrição geral

### 2.1 Perspectiva e integração

O portal é concebido como sistema informativo responsivo, com dois subsistemas: **área pública** e **gestão editorial restrita**. A implementação de demonstração é hospedada como site estático. Na arquitetura-alvo, as informações publicadas seriam servidas por API e banco, com permissões aplicadas no servidor. Isso **não é a infraestrutura efetivamente implantada**.

A comunicação com fontes externas ocorre por links para páginas, guias e documentos publicados em canais institucionais; não pressupõe integração autenticada ou troca automática de dados entre organizações.

### 2.2 Funções principais

1. Apresentar temas e programas de mobilidade e internacionalização.
2. Permitir busca pública e filtragem por categoria/público-alvo, além de país/área na exploração de instituições.
3. Exibir orientações, requisitos a conferir, perguntas frequentes, documentos e contato.
4. Apresentar fonte e revisão editorial responsável.
5. Disponibilizar experiência acessível e multilíngue quando tradução estiver aprovada.
6. No produto futuro, permitir acesso editorial autenticado, rascunhos, revisão, aprovação e histórico.

### 2.3 Perfis de usuário

| Perfil | Interesse | Permissão no sistema-alvo |
|---|---|---|
| Estudante / visitante | Consultar programas, universidades, documentação, gastos, contato | Somente leitura pública |
| Docente | Consultar mobilidade, pesquisa e procedimentos | Somente leitura pública |
| Estudante internacional | Buscar orientações e acolhimento, preferencialmente PT/EN | Somente leitura pública |
| Editor | Criar e alterar rascunhos | Leitura pública e edição autenticada |
| Publicador | Revisar e autorizar conteúdo | Leitura e aprovação autenticadas |
| Administrador | Administrar perfis e permissões | Privilégio máximo com auditoria |

### 2.4 Ambiente operacional

- **Protótipo real P2:** navegador moderno, site estático GitHub Pages, JavaScript executado no cliente, sem armazenamento persistente de cadastros.
- **Projeto alvo:** interface web responsiva em HTTPS, API de conteúdo, armazenamento de orientações e auditoria, autenticação/autorizações no backend; tecnologias de backend ainda não definidas.
- A interface deve permitir consulta sem instalação ou autenticação para leitores.

### 2.5 Restrições e premissas

- As propostas da disciplina e o material documental não equivalem à validação da DRI ou de participantes reais.
- Fontes de 2024/2025/2026 podem mudar; não afirmar vagas ou prazos como vigentes sem verificação.
- O MVP informativo não coleta dados de passaporte, visto ou histórico acadêmico dos visitantes.
- A identificação de papéis editoriais e a política de idiomas dependem de validação com os responsáveis.
- Não será usada a marca como se o portal independente fosse oficial.

### 2.6 Dependências e riscos

- Aprovação institucional para conteúdo editorial e fontes verificadas.
- Acesso a colaboradores para entrevistas/testes reais, ainda não documentados.
- Definição futura de tecnologia para backend, dados e segurança.
- Revisões periódicas das fontes, compatibilidade de navegação e privacidade.

## 3. Requisitos específicos

### 3.1 Interfaces externas

**3.1.1 Interface do usuário:** cabeçalho com menus, navegação por cartões, páginas de detalhe, busca, filtros, formulário de roteiro orientativo, checklists locais, FAQ, PT/EN e ajuste de fonte. Estados vazios, foco por teclado e avisos de fontes históricas devem ser visíveis.

**3.1.2 Interface de software:** protótipo usa HTML/CSS/JS estático sem API própria. Sistema-alvo prevê API para consultar conteúdos `publicado`, gerir versões e aplicar autorização; contrato técnico não definido nesta etapa.

**3.1.3 Interface de comunicação:** HTTPS para publicação e navegação externa; links oficiais em nova guia com `rel="noopener noreferrer"`. Nenhuma inscrição ou dado pessoal é transmitido pelo site acadêmico.

**3.1.4 Interfaces de hardware:** navegador em computadores, tablets e celulares; nenhuma integração com dispositivos especiais é exigida.

### 3.2 Requisitos funcionais detalhados

Os IDs RF01–RF14 foram **preservados da M1**. O quadro detalha sua verificação e o estágio real do protótipo.

| ID | Prioridade | Especificação verificável | Critério de aceite / teste | Tela ou módulo | Estado demonstrável |
|---|---|---|---|---|---|
| RF01 | Alta | A página inicial deverá apresentar categorias de internacionalização com acesso ao conteúdo respectivo. | Dado um visitante na página inicial, cada categoria apresenta rótulo legível e leva a uma rota relacionada; voltar permite repetir a consulta. | Página inicial / categorias | Protótipo |
| RF02 | Alta | O portal deverá pesquisar orientações públicas por palavra-chave, incluindo título e resumo, e apresentar mensagem quando não houver resultados. | Ao pesquisar 'intercâmbio' aparecem orientações correspondentes; texto inexistente produz estado vazio; busca não inclui rascunhos no sistema-alvo. | Busca na capa / Orientações | Protótipo público; filtro de publicado ainda depende do backend |
| RF03 | Alta | O usuário deverá combinar filtros de assunto e público-alvo na consulta de orientações, podendo limpar a seleção. | Selecionar um tema e um público restringe a lista; limpar restaura o catálogo; filtros de país/área em universidades são funções complementares. | Catálogo original / Universidades | Protótipo original demonstra público/tema; nova rota necessita uniformização |
| RF04 | Alta | O portal deverá fornecer informações sobre intercâmbio, dupla titulação, vistos, documentação, aproveitamento, despesas e hospedagem. | Uma orientação possui título, resumo, conteúdo ou passos, categoria e ressalvas de regras variáveis; temas essenciais são encontráveis por navegação ou pesquisa. | Programas / Orientações / Documentos | Protótipo (orientativo, não normativo) |
| RF05 | Alta | Cada orientação deverá permitir consultar a fonte institucional específica, sem substituir o conteúdo do portal por redirecionamentos genéricos. | Link externo abre o recurso oficial correspondente, com rótulo identificável; URLs são registradas e verificadas em revisão. | Detalhe de programa / Documentos / Instituições | Protótipo com revisão externa ainda pendente |
| RF06 | Alta | O portal deverá exibir contatos institucionais pertinentes ao assunto consultado. | Usuário encontra e-mail, telefone e canal oficial; contato pode ser atualizado após confirmação da DRI. | Contatos / lateral das orientações | Protótipo informativo |
| RF07 | Média | O portal deverá oferecer conteúdos em português e inglês quando houver tradução aprovada pelo publicador. | Botão de idioma altera interfaces traduzidas; material não aprovado não recebe selo oficial; fallback é identificado no sistema-alvo. | Cabeçalho PT/EN / todas as telas | Protótipo bilíngue demonstrativo; aprovação ausente |
| RF08 | Alta | Cada orientação publicada deverá registrar e exibir fonte, responsável editorial e data da última revisão. | Item publicado exibe fonte, data de revisão e identificação de responsabilidade; data de consulta documental não substitui última revisão. | Detalhes / metadados editoriais | Parcial; pesquisa datada sem revisor persistido |
| RF09 | Alta | O sistema deverá autenticar editor, publicador e administrador antes de permitir acesso à gestão. | Visitante não abre edição; credenciais inválidas são rejeitadas; sessão e permissão são verificadas no servidor. | Wireframe A — login | Planejado, não implementado |
| RF10 | Alta | Editor autorizado deverá cadastrar, categorizar, alterar e salvar orientações em área administrativa. | Editor salva rascunho com título, categoria, conteúdo e fonte; alterações ficam persistidas com autor identificado. | Wireframe B — editor | Planejado, não implementado |
| RF11 | Alta | A orientação deverá passar pelos estados rascunho, em revisão e publicado, preservando histórico de alterações. | Item rascunho/em revisão não aparece na busca pública; mudanças de estado são registradas; aprovação libera versão publicada. | Wireframe B — revisão | Simulação de UI; sem persistência/controle real |
| RF12 | Alta | Somente publicadores ou administradores autorizados poderão aprovar ou devolver a revisão para edição. | Editor não obtém acesso de aprovação; publicador registra decisão, responsável e data; conteúdo não aprovado não é publicado. | Wireframe B — painel editorial | Planejado, demonstração local não restrita |
| RF13 | Baixa | Visitante poderá sinalizar um conteúdo potencialmente desatualizado sem fornecer dados pessoais. | Ação permite indicar orientação e motivo, recebe confirmação de registro e direciona à fila de revisão sem exigir cadastro. | Wireframe C — sinalização | Futuro; sem envio real |
| RF14 | Alta | Administrador autorizado deverá gerenciar os perfis e permissões de editores/publicadores com registro da operação. | Conta sem perfil admin recebe acesso negado; alteração registra agente, papel anterior/novo e data. | Wireframe D — permissões | Planejado, não implementado |

### 3.3 Requisitos não funcionais

| ID | Qualidade | Especificação | Evidência exigida |
|---|---|---|---|
| RNF01 | Acessibilidade | A interface deverá seguir práticas WCAG 2.2 AA, incluindo foco visível, navegação por teclado, rótulos e contraste. | Checklist WCAG, testes teclado/screen reader e ferramenta automática; conformidade não presumida. |
| RNF02 | Responsividade | Telas prioritárias deverão ser utilizáveis em celular e computador sem rolagem horizontal funcional. | Inspeção em 390 px, 768 px e 1440 px e rotas principais; evidência de screenshots. |
| RNF03 | Segurança | Quando houver backend, sessão/autorização serão validadas no servidor; acesso público deverá usar HTTPS. | Teste negativo de autorização; acesso sem credenciais é negado; HTTPS no ambiente implantado. |
| RNF04 | Compatibilidade | A interface deverá funcionar nas versões correntes de Chrome, Edge e Firefox. | Roteiro de navegação repetido nos três navegadores com registro de resultados. |
| RNF05 | Privacidade | Coletar apenas os dados estritamente necessários, sem upload de documento pessoal no MVP. | Verificar formulários, armazenamento e rede; ausência de CPF e arquivos sensíveis nos fluxos públicos. |
| RNF06 | Usabilidade | O conteúdo deverá manter linguagem clara, feedback de busca vazia, localização dos controles e hierarquia consistente. | Teste com tarefas definidas e questionário; taxa/tempo serão estabelecidos após pesquisa. |
| RNF07 | Rastreabilidade | Toda publicação e alteração administrativa deverá guardar responsável, data e ação. | Auditoria no banco e consulta de versões; requisito do sistema futuro. |
| RNF08 | Manutenibilidade | Manutenção de orientações no produto final deverá ocorrer pelo painel, sem editar diretamente JS/HTML. | Teste do fluxo de editor autorizado; na demonstração estática o requisito não é atendido. |
| RNF09 | Desempenho | Meta **proposta**: ao menos 95% das buscas até 3 s com 20 usuários simultâneos e catálogo de até 10 mil orientações. | Teste de carga e medição do percentil/contagem em homologação; parâmetros sujeitos à revisão. |

### 3.4 Requisitos de dados

Entidades propostas: **Categoria** (ID, nome, público), **Orientação** (ID, título, descrição, categoria, status, idioma, fonte, data), **FonteInstitucional** (URL, título, data de consulta), **UsuárioEditorial** (identificador, perfil, ativo), **Revisão** (conteúdo, responsável, data, decisão), **Sinalização** (orientação, motivo, data, status sem identidade obrigatória). São entidades **conceituais**, não tabelas implementadas.

Regras de integridade: orientação publicada exige título, assunto, texto, fonte, responsável e revisão; versões em revisão não devem substituir conteúdo publicado até aprovação. Registros de permissões terão rastreabilidade e acesso restrito.

### 3.5 Regras de negócio

Referências RN01–RN11 em [regras de negócio](02-regras-de-negocio.md). Destaques: RN01 exige visibilidade pública apenas do status publicado; RN04 demanda revisão; RN05 registra responsável/data; RN07 impede tratar tradução não aprovada como oficial; RN08 exige fonte vigente para informações variáveis; RN09 exclui inscrições e mudanças acadêmicas; RN11 restringe alteração de perfis a administradores.

### 3.6 Restrições de projeto

A solução alvo admite backend; o protótipo P2 não finge implementar políticas, usuários reais, banco, inscrições, filtros de vagas atuais ou correspondência acadêmica automática. Segurança, desempenho e conformidade WCAG exigem testes próprios, não apenas existência de CSS e testes de catálogo.

## 4. Casos de uso detalhados

Cada caso relaciona ator, condição, sequência, alternativa, resultado e requisitos. Os testes são propostos; **não** são relatos de sessões com usuários reais.

### UC01 — Explorar temas e programas

- **Ator(es):** Visitante / estudante / docente.
- **Pré-condição:** Há portal publicado.
- **Fluxo principal:** Acessa capa; escolhe categoria ou programa; lê explicações e etapas; acessa documentação..
- **Alternativa/exceção:** Categoria sem conteúdo exibe orientação alternativa..
- **Pós-condição:** Acessou informação contextual; nenhum cadastro obrigatório.
- **Rastreabilidade:** RF01, RF04, RF05.
- **Wireframe(s):** Tela 01, 02, 03.

### UC02 — Buscar e filtrar orientações

- **Ator(es):** Visitante.
- **Pré-condição:** Existem conteúdos classificados.
- **Fluxo principal:** Digita termo; seleciona tema e/ou público; consulta resultados; abre orientação..
- **Alternativa/exceção:** Busca sem resultado indica ausência; usuário limpa filtro..
- **Pós-condição:** Orientação selecionada e fonte visível..
- **Rastreabilidade:** RF02, RF03, RF04, RF08.
- **Wireframe(s):** Tela 01, 04.

### UC03 — Consultar universidades e convênios

- **Ator(es):** Estudante.
- **Pré-condição:** Catálogo demonstrativo acessível.
- **Fluxo principal:** Abre universidades; filtra país/área; acessa instituição; verifica fonte e consulta lista do curso..
- **Alternativa/exceção:** Sem resultados: mensagem; lista histórica: aviso de validade não comprovada..
- **Pós-condição:** Instituições de referência identificadas, sem garantir vaga..
- **Rastreabilidade:** RF01, RF04, RF05.
- **Wireframe(s):** Tela 05, 06.

### UC04 — Consultar documentação e organizar roteiro

- **Ator(es):** Estudante.
- **Pré-condição:** Informações de interesse definidas.
- **Fluxo principal:** Seleciona programa/área/destino; recebe roteiro; consulta checklist e fontes..
- **Alternativa/exceção:** Não há destino correspondendo: roteiro orienta contato humano; checkbox apenas local..
- **Pós-condição:** Roteiro orientativo, sem inscrição ou avaliação de elegibilidade..
- **Rastreabilidade:** RF04, RF05, RF06.
- **Wireframe(s):** Tela 07, 08.

### UC05 — Consultar idioma, fontes e contatos

- **Ator(es):** Visitante / internacional.
- **Pré-condição:** Conteúdo público disponível.
- **Fluxo principal:** Alterna idioma; lê contato e origem do material; abre referência oficial contextual.
- **Alternativa/exceção:** Tradução não aprovada: não é declarada oficial; fonte indisponível: notificar usuário..
- **Pós-condição:** Consulta rastreável à fonte, sujeito a verificação..
- **Rastreabilidade:** RF05, RF06, RF07, RF08.
- **Wireframe(s):** Tela 01, 03, 09.

### UC06 — Autenticar usuário editorial

- **Ator(es):** Editor / publicador / admin.
- **Pré-condição:** Conta pré-cadastrada no sistema-alvo.
- **Fluxo principal:** Informa credenciais; servidor valida identidade; direciona ao painel permitido..
- **Alternativa/exceção:** Credencial inválida ou perfil insuficiente gera negativa..
- **Pós-condição:** Sessão autorizada, registrada..
- **Rastreabilidade:** RF09.
- **Wireframe(s):** Tela 10 — proposta.

### UC07 — Cadastrar e revisar orientação

- **Ator(es):** Editor / publicador.
- **Pré-condição:** Login e papéis válidos.
- **Fluxo principal:** Editor cria rascunho; preenche campos; envia revisão; publicador revisa e publica ou devolve..
- **Alternativa/exceção:** Fonte ausente bloqueia envio; perfil editor não aprova..
- **Pós-condição:** Versão publicada possui responsável/data e histórico..
- **Rastreabilidade:** RF08, RF10, RF11, RF12.
- **Wireframe(s):** Tela 11 — proposta.

### UC08 — Administrar perfis

- **Ator(es):** Administrador.
- **Pré-condição:** Administrador autenticado.
- **Fluxo principal:** Acessa usuários; altera perfil; confirma ação; sistema registra log..
- **Alternativa/exceção:** Acesso de não administrador é recusado.
- **Pós-condição:** Perfil atualizado com trilha de auditoria..
- **Rastreabilidade:** RF09, RF14.
- **Wireframe(s):** Tela 12 — proposta.

### UC09 — Sinalizar conteúdo desatualizado

- **Ator(es):** Visitante.
- **Pré-condição:** Conteúdo publicado.
- **Fluxo principal:** Clica em sinalizar; informa motivo sem identificação pessoal; envia..
- **Alternativa/exceção:** Sem motivo: campo sinalizado; falha de rede: preservar mensagem e permitir nova tentativa..
- **Pós-condição:** Registro encaminhado para análise..
- **Rastreabilidade:** RF13.
- **Wireframe(s):** Tela 13 — evolução.

## 5. Verificação e revisão de consistência

### 5.1 Matriz de rastreabilidade

A [matriz de consistência P2](07-matriz-consistencia-P2.md) associa **RF → casos de uso → regras → UML → wireframe → rota executável / estado**. A UML revisada representa a **solução proposta**, enquanto o diagrama de implantação distingue explicitamente o GitHub Pages real da infraestrutura-alvo hipotética.

### 5.2 Evidências da validação

| Verificação | Evidência / estado |
|---|---|
| Coerência documental entre SRS, RF/RNF, regras, backlog, UC e UML | Matriz P2 e revisão de arquivos versionados |
| Existência de wireframes | Galeria de SVG em `prototipo/wireframes/` com links para fluxos |
| Navegação do protótipo | [Site publicado](https://ruan-levi.github.io/-requisitos-20262--grupo08/) e testes automatizados |
| Acessibilidade e compatibilidade plena | Pendente teste manual; issues #13/#16 |
| Conferência completa dos links institucionais | Pendente verificação individual; issue #14 |
| Entrevistas reais / aceite institucional | Não realizados/confirmados na documentação; issue #3 |

### 5.3 Critérios de qualidade da SRS

- **Correção:** distinguir fatos institucionais de hipóteses da modelagem.
- **Não ambiguidade:** requisitos numerados com escopo e resultado observável.
- **Completude:** todos os RF/RNF da M1 recebem referência e teste.
- **Consistência:** mesmos identificadores na matriz, UML, backlog e wireframes.
- **Modificabilidade/rastreabilidade:** manter IDs estáveis e registro de alterações via Git.

## 6. Limites da entrega P2 e aceites

O enunciado do professor para o Trabalho P2 exige (a) SRS no padrão IEEE 830; (b) revisão de consistência entre UML e requisitos; (c) wireframes e protótipo navegável; (d) SRS, UML, evidências e issues no GitHub.

**Demonstrável:** interface pública, navegação interna, programas, universidades de referência, documentos, roteiro, FAQ, idioma demonstrativo e ações de checklist. **Apenas proposto:** autenticação, editor persistente, decisões restritas, perfis e histórico de publicação. A execução de um teste automatizado de sintaxe não comprova conformidade funcional em navegador.

É proibido apresentar como concluída uma tarefa que exige evidência externa (entrevistas, aceite de convidado, submissão ao AVA, testes com pessoas) sem registro.

## 7. Apêndices e navegação rápida

- [Protótipo navegável — GitHub Pages](https://ruan-levi.github.io/-requisitos-20262--grupo08/).
- [Wireframes P2 — galeria e arquivos SVG](../../prototipo/wireframes/README.md).
- [Matriz de consistência P2](07-matriz-consistencia-P2.md).
- [Diagramas UML P2](../../diagrams/README.md).
- [Histórias de usuário e critérios da M1](03-backlog-priorizado.md).
- [Plano Sprint 2](../../GestaoConfiguracao/06-plano-entrega-P2.md).

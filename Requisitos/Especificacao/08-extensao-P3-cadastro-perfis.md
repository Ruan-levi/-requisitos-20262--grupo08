# Extensão de requisitos — Cadastro, autenticação e painel pessoal (P3)

**Grupo 08 · 26/11/2026 · Versão 3.0 proposta.** Complementa a [SRS IEEE 830 da P2](06-SRS-IEEE830-P2.md) sem reescrever entregas históricas. A implementação cliente está no GitHub; **não foi provisionado um projeto Nhost remoto** nesta sessão.

## 1. Requisitos funcionais novos e ampliados

| ID | Requisito | Critério de aceite | Implementação |
|---|---|---|---|
| RF09 (refinado) | Autenticar por e-mail/senha usando Nhost Auth | Login exige sessão válida emitida pelo serviço; sessão inválida não abre dados privados | Cliente REST implementado; requer Nhost |
| RF10 (refinado) | Gestor autorizado pode cadastrar orientação no banco | Só usuário com concessão `portal_admin_grants` e permissões Hasura pode inserir | Formulário + GraphQL + modelo Hasura |
| RF11–RF12 (refinados) | Gestor revisa, aprova e publica registros editoriais | Estados rascunho, revisão, publicado; API rejeita não gestor | Formulário/mutações; publicação em página de comunicados |
| RF14 (refinado) | Administrador atribui acesso de gestor sob autorização | Seleção pública de perfil **não** libera acesso; aprovação ocorre fora do navegador por operação privilegiada | Tabela de concessão; painel de concessões ainda futuro |
| **RF15** | Cadastro com aluno, docente e solicitação de administrador | Três opções visíveis; administrador é solicitação sem privilégio | Tela implementada; requer Nhost |
| **RF16** | Perfil autenticado e encerramento de sessão | Perfil vem do banco; botão de logout revoga token | Cliente e interface implementados; requer Nhost |
| **RF17** | Salvar universidades favoritas por usuário | Usuário só acessa registros cujo `user_id` consta no JWT | Tabela, permissão e interface |
| **RF18** | Sincronizar checklist de preparação | Mudança persistida por usuário, com mensagem de sucesso/falha | Tabela, GraphQL e interface |
| **RF19** | Orientar docentes com espaço próprio | Conta docente tem área informativa; autodeclaração não concede privilégios editoriais | Interface implementada |
| **RF20** | Publicar comunicados complementares | Leitura pública apenas quando `status = publicado`; demais estados ocultos | Modelo Hasura e página de comunicados |

### Atores

**Visitante** — consulta conteúdos públicos, sem login.  
**Aluno** — pode criar conta, consultar destinos, salvar favoritos e checklist.  
**Docente** — pode criar conta e consultar área acadêmica, salvar favoritos e checklist. Perfil autodeclarado (não atestado institucionalmente).  
**Solicitante de gestor** — registra pedido de acesso, mas permanece no perfil comum até aprovação.  
**Administrador autorizado** — concedido manualmente no backend, acessa interface editorial. Seu privilégio não depende do campo escolhido no cadastro.

## 2. Casos de uso complementares

| Caso | Atores | Pré-condição | Fluxo principal | Exceção / garantia |
|---|---|---|---|---|
| **UC10 — Cadastrar conta** | Aluno, docente, solicitante de gestor | Nhost configurado e cadastro habilitado | Selecionar perfil, nome, email e senha → enviar ao Nhost → confirmar e-mail conforme configuração | Solicitação de gestor **não** recebe papel privilegiado |
| **UC11 — Entrar e sair** | Aluno, docente, gestor autorizado | Conta cadastrada | Selecionar área → autenticar no Nhost → consultar perfil no Hasura → exibir área → sair | Se perfil escolhido não coincide com autorização real, não abre área |
| **UC12 — Salvar universidades** | Aluno, docente | Sessão válida | Selecionar destino → salvar → visualizar lista → remover | Hasura limita registros ao usuário autenticado |
| **UC13 — Manter checklist pessoal** | Aluno, docente | Sessão válida | Marcar etapa → enviar mutação → atualizar estado | Falha restaura marcação anterior; não divulga dados a terceiros |
| **UC14 — Solicitar gestor** | Usuário no cadastro | Nhost configurado | Selecionar administrador → registrar solicitação no campo metadata → responsável analisa no backend | Autorizar requer concessão explícita por canal privilegiado |
| **UC15 — Publicar comunicado** | Gestor aprovado | Concessão real no banco | Criar conteúdo com fonte HTTPS → salvar rascunho/revisão/publicado → listar em comunicados | Backend barra não gestores; público vê apenas publicado |
| **UC16 — Orientações para docentes** | Docente autenticado | Conta docente (autodeclarada) | Entrar → abrir área de mobilidade docente | Não representa confirmação de vínculo empregatício |

## 3. Segurança e não funcionais

- **RNF10:** nenhum admin-secret, service key, senha ou token fixo no GitHub Pages.
- **RNF11:** perfis privados por `user_id = X-Hasura-User-Id`, com regras configuradas no servidor Hasura.
- **RNF12:** privilégios administrativos só por concessão persistida em `portal_admin_grants`, **sem INSERT/UPDATE/DELETE pelo cliente**.
- **RNF13:** cadastro e autenticação exigem email verificado se configurado no Nhost; expiração de sessão e rotação de refresh token.
- **RNF14:** preservação da experiência pública; sem login obrigatório para consultar programas, universidades e documentos.
- **RNF15:** limitar dados coletados a nome, email e perfil solicitado. LGPD, política e governança precisam de validação antes de utilizar dados de usuários reais.

## 4. Mapa de artefatos

| Artefato | Local | Função |
|---|---|---|
| Interface de cadastro/login/perfis | `prototipo/conta.html`, `auth-ui.js`, `auth.css` | Três opções e área de usuário |
| Cliente REST Auth + GraphQL | `prototipo/auth-client.js` | Credenciais, sessão, favoritos, checklist, publicações |
| Configuração pública | `prototipo/auth-config.js` | Subdomínio e região do projeto Nhost (vazios por padrão) |
| Comunicados publicados | `prototipo/publicacoes.html`, `publicacoes.js` | Leitura pública após configuração |
| SQL e metadados Hasura | `nhost/migrations`, `nhost/metadata` | Modelo e permissões por usuário |
| Instalação e limites | `GestaoConfiguracao/11-implantacao-autenticacao-nhost.md` | Guia para ligar serviço real |

**Importante:** componentes entregues são código aplicável, mas **o serviço de autenticação e banco PostgreSQL remoto ainda depende de projeto Nhost autenticado**. Cadastro e login reais não funcionam enquanto o `auth-config.js` estiver vazio; a interface mostra essa condição explicitamente.

Esta extensão não altera os casos UC01–UC09 ou o escopo histórico da P1/P2.

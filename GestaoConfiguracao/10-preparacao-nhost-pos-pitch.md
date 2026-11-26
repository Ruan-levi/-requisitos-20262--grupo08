# Ambiente Nhost — preparação para depois do pitch (SEM IMPLEMENTAÇÃO)

**Grupo 08 — Portal de Internacionalização**  
**Data da análise:** 26/11/2026  
**Situação:** **PLANEJAMENTO E ISOLAMENTO PREPARADOS**; **Nhost ainda não foi criado, provisionado, autenticado ou vinculado ao repositório**.

> **Decisão do grupo:** a aplicação atual será apresentada sem cadastro/login. Não alterar o código ou o GitHub Pages agora. Este documento está apenas na branch isolada `feature/nhost-auth-safe-rollout`, não na `main`.

## 1. Integridade do projeto da apresentação

| Item | Referência | Estado |
|---|---|---|
| `main` atual | `338d5ab92dc5d119dc0aa8f82c1b20d2a2dfb369` | Preservar |
| Backup fixo **Projeto 01** | [`backup/projeto-01-2026-11-26`](https://github.com/Ruan-levi/-requisitos-20262--grupo08/tree/backup/projeto-01-2026-11-26) | Criado e conferido |
| Preparação isolada | [`feature/nhost-auth-safe-rollout`](https://github.com/Ruan-levi/-requisitos-20262--grupo08/tree/feature/nhost-auth-safe-rollout) | Apenas documentação e plano |
| Deploy para apresentação | [Portal no GitHub Pages](https://ruan-levi.github.io/-requisitos-20262--grupo08/) | Não conectar à autenticação |
| Figma | [Design existente](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc) | Não modificar agora |

**Frase de restauração:** “Chat, volte ao projeto 01”. Ao receber a ordem, comparar o estado do repositório e restaurar a árvore do commit de backup **preservando o histórico** (reversão ou nova branch/PR conforme a mudança realizada); não apagar commits importantes sem confirmação.

## 2. Arquitetura para avaliar **depois da apresentação**

O **Nhost é BaaS gerenciado**, oferecendo autenticação, PostgreSQL e GraphQL; uma VM separada não é necessária para este objetivo. Podemos usar a infraestrutura gerenciada do Nhost como backend, com o site público permanecendo no GitHub Pages.

```text
Visitante público ──> GitHub Pages (informação pública sem login)
                               │
                               └── após o pitch: cliente de autenticação
                                            │
                                      Nhost Cloud (DEV)
                                      ├── Auth (usuários)
                                      ├── PostgreSQL (dados)
                                      └── Hasura GraphQL (regras por linha)
```

**Nenhuma linha de autenticação foi integrada ao portal público**; é uma proposta de arquitetura.

### Fluxos a modelar (não implementados)

- **Estudante:** login/cadastro por e-mail e senha, confirmação de e-mail, recuperação de senha, favoritos e checklist sincronizado; navegar sem login continua permitido.
- **Editor:** criar e atualizar rascunhos. Sem autorização para publicar.
- **Publicador:** revisar, aprovar ou devolver conteúdo, mantendo registro do responsável.
- **Administrador do portal:** conceder papéis de gestão somente por operação autorizada; não confundir papel customizado `portal_admin` com o papel privilegiado `admin` interno do Hasura/Nhost.
- **Visitante não autenticado:** leitura apenas do catálogo de informações públicas, nunca consultas a perfis ou registros privados.

**Regras mínimas:** todo registro privado deve estar associado ao identificador de usuário autenticado, e permissões por linha devem ser validadas no GraphQL/Hasura, não apenas na interface. Cadastro comum não pode autoconceder o papel de administrador.

## 3. Ambiente isolado de desenvolvimento a criar quando autorizado

1. No navegador, entrar em **https://app.nhost.io/** e criar projeto no workspace correto, identificado como `portal-internacionalizacao-dev`. Confirmar preço, quota e região antes de ativar qualquer recurso pago.
2. Registrar **subdomínio** e **região** do projeto. São referências de localização do serviço; **não** registrar senha de banco, tokens pessoais, `NHOST_ADMIN_SECRET`, JWT secrets nem chaves de serviço no GitHub.
3. Verificar no Dashboard: métodos de login, e-mail de confirmação, URLs permitidas para redirecionamento e orígens autorizadas. O Pages usa fragmentos `#/...`; isso **não** deve ser presumido como callback de autenticação sem teste.
4. Em **ambiente local separado**, instalar o Nhost CLI de acordo com o guia oficial. Para inicializar projeto ligado à nuvem, a documentação atual usa `nhost init --remote`; a conexão deve ser realizada de forma autenticada na conta correta.
5. A documentação do Nhost também descreve `nhost link` para associar um projeto local ao projeto remoto e deploys controlados por Git. **Não executar vinculação ou deploy nesta etapa.**
6. Se for preciso trabalhar com Nhost Cloud remotamente, seguir a documentação do comando `nhost up cloud`. Ela pode exigir credenciais de PostgreSQL e aplicar configurações ao ambiente: executar **somente depois** que houver um banco DEV criado, revisado e isolado.
7. Conceder eventual acesso da integração GitHub **somente ao repositório necessário**, escolhendo com cuidado a branch de desenvolvimento. **Não vincular deploy automático à `main` do portal antes de concluir testes**.
8. Criar migrações de banco e metadata de permissões em PR separado, usando dados fictícios. Todo schema/RLS deverá ter revisão antes de qualquer aplicação remota.
9. Testar cadastro, login, confirmação, redefinição de senha, logout, separação de papéis, acesso negado e isolamento entre alunos; validar também navegação pública anônima.
10. Só depois de testes e aprovação explícita, decidir se integração vai ao site publicado. O merge em `main` e o deploy não são parte deste preparo.

## 4. Critérios de segurança para futura implementação

- **Não** enviar credenciais sensíveis para o frontend.
- **Não** usar `admin-secret` em JavaScript público nem em GitHub Pages.
- **Não** executar SQL administrativo diretamente na produção durante o pitch.
- **Não** registrar dados pessoais reais em testes; criar contas fictícias.
- **Não** alterar fluxo público, URLs, estilos e textos já demonstrados no pitch.
- Verificar LGPD, política de privacidade, período de retenção e finalidade de uso antes de coletar dados.
- Documentar confirmação de e-mail, sessão, proteção contra abuso, autorização no backend e migrações reproduzíveis.

## 5. Verificações já realizadas

- [x] Conferido o commit da `main` e seu backup Projeto 01.
- [x] Criada branch de preparação independente.
- [x] Verificado GitHub Actions: CI e deploy aprovados para a versão da apresentação.
- [x] Revisados arquivos principais do repositório e links internos dos documentos.
- [x] Confirmada na documentação oficial a opção de Nhost Cloud gerenciado.
- [x] Registrado procedimento de conexão sem tocar no site nem configurar autenticação.
- [ ] **Criar projeto Nhost real na conta do usuário.** A conta não está conectada às ferramentas nesta conversa.
- [ ] **Configurar integração GitHub ↔ Nhost** após criação e autorização do projeto.
- [ ] **Implementar autenticação/banco/permissões** após o pitch e com solicitação explícita.
- [ ] **Validar manualmente** os fluxos e a interface em navegadores diferentes.

## 6. Referências oficiais consultadas

- [Nhost — Desenvolvimento contra Cloud](https://docs.nhost.io/platform/cli/cloud-development)
- [Nhost — CLI e opções de deploy Git](https://docs.nhost.io/platform/cli/local-development)
- [Nhost — Referência dos comandos](https://docs.nhost.io/reference/cli/commands)
- [Nhost — Configuração de subdomínio e região](https://docs.nhost.io/platform/cloud/subdomain)

**Status final desta etapa:** apenas planejamento/documentação em branch separada. Sem mudanças em `main`, sem novo serviço provisionado e sem alteração de autenticação no portal.

# Implantação Nhost — guia de conexão para a nova autenticação

**Estado em 26/11/2026:** código e SQL/Hasura versionados no repositório; **sem projeto Nhost criado nesta conta**. Não use a instância Supabase de terceiros que está conectada a outras aplicações. A implantação completa requer acesso autorizado à conta Nhost e a escolha de recursos/limites de custo.

## 1. Ponto de restauração

- Backup anterior à autenticação: [`backup/pre-auth-2026-11-26`](https://github.com/Ruan-levi/-requisitos-20262--grupo08/tree/backup/pre-auth-2026-11-26) — commit `42cd88272ea70f3d47e7cdcc3bfa7e239a681b9e`.
- Backup histórico **Projeto 01**: `backup/projeto-01-2026-11-26`.
- Branch funcional isolada: `feature/nhost-fullstack-roles`.
- O portal público não exige autenticação. Quando `auth-config.js` está vazio, o formulário fica explicitamente indisponível, sem simular conta nem registrar senha.

## 2. Provisionar um projeto independente

1. Acesse [Nhost Dashboard](https://app.nhost.io/) com sua conta. Crie um projeto **dedicado ao Portal de Internacionalização**, não associado a aplicativos existentes.
2. Confira cotas, limites e cobrança antes de confirmar. Escolha região disponível.
3. Copie **apenas** `subdomain` e `region` (dados públicos do serviço).
4. Configure o Nhost Auth para login por email e senha e **verificação obrigatória de email**. Configure domínios/origens permitidos e URL de redirecionamento do GitHub Pages; se houver exigência de PKCE em novos fluxos, alinhe a forma de confirmação ao fluxo configurado na sua versão do Nhost.
5. **Restrinja a role padrão/permitida de inscrição pública ao papel Hasura não privilegiado `user`.** Nunca exponha papéis `admin`, `editor`, `publicador` como escolha do cliente.
6. Execute a migration SQL do arquivo [`nhost/migrations/0001_portal_identity.sql`](../nhost/migrations/0001_portal_identity.sql) no PostgreSQL **do projeto novo**.
7. Registre as tabelas no Hasura e configure as permissões descritas em [`nhost/metadata/databases/default/tables/`](../nhost/metadata/databases/default/tables/). A estrutura é **modelo YAML para aplicação e revisão**; valide contra os metadados gerados pela versão real do Nhost, não execute importação indiscriminada sem teste.
8. Publique o site com `prototipo/auth-config.js` contendo só `subdomain` e `region` oficiais. Não exponha segredos. Isso é suficiente para apontar as chamadas REST Auth e GraphQL, após confirmação de endpoints e CORS.
9. Teste cadastro e confirmação de email, login/logout, atualização de perfil, checklists e favoritos com contas **fictícias** e navegadores diferentes.
10. Teste autorização por papel: usuário que pede gestor não pode publicar; professor não pode publicar; aluno não pode consultar dados de outros; apenas gestor explicitamente autorizado consegue inserir e alterar conteúdos editoriais.

## 3. Aprovação de gestor (operação privilegiada)

O cadastro administrativo usa somente `options.metadata.requested_role = "administrador"` e cria um perfil comum. A UI exibe 'em análise'. **NÃO use o papel interno Hasura `admin` no navegador.**

Após validação humana de quem terá permissão de gestão, um operador autorizado pode executar **no console privado do PostgreSQL do novo projeto**:

```sql
-- EXEMPLO: substituir pelo endereço da conta confirmada.
insert into public.portal_admin_grants(user_id, granted_by)
select id, null from auth.users where email = 'gestor-aprovado@exemplo.edu.br'
on conflict (user_id) do nothing;
```

Esse SQL deve ser executado **manualmente** em ferramenta administrativa autenticada. O front-end somente consulta a existência da concessão e o servidor Hasura restringe insert/update. Para revogação, excluir a concessão pelo console e revalidar a sessão.

## 4. Banco e autorização

- `portal_profiles`: identidade, perfil acadêmico comum, perfil solicitado.
- `portal_admin_grants`: autorização real de gestor, sem escrita pública.
- `portal_saved_destinations`: favoritos pessoais, chave composta por usuário/destino.
- `portal_checklist_progress`: checklist por usuário/etapa.
- `portal_editorial_entries`: conteúdo gerido por gestor; `public` lê somente status `publicado`.

**Proteção fundamental:** a role Nhost/Hasura é `user` em contas cadastradas, nunca `admin`; a tabela de concessões controla quem edita, e as regras Hasura filtram registros privados por `X-Hasura-User-Id`. A seleção visual de perfil não representa autorização de segurança.

## 5. Verificações obrigatórias antes de considerar concluído

- [ ] Projeto Nhost próprio provisionado e online.
- [ ] SQL aplicado no projeto certo e metadados Hasura validados.
- [ ] Verificação de email, redirecionamentos e CORS testados em GitHub Pages.
- [ ] Cadastro real de aluno, docente e pedido de gestor.
- [ ] Aprovação manual de gestor e tentativa de escalada negada.
- [ ] Provas de isolamento entre usuários (fav/checklist) e de leitura pública.
- [ ] Privacidade/LGPD, limites de cadastro, política de retenção e recuperação de senha.
- [ ] Auditoria e histórico de publicação de conteúdo — o protótipo ainda **não** implementa trilha completa.

## 6. Referências

- [Nhost — login por email e senha](https://docs.nhost.io/products/auth/sign-in-email-password)
- [Nhost — REST Auth](https://docs.nhost.io/reference/auth/post-signup-email-password)
- [Nhost — GraphQL/Hasura Permissions](https://docs.nhost.io/products/graphql/permissions)
- [Nhost — configuração da região e subdomínio](https://docs.nhost.io/platform/cloud/subdomain)

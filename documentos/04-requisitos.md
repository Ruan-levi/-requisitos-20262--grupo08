# 4. Requisitos Funcionais e Não Funcionais

**Projeto:** Portal de Internacionalização — UNIFOR, Grupo 08  
**Versão:** 1.0 · **Status:** requisitos iniciais propostos a partir de análise documental; sujeitos à validação.

## 4.1 Requisitos funcionais (RF)

| Código | Requisito | Prioridade |
|---|---|---|
| RF01 | Apresentar na página inicial as principais categorias de internacionalização. | Alta |
| RF02 | Permitir pesquisa de orientações publicadas por palavra-chave. | Alta |
| RF03 | Permitir filtrar orientações por assunto e público-alvo. | Alta |
| RF04 | Exibir orientações sobre intercâmbio, dupla titulação, vistos, documentação, aproveitamento de disciplinas, despesas e hospedagem. | Alta |
| RF05 | Exibir links para documentos e fontes oficiais relacionados a cada orientação. | Alta |
| RF06 | Disponibilizar contatos e canais institucionais responsáveis pelo tema consultado. | Alta |
| RF07 | Oferecer seleção de português e inglês para conteúdos com tradução disponível e aprovada. | Média |
| RF08 | Mostrar fonte e data da última revisão de cada orientação publicada. | Alta |
| RF09 | Autenticar usuários autorizados para acessar a área administrativa. | Alta |
| RF10 | Permitir a editores autorizados cadastrar, atualizar e categorizar orientações. | Alta |
| RF11 | Manter conteúdos nos estados rascunho, em revisão e publicado. | Alta |
| RF12 | Permitir somente a publicadores autorizados aprovar e publicar conteúdos. | Alta |
| RF13 | Permitir a visitantes sinalizar informações desatualizadas, sem exigir dados pessoais. | Baixa |

## 4.2 Requisitos não funcionais (RNF)

| Código | Categoria | Descrição e verificação esperada |
|---|---|---|
| RNF01 | Acessibilidade | Projetar interface alinhada à WCAG 2.2 nível AA, incluindo teclado, foco visível, rótulos e contraste; verificar com checklist e testes. |
| RNF02 | Responsividade | Navegação funcional em celular e computador sem perda das funções principais. |
| RNF03 | Segurança | HTTPS, autenticação de administradores e autorização para edição/publicação no servidor. |
| RNF04 | Compatibilidade | Funcionamento nos navegadores atuais Chrome, Edge e Firefox. |
| RNF05 | Privacidade | Coleta mínima de dados pessoais; observar LGPD, sem upload de documentação sensível no MVP. |
| RNF06 | Usabilidade | Textos claros, categorias compreensíveis, feedback de busca vazia e navegação consistente. |
| RNF07 | Rastreabilidade | Registrar editor, revisor e data de alteração/publicação. |
| RNF08 | Manutenibilidade | Atualizar orientações via painel, sem alterar diretamente o código do portal. |
| RNF09 | Desempenho | Consultas públicas devem responder em tempo adequado; limite numérico será definido após testes e dimensionamento. |

## 4.3 Critérios de aceitação para funções essenciais

**RF02 — Pesquisa**
- Dada uma palavra presente em um conteúdo publicado, o resultado deve incluí-lo.
- Quando nenhum item corresponder, deve haver mensagem clara.
- Conteúdos não publicados não devem aparecer.

**RF03 — Filtros**
- O usuário escolhe categoria e/ou público, recebendo apenas os itens correspondentes.
- O usuário consegue limpar os filtros e retornar à lista original.

**RF04 — Consulta**
- Uma orientação publicada contém título, texto, categoria e fonte.
- Orientações sobre procedimentos variáveis encaminham a fontes vigentes.

**RF09 — Autenticação**
- Visitante sem autenticação não pode acessar funções de gestão.
- Usuário autenticado sem permissão editorial não pode cadastrar ou publicar.

**RF11/RF12 — Gestão editorial**
- Rascunhos não são visíveis ao público.
- Apenas perfil publicador ou administrador aprova publicações.
- Fonte, revisor e data permanecem registrados.

**RF07 — Multilíngue**
- O usuário consegue alternar o idioma da interface.
- Conteúdo sem tradução aprovada não pode ser exibido como tradução oficial.

## 4.4 Glossário

- **Stakeholder:** pessoa ou grupo interessado ou afetado pelo sistema.
- **Elicitação:** coleta e análise de necessidades para definir requisitos.
- **Orientação:** conteúdo informativo com título, categoria, fonte e status editorial.
- **Governança editorial:** regras de autoria, revisão, aprovação e atualização.
- **MVP:** versão mínima que entrega as funções centrais do portal.
- **DRI/NEI:** designações presentes em materiais distintos; estrutura oficial ainda a verificar.

## 4.5 Rastreabilidade

| Achado de elicitação documental | Requisitos derivados |
|---|---|
| AD01 — Melhorar a busca | RF01–RF03, RNF06 |
| AD02 — Orientações temáticas | RF04–RF06, RF08 |
| AD03 — Acessibilidade, idiomas e governança | RF07–RF13, RNF01–RNF09 |
| AD05 — Usuários e área institucional | RF09–RF12 |

Os achados estão documentados em [03-elicitacao-entrevistas.md](03-elicitacao-entrevistas.md). Consulte também [regras de negócio](05-regras-de-negocio.md) e [backlog](06-backlog-priorizado.md).

**Nota:** são requisitos acadêmicos **propostos**, não decisões oficiais aprovadas pela UNIFOR.

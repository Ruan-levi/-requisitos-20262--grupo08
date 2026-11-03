# 5. Regras de Negócio — Portal de Internacionalização

**UNIFOR · Grupo 08 · Sprint M1**

> As regras abaixo são **propostas de modelagem** para o portal, não normas institucionais já validadas. Regras oficiais sobre intercâmbio, vistos, convênios e aproveitamento acadêmico devem ser consultadas nas fontes e processos competentes.

| ID | Regra proposta | Requisitos |
|---|---|---|
| RN01 | Somente orientações com status **publicado** podem aparecer na área pública. | RF04, RF11–RF12 |
| RN02 | Cada orientação deverá incluir título, categoria, descrição e fonte. | RF04–RF05, RF10 |
| RN03 | Apenas usuários autenticados e com perfil editorial poderão cadastrar ou alterar conteúdos. | RF09–RF10 |
| RN04 | Uma orientação deverá ser revisada por perfil autorizado antes de sua publicação. | RF11–RF12 |
| RN05 | Toda publicação deverá registrar responsável e data da revisão. | RF08, RNF07 |
| RN06 | As orientações deverão ser classificadas por tema e, quando necessário, público-alvo. | RF01, RF03 |
| RN07 | Traduções só poderão ser apresentadas como oficiais depois de revisadas e aprovadas. | RF07, RF12 |
| RN08 | Informações sobre custos, prazos, vistos e elegibilidade deverão indicar fonte vigente, evitando garantias automáticas. | RF04–RF06 |
| RN09 | O portal não poderá aprovar inscrições nem modificar históricos acadêmicos. | Escopo |
| RN10 | Alterações substanciais em informação já publicada deverão passar por nova revisão antes de substituir o conteúdo público. | RF10–RF12 |
| RN11 | Somente administradores autorizados poderão conceder, alterar ou revogar perfis de acesso editorial, mantendo registro da operação. | RF14, RNF03, RNF07 |

## 5.1 Papéis e permissões propostos

| Perfil | Consultar | Criar/editar | Revisar/publicar | Administrar usuários |
|---|---|---|---|---|
| Visitante | Sim | Não | Não | Não |
| Editor | Sim | Sim | Não | Não |
| Publicador | Sim | Sim | Sim | Não |
| Administrador | Sim | Sim | Sim | Sim |

O nome e a atribuição real de cada papel deverão ser confirmados com os responsáveis institucionais.

## 5.2 Exemplo do processo editorial

1. O **editor** cadastra uma orientação sobre documentos para intercâmbio.
2. O conteúdo começa em **rascunho** e não aparece na busca pública.
3. O editor envia para **revisão**.
4. O **publicador** verifica linguagem, fonte, contatos e vigência.
5. Após a aprovação, a orientação muda para **publicado**, com revisão registrada.
6. Mudanças posteriores relevantes retornam ao fluxo editorial.

## 5.3 Riscos das regras

- **Conteúdo desatualizado:** mitigar com fonte, data, responsável e rotina de revisão.
- **Permissões excessivas:** mitigar com acesso por perfil e checagem no servidor.
- **Idioma divergente:** exigir revisão das traduções.
- **Interpretação de regras institucionais:** encaminhar a documentos e contatos oficiais.

**Fontes:** *Propostas de Projetos de Sistemas — Internacionalização e ENADE*, Tema 4, UNIFOR, 2026.2; decisões complementares de análise do Grupo 08.

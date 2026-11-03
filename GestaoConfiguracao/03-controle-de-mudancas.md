# Política de mudanças e versionamento — Grupo 08

Inspirada nas recomendações de gestão de configuração do [LAPIS](https://github.com/marcelobezerra-dotcom/Lapis-unifor/blob/main/GestaoConfiguracao/TUTORIAL_GITHUB_PROJECTS.md).

## Convenção de commits

| Tipo | Uso | Exemplo |
|---|---|---|
| `docs` | Documentar requisitos e levantamento | `docs(M1): esclarecer RF03 e critério de aceite` |
| `fix` | Corrigir links, rastreabilidade ou UML | `fix(uml): revisar ator de consulta` |
| `refactor` | Reorganizar documentos sem alterar a proposta | `refactor(repo): adotar estrutura LAPIS` |
| `chore` | Organização do fluxo de trabalho | `chore(M1): revisar issues` |

## Ciclo de controle

1. Abrir ou atualizar uma issue com justificativa, fonte e impacto.
2. Identificar requisitos (RF/RNF/RN), história US e UML afetados.
3. Atualizar **o documento principal e seus dependentes**, mantendo a rastreabilidade.
4. Conferir links, consistência, critérios de aceite e fontes.
5. Solicitar revisão de outro integrante quando possível.
6. Vincular commit/PR à issue, registrar decisão e definir se houve validação real.

## Baselines e próximas entregas

- **M1:** documentação inicial de visão, elicitação, especificação e UML.
- **Futuras versões:** aprofundamento de SRS, fluxos de casos de uso e possível prototipação, sujeitos aos enunciados.
- Criar uma **tag de baseline somente após revisão e aprovação**; este documento **não declara tags já criadas**.
- Não inventar atas, entrevistas, homologações, commits de outros membros ou aceites institucionais.

### Critérios mínimos de qualidade

- [ ] Alteração tem origem identificável e issue relacionada.
- [ ] RF/RNF/RN/US afetados foram revisados.
- [ ] Diagramas e SRS permanecem consistentes.
- [ ] Mudanças de prioridade possuem justificativa.
- [ ] Não há credenciais, tokens ou dados pessoais sensíveis.
- [ ] Resultados de simulação seguem diferenciados de entrevistas reais.

[Requisitos](../Requisitos/README.md) · [Gestão de sprints](04-guia-github-projects.md).

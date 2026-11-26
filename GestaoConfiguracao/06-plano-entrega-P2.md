# Plano e checklist da entrega — Trabalho P2 / Sprint 2 (M2)

**Grupo 08 · Portal de Internacionalização · Disciplina: Requisitos e Modelagem de Sistemas**  
**Período informado no enunciado:** **03/11 a 23/11/2026**  
**Data da consolidação da documentação:** 26/11/2026. Não atribuir datas anteriores a arquivos criados depois da Sprint.

## 1. O que é exigido na P2

| Critério da P2 | Artefato versionado | Verificação |
|---|---|---|
| **SRS formal IEEE 830 (0,5)** | [SRS v2.0](../Requisitos/Especificacao/06-SRS-IEEE830-P2.md) | Introdução, descrição geral, interfaces, requisitos detalhados, aceite, UC01–UC09 |
| **Consistência SRS/UML (0,5)** | [Matriz de rastreabilidade P2](../Requisitos/Especificacao/07-matriz-consistencia-P2.md) e [diagramas P2](../diagrams/README.md) | RF01–RF14 mapeados para UC, RN, modelos e telas |
| **Qualidade do protótipo (1,0)** | [14 wireframes](../prototipo/wireframes/README.md), [galeria](https://ruan-levi.github.io/-requisitos-20262--grupo08/wireframes/) e [protótipo navegável](https://ruan-levi.github.io/-requisitos-20262--grupo08/) | Wireframes vetoriais; interface pública navegável; estados e links |
| **GitHub obrigatório** | SRS, PlantUML+SVG P2, protótipos, Issues + Milestone M2 | Workflow para criar M2 e associar issues, execução via Actions |
| **Envio no AVA** | Links para o repositório e o protótipo; arquivo de entrega conforme instrução de envio | A realização do envio é **externa e ainda não comprovada** |

## 2. Evidências e links para copiar ao AVA

**Repositório:** https://github.com/Ruan-levi/-requisitos-20262--grupo08  
**Protótipo navegável (alternativa aceita pelo enunciado: Figma ou similar):** https://ruan-levi.github.io/-requisitos-20262--grupo08/  
**Galeria de wireframes:** https://ruan-levi.github.io/-requisitos-20262--grupo08/wireframes/  
**Documento SRS:** https://github.com/Ruan-levi/-requisitos-20262--grupo08/blob/main/Requisitos/Especificacao/06-SRS-IEEE830-P2.md  
**Consistência/UML:** https://github.com/Ruan-levi/-requisitos-20262--grupo08/blob/main/Requisitos/Especificacao/07-matriz-consistencia-P2.md  
**Issues:** https://github.com/Ruan-levi/-requisitos-20262--grupo08/issues  
**Milestones:** https://github.com/Ruan-levi/-requisitos-20262--grupo08/milestones

## 3. Relação com a Sprint 1

- A M1 contém elicitação, visão, requisitos iniciais e UML conceitual. A M2 **não substitui nem apaga** os registros da M1.
- As issues #3 e #10 da M1 permanecem abertas quando não há comprovação de entrevista real e envio no AVA.
- A SRS v0.1 continua disponível como registro histórico; a versão v2.0 atende a P2.
- A UML M1 é preservada em arquivo próprio; a UML P2 adiciona uma versão com status de implementação diferenciado.

## 4. Gestão da Sprint 2

| Issue | Etapa | Estado esperado após entrega |
|---|---|---|
| #20 | SRS IEEE 830 formal e casos de uso | Fechar após merge e validação |
| #21 | UML P2 e matriz de consistência | Fechar após merge e validação |
| #22 | Wireframes vetoriais / galeria | Fechar após deploy e verificação |
| #23 | Documentação, CI e entrega | Fechar após execução dos workflows; AVA continua externo |
| #13 | Testes visuais/navegação reais | Manter aberta sem evidências |
| #14 | Conferência individual das fontes | Manter aberta sem evidências |
| #16 | Validação WCAG, navegadores e idiomas | Manter aberta sem evidências |
| #17 | Organização Milestone/Project | Milestone automatizada; Project/Kanban deve ser validado separadamente |
| #18 | Auditoria técnica do código/README | Concluída (histórico) |
| #15 | Backend/gestão editorial real | Evolução **fora do escopo da P2**, não associar à M2 |

**Automação M2:** [workflow idempotente](../.github/workflows/organizar-m2.yml) usa GitHub Actions com `issues: write` para criar a milestone **M2 — SRS, Consistência e Prototipação (P2)**, com término referente a 23/11/2026, e associar issues #13, #14, #16–#18 e #20–#23. A milestone será registrada como existente **somente depois da execução com sucesso**. Se a permissão do repositório impedir a criação, o workflow evidenciará o bloqueio.

## 5. Roteiro de apresentação (aprox. 5–7 min)

1. **Contexto:** apresente objetivo, público-alvo e continuidade da P1.
2. **SRS:** mostre as seções 1, 2 e 3, IDs RF/RNF e um caso de uso completo (UC02 ou UC04).
3. **Consistência:** abra a matriz e relacione, por exemplo, RF02 → UC02 → UML → wireframe 04 → busca.
4. **Wireframes:** mostre a galeria, incluindo uma tela pública, uma de interação e uma administrativa proposta.
5. **Protótipo:** demonstre Programas → Intercâmbio → Documentos e Universidades → Detalhes → Fonte.
6. **Gestão:** apresente PRs, issues do marco M2 e Actions com testes.
7. **Limites:** sem inscrições, vagas em tempo real, backend/credenciais ou aprovação institucional.

## 6. Checklist de integridade

- [x] SRS v2.0, RF/RNF detalhados e UC versionados.
- [x] Matriz com RF01–RF14 e RNF01–RNF09.
- [x] Fonte PlantUML P2 e representação visual vetorial da UML.
- [x] Wireframes públicos, mobile e administrativos (propostos).
- [x] Links à aplicação e à galeria de wireframes preparados.
- [ ] Confirmar execução do workflow de M2 e vinculação das issues.
- [ ] Executar e registrar teste visual completo do protótipo publicado em desktop/mobile.
- [ ] Validar links institucionais externos individualmente.
- [ ] Registrar entrega final no AVA; o assistente não acessa essa submissão automaticamente.

## 7. Como apresentar as pendências

Este repositório documenta tanto as funcionalidades atuais quanto a arquitetura e os controles futuros. **Não informar que a implementação pública atende aos RF09–RF14 apenas por existirem desenhos de login/gestão.** Esse cuidado aumenta a consistência acadêmica e evita atribuição de funcionalidades inexistentes ao protótipo.

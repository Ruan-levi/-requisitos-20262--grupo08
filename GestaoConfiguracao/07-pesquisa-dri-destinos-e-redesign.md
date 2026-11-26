# Pesquisa de experiência e destinos — Portal de Internacionalização (Redesign)

**Grupo 08 · Análise externa em 26/11/2026**  
**Natureza:** referências oficiais verificadas para protótipo acadêmico independente, não homologado pela Unifor.

## 1. Necessidades identificadas e decisões de experiência

| Necessidade do estudante | Resposta no protótipo | Regra de segurança/informação |
|---|---|---|
| Entender por onde começar | Guia "Como funciona" com seis etapas e um resumo em quatro passos na central | Não substituir orientação da DRI |
| Comparar destinos sem sair do portal continuamente | Páginas internas de destinos, cada uma com visão do processo | São referências documentadas, não vagas em tempo real |
| Saber quando será encaminhado a outro site | Links com nome da etapa e domínio identificado | Separar fonte Unifor, portal da anfitriã e orientação geral |
| Compreender a ordem da candidatura | Seções "Unifor → universidade anfitriã → aceitação" | Portal estrangeiro não substitui eventual seleção/nomeação da Unifor |
| Preparar documentos e custos | Checklist por fase e roteiro sem envio de dados | Nenhum upload ou promessa de validação |
| Acessar de celular | Layout refeito com componentes fluidos e navegação horizontal em telas menores | Teste manual e acessibilidade ainda precisam de evidência |
| Saber se a notícia/convênio é atual | Aviso de caráter histórico e data de pesquisa | Conferir semestre, vaga, curso e editais na DRI |

## 2. Pesquisa nos canais da Unifor

A [DRI / Apoio ao Estudante](https://unifor.br/dri/aluno) apresenta modalidades de intercâmbio, dupla titulação, Buddy Program, EducationUSA e orientações para mobilidade. A [área de convênios da DRI](https://unifor.br/dri/convenios) apresenta instituições parceiras; esse vínculo **não representa vaga disponível, elegibilidade ou acordo vigente para qualquer curso**. O [Guia do Intercambista (2024)](https://www.unifor.br/documents/20143/3197315/guia-aluno-intercambista-2024.pdf) dá contexto sobre busca de destinos e etapas de preparação. A [notícia institucional sobre intercâmbio 2027.1](https://unifor.br/-/unifor-inicia-inscricoes-para-o-programa-de-intercambio-academico-2027.1-neste-sabado-1-) exemplifica um comunicado com processo seletivo próprio, mas não define sozinha disponibilidade atual.

## 3. Destinos e portais oficiais externos implementados

### Universidade do Porto — Portugal

- **Vínculo de referência Unifor:** [Relação de convênios](https://unifor.br/dri/convenios).
- **Etapas do destino:** [Study at U.Porto — Incoming Mobility](https://www.up.pt/portal/en/study/mobility/study-at-uporto/).
- **Portal de candidatura da anfitriã:** [International Mobility Application](https://international.up.pt/international_mobility_application).
- **Síntese de navegação:** confirmar programa e curso na origem → verificar plano de estudos → seguir a eventual seleção/nomeação → consultar instruções da U.Porto → aguardar aceitação formal.
- **Cuidado:** o formulário da U.Porto não autoriza pular a origem. A Universidade do Porto explica que a aceitação é formal apenas após emissão de carta pela universidade.

### Universidad de Salamanca — Espanha

- **Referência Unifor:** [Convênios](https://unifor.br/dri/convenios).
- **Mobilidade na anfitriã:** [Movilidad IN](https://internacional.usal.es/movilidad-in/).
- **Orientações por perfil:** [Información para Estudiantes Internacionales](https://internacional.usal.es/estudiantes-in/).
- **Síntese de navegação:** verificar elegibilidade na Unifor → avaliar disciplinas → consultar modalidade de mobilidade IN → examinar requisitos do centro acadêmico, seguros e etapas de chegada.
- **Cuidado:** orientações para visitantes na Salamanca não comprovam novas vagas para alunos da Unifor.

### Universidad Nacional de Cuyo — Argentina

- **Referência Unifor:** [Convênios](https://unifor.br/dri/convenios).
- **Procedimentos do destino:** [Intercambio en la UNCUYO — Estudiantes Extranjeros](https://www.uncuyo.edu.ar/relacionesinternacionales/estudiantes/estudiantes-de-intercambio-en-mendoza).
- **Orientação em inglês:** [International Students](https://www.uncuyo.edu.ar/international-students).
- **Síntese de navegação:** confirmar programa bilateral e curso com a origem → seguir as orientações de nomeação institucional → consultar tramitações de documentos e vida em Mendoza.
- **Cuidado:** no modelo bilateral descrito pela UNCuyo, o aluno deve ser indicado pela universidade de origem, não presumir inscrição direta independente.

### EducationUSA — orientação sobre Estados Unidos, não parceiro de mobilidade

- **Fonte:** [EducationUSA — Your 5 Steps to U.S. Study](https://educationusa.state.gov/your-5-steps-us-study).
- **Trilha:** pesquisar opções → entender financiamento → candidatura → visto → partida.
- **Posicionamento correto na interface:** recurso informativo de orientação nos EUA, separado de universidades conveniadas e de inscrições oficiais da Unifor.

## 4. Melhorias gráficas e interação

- Hierarquia visual com azul-petróleo e acentos verde-água; menor quantidade de áreas que competem por atenção.
- Blocos explicativos por pergunta real (o que é? como funciona? o que verificar? onde confirmar?) em vez de todos os cartões terem a mesma densidade.
- Etapas numeradas, ações textuais claras, domínios externos identificados e avisos de fontes históricas.
- Melhoria de contraste, foco, responsividade e estados interativos sem expor dados pessoais.
- Novas rotas: `#/processo`, `#/destinos`, `#/destinos/porto`, `#/destinos/salamanca`, `#/destinos/cuyo`.

## 5. Limitações reais

- Não existe login, gestão de conteúdo em banco, inscrição online nem atualização automática de vagas.
- A nova área de destinos é **uma amostra de três instituições** encontradas na relação da Unifor; não substitui a lista completa de convênios por curso.
- Nenhuma informação publicada em nosso portal foi homologada pela DRI; a entidade responsável é a fonte de confirmação.
- Os testes automatizados verificam arquivos, navegação e links no código; **não** substituem uma inspeção visual/manual de todos os destinos e dispositivos.
- Não foram coletados dados de entrevistas novas; necessidades acima são hipóteses de usabilidade inferidas da tarefa e da navegação demonstrada pelo usuário.

## 6. Protótipos

- [Aplicação publicada](https://ruan-levi.github.io/-requisitos-20262--grupo08/).
- [Figma — redesign com telas editáveis](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc).
- [SRS P2 e rastreabilidade](../Requisitos/Especificacao/06-SRS-IEEE830-P2.md).

# Handoff para Figma — Portal de Internacionalização (Grupo 08)

**Estado:** base de implementação web elaborada; conversão para Figma ainda não realizada.  
**Referência principal:** protótipo estático em `prototipo/index.html`, `experience.js`, `experience.css`.  
**Não oficial:** identidade visual acadêmica independente da Unifor.

## Objetivo de experiência

A aplicação ajuda estudantes, docentes e visitantes internacionais a esclarecer dúvidas sem enviá-los imediatamente para o site da DRI. Páginas externas devem abrir somente quando há uma fonte/documento/procedimento relacionado. Evitar alegações de vagas abertas e regras vigentes sem verificação.

## Inventário de telas editáveis

| Tela | Rota | Interações prioritárias |
|---|---|---|
| Início | `#inicio` | busca, categorias, troca PT/EN, A+, público |
| Central interna | `#/painel` | atalhos, temas e chamadas para programas |
| Programas | `#/programas` | cards para modalidades |
| Detalhes de programas | `#/programas/:id` | requisitos, etapas, FAQ, fontes |
| Universidades | `#/universidades` | pesquisa + filtros país/área; listas históricas |
| Detalhe de instituição | `#/universidades/:id` | referência e próximos passos |
| Documentos | `#/documentos` | abas por etapa, checklists e links |
| Docentes | `#/docentes` | mobilidade, pesquisa e manual |
| Internacionais | `#/internacionais` | chegada, Free Mover, Buddy |
| Orientações | `#/orientacoes` | busca no catálogo |
| Guia completo | `#/orientacoes/:id` | passos, fonte e contato |
| Notícias | `#/noticias` | cards históricos |
| Detalhe de notícia | `#/noticias/:id` | explicação e fonte |
| Minha jornada | `#/planejar` | seletores e roteiro gerado |
| Contatos | `#/contatos` | canais, FAQ e links institucionais |

## Componentes principais

Navegação superior; navegação lateral com estado ativo; breadcrumb; hero da tela; cartão informativo; cartão da instituição; chip de país/categoria; resultados de busca; formulários e filtros; ficha de documento; checklist; abas; FAQ expansível; callout de fonte institucional; estados vazio e foco; rodapé e aviso de não-oficialidade.

## Design tokens iniciais

- Azul-marinho principal: `#0d2852`
- Azul de interação: `#195ace`
- Fundo neutro: `#f5f8fe`
- Superfícies: `#ffffff`
- Bordas: `#e1e8f0`
- Texto principal: `#163252`
- Texto secundário: `#64748b`
- Destaques: amarelo `#ffce65`
- Bordas arredondadas: 10–22 px
- Breakpoints de referência: desktop, tablet até 850 px, mobile até 560 px

## Ligações prototipadas

`Início → Modalidade → Detalhe → Documentação → Fonte oficial`

`Início → Universidades → Busca/filtragem → Detalhe → Fonte do convênio`

`Início → Minha jornada → Preferências → Roteiro → Programa/Instituições/Documentos`

`Cabeçalho → Área docente/visitante → Conteúdo interno → Contato institucional`

## Regras ao importar/desenhar

1. Criar frames desktop (1440 px), tablet (768 px) e mobile (390 px) nas telas essenciais.
2. Utilizar componentes e variantes reais para cards, filtros, botões, navegação e FAQ.
3. Preservar estados vazios, foco, abas selecionadas e resultados de formulários.
4. Manter links para fontes específicos, não usar um único link genérico em todos os destinos.
5. Marcar conteúdo histórico, ilustrativo ou não confirmado.
6. Revisar contraste, hierarquia, semântica e foco em validação futura.
7. Evitar se apresentar como interface oficial implantada pela Unifor.

## Requisitos rastreados

RF01–RF08: categorias, buscas, filtros, orientações, fontes, contatos, idiomas e referência de atualização. RF09–RF14 permanecem propostas de backend/governança, não implementadas como serviços reais. RNF01, RNF02, RNF04, RNF05 e RNF06 são abordados no protótipo; acessibilidade plena e requisitos de desempenho exigem avaliação formal.

## Base vetorial criada para a entrega P2

Antes da eventual importação ao Figma, foram produzidas **14 telas em SVG** e uma [galeria navegável](wireframes/index.html). Estas telas são a evidência de wireframes da Sprint 2 e podem ser usadas como ponto de partida para camadas e componentes no Figma.

A atividade P2 aceita **Figma ou similar**: o [protótipo HTML publicado](https://ruan-levi.github.io/-requisitos-20262--grupo08/) demonstra a navegação. Nenhum arquivo Figma foi criado nesta etapa; a apresentação não deve alegar o contrário.

## Redesign novembro/2026 — arquivo Figma criado

**[Abrir o arquivo de redesign no Figma](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc)**. O arquivo contém telas de início, destinos/portais estrangeiros, sequência de preparação e layout mobile elaboradas como camadas editáveis. Essas telas acompanham o protótipo HTML, mas não o substituem. Para verificar os fluxos, consulte `#/processo` e `#/destinos` no site publicado.

[Análise de UX e links externos](../GestaoConfiguracao/07-pesquisa-dri-destinos-e-redesign.md).

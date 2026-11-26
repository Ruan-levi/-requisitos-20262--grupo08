# Wireframes — Trabalho P2 · Grupo 08

**Entrega:** Protótipos (wireframes e navegação) · **Milestone:** Sprint 2, 03/11–23/11/2026.

Esta pasta contém **14 wireframes SVG vetoriais editáveis**, elaborados a partir da [SRS IEEE 830 v2.0](../../Requisitos/Especificacao/06-SRS-IEEE830-P2.md), dos [diagramas UML P2](../../diagrams/README.md) e das funcionalidades do [portal navegável](https://ruan-levi.github.io/-requisitos-20262--grupo08/). Os SVG não são capturas do site: são desenhos esquemáticos da organização de componentes e caminhos de interação.

## Galeria

[Abrir galeria visual dos wireframes no GitHub Pages](https://ruan-levi.github.io/-requisitos-20262--grupo08/wireframes/) · [Abrir o protótipo em funcionamento](https://ruan-levi.github.io/-requisitos-20262--grupo08/).

## Inventário dos wireframes

| Tela | Wireframe editável | Protótipo correspondente | RF / status |
|---|---|---|---|
| 01 — Tela inicial / busca | [SVG](01-inicio.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#inicio) | RF01, RF02, RF03 · Pública |
| 02 — Lista de programas | [SVG](02-programas.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas) | RF01, RF04 · Pública |
| 03 — Intercâmbio detalhado | [SVG](03-programa-detalhe.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/programas/intercambio) | RF04, RF05, RF08 · Pública |
| 04 — Busca, filtros e orientações | [SVG](04-orientacoes.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/orientacoes) | RF02, RF03, RF04 · Pública |
| 05 — Universidades por país / curso | [SVG](05-universidades.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/universidades) | RF04, RF05 · Pública |
| 06 — Detalhes de instituição | [SVG](06-universidade-detalhe.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/universidades) | RF05, RF08 · Pública |
| 07 — Documentos e checklists | [SVG](07-documentacao.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/documentos) | RF04, RF05 · Pública |
| 08 — Roteiro orientativo | [SVG](08-jornada.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/planejar) | RF04, RF05, RF06 · Pública |
| 09 — Canais e FAQ | [SVG](09-contatos.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#/contatos) | RF05, RF06, RF07 · Pública |
| 10 — Login (arquitetura futura) | [SVG](10-login-editorial.svg) | Não implementado | RF09 · Proposta não implementada |
| 11 — Editor / revisor (arquitetura futura) | [SVG](11-gestao-conteudo.svg) | Não implementado | RF08, RF10–RF12 · Proposta não implementada |
| 12 — Perfis (arquitetura futura) | [SVG](12-permissoes.svg) | Não implementado | RF09, RF14 · Proposta não implementada |
| 13 — Sinalizar informação (evolução) | [SVG](13-sinalizacao.svg) | Não implementado | RF13 · Evolução não implementada |
| 14 — Início em celular | [SVG](14-inicio-mobile.svg) | [Abrir](https://ruan-levi.github.io/-requisitos-20262--grupo08/#inicio) | RF01, RNF02 · Adaptativo |

## Fluxos de navegação

**Público:** início → programas → detalhes → documentação → documento oficial; início → universidades → filtro → detalhe → fonte; início → Minha jornada → seletores → roteiro; navegação → contatos/FAQ.

**Editorial (apenas planejado):** autenticação → editor de orientação → envio para revisão → decisão de publicador → publicação; administração → permissões. No protótipo atual, essas interfaces são wireframes e não representam controles persistentes.

## Como usar

- Os SVG podem ser visualizados diretamente no navegador ou no GitHub, e editados em editores vetoriais. Para converter ao Figma, importe os SVG como camadas, revise tipografia e agrupe como componentes.
- A galeria permite visualizar cada tela lado a lado com o destino funcional, quando existente.
- **Não há cadastro, aprovação institucional, vagas garantidas ou submissão de documentos** nesta entrega.
- Dimensões-base: 1440×900 no desktop e 420×920 como desenho de celular (referência de layout 390 px).

## Critério de rastreabilidade

Cada arquivo tem nome estável, identificador de RF/RNF, título e descrição acessível. A correspondência com os casos de uso e UML está em [matriz de consistência P2](../../Requisitos/Especificacao/07-matriz-consistencia-P2.md).

**Nota de escopo:** o enunciado permite “Figma ou similar”. O site HTML navegável é o protótipo semelhante; os SVG fornecem os wireframes exigidos. A criação de um arquivo específico no Figma continua opcional e não deve ser relatada como concluída.

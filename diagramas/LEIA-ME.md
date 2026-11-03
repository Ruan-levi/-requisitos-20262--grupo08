# Diagramas UML — Portal de Internacionalização

A **Entrega 1** exige diagramas de **Casos de Uso, Componentes e Implantação**. Para facilitar a correção, disponibilizamos cada modelo em dois formatos:

- **`.puml`** — código PlantUML editável (fonte do diagrama);
- **`.svg`** — visualização vetorial que pode ser aberta pelo navegador.

| Diagrama | Fonte editável | Visualização |
|---|---|---|
| Casos de Uso | [PlantUML](01-casos-de-uso.puml) | [SVG](01-casos-de-uso.svg) |
| Componentes | [PlantUML](02-componentes.puml) | [SVG](02-componentes.svg) |
| Implantação | [PlantUML](03-implantacao.puml) | [SVG](03-implantacao.svg) |

## Observação sobre os modelos

A equipe representa uma **proposta de sistema**, não uma solução já implementada na UNIFOR. Os atores e componentes são hipóteses de projeto baseadas nos requisitos iniciais. Os papéis editoriais, integrações e infraestrutura precisam ser validados antes de uma implementação institucional.

## Como editar

Abra o arquivo `.puml` no [PlantUML](https://plantuml.com/pt/) ou extensão compatível. Os arquivos SVG também permitem edição vetorial em ferramentas compatíveis.

## Rastreabilidade

- Casos de Uso → requisitos RF01–RF12 e RF14; RF13 é uma funcionalidade opcional fora do núcleo do MVP.
- Componentes → busca, consulta, gestão editorial, autenticação e persistência.
- Implantação → navegador, interface web, API e servidor de dados.

## Nota de consistência entre fontes e imagens

Os arquivos `.puml` constituem **os modelos UML textuais de referência**. Os arquivos `.svg` são **representações visuais resumidas** para leitura rápida no GitHub, e não devem substituir a revisão do modelo de origem. A arquitetura e as relações ainda são propostas acadêmicas sujeitas à validação.

# Protótipo web — internacionaliza.

**Grupo 08 · Universidade de Fortaleza · Requisitos e Modelagem de Sistemas (2026.2)**

**[Abrir aplicação](https://ruan-levi.github.io/-requisitos-20262--grupo08/) · [Figma](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc) · [25 wireframes](wireframes/index.html) · [SRS P2](../Requisitos/Especificacao/06-SRS-IEEE830-P2.md)**

Projeto acadêmico independente, inspirado na Diretoria de Relações Internacionais (DRI). **Não é um sistema homologado ou oficial da Unifor.** As informações de universidades e documentos orientam a consulta; não confirmam vagas, editais ativos ou elegibilidade.

## Estado da versão atual

| Parte | Situação | Observações |
|---|---|---|
| Portal público, rotas e conteúdo | **Implementado como protótipo navegável** | Catálogo demonstrativo mantido em JavaScript; links externos abrem fontes institucionais |
| Universidades e destinos | **Implementado como referência** | 16 instituições em 11 países, filtros e dossiês, incluindo Salamanca |
| Guias, documentação e planejamento | **Implementado como demonstração** | Checklists na navegação pública não enviam dados nem representam inscrição |
| Identidade visual, tema e idioma | **Implementado no navegador** | Nome internacionaliza., referência à marca Unifor, tema claro/escuro e PT/EN/ES; a tradução de conteúdo extenso e documentos oficiais não é completa |
| Tela de cadastro/login | **Interface implementada** | Aluno, docente e solicitação de gestor; formulários bloqueados sem um projeto Nhost conectado |
| Banco PostgreSQL, Nhost Auth e Hasura | **Código preparado, serviço remoto pendente** | SQL, permissões e cliente disponíveis; não houve testes de autenticação real |
| Administração editorial | **Tela e código cliente preparados** | Simulação de fluxo na página pública; operações reais exigem backend, permissões e testes |
| Administração de papéis e histórico completo | **Pendente** | Aprovação de gestor precisa ocorrer por canal privilegiado; não há painel de concessões |
| Figma e wireframes | **Artefatos de design versionados/ligados** | O Figma e os SVGs podem representar um estágio anterior à interface mais recente |

O login nunca é requisito para consultar a área pública. **Não cadastrar usuários reais até a implantação e validação do backend.**

## Principais caminhos

| Página | Caminho |
|---|---|
| Início | `/` |
| Central orientativa | `/#/painel` |
| Programas / dupla titulação | `/#/programas`, `/#/programas/dupla-titulacao` |
| Universidades e fontes por curso | `/#/universidades` |
| Catálogo e dossiês | `/#/destinos`, `/#/destinos/salamanca` |
| Processo de mobilidade | `/#/processo` |
| Documentos e checklists | `/#/documentos` |
| Docentes / internacionais | `/#/docentes`, `/#/internacionais` |
| Notícias e orientações | `/#/noticias`, `/#/orientacoes` |
| Planejamento | `/#/planejar` |
| Contatos | `/#/contatos` |
| Contas / gestão condicionada ao Nhost | `/conta.html` |
| Comunicados condicionados ao Nhost | `/publicacoes.html` |

### Usabilidade e identidade

O cabeçalho mantém a marca **internacionaliza.**, referência visual à Unifor e indicação da DRI. A paleta inclui Anil `#004AF7`, Marinho `#132190`, Azul Claro `#87B7FE` e Gelo `#E4F2FE`. Menus e cartões ajustam-se ao tamanho da tela; o modo escuro/iluminado e o idioma selecionado ficam gravados nas preferências locais. A mudança de idioma cobre controles e orientações principais; **não traduz automaticamente documentos oficiais**.

As imagens externas possuem alternativas locais para quando a fonte não carregar. O uso institucional definitivo do logotipo e das fotografias depende das regras e autorizações da universidade.

## Organização do código

```text
prototipo/
├── index.html, style.css, app.js                # Página principal e guias
├── experience.js, experience.css                # Rotas e páginas internas
├── redesign.css, institutional.css, theme.css   # Identidade, layout e aparência
├── portal-settings.js                           # PT/EN/ES, tema e preferências
├── account-locale.js, media-fallback.js         # Localização de contas e mídia
├── conta.html, auth.css, institutional-auth.css # Login, cadastro e espaço pessoal
├── auth-config.js, auth-client.js, auth-ui.js   # Nhost preparado, não conectado
├── publicacoes.html, publicacoes.js             # Leitura editorial condicionada ao Nhost
├── assets/                                      # SVGs ilustrativos locais
├── tests/                                       # Testes Node nativos
└── wireframes/                                  # Galeria com 25 SVGs
```

O projeto não requer pacotes NPM para a aplicação pública. Marca e fotografias de referência podem ser carregadas de fontes externas. **Nenhuma chave de administração, senha ou segredo deve ser versionado** no frontend.

### Executar localmente

Na raiz do repositório, use um servidor estático, por exemplo:

```bash
python -m http.server 5500 -d prototipo
```

Abra `http://localhost:5500`. Como alternativa, abra a pasta `prototipo/` com a extensão Live Server do VS Code.

Para validar os testes:

```bash
node --test prototipo/tests/*.test.cjs
```

A validação automática verifica integridade da estrutura, requisitos, rotas, fluxos, autenticação cliente e preferências visuais. **Não substitui inspeção visual real em navegadores e dispositivos**, avaliação de acessibilidade assistiva nem testes contra um Nhost de produção.

## Fontes e documentação

- [DRI — página inicial](https://unifor.br/dri/inicial) · [Convênios](https://unifor.br/dri/convenios) · [Apoio ao estudante](https://unifor.br/dri/aluno) · [Contatos](https://unifor.br/dri/contatos).
- [Guia Prático do Intercambista — edição de 2024](https://unifor.br/documents/20143/3197315/guia-aluno-intercambista-2024.pdf) e [Manual de Boas Práticas de Internacionalização — 2026](https://unifor.br/documents/d/nei/manual-de-boas-praticas-de-internacionalizacao-atualizado-digital-2026).
- [SRS IEEE 830 da P2](../Requisitos/Especificacao/06-SRS-IEEE830-P2.md), [matriz de consistência](../Requisitos/Especificacao/07-matriz-consistencia-P2.md), [extensão UC10–UC16](../Requisitos/Especificacao/08-extensao-P3-cadastro-perfis.md) e [diagramas UML](../diagrams/README.md).
- [Pesquisa de destinos estrangeiros](../GestaoConfiguracao/08-catalogo-universidades-internacionais-2026.md), [diretrizes visuais](../GestaoConfiguracao/12-diretrizes-visuais-dri-unifor.md) e [guia de implantação Nhost](../GestaoConfiguracao/11-implantacao-autenticacao-nhost.md).
- [Figma](https://www.figma.com/design/wINNQ9DbvhYKjjxyRV2lYc) · [Galeria de wireframes](wireframes/index.html) · [Pitch e auditoria histórica](../GestaoConfiguracao/09-auditoria-transversal-pitch-2026.md).

Os artefatos P1/P2 são registros **históricos do estágio de especificação**: algumas frases, especialmente sobre funcionalidades ainda não implementadas naquela época, não representam o código mais recente. Para o status operacional atual, considere esta página e a extensão de requisitos. Requisitos como sinalização de conteúdo desatualizado, gestão completa de acessos e auditoria editorial permanecem planejados.

## Publicação

O workflow [Publicar protótipo](../.github/workflows/publicar-prototipo.yml) testa o projeto e publica **somente `prototipo/`** no GitHub Pages a partir de `main`. Os requisitos, pesquisas, diagramas e testes permanecem no repositório, fora do site servido. A página de contas continua bloqueada para registros reais até a ativação do Nhost, conforme documentação de implantação.

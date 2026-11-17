# Protótipo web — Portal de Internacionalização

**Projeto:** UNIFOR · Requisitos e Modelagem de Sistemas · Grupo 08 · 2026.2  
**Tecnologias:** HTML5, CSS3, JavaScript puro, sem dependências externas.  
**Objetivo:** demonstrar a experiência de navegação pensada nos requisitos do [Portal de Internacionalização](../Requisitos/Elicitacao/01-documento-de-visao.md).

> **Atenção:** esta é uma **demonstração acadêmica e não oficial**. As orientações dentro do site são exemplos ilustrativos, não normas, editais ou informações aprovadas pela UNIFOR. O protótipo não processa inscrições, não recebe documentos pessoais, não envia formulários e não implementa login real.

## Como abrir no VS Code

1. Abra o repositório no **Visual Studio Code**.
2. Abra o arquivo [`prototipo/index.html`](index.html).
3. Se preferir, utilize a extensão **Live Server** e escolha **Open with Live Server**.
4. Alternativamente, com Python instalado, abra o terminal na **raiz do repositório** e execute:

   ```bash
   python -m http.server 5500 --directory prototipo
   ```

5. Acesse `http://localhost:5500` em seu navegador.

Não é necessário executar `npm install` nem `npm test`: este é um protótipo estático sem pacotes NPM.

## Como está organizado

```text
prototipo/
├── index.html                  # Estrutura, áreas e acessibilidade da página
├── style.css                   # Identidade visual e responsividade
├── app.js                      # Busca, filtros, guias, idioma e demonstração editorial
├── README.md                   # Este guia
└── assets/
    ├── conexoes-globais.svg   # Ilustração original do conceito internacional
    └── icone.svg              # Ícone original do protótipo
```

## O que pode ser demonstrado

| Funcionalidade | Teste prático | Artefatos relacionados |
|---|---|---|
| Página inicial e categorias | Clicar em **Intercâmbio e mobilidade**, **Documentos** ou outro tema. | RF01, RF04 |
| Pesquisa por palavra-chave | Digitar `intercâmbio`, `visto`, `custos` ou `docentes`. | RF02 |
| Filtro por público | Escolher **Estudantes**, **Docentes** ou **Internacionais** e combinar com categorias. | RF03 |
| Conteúdo explicativo | Abrir **Ler orientação**, ver passos e seguir o link da DRI oficial. | RF04–RF06 |
| Interface em inglês | Usar o botão **EN** no cabeçalho para traduzir a interface e os exemplos. | Exemplo de RF07; tradução institucional ainda não aprovada |
| Texto ampliado | Usar o botão **A+**. Redimensionar a janela ou navegar pelo teclado. | Protótipo de RNF01, RNF02 e RNF06 |
| Fluxo editorial | Clicar em **Enviar para revisão**, depois **Aprovar publicação**. | Demonstração de RF11–RF12; sem backend |
| FAQ e contato institucional | Abrir as perguntas e o link externo para a DRI. | RF05–RF06 |

Os textos e os guias são definidos em um **catálogo local de demonstração** em `app.js`. Não há banco de dados nem persistência dos registros editoriais. Nenhuma ação de publicação altera conteúdo remoto.

## Publicação pelo GitHub Pages

O arquivo [`.github/workflows/publicar-prototipo.yml`](../.github/workflows/publicar-prototipo.yml) publica automaticamente **apenas a pasta `prototipo/`** quando houver atualização nessa pasta na branch `main`.

Para ativar a hospedagem pela primeira vez, um administrador do repositório deverá selecionar:

1. GitHub → **Settings** → **Pages**.
2. Em **Build and deployment → Source**, escolher **GitHub Actions**.
3. Conferir a execução **Publicar protótipo (GitHub Pages)** na aba **Actions**.

Depois da primeira execução bem-sucedida, a URL aparecerá na seção **Pages** e no resultado da ação de deploy. As atualizações posteriores serão publicadas pelo fluxo automático.

## Limites do protótipo e próximos passos

- **Não é o site real da DRI.** A referência visual e temática é [unifor.br/dri/inicial](https://unifor.br/dri/inicial), sem reproduzir sua marca gráfica, textos integrais ou ferramentas institucionais.
- Os links externos direcionam ao portal real para que informações atuais sejam consultadas diretamente na fonte; não representam integração técnica.
- Acessibilidade e tradução têm **demonstrações iniciais**, mas a conformidade WCAG e revisões institucionais precisam de validação especializada.
- Autenticação, permissões, edição persistente, histórico e aprovação real de conteúdos dependem de sistema com backend, não oferecido por uma página estática.
- As necessidades e funcionalidades são **propostas acadêmicas não validadas por entrevistas reais**.

Consulte o [documento de necessidades dos usuários](../Requisitos/Elicitacao/05-necessidades-dos-usuarios.md), os [requisitos RF/RNF](../Requisitos/Especificacao/01-requisitos-funcionais-e-nao-funcionais.md) e o [backlog](../Requisitos/Especificacao/03-backlog-priorizado.md).

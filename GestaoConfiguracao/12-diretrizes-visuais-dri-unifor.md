# Redesign visual — referência de identidade DRI / Unifor

**Portal de Internacionalização · Grupo 08 · 27/11/2026**  
**Tipo de entrega:** melhoria exclusivamente de apresentação e usabilidade. Os módulos de cadastro, aluno, docente, gestor, Nhost, catálogo de universidades, jornada e documentação permanecem com o mesmo comportamento.

## 1. Referências institucionais

- [Central de Marca da Universidade de Fortaleza](https://unifor.br/central-de-marca): referência de cores, símbolo e orientação de utilização da marca.
- [Guia de Branding / Marca Unifor](https://unifor.br/documents/20143/6718465/guia_de_marca_unifor.pdf/252dcd04-3cb7-818f-0607-d4a31ac04382): tabela cromática, tipografia Satoshi, fotografias de estudantes e grafismos geométricos.
- [DRI — Diretoria de Relações Internacionais](https://unifor.br/dri/inicial): referência para apresentação institucional e navegação acadêmica.
- [Fotografia do campus usada no hero](https://unifor.br/-/revista-unifor-internacionalizacao-vai-alem-do-intercambio): imagem de referência da Revista Unifor, servida pelo domínio da universidade.
- [Fotografia de estudantes da área de contas](https://unifor.br/alunos): imagem institucional ilustrativa servida pelo site da Unifor.
- [Referência vetorial da marca Unifor](https://commons.wikimedia.org/wiki/File:Unifor_logo.svg), com marca protegida por regras de uso; arquivo hospedado no Wikimedia Commons e exibido sem recriação de forma.

## 2. Paleta de cores

| Cor institucional | HEX | Uso neste protótipo |
|---|---|---|
| Anil | `#004AF7` | Botões principais, estados de ação, links e destaques |
| Marinho | `#132190` | Grandes cabeçalhos, áreas de impacto e textos de alta ênfase |
| Azul Claro | `#87B7FE` | Foco, detalhes gráficos e destaques auxiliares |
| Gelo | `#E4F2FE` | Superfícies, filtros, áreas de apoio e cartões |

Usou-se tipografia de sistema em ambiente web para não distribuir arquivos de fonte, respeitando a intenção de uma família sem serifa e hierarquia de pesos. **Não** se afirma correspondência pixel a pixel ao site oficial.

## 3. Intervenções

1. **Cabeçalho e rodapé:** assinatura gráfica com símbolo Unifor e identificação da proposta como DRI, mas com aviso permanente de protótipo acadêmico independente e não oficial.
2. **Página inicial:** hero azul institucional com fotografia da vida universitária e crédito, barra de pesquisa destacada, cartões mais legíveis, transições moderadas e fundo mais claro.
3. **Conteúdos internos:** painel e menu lateral com áreas de orientação mais claras, critérios de seleção contrastantes, formulários com foco visível, filtros e alertas com hierarquia consistente.
4. **Contas e perfis:** mesma identidade para login, cadastro, espaço de aluno, espaço docente e área de gestor; sem alteração em papel, status, credenciais, autenticação ou permissões.
5. **Comunicados:** consistência visual, sem alterar publicações nem consulta ao GraphQL.
6. **Responsividade e acessibilidade:** layouts adaptativos, links mais perceptíveis, foco visível e respeito a preferência por movimentos reduzidos.

## 4. Itens preservados

- 16 instituições de referência em 11 países; etapas e links externos da Salamanca.
- Requisitos, casos de uso, wireframes e documentação acadêmica.
- Sistema de cadastro/login previamente adicionado, incluindo aviso de **Nhost remoto ainda não configurado**.
- Todas as APIs, regras de autorização e migrações existentes.
- Backups históricos do Projeto 01 e versão anterior da atualização visual.

## 5. Limitações e cuidados de marca

**Não é uma aplicação oficial da Unifor ou da DRI.** A Central de Marca informa que o logotipo Unifor tem uso institucional protegido. Esta demonstração acadêmica de interface não implica autorização de publicação oficial, homologação da universidade ou direito de uso comercial. A versão para implantação institucional exige aprovação prévia da titular da marca e validação dos direitos de uso das fotografias.

O logotipo e as fotos são consultados nos respectivos domínios externos em tempo de carregamento; não foram gravados como arquivos locais no repositório. Se os hosts estiverem indisponíveis, a camada gráfica tem fundo e texto de apoio, mas o conteúdo fotográfico externo pode não aparecer.

## 6. Validação

- Testes automatizados de CSS, presença de marca e elementos da navegação em `prototipo/tests/institutional-visual.test.cjs`.
- Testes já existentes da aplicação para evitar regressões.
- Inspeção manual em telas desktop e celulares segue recomendada, principalmente onde as imagens são carregadas de sites terceiros.

**Não executar alterações adicionais em login, cadastro ou banco de dados nesta etapa**, por decisão do grupo.

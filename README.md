# 🧠 Atlas do Cérebro

Um atlas interativo da anatomia do cérebro humano, feito inteiramente com
**HTML5, CSS3 e JavaScript puro (Vanilla JS)** — sem frameworks, sem build
step, pronto para ser hospedado no **GitHub Pages**.

Passe o mouse (ou navegue com o teclado) sobre o desenho SVG do cérebro na
página inicial para destacar cada região, e clique para abrir uma página
completa com funções, conexões, curiosidades e efeitos de lesão.

---

## ✨ Funcionalidades

- Desenho do cérebro 100% em **SVG vetorial**, com 11 regiões clicáveis:
  Lobo Frontal, Lobo Parietal, Lobo Temporal, Lobo Occipital, Cerebelo,
  Tronco Encefálico, Tálamo, Hipotálamo, Hipocampo, Amígdala e Corpo Caloso.
- Hover destaca a região em cor e esmaece o restante do cérebro, com
  tooltip mostrando o nome da estrutura.
- Pequenos "nós" pulsantes sobre cada região, simulando atividade neural.
- Clique (ou Enter/Espaço com o foco no teclado) abre a página de detalhe
  da estrutura.
- Páginas de detalhe com layout padronizado: descrição, funções, o que
  controla, conexões, curiosidades, alterações quando lesionada e
  bibliografia.
- Totalmente **responsivo** (desktop, tablet e celular).
- Cuidados de **acessibilidade**: `aria-label`, `tabindex`, foco visível
  por teclado e respeito a `prefers-reduced-motion`.
- Código **extremamente comentado**, pensado como material de estudo
  tanto de neuroanatomia quanto de desenvolvimento web.

---

## 📁 Estrutura de pastas

```
brain-website/
│
├── index.html              → página inicial com o SVG interativo
│
├── css/
│   ├── style.css            → layout geral, tipografia, cartões, legenda
│   └── brain.css             → cores e animações específicas do SVG
│
├── js/
│   ├── data.js               → todo o conteúdo textual (fonte da verdade)
│   ├── brain.js               → hover, foco, tooltip e clique no SVG
│   └── script.js               → legenda, rodapé e páginas de detalhe
│
├── pages/
│   ├── frontal.html
│   ├── parietal.html
│   ├── temporal.html
│   ├── occipital.html
│   ├── cerebellum.html
│   ├── brainstem.html
│   ├── thalamus.html
│   ├── hypothalamus.html
│   ├── hippocampus.html
│   ├── amygdala.html
│   └── corpuscallosum.html
│
├── assets/
│   ├── images/               → reservado para imagens futuras
│   └── icons/                → reservado para ícones futuros
│
└── README.md
```

### Como as páginas de detalhe funcionam

Todas as páginas dentro de `pages/` usam **exatamente o mesmo HTML**,
mudando apenas um atributo:

```html
<div class="detail" data-part="frontal" data-loading="true">
```

Quando a página carrega, `js/script.js` lê esse `data-part`, busca o
objeto correspondente em `js/data.js` e preenche automaticamente todos os
textos, listas e o ícone da página. Isso significa que **você nunca
precisa escrever HTML de conteúdo à mão** — só editar `data.js`.

---

## ▶️ Como executar localmente

Como o projeto não usa nenhuma ferramenta de build, basta abrir o
`index.html` em um navegador. Porém, para que o `fetch`/carregamento de
módulos funcione sem restrições de CORS em alguns navegadores, é
recomendado servir os arquivos por um servidor local simples:

```bash
# Dentro da pasta brain-website/
python3 -m http.server 8000
# depois acesse http://localhost:8000 no navegador
```

Ou, se preferir usar Node.js:

```bash
npx serve .
```

---

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `brain-website`) e envie todos os
   arquivos deste projeto para a branch `main`.
2. No GitHub, vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save**. Em alguns minutos, o site estará disponível em:
   `https://SEU_USUARIO.github.io/brain-website/`

Não é necessário nenhum passo de build — o GitHub Pages serve os
arquivos estáticos diretamente.

---

## ➕ Como adicionar uma nova região do cérebro

Graças à arquitetura do projeto, adicionar uma nova estrutura exige
apenas três passos:

### 1. Adicione os dados em `js/data.js`

Copie o modelo de qualquer região existente dentro do objeto
`brainParts` e ajuste os textos:

```js
novaEstrutura: {
  id: "novaEstrutura",
  name: "Nome da Estrutura",
  category: "lobo", // ou "cerebelo-tronco" ou "profunda"
  page: "pages/novaEstrutura.html",
  shortDesc: "Frase curta para o tooltip.",
  description: "Texto descritivo completo.",
  functions: ["Função 1", "Função 2", "Função 3"],
  controls: "O que essa estrutura controla.",
  connections: "Principais conexões anatômicas.",
  curiosities: "Alguma curiosidade interessante.",
  damage: "O que acontece quando é lesionada.",
  bibliography: ["Referência 1", "Referência 2"]
}
```

### 2. Adicione o elemento no SVG (`index.html`)

Dentro de `<svg class="brain-map">`, adicione um novo `<path>` (ou outra
forma SVG) com `id` igual à chave usada em `data.js`, e a classe
`brain-region`:

```html
<path
  id="novaEstrutura"
  class="brain-region"
  data-category="lobo"
  d="... coordenadas do desenho ..."
/>
```

O JavaScript (`brain.js`) detecta automaticamente qualquer elemento com a
classe `brain-region` — não é necessário editar nenhum arquivo `.js`.

### 3. Crie a página HTML de detalhe

Copie qualquer arquivo de `pages/` (ex: `pages/frontal.html`), salve como
`pages/novaEstrutura.html` e troque apenas esta linha:

```html
<div class="detail" data-part="novaEstrutura" data-loading="true">
```

Pronto — a página será preenchida automaticamente com os dados de
`data.js`.

---

## 🎨 Como alterar as cores

Todas as cores do site são centralizadas em variáveis CSS no topo de
`css/style.css`, dentro do bloco `:root`:

```css
:root {
  --color-bg: #F5F7FA;
  --color-primary: #2C5FE0;   /* cor dos lobos */
  --color-teal: #0E9A94;      /* cor do cerebelo/tronco */
  --color-violet: #6C63FF;    /* cor das estruturas profundas */
  ...
}
```

Basta alterar o valor de qualquer variável para mudar a cor em todo o
site de uma vez.

---

## 🎞️ Como alterar as animações

- **Hover das regiões do SVG**: veja as regras `.brain-region:hover` em
  `css/brain.css` (controla escala, sombra e cor).
- **Nós pulsantes**: a animação `pulse-node` (também em `brain.css`)
  controla a pulsação dos pontos sobre cada região. Altere a duração em
  `animation: pulse-node 2.6s ease-in-out infinite;`.
- **Transições gerais** (tooltip, cartões, legenda): controladas pelas
  variáveis `--transition-fast` e `--transition-medium` em
  `css/style.css`.

---

## 📝 Como adicionar novos conteúdos às páginas de detalhe

Basta editar o texto correspondente em `js/data.js` — como o conteúdo é
renderizado dinamicamente por `script.js`, qualquer alteração em
`data.js` aparece automaticamente na página de detalhe correspondente,
sem precisar tocar em HTML algum.

---

## 🧩 Tecnologias utilizadas

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, animações)
- JavaScript ES6+ (sem frameworks, sem dependências externas)
- Fontes: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk),
  [Inter](https://fonts.google.com/specimen/Inter) e
  [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
  via Google Fonts

---

## ⚠️ Aviso

Este projeto tem finalidade **educacional**. As ilustrações do cérebro
são esquemáticas e simplificadas — não substituem material didático
oficial de anatomia nem devem ser usadas para fins clínicos.

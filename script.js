// =====================================================================
// script.js
// ---------------------------------------------------------------------
// Responsabilidades gerais do site que NÃO são específicas do desenho
// do cérebro:
//   1. Preencher automaticamente o ano no rodapé.
//   2. Construir a legenda lateral da página inicial a partir de
//      brainParts (data.js), agrupada por categoria.
//   3. Nas páginas de DETALHE (pages/*.html), ler o atributo
//      data-part do elemento <body> e preencher todo o conteúdo da
//      página automaticamente com base em brainParts.
//
// Graças ao passo 3, adicionar uma nova estrutura ao site depois de
// pronto exige apenas:
//   a) um novo objeto em js/data.js
//   b) um novo elemento no SVG (index.html)
//   c) uma nova página HTML em /pages copiando o modelo existente e
//      trocando apenas o atributo data-part do <body>
// O restante (título, funções, textos etc.) é renderizado por este
// arquivo automaticamente — não é necessário escrever HTML de
// conteúdo à mão em cada página.
// =====================================================================

(function initSite() {

  // --- Rodapé: ano atual, para não precisar atualizar manualmente ----
  const anoEl = document.getElementById('current-year');
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  // --- Decide qual "modo" de página estamos: inicial ou detalhe ------
  const legendaContainer = document.getElementById('legend-list');
  if (legendaContainer) {
    construirLegenda(legendaContainer);
  }

  const detailContainer = document.querySelector('[data-part]');
  if (detailContainer) {
    preencherPaginaDeDetalhe(detailContainer);
  }

})();

// -----------------------------------------------------------------------
// FUNÇÃO: construirLegenda
// Cria a lista lateral de estruturas (agrupada por categoria), usada
// na página inicial ao lado do SVG. Cada item também funciona como um
// atalho: passar o mouse destaca a região no desenho e clicar navega
// até a página de detalhe.
// -----------------------------------------------------------------------
function construirLegenda(container) {
  // Nomes amigáveis para cada categoria, na ordem em que devem
  // aparecer na legenda.
  const categorias = [
    { chave: 'lobo', titulo: 'Lobos do cérebro', cor: 'var(--color-primary)' },
    { chave: 'cerebelo-tronco', titulo: 'Cerebelo e tronco', cor: 'var(--color-teal)' },
    { chave: 'profunda', titulo: 'Estruturas profundas', cor: 'var(--color-violet)' }
  ];

  categorias.forEach((categoria) => {
    // Filtra, em brainParts, apenas as regiões da categoria atual.
    const regioes = Object.values(brainParts).filter(
      (parte) => parte.category === categoria.chave
    );
    if (regioes.length === 0) return;

    const grupo = document.createElement('div');
    grupo.className = 'legend__group';

    const titulo = document.createElement('p');
    titulo.className = 'legend__group-title';
    titulo.textContent = categoria.titulo;
    grupo.appendChild(titulo);

    regioes.forEach((parte) => {
      const item = document.createElement('a');
      item.href = parte.page;
      item.className = 'legend__item';
      item.style.setProperty('--dot-color', categoria.cor);
      item.innerHTML = `<span class="legend__dot" aria-hidden="true"></span>${parte.name}`;

      // Ao passar o mouse sobre o item da legenda, disparamos um
      // evento customizado que o brain.js escuta para destacar a
      // região correspondente no SVG (mantendo os dois arquivos
      // desacoplados um do outro).
      item.addEventListener('mouseenter', () => {
        document.dispatchEvent(
          new CustomEvent('legend:hover', { detail: { id: parte.id } })
        );
      });
      item.addEventListener('mouseleave', () => {
        document.dispatchEvent(new CustomEvent('legend:leave'));
      });

      grupo.appendChild(item);
    });

    container.appendChild(grupo);
  });
}

// -----------------------------------------------------------------------
// FUNÇÃO: preencherPaginaDeDetalhe
// Lê o atributo data-part do container principal da página (ex:
// data-part="frontal"), busca os dados correspondentes em brainParts
// e preenche todos os elementos da página com esse conteúdo.
// -----------------------------------------------------------------------
function preencherPaginaDeDetalhe(container) {
  const idParte = container.getAttribute('data-part');
  const dados = brainParts[idParte];

  if (!dados) {
    // Caso o id não exista em brainParts (ex: erro de digitação ao
    // criar uma nova página), mostramos um aviso claro em vez de
    // deixar a página em branco silenciosamente.
    container.innerHTML =
      '<p role="alert">Não foi possível carregar o conteúdo desta ' +
      'estrutura. Verifique se o atributo data-part do &lt;body&gt; ' +
      'corresponde a uma chave existente em js/data.js.</p>';
    return;
  }

  // Título da aba do navegador.
  document.title = `${dados.name} · Atlas do Cérebro`;

  // Textos simples (título, categoria, descrição etc.)
  definirTexto('[data-field="name"]', dados.name);
  definirTexto('[data-field="category"]', rotuloCategoria(dados.category));
  definirTexto('[data-field="shortDesc"]', dados.shortDesc);
  definirTexto('[data-field="description"]', dados.description);
  definirTexto('[data-field="controls"]', dados.controls);
  definirTexto('[data-field="connections"]', dados.connections);
  definirTexto('[data-field="curiosities"]', dados.curiosities);
  definirTexto('[data-field="damage"]', dados.damage);

  // Listas (funções e bibliografia)
  preencherLista('[data-field="functions"]', dados.functions);
  preencherLista('[data-field="bibliography"]', dados.bibliography);

  // Ícone SVG específico da estrutura, se existir na página.
  const iconeContainer = document.querySelector('[data-field="icon"]');
  if (iconeContainer) {
    iconeContainer.setAttribute('data-category', dados.category);
  }

  // Assim que o conteúdo estiver pronto, removemos o estado de
  // "carregando" definido em style.css, revelando a página com uma
  // transição suave de opacidade.
  container.setAttribute('data-loading', 'false');

  // --- Função auxiliar interna: define texto em um elemento --------
  function definirTexto(seletor, texto) {
    const el = container.querySelector(seletor);
    if (el) el.textContent = texto;
  }

  // --- Função auxiliar interna: preenche uma lista <ul> -------------
  function preencherLista(seletor, itens) {
    const el = container.querySelector(seletor);
    if (!el || !Array.isArray(itens)) return;
    el.innerHTML = ''; // limpa qualquer conteúdo placeholder
    itens.forEach((itemTexto) => {
      const li = document.createElement('li');
      li.textContent = itemTexto;
      el.appendChild(li);
    });
  }
}

// -----------------------------------------------------------------------
// FUNÇÃO: rotuloCategoria
// Converte a chave interna da categoria (ex: "cerebelo-tronco") em um
// rótulo amigável para exibição (ex: "Cerebelo / Tronco Encefálico").
// -----------------------------------------------------------------------
function rotuloCategoria(chave) {
  const rotulos = {
    'lobo': 'Lobo cerebral',
    'cerebelo-tronco': 'Cerebelo / Tronco encefálico',
    'profunda': 'Estrutura profunda'
  };
  return rotulos[chave] || chave;
}

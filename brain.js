// =====================================================================
// brain.js
// ---------------------------------------------------------------------
// Responsável por TODA a interação com o desenho SVG do cérebro na
// página inicial:
//   • destacar a região sob o mouse/teclado (hover e foco)
//   • esmaecer o restante do cérebro enquanto isso
//   • mostrar um tooltip com o nome da estrutura
//   • navegar até a página de detalhe correspondente ao clicar
//
// Este arquivo assume que `brainParts` (definido em data.js) já foi
// carregado antes dele. Ele NÃO conhece o conteúdo de cada região —
// apenas lê os dados de `brainParts` a partir do atributo `id` de
// cada elemento SVG. Isso é o que torna o sistema fácil de expandir:
// adicionar uma região nova aqui não exige nenhuma mudança neste
// arquivo.
// =====================================================================

// Função auto-executável (IIFE) para não "vazar" variáveis para o
// escopo global do navegador. Boa prática em projetos sem módulos ES.
(function initBrainMap() {

  // Só executamos esta lógica se existir um mapa do cérebro na página
  // atual (ou seja, na página inicial). Em páginas de detalhe este
  // arquivo simplesmente não faz nada.
  const svg = document.querySelector('.brain-map');
  if (!svg) return;

  // Elemento de tooltip flutuante (criado uma única vez e reutilizado).
  const tooltip = document.getElementById('brain-tooltip');

  // Pegamos TODAS as regiões clicáveis do SVG de uma vez.
  const regions = Array.from(svg.querySelectorAll('.brain-region'));

  // -------------------------------------------------------------------
  // FUNÇÃO: destacarRegiao
  // Aplica o efeito visual de "hover" na região passada e esmaece
  // (dim) todas as outras, criando o contraste pedido no briefing.
  // -------------------------------------------------------------------
  function destacarRegiao(regiaoAtiva) {
    regions.forEach((regiao) => {
      if (regiao === regiaoAtiva) {
        regiao.classList.add('is-hovered');
        regiao.classList.remove('is-dimmed');
      } else {
        regiao.classList.add('is-dimmed');
        regiao.classList.remove('is-hovered');
      }
    });
  }

  // -------------------------------------------------------------------
  // FUNÇÃO: limparDestaque
  // Remove os efeitos de hover/dim de todas as regiões, voltando o
  // cérebro inteiro ao estado neutro original.
  // -------------------------------------------------------------------
  function limparDestaque() {
    regions.forEach((regiao) => {
      regiao.classList.remove('is-hovered', 'is-dimmed');
    });
  }

  // -------------------------------------------------------------------
  // FUNÇÃO: mostrarTooltip
  // Posiciona e exibe o tooltip próximo ao cursor/elemento, com o
  // nome e a descrição curta da estrutura (lidos de brainParts).
  // -------------------------------------------------------------------
  function mostrarTooltip(regiao, x, y) {
    if (!tooltip) return;

    const dados = brainParts[regiao.id];
    if (!dados) return;

    tooltip.querySelector('.tooltip__title').textContent = dados.name;
    tooltip.querySelector('.tooltip__desc').textContent = dados.shortDesc;

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.classList.add('is-visible');
  }

  function esconderTooltip() {
    if (!tooltip) return;
    tooltip.classList.remove('is-visible');
  }

  // -------------------------------------------------------------------
  // FUNÇÃO: irParaDetalhe
  // Redireciona o navegador para a página HTML de detalhe da região,
  // usando o caminho salvo em brainParts[id].page.
  // -------------------------------------------------------------------
  function irParaDetalhe(regiao) {
    const dados = brainParts[regiao.id];
    if (!dados) return;
    window.location.href = dados.page;
  }

  // -------------------------------------------------------------------
  // LISTENERS: um loop único percorre todas as regiões e conecta os
  // eventos de mouse, teclado e clique. Como o comportamento é igual
  // para todas as 11 regiões, não precisamos repetir código.
  // -------------------------------------------------------------------
  regions.forEach((regiao) => {

    // Torna a região acessível por teclado (Tab) e leitores de tela.
    regiao.setAttribute('tabindex', '0');
    regiao.setAttribute('role', 'button');

    const dados = brainParts[regiao.id];
    if (dados) {
      regiao.setAttribute('aria-label', `${dados.name}: ${dados.shortDesc}`);
    }

    // --- MOUSE: entrar na região -------------------------------------
    regiao.addEventListener('mouseenter', (evento) => {
      destacarRegiao(regiao);
      mostrarTooltip(regiao, evento.clientX, evento.clientY);
    });

    // --- MOUSE: mover dentro da região (tooltip acompanha o cursor) --
    regiao.addEventListener('mousemove', (evento) => {
      mostrarTooltip(regiao, evento.clientX, evento.clientY);
    });

    // --- MOUSE: sair da região ----------------------------------------
    regiao.addEventListener('mouseleave', () => {
      limparDestaque();
      esconderTooltip();
    });

    // --- TECLADO: foco (Tab) equivale visualmente ao hover -----------
    regiao.addEventListener('focus', () => {
      destacarRegiao(regiao);
      // Sem coordenadas de mouse disponíveis, posicionamos o tooltip
      // logo acima do centro do elemento em foco.
      const caixa = regiao.getBoundingClientRect();
      mostrarTooltip(regiao, caixa.left + caixa.width / 2, caixa.top);
    });

    regiao.addEventListener('blur', () => {
      limparDestaque();
      esconderTooltip();
    });

    // --- CLIQUE: navega até a página de detalhe -----------------------
    regiao.addEventListener('click', () => irParaDetalhe(regiao));

    // --- TECLADO: Enter ou Espaço também ativam a navegação -----------
    regiao.addEventListener('keydown', (evento) => {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault(); // evita rolar a página com a barra de espaço
        irParaDetalhe(regiao);
      }
    });
  });

  // -------------------------------------------------------------------
  // INTEGRAÇÃO COM A LEGENDA LATERAL
  // Os itens da legenda (gerados dinamicamente em script.js) também
  // devem destacar a região correspondente no SVG ao passar o mouse,
  // reforçando a relação visual entre lista e desenho.
  // -------------------------------------------------------------------
  document.addEventListener('legend:hover', (evento) => {
    const regiao = svg.querySelector(`#${evento.detail.id}`);
    if (regiao) destacarRegiao(regiao);
  });

  document.addEventListener('legend:leave', () => {
    limparDestaque();
  });

})();

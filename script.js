// ===== SELECCIONEM ELS ELEMENTS DEL HTML =====
const zooContainer = document.getElementById('zoo-container');
const toggleButton = document.getElementById('toggle-layout');
const layoutLabel  = document.getElementById('layout-label');

// Variable per saber quin layout estem mostrant ara
let isGrid = true;

// ===== BOTÓ: CANVIA ENTRE GRID I FLEX =====
toggleButton.addEventListener('click', () => {

  if (isGrid) {
    // Canviem de grid a flex:
    // Treiem la classe "zoo-grid" i posem "zoo-flex"
    zooContainer.classList.remove('zoo-grid');
    zooContainer.classList.add('zoo-flex');

    // Actualitzem el botó i l'etiqueta
    toggleButton.textContent = 'Canvia a Grid';
    layoutLabel.innerHTML = 'Layout actual: <strong>flex</strong>';

  } else {
    // Canviem de flex a grid:
    zooContainer.classList.remove('zoo-flex');
    zooContainer.classList.add('zoo-grid');

    toggleButton.textContent = 'Canvia a Flex';
    layoutLabel.innerHTML = 'Layout actual: <strong>grid</strong>';
  }

  // Invertim el valor de la variable
  isGrid = !isGrid;
});
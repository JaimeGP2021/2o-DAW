function EstructuraDOM() {
  const arbolElement = document.getElementById("tree");
  const arbolDOM = generarArbolDOM(document.documentElement, 0);
  arbolElement.innerHTML = arbolDOM;
}
function generarArbolDOM(elemento, nivel) {
  let tree = "";
  for (let i = 0; i < nivel; i++) {
    tree += `_________|`;
  }
  tree += `${elemento.tagName.toLowerCase()}<br>`;
  for (let i = 0; i < elemento.children.length; i++) {
    tree += generarArbolDOM(elemento.children[i], nivel + 1);
  }
  return tree;
}
EstructuraDOM();

// Realizar un script que cuando pulse el usuario con el botón del ratón en cualquier sitio de la
// pantalla, identifique si ha pulsado con el botón derecho, izquierdo o la rueda central.

document.addEventListener("mousedown", (n) => {
  switch (n.button) {
    case 0:
      document.getElementById("texto").innerHTML =
        "Hiciste click en el botón izquierdo";
      break;
    case 1:
      document.getElementById("texto").innerHTML =
        "Hiciste click en el botón central";
      break;
    case 2:
      document.getElementById("texto").innerHTML =
        "Hiciste click en el botón derecho";
      break;
  }
});

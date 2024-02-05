// Realizar un script que, al pulsar un botón del ratón, el color de fondo del cuadro de mensaje
// debe  ser  amarillo  (#FFFF00)  y  cuando  se  pulsa  una  tecla,  el  color  de  fondo  debe  ser  azul
// (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.

var cuaderno = document.getElementById("colorbook");

document.addEventListener("mousedown", () => {
  cuaderno.style.backgroundColor = "#FFFF00";
});

document.addEventListener("keydown", () => {
  cuaderno.style.backgroundColor = "#CCE6FF";
});

document.addEventListener("mousemove", () => {
  cuaderno.style.backgroundColor = "#FFFFFF";
});

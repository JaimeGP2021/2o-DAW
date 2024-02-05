// Realizar un script que permita mover una caja dentro de la ventana del navegador tanto con las
// teclas de desplazamiento del teclado central como con las del teclado numérico.

var cuadrao = document.getElementById("square");

var x = 0;
var y = 0;

document.addEventListener("keydown", (k) => {
  switch (k.code) {
    case "ArrowUp":
    case "Numpad8":
      cuadrao.style.top = (y -= 50) + "px";
      break;
    case "ArrowDown":
    case "Numpad2":
      cuadrao.style.top = (y += 50) + "px";
      break;
    case "ArrowRight":
    case "Numpad6":
      cuadrao.style.right = (x -= 50) + "px";
      break;
    case "ArrowLeft":
    case "Numpad4":
      cuadrao.style.right = (x += 50) + "px";
      break;
  }
});

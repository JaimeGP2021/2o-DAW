document.addEventListener("DOMContentLoaded", function () {
  var ratonX = 0;
  var ratonY = 0;
  pulsado = false;
  var imagen = document.getElementById("imagen");

  document.addEventListener("contextmenu", (r) => {
    r.preventDefault();
  });

  imagen.addEventListener("mousedown", function (e) {
    if (e.button == 0) {
      pulsado = true;
      imagen.style.backgroundImage = 'url("cerdo02.jpeg")';
      ratonX = e.clientX - imagen.offsetLeft;
      ratonY = e.clientY - imagen.offsetTop;
    }
  });

  imagen.addEventListener("mousemove", function (e) {
    if (pulsado) {
      let newX = e.clientX - ratonX;
      let newY = e.clientY - ratonY;
      imagen.style.left = newX + "px";
      imagen.style.top = newY + "px";
    }
  });

  imagen.addEventListener("mouseup", (e) => {
    if (e.button == 0) {
      imagen.style.backgroundImage = 'url("cerdo01.jpg")';
      pulsado = false;
    }
  });
});

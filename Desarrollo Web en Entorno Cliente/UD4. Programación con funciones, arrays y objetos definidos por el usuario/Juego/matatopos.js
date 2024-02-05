var matatopos = {
  ocupacion: [], //Para llevar las posiciones
  puntuacion: 0, //Puntuación inicial

  lanzaImagen: function () {
    //Lanza imágenes de forma aleatoria evitando repetir casillas
    let img = document.createElement("img");
    if (55 >= Math.floor(Math.random() * 100 + 1)) {
      //Decide la imagen aleatoriamente con un 55% de topo
      img.src = "img/Rese_T._Ado.png";
      img.addEventListener("click", () => this.sumaPuntos());
    } else {
      img.src = "img/Isabelle.png";
      img.addEventListener("click", () => this.restaPuntos());
    }
    img.addEventListener("click", () => img.remove());
    img.width = "150";

    let lugar = this.casilla();
    let place = document.getElementById(lugar);
    if (this.ocupacion.indexOf(lugar) == -1) {
      let self = this;
      setTimeout(() => this.huyeImagen(), 1500); //Elimina la imagen pasado un tiempo asegurando que exista
      this.ocupacion.push(lugar);
      place.appendChild(img);
    }
    this.actualizaScore();
  },

  casilla: function () {
    //Genera un número aleatorio entre 1 y 50
    return Math.floor(Math.random() * 50 + 1);
  },

  huyeImagen: function () {
    //Elimina la imagen
    let lugar = document.getElementById(this.ocupacion.shift());
    lugar.removeChild(lugar.firstChild);
  },

  sumaPuntos: function () {
    //Suma puntos
    this.puntuacion += 25;
  },

  restaPuntos: function () {
    //Resta puntos
    this.puntuacion -= 100;
  },

  actualizaScore: function () {
    //Actualiza la puntuación en pantalla y enseña el mensaje de victoria
    let score = document.getElementById("score");
    if (this.puntuacion >= 1000) {
      score.innerHTML = `¡LLEGASTE A 1000 PUNTOS, IMPRESIONANTE!`;
      setTimeout(() => location.reload(), 3000);
    } else {
      score.innerHTML = `SCORE: ${this.puntuacion}`;
    }
  },
};

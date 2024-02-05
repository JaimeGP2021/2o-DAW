////////////////////////////////////////////////////////////////////////////////
//Este archivo es usado como copia de seguridad, por favor obviar su contenido//
////////////////////////////////////////////////////////////////////////////////

var ocupacion = []; //Para llevar las posiciones
var puntuacion = 0; //Puntuación inicial

function lanzaImagen() { //Lanza imágenes de forma aleatoria evitando repetir casillas
    let img = document.createElement("img");
    if (55 >= (Math.floor(Math.random() * 100 + 1))) {
        img.src = "/img/Rese_T._Ado.png";
        img.addEventListener('click', () => sumaPuntos());
        img.addEventListener('click', () => img.remove());
    } else {
        img.src = "/img/Isabelle.png";
        img.addEventListener('click', () => restaPuntos());
        img.addEventListener('click', () => img.remove());
    }
    img.width = "150";
    
    let lugar = casilla();
    img.id = "img_" + lugar;
    console.log(img.id);
    let place = document.getElementById(lugar);
    if (ocupacion.indexOf(lugar) == -1) {
        setTimeout(huyeImagen, 1500);       //Elimina la imagen pasado un tiempo asegurando que exista
        ocupacion.push(lugar);
        place.appendChild(img);
    }
    actualizaScore();
}

function casilla() { //Genera un número aleatorio entre 1 y 50
    return Math.floor(Math.random() * 50 + 1);
}

function huyeImagen() { //Elimina la imagen
    let lugar = document.getElementById(ocupacion.shift());
    lugar.removeChild(lugar.firstChild);
}

function sumaPuntos(){ //Suma puntos
    puntuacion += 25;
}

function restaPuntos(){ //Resta puntos
    puntuacion -= 50;
}

function actualizaScore(){ //Actualiza la puntuación en pantalla
    let score = document.getElementById('score');
    score.innerHTML = `SCORE: ${puntuacion}`
}

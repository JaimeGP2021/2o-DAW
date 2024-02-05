var aleatorio = [];
var cont = 0;

//Ayuda a generar números aleatorios
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Genero y almaceno números aleatorios en un array
while (cont < 10) {
    aleatorio.push(getRandomInt(1001));
    cont++;
}

//Ordeno el array
function comparar(a, b) {
    return a - b;
}
aleatorio.sort(comparar);

//Copio el array eliminando el mayor y menor número
resultado = aleatorio.slice(1, 9)

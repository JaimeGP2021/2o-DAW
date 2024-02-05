var aleatorio = new Array();
var cont = 0

function getRandomInt(max) {
    return Math.round(Math.random() * max);
}

while (cont < 10) {
    aleatorio.push(getRandomInt(10));
    cont++;
}

function filtraOcho(elemento) {
    return elemento < 8;
}

function quitaImpar(arr) {
    for (let key of arr.keys()) {
        if (arr[key] % 2 != 0) {
            arr[key] = " Impar";
        }
    }
    return arr;
}

console.log(aleatorio);

function arreando() {
    document.write(`Tu array aleatorio es: ${aleatorio}<br>`);
    document.write(`Tu array con los valores menores a 8 es: ${aleatorio.filter(filtraOcho)}<br>`);
    document.write(`Tu array sin impares es: ${quitaImpar(aleatorio)}<br>`);
}

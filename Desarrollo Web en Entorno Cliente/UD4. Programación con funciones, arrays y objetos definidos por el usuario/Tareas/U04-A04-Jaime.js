function arraympar(n) { //Crea un array de números secuencial impar hasta "n"
    let res = []
    for (let i = 0; i <= n; i++) {
        if ((i % 2) != 0) {
            res.push(i)
        }
    }
    return res;
}

lista = arraympar(21)
console.log("El array es: " + lista);

//a.Calcula el sumatorio de dichos números impares e imprime el resultado.

function sumatorio(array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }
    return res
}

console.log("La suma de todos los elementos es de " + sumatorio(lista));

//b.Muestra en orden inverso el array creado anteriormente.

console.log("El array invertido es: " + lista.reverse())
lista.reverse() //Devuelve el array a la normalidad

//c.Lea un valor que escriba el usuario y búsquelo en el array. Indique si la búsqueda tuvo éxito indicando la posición o si no tuvo éxito.

var userNumber = parseInt(prompt("¿Qué número buscas?"))

function busca(listado) {
    return listado == userNumber;
}

var posicion = lista.findIndex(busca);

if (posicion != -1) {
    console.log("El número se encuentra en el array en la posición: " + lista.findIndex(busca));
} else {
    console.log("El número no se encuenra en el array");
}


//d.En caso de tener éxito, borra su valor.

if (posicion != -1) {
    delete lista[posicion];
    console.log("El nuevo array es: " + lista);
}

//e.Muéstrelo ordenado de forma ascendente, y a continuación de forma descendente.

function comparar(a, b) {
    return a - b;
}

function rarapmoc(a, b) {
    return b - a;
}

console.log("El array ordenado de forma ascendente es: " + lista.sort(comparar));
console.log("El array ordenado de forma descendente es: " + lista.sort(rarapmoc));

function pidepalabras() {
    let lista = [];
    let nPalabas = parseInt(prompt("¿Cuantás palabras quieres introducir?"));

    for (let i = 0; i < nPalabas; i++) {
        lista.push(prompt("Introduce una palabra"));
    }
    return lista
}

function listapalabras() {
    var lista_origen = pidepalabras();                  //Creo el array original con la lista de palabras

    var primero = lista_origen[0];                      //Guardo el primer elemento del array

    var ultimo = lista_origen[lista_origen.length - 1]; //Guardo el ultimo elemento del array

    var cantidad = lista_origen.length;                 //Guardo la cantidad de elementos

    document.write(`El array contiene las siguientes palabras: ${lista_origen}. <br>`);
    document.write(`El array invertido queda así: ${lista_origen.reverse()}. <br>`); //Invierto la lista y la enseño
    document.write(`La primera palabra introducida es: "${primero}". <br>`);
    document.write(`La última palabra introducida es: "${ultimo}". <br>`);
    document.write(`Has introducido "${cantidad}" palabras. <br>`);
    document.write(`El array ordenado de la A a la Z luce así: ${lista_origen.sort()}. <br>`); //La ordendo de la A a la Z
    document.write(`El array ordenado de la Z a la Z luce así: ${lista_origen.reverse()}. <br>`);    //Invierto el orden para tenerla de la Z a la A
}

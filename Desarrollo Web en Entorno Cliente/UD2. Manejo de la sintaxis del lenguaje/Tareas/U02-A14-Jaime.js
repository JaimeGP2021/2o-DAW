function translate() {
    var dicc = {casa:"house", mesa:"table", perro:"dog", gato:"cat"};
    var s = prompt("Introduce una de estas palabras: casa, mesa, perro o gato");
    
    if (s.toLowerCase() in dicc) {
        document.write(dicc[s]);
    } else {
        document.write("Palabra inválida");
    }

}

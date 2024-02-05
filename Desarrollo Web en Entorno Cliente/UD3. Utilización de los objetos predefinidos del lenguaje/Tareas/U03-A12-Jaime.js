function analizar() {
    var a = document.getElementById("A");
    var b = document.getElementById("B");
    var c = document.getElementById("C");
    var d = document.getElementById("D");

    var frase = prompt("Introduce una frase");
    var palabra = prompt("Introduce una palabra");

    if (frase.indexOf(palabra) == -1) {
        var respuesta = "no";
    } else {
        var respuesta = "si";
    }
    
    a.innerHTML = `La palabra "${palabra}", ${respuesta} se encuentra en la frase`;
    if (respuesta == "si") {
        b.innerHTML = `La primera coincidencia de la palabra se puede encontrar a partir de la posición ${frase.indexOf(palabra) + 1}`;
        c.innerHTML = `La palabra está formada por ${palabra.length} caracteres`;
        d.innerHTML = `La frase sustituyendo la palabra quedaría así: "${frase.replace(palabra, "dwecl")}"`;
    }

}

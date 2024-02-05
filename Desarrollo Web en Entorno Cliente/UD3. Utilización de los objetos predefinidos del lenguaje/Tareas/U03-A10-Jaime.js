function analizar() {
    var a = document.getElementById("A");
    var b = document.getElementById("B");

    var frase = prompt("Introduce una frase");
    var inicio = prompt("Introduce la marca de incicio");
    var final = prompt("Introduce la marca de fin");

    a.innerHTML = `La frase completa es "${frase}"`;
    b.innerHTML = `La frase extraída es "${frase.slice(frase.indexOf(inicio), frase.indexOf(final))} ${final}"`;
}

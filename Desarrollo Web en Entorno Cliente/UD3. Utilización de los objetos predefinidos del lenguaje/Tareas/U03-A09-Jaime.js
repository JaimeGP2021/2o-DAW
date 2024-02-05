function analizar() {
    var a = document.getElementById("A");
    var b = document.getElementById("B");
    var c = document.getElementById("C");

    var frase = prompt("Introduce una frase").trim().split(" ");
    console.log(frase);

    a.innerHTML = `La primera palabra es "${frase[0]}"`;
    b.innerHTML = `La última palabra es "${frase[frase.length - 1]}"`;
    c.innerHTML = `La frase contiene ${frase.length} palabras`;
}

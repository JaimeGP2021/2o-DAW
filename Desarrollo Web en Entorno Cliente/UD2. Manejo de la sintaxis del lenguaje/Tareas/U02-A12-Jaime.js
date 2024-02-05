function listarDigito() {
    var num = prompt("Introduce un número");

    if (num < 1000) {
        aux = 0
        while (num.length > aux) {
            document.write(num[aux] + "<br>");
            aux++
        }
    } else {
        document.write("<p>Número incorrecto</p>")
    }
}

function multipl8() {
    var num1 = parseInt(prompt("Introduce el primer número"));
    var num2 = parseInt(prompt("Introduce el segundo número"));

    gr = Math.max(num1, num2);
    pq = Math.min(num1, num2);
    document.write("<p>Son múltiplos de 8 entre " + pq + " y " + gr + ":</p>");

    for (aux = pq; aux <= gr; aux++) {
        if (aux % 8 == 0) {
            document.write(aux + "<br>");
            console.log(aux)
        }
    }
}

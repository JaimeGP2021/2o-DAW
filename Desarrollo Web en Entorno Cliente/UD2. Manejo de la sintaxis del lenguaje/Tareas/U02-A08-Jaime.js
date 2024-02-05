function factorial() {
    var num = parseInt(prompt("Introduce un número para saber su factorial"));
    var res = 1;

    while (num != 0) {
        res = res * num;
        num -= 1
    }
    document.getElementById("enunciado").innerHTML = ('<p>El factorial es ' + res + '</p>');
}

function suma_digito() {
    var acc = 0;
    var num = prompt("Introduce un número para sumar sus dígitos");

    if (isNaN(num)) {
        document.write("Debes introducir un número");
    } else {
        var q = confirm("¿Quieres sumar su parte decimal?");
        for (i of num) {
            if (i !== ".") {
                acc += parseInt(i, 10);
            }
            else if (!q) {
                break;
            }
        }
        document.write(acc);
    }
}

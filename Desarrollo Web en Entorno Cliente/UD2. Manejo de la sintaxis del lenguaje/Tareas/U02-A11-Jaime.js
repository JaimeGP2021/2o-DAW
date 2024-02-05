function dni() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    var dni = prompt("Introduce tu dni");
    var letra = dni.substring(dni.length - 1, dni.length);
    var num = dni.substring(0, dni.length - 1);

    if (num >= 0 && num <= 999999999) {
        var letraT = letras[num % 23];
        if (letraT == letra.toUpperCase()) {
            document.write("<p>DNI verificado</p>")
        } else {
            document.write("<p>Letra incorrecta</p>")
        }
    } else {
        document.write("<p>Número introducido inválido</p>")
    }
}

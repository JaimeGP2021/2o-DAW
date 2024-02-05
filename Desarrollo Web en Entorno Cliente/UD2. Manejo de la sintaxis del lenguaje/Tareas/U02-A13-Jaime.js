function literal() {
    var dicc = { 1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco" };
    var s = prompt("Introduce un numero del 1 al 5");

    if (s in dicc) {
        document.write(dicc[s]);
    } else {
        document.write("Número inválido");
    }
}

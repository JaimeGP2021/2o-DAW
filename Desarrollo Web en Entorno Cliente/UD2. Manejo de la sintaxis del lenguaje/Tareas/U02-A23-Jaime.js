function rombo() {
    var ast = "*";
    var space = "&nbsp&nbsp";

    for (i = 1; i <= 5; i++) { //Imprime la mitad superior
        document.write(space.repeat((5 - i)) + ast.repeat(i * 2 - 1) + "<br>");
    }
    for (i = 4; i >= 1; i--) { //Imprime la mitad inferior
        document.write(space.repeat((5 - i)) + ast.repeat(i * 2 - 1) + "<br>");
    }
}

function conversor() {
    var origin = prompt('Introduce un dato');
    document.write("<h2>Tu dato como numeric es: " + parseFloat(origin) + "</h2><br>");
    document.write("<h2>Tu dato como string es: " + origin.toString() + "</h2><br>");
    document.write("<h2>Tu dato como numeric pasado a boolean es: " + Boolean(parseFloat(origin)) + "</h2><br>");
    document.write("<h2>Tu dato como string pasado a boolean es: " + Boolean(origin) + "</h2><br>");
}

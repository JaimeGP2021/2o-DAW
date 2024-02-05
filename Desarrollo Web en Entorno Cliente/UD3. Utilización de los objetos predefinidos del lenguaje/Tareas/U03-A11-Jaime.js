function analizar() {
    var cont_mayus = 0; 
    var cont_minus = 0;
    var a = document.getElementById("A");

    var frase = prompt("Introduce una cadena");

    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == frase.charAt(i).toUpperCase()) {
            cont_mayus += 1;
        } else {
            cont_minus += 1;
        }
    }

    if (cont_mayus == 0 && cont_minus > 0) {
        a.innerHTML = "La cadena está formada solo por letras minúsculas";
    } else if (cont_mayus > 0 && cont_minus == 0) {
        a.innerHTML = `La cadena está formada solo por letras mayúsculas`;
    } else {
        a.innerHTML = `La cadena está formada solo por letras mayúsculas y minúsculas`;
    }
}

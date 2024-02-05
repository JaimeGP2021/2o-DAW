function nota() {
    var nota = parseInt(prompt("¿Qué nota obtuviste en el examen?"));
    var enu = document.getElementById("enunciado")

    var eval = (nota <= 10 && nota >= 9) ? "Sobresaliente" :
        (nota < 9 && nota >= 7) ? "Notable" :
            (nota < 7 && nota >= 5) ? "Aprobado" :
                (nota < 5 && nota >= 0) ? "Suspenso" :
                    "Nota inválida";

    enu.innerHTML = ('<p>' + eval + '</p>');
}

function aux() {
    //Fecha actual
    const hoy = new Date();
    var hora = hoy.getHours();
    var minutos = hoy.getMinutes();
    var segundos = hoy.getSeconds();
    var tramo;

    var p = document.getElementById("reloj");

    if (hora >= 12) {
        tramo = "pm";
        hora -= 12;
    } else {
        tramo = "am";
    }

    p.innerHTML = `${hora}:${minutos}:${segundos} ${tramo}`;
}

function reloj() {
    setInterval(aux, 1000);
}

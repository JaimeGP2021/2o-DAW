function zona_horaria() {
    //Fecha actual    
    const hoy = new Date();
    var hora = hoy.getUTCHours();

    
    var zona  = document.getElementById("zona_horaria");
    zona = zona.options[zona.selectedIndex].value;
    hora += parseInt(zona);

    if (hora > 24) {
        hora -= 24;
    } else if (hora < 0) {
        hora += 24;
    }

    var minutos = hoy.getUTCMinutes();

    var p = document.getElementById("reloj");
    p.innerHTML = `${hora}:${minutos} Zona horaria: UTC ${zona}`;
}

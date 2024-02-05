function saludo_educado() {
    //Fecha actual
    const hoy = new Date();
    var hora = hoy.getHours();
    
    var saludo;

    if (hora >= 6 && hora <= 12 ) {
        saludo = "buenos días";
    } else if (hora >= 13 && hora < 20) {
        saludo = "buenas tardes";
    } else {
        saludo = "buenas noches";
    }

    window.alert(`Te saludo educadamente, ${saludo}` );
}

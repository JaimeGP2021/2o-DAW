function resta_fecha() {
    const hoy = new Date();
    const fin_anyo = new Date(hoy.getFullYear(), 11, 31); //Por si el año es bisiesto cojo el año actual

    var resta = fin_anyo.getTime() - hoy.getTime()

    alert("Quedan " + Math.round(resta / (1000 * 60 * 60 * 24)) + " días hasta fin de año.");
    alert("Quedan " + resta + " milisegundos hasta fin de año.");
}

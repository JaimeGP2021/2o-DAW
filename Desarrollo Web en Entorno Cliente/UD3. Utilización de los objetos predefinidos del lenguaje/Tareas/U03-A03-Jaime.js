function calcula_cumple() {
    //Fecha actual
    const hoy = new Date();

    //Obtención fecha de nacimiento
    var anyo = parseInt(prompt("¿En qué año naciste?"));
    var mes = parseInt(prompt("¿En qué mes naciste?"));
    var dia = parseInt(prompt("¿En qué día naciste?"));
    const f_nacimiento = new Date(anyo, mes - 1, dia);

    //Diferencia en milsegundos
    var dif = hoy - f_nacimiento;

    //Constante para pasar de milisegundos a años
    const mil_anyo = 1000 * 60 * 60 * 24 * 365.25;
    var anyos = Math.floor(dif / mil_anyo);

    var resto = dif % mil_anyo;
    const mil_mes = mil_anyo / 12;              //Constante para pasar de milisegundos a meses
    var meses = Math.floor(resto / mil_mes);

    var dias = Math.floor((resto % mil_mes) / (1000 * 60 * 60 * 24));

    alert("Tienes " + anyos + " años, " + meses + " meses y " + dias + " días.");
}

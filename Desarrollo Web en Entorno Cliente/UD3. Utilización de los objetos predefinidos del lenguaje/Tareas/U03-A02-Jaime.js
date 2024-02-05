function calcula_edad() {
    const hoy = new Date();
    var anyo = parseInt(prompt("¿En qué año naciste?"));
    var mes = parseInt(prompt("¿En qué mes naciste?"));
    var dia = parseInt(prompt("¿En qué día naciste?"));
    
    const f_nacimiento = new Date(anyo, mes-1, dia);

    var resta = hoy - f_nacimiento

    alert("Tienes " + Math.trunc(resta / (1000 * 60 * 60 * 24 * 365)) + " años.");
}

function circulo() {
    let radio = parseFloat(prompt("Introduzca el radio de la circunferencia"));
    let area = (Math.PI * Math.pow(radio, 2)).toFixed(2);
    alert(`El área del círculo es de ${area} cm²`);
}

function triangulo() {
    let altura = parseFloat(prompt("Introduzca la altura del triángulo"));
    let base = parseFloat(prompt("Introduzca la base del triángulo"));
    let area = ((altura * base) / 2).toFixed(2);
    alert(`El área del triángulo es de ${area} cm²`);
}

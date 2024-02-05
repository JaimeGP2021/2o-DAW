function calculadora() {
    var salida = false;
    while (!salida) {

        var op = prompt(
            `Calculadora
        Pulse 1 para sumar
        Pulse 2 para restar
        Pulse 3 para multiplicar
        Pulse 4 para dividir
        Pulse 5 para obtener el módulo
        Pulse 6 para salir
        Elija una opción`
        );

        switch (op) {
            case '1':
                var num1 = parseFloat(prompt('Introduce el primer número'));
                var num2 = parseFloat(prompt('Introduce el segundo número'));
                var res = num1 + num2;
                window.alert('La solución es: ' + res);
                break;

            case '2':
                var num1 = parseFloat(prompt('Introduce el primer número'));
                var num2 = parseFloat(prompt('Introduce el segundo número'));
                var res = num1 - num2;
                window.alert('La solución es: ' + res);
                break;

            case '3':
                var num1 = parseFloat(prompt('Introduce el primer número'));
                var num2 = parseFloat(prompt('Introduce el segundo número'));
                var res = num1 * num2;
                window.alert('La solución es: ' + res);
                break;

            case '4':
                var num1 = parseFloat(prompt('Introduce el primer número'));
                var num2 = parseFloat(prompt('Introduce el segundo número'));
                var res = num1 / num2;
                window.alert('La solución es: ' + res);
                break;

            case '5':
                var num1 = parseFloat(prompt('Introduce el primer número'));
                var num2 = parseFloat(prompt('Introduce el segundo número'));
                var res = num1 % num2;
                window.alert('La solución es: ' + res);
                break;

            case '6':
                var salida = confirm('¿Estás seguro de que deseas salir?');
                break;

            default:
                window.alert("Opción inválida");
                break;
        }
    }
}

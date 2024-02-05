var pantalla = document.getElementById("pantalla");

//añade elementos a la pantallaº
function ver(val) {
    pantalla.value += val;
}

//Elimina todos los elementos de la pantalla
function limpiar() {
    pantalla.value = "";
}

//Elimina el último elemento de la pantalla
function del() {
    pantalla.value = pantalla.value.slice(0, -1);
}

//Resuelve operaciones simples
function resuelve() {
    pantalla.value = eval(pantalla.value);
}

//Resuelve operaciones complejas
function resuelve_complejo(val) {
    switch (val) {
        case '√':
            pantalla.value = Math.sqrt(pantalla.value);
            break;

        case 'log':
            pantalla.value = Math.log(pantalla.value);
            break;

        case 'π':
            pantalla.value += Math.PI;
            break;

        case '³':
            pantalla.value = Math.pow(pantalla.value, 3);
            break;

        case 'sin':
            pantalla.value = Math.sin(pantalla.value);
            break;

        case 'cos':
            pantalla.value = Math.cos(pantalla.value);
            break;

        case 'tan':
            pantalla.value = Math.tan(pantalla.value);
            break;

        case '²':
            pantalla.value = Math.pow(pantalla.value, 2);
            break;

        default:
            pantalla.value = "MathError";
            break;
    }
}

var lista = new Array(5);

function creaLista() {
    for (let i = 0; i < lista.length; i++) {
        lista[i] = parseFloat(prompt("Introduce un número"));
    }
    return lista;
}

function chkEnteroPos(element) {
    return (element >= 0 && Number.isInteger(element));
}

function triplica(element) {
    return (element * 3);
}

function arreando() {
    document.write(`Tu array es: ${creaLista()}<br>`);
    document.write(`¿Son todos los elementos de tu array enteros positivos? ${lista.every(chkEnteroPos)}<br>`);
    document.write(`Tu array triplicando cada elemento es: ${lista.map(triplica)}<br>`);
    document.write(`Tu array multiplicando todos los elemento entre sí da: ${lista.reduce((total, num) => total * num)}<br>`);
}

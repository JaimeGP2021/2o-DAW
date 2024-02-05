function creaLista(n){
    let lista = new Array;
    for (let i = 0; i < n; i++) {
        let listita = new Array(4);
        listita[0] = prompt('Introduce un nombre');
        listita[1] = prompt('Introduce una nota');
        listita[2] = prompt('Introduce un nota');
        listita[3] = prompt('Introduce un nota');
        lista.push(listita);
    }
    return lista;
}

var lista = creaLista(5);

function ckNum(n){
    if (parseInt(n) >= 0 && parseInt(n) <= 10){
        return n;
    } else {
        return "Nota inválida";
    }
}

function pintaTabla(){
    for (let i = 0; i < lista.length; i++) {
        document.write(`<tr><td>${lista[i][0]}</td><td>${ckNum(lista[i][1])}</td><td>${ckNum(lista[i][2])}</td><td>${ckNum(lista[i][3])}</td></tr>`)
    }
}

pintaTabla();

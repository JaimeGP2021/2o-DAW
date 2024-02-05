function palindromo() {
    
    var candidate = prompt('Introduce una cadena');
    //candidate = candidate.replaceAll(" ","");  //Elimina espacios
    
    var revcandidate = candidate.split(" ").reverse().join(""); //Transforma a array, invierte y une de nuevo
    
    if (candidate.toLowerCase() == revcandidate.toLowerCase()) {
        window.alert('¡Es un palíndromo!');
    } else {
        window.alert('¡No es un palíndromo!');
    }
}

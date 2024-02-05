Array.prototype.borraChicoGrande = function borraChicoGrande(){ //Metodo invocado sobre el array
    
    //Ordeno el array
    function comparar(a, b) {
        return a - b;
    }
    this.sort(comparar);
    
    //Devuelvo eliminando el mayor y menor número
    return this.slice(1, (this.length - 1));
}

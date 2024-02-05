mi_lista = {"zorro":"tres", "arroz":"uno", "pitihopo":"dos"}

res = {};

function ordenarPorIndice(tabla) {
    var keys = Object.keys(tabla).sort();
    for (x of keys) {
        res[x]=tabla[x]
    }  
    return res;
}

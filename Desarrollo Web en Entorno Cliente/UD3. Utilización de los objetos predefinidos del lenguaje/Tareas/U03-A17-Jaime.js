function sustituir() {
    var resultado = "Las palabras que comienzan frases son: ";
    var a = document.getElementById("A");
    var texto = document.getElementById("texto").value;
    var patt = /^[A-Z]\w+|([.?!]\s[A-Z]\w+)/gm;

    var primeros = texto.match(patt);

    for (var x of primeros) {
        let candidato = x.replace(". ", "").replace("! ", "").replace("? ", "")
        resultado += `"${candidato}", `
    }
    resultado = resultado.substring(0, resultado.length - 2);
    
    a.innerHTML = resultado;
}

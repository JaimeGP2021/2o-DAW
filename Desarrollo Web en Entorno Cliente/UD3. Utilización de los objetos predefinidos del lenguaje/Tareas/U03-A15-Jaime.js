function matricula() {
    var matricula = document.getElementById("matricula").value;

    var patt = /^(\d{4})\s(\w{4})$/;

    if (patt.test(matricula)) {
        return window.alert("Formato correcto");
    } else {
        return window.alert("Formato incorrecto");
    }
}

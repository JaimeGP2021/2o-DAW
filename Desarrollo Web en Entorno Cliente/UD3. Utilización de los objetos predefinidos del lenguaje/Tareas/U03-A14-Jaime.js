function hora() {
    var hora = document.getElementById("hora").value;

    var patt1 = /^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s((([0-2]{1})?\d{1})|(3[0-1]))$/;

    if (patt1.test(hora)) {
        return window.alert("Formato correcto");
    } else {
        return window.alert("Formato incorrecto");
    }
}

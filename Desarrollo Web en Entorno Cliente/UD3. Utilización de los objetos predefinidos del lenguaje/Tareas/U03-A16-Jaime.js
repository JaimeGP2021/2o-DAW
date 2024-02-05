function dia_semana() {
    var dia_semana = document.getElementById("dia_semana").value;

    var patt = /^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s((([0-2]{1})?\d{1})|(3[0-1]))$/i;

    if (patt.test(dia_semana)) {
        return window.alert("Formato correcto");
    } else {
        return window.alert("Formato incorrecto");
    }
}

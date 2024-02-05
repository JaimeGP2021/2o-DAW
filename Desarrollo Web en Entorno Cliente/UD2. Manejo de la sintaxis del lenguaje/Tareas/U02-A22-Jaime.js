const SALAS = {
    "1": "el salón de baile",
    "2": "la galería",
    "3": "la sala de billar",
    "4": "el comedor"
};

const ARMAS = {
    "el salón de baile": "el veneno",
    "la galería": "el trofeo",
    "palo de billar": "la sala de billar",
    "cuchillo": "el comedor"
};

const SOSPECHOSOS = {
    "1": "Sr.Parker",
    "2": "Sra Van Cleve",
    "3": "Sra Sparr",
    "4": "Sr Kalehoff"
};

var resuelto = false;

function resolver() {
    var room = prompt("Introduce el número del lugar");
    var murder = prompt("Introduce el número del sospechoso");

    resuelto = (
                (room == "1" && murder == "4") || 
                (room == "2" && murder == "2") ||
                (room == "3" && murder == "3") ||
                (room == "4" && murder == "1")
                )
    
    if (resuelto) {
        window.alert(SOSPECHOSOS[murder] + " lo hizo en " + SALAS[room] + " con " + ARMAS[SALAS[room]]);
    } else {
        window.alert("El crimen sigue sin resolver")
    }
}

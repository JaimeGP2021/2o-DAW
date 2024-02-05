function booleans() {
    var a = document.getElementById("A");
    var b = document.getElementById("B");

    var numberT = 1;
    var stringT = "Hola";
    var boolT = true;
    var arrayT = ["Hola"];
    var objectT = {};
    
    var numberF = 0;
    var stringF = "";
    var boolF = false;
    var NaNF = NaN;
    var NullF = null;

    a.innerHTML = `Devuelven true: ${numberT} , "${stringT}", ${boolT}, ["${arrayT}"], ${objectT}`
    b.innerHTML = `Devuelven false: ${numberF}, "${stringF}", ${boolF}, ${NaNF}, ${NullF}`
}

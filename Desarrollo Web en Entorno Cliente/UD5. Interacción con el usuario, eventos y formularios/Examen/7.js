document.addEventListener("DOMContentLoaded", function () {
  let nombre = document.getElementById("nombre");
  let ape = document.getElementById("ape");
  let dni = document.getElementById("dni");
  let age = document.getElementById("age");
  let nac = document.getElementById("nac");
  const letra = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
  ];

  nombre.addEventListener("blur", validarNombre);
  ape.addEventListener("blur", validarApe);
  dni.addEventListener("blur", validarDni);
  dni.addEventListener("blur", letraDni);
  age.addEventListener("blur", validarAge);
  nac.addEventListener("blur", validarNac);

  function validarDni() {
    if (dni.validity.patternMismatch) {
      dni.value = "";
    }
  }

  function letraDni(dni) {
    let d = dni.split("-");
    if (d.length >= 2) {
      let numeroDni = d[0].replaceAll(".", "");
      let resto = numeroDni % 23;
      return d[1].toUpperCase() == letra[resto];
    } else {
      return false;
    }
  }

  function validarNombre() {
    if (nombre.validity.patternMismatch) {
      nombre.value = "";
    }
  }

  function validarApe() {
    if (ape.validity.patternMismatch) {
      ape.value = "";
    }
  }

  function validarAge() {
    if (age.validity.patternMismatch) {
      age.value = "";
    }
  }

  function validarNac() {
    if (nac.validity.patternMismatch) {
      nac.value = "";
    }
  }

  function mostrarDni() {
    var dniInput = document.getElementById("dni");
    dniInput.type = "text";
  }

  function ocultarDni() {
    var dniInput = document.getElementById("dni");
    dniInput.type = "password";
  }

  document.getElementById("ver").addEventListener("mousedown", mostrarDni);
  document.getElementById("ver").addEventListener("mouseup", ocultarDni);
  document.getElementById("ver").addEventListener("mouseleave", ocultarDni);
});

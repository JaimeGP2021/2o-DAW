document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("formulario");
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
    if (dni.validity.valueMissing) {
      dni.setCustomValidity("El campo DNI no puede estar vacío");
    } else if (dni.validity.patternMismatch) {
      dni.setCustomValidity("El patrón del DNI no es el correcto");
      dni.value = "";
    } else {
      dni.setCustomValidity("");
    }
    dni.reportValidity()
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
    if (nombre.validity.valueMissing) {
      nombre.setCustomValidity("El campo nombre no puede estar vacío");
    } else if (nombre.validity.patternMismatch) {
      nombre.setCustomValidity("El patrón del nombre no es el correcto");
      nombre.value = "";
    } else {
      nombre.setCustomValidity("");
    }
    nombre.reportValidity()
  }

  function validarApe() {
    if (ape.validity.valueMissing) {
      ape.setCustomValidity("El campo Apellido no puede estar vacío");
    } else if (ape.validity.patternMismatch) {
      ape.setCustomValidity("El patrón del Apellido no es el correcto");
      ape.value = "";
    } else {
      ape.setCustomValidity("");
    }
    ape.reportValidity()
  }

  function validarAge() {
    if (age.validity.valueMissing) {
      age.setCustomValidity("El campo Edad no puede estar vacío");
    } else if (age.validity.patternMismatch) {
      age.setCustomValidity("El patrón del Edad no es el correcto");
      age.value = "";
    } else {
      age.setCustomValidity("");
    }
    age.reportValidity()
  }

  function validarNac() {
    if (nac.validity.valueMissing) {
      nac.setCustomValidity("El campo Lugar de Nacimiento no puede estar vacío");
    } else if (nac.validity.patternMismatch) {
      nac.setCustomValidity("El patrón Lugar de Nacimiento no es el correcto");
      nac.value = "";
    } else {
      nac.setCustomValidity("");
    }
    nac.reportValidity()
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

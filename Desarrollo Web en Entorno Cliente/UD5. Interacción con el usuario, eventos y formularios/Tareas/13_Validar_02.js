// Modifique el ejercicio anterior para que los mensajes sean personalizados.

document.querySelectorAll(".entrada").forEach((item) => {
  item.addEventListener("blur", () => {
    item.setCustomValidity("");
    if (item.validity.patternMismatch) {
      item.value = "";
      switch (item.id) {
        case "dni":
          item.setCustomValidity("DNI incorrecto");
          break;
        case "nombre":
          item.setCustomValidity("Nombre incorrecto");
          break;
        case "FNac":
          item.setCustomValidity("Fecha incorrecta");
          break;
        case "email":
          item.setCustomValidity("Email incorrecto");
          break;
        case "pagWeb":
          item.setCustomValidity("URL incorrecta");
          break;
        case "contrasena":
          item.setCustomValidity("Contraseña incorrecta");
          break;
        case "confContrasena":
          item.setCustomValidity("Confirmación de contraseña incorrecta");
          break;
      }
      item.reportValidity();
    }
  });
});

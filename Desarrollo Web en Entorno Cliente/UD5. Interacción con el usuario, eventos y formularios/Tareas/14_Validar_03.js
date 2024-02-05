// Modifique  el  ejercicio  anterior  para  que  cuando  el  usuario  introduzca  los  datos
// correctamente  en  el  formulario  introduzca  estos  datos  en  cookies  y  proporcione  al
// formulario un botón para que estos puedan ser leídos.

document.querySelectorAll(".entrada").forEach((item) => {
  item.addEventListener("blur", () => {
    if (item.validity.patternMismatch) {
      item.setCustomValidity("");
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
    } else {
      console.log("Se ha escrito " + item.id + "=" + item.value + ";");
      document.cookie = item.id + "=" + item.value + "; ";
    }
  });
});

var ver_cookies = document.getElementById("ver");
ver_cookies.addEventListener("click", () => {
  alert(document.cookie);
});

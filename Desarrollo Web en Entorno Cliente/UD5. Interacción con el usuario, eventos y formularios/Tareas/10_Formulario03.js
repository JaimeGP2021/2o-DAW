// Modifica el formulario anterior, siendo el día preferente el día que haya marcado como
// disponible. Si marca varios, que coja el último.

//Te manda a google
var boton = document.getElementById("google");
boton.onclick = () => location.replace("https://www.google.es/");

//Cambia el mail en función de la asignatura
var enviar = document.getElementById("enviar");
enviar.onclick = () => {
  switch (document.querySelector("#asignatura").value) {
    case "matematicas":
      document.forms[0].action = "mailto:profe.matematicas@iesdonana.org";
      break;
    case "lengua":
      document.forms[0].action = "mailto:profe.lengua@iesdonana.org";
      break;
    case "biologia":
      document.forms[0].action = "mailto:profe.biologia@iesdonana.org";
      break;
  }
}

  //Actualiza el día preferente según el último día disponible
  function preferente(dia) {
    if (document.getElementById(dia).checked){
      document.getElementById('dia_preferente').value = dia;
    }
}

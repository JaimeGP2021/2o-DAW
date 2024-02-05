// Modifica el formulario anterior, según la materia seleccionada, debe enviarle el cuestionario a un 
// profesor distinto. 

var boton = document.getElementById("google");
boton.onclick = () => location.replace("https://www.google.es/");

var asignatura = document.querySelector("#asignatura");
asignatura.onchange = () => {
    switch (asignatura.value) {
        case 'matematicas':
            document.forms[0].action = "mailto:profe.matematicas@iesdonana.org"
        break;
        case 'lengua':
            document.forms[0].action = "mailto:profe.lengua@iesdonana.org"
        break;
        case 'biologia':
            document.forms[0].action = "mailto:profe.biologia@iesdonana.org"
        break;
    }
};

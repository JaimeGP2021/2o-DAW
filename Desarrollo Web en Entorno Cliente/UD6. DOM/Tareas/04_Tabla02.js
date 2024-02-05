// Crear una array multidimensional que recoja los nombres de 5 alumnos y las notas obtenidas en tres módulos.
// Dicha información será introducida por el usuario y una vez finalizada la recogida de datos se mostrará el contenido del array en forma de tabla.
// Tabla generada por manejo del DOM
document.addEventListener("DOMContentLoaded", function () {
  const header = ["Nombre", "Nota Matemáticas", "Nota Biología", "Nota Inglés"];
  var aula = [];

  function creaAlumnos() {
    let cont = 0;
    while (cont != 5) {
      let alumno = [];
      alumno.push(prompt("Introduzca el nombre del alumno"));
      alumno.push(prompt("Introduzca la nota de matemáticas"));
      alumno.push(prompt("Introduzca la nota de biología"));
      alumno.push(prompt("Introduzca la nota de inglés"));
      aula.push(alumno);
      cont++;
    }
    console.log(aula);
  }

  function pintaTabla() {
    var tabla = document.createElement("table");
    var fila1 = document.createElement("tr");
    header.forEach((cabecera) => {
      let th = document.createElement("th");
      let titulo = document.createTextNode(cabecera);
      th.appendChild(titulo);
      fila1.appendChild(th);
      tabla.appendChild(fila1);
    });

    aula.forEach((alumno) => {
      let newfila = document.createElement("tr");

      alumno.forEach((element) => {
        let td = document.createElement("td");
        let texto = document.createTextNode(element);
        td.appendChild(texto);
        newfila.appendChild(td);
      });
      tabla.appendChild(newfila);
    });
    document.body.appendChild(tabla);
  }

  creaAlumnos();
  pintaTabla();
});

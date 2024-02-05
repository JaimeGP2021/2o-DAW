// Crear objeto Vehículo.
// a.  Crear constructor con las siguientes propiedades: marca, modelo, color y año fabricación
// b.  Introducir 5 vehículos diferente.
// c.  Crear un botón para que genere una tabla (con manejo del DOM) y la visualicemos en la pagina web
document.addEventListener("DOMContentLoaded", function () {
  var botones = document.querySelectorAll(".boton");
  const header = ["Marca", "Modelo", "Color", "Año fabricación"];

  class vehiculo {
    constructor(marca, modelo, color, anyo_fabricacion) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.anyo_fabricacion = anyo_fabricacion;
    }
  }
  var garaje = {
    coche1: new vehiculo("Ford", "Focus", "gris", 2003),
    coche2: new vehiculo("Citroën", "C4", "blanco", 2021),
    coche3: new vehiculo("Toyota", "Corolla", "negro", 2024),
    coche4: new vehiculo("BMW", "E36", "azul", 1989),
    coche5: new vehiculo("Ford", "Mustang", "rojo", 2023),
  };

  botones.forEach((element) => {
    document.getElementById(element.id).addEventListener("click", function () {
      if (document.getElementById("tabla")) {
        document.body.removeChild(document.getElementById("tabla"));
      }

      var tabla = document.createElement("table");
      var fila1 = document.createElement("tr");
      header.forEach((coche) => {
        let th = document.createElement("th");
        let cabecera = document.createTextNode(coche);
        th.appendChild(cabecera);
        fila1.appendChild(th);
      });
      tabla.appendChild(fila1);
      let newfila = document.createElement("tr");
      Object.values(garaje[element.id]).forEach((element) => {
        console.log(element);

        let td = document.createElement("td");
        let texto = document.createTextNode(element);
        td.appendChild(texto);
        newfila.appendChild(td);
      });
      tabla.appendChild(newfila);
      tabla.id = "tabla";
      document.body.appendChild(tabla);
    });
  });
});

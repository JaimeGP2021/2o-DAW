function coche() {
    class vehiculo {
        constructor(marca, modelo, color, anio) {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            this.anio = anio;
            this.velocidad = 0;
        }
        
        mostrarDatos(){
            document.write(`Marca: ${this.marca}; Modelo: ${this.modelo}; Color: ${this.color}; Año: ${this.anio};`);
        }

        acelerar(velocidad) {
            this.velocidad = velocidad;
            document.write(`El coche va a ${this.velocidad} km/h <br>`) 
        }
    }

    var coche1 = new vehiculo("ford", "focus", "gris", "2003");
    var coche2 = new vehiculo("citroen", "c4", "rojo", "2018");

    document.write(`Coche 1 - marca: ${coche1.marca} <br>`);
    document.write(`Coche 2 - color: ${coche2['color']} <br>`);
}

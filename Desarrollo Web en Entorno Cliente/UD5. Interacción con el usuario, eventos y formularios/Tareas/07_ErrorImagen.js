// Realiza una aplicación que tenga una imagen, y que muestre un mensaje indicando si la imagen 
// no se ha cargado correctamente, ya sea por un error o porque el usuario lo haya detenido. 

cat = document.getElementById("gato");

cat.onerror = () => {
  alert("Error de carga");
};

cat.onabort = () => {
  alert("Carga abortda");
};

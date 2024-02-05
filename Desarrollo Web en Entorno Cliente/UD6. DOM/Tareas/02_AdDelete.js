// Crear un código en HTLM en el que tengamos un boton para añadir nodos y otro para eliminar nodos.
// Los nodos creados y eliminados serán elementos nuevos (<div>) del documento HTML, donde se deberá escribir un texto solicitado al cliente (por ejemplo por prompt).
// El código de crear, asi como de eliminar nodos deberá estar en JavaScript. Utilizando el manejo del DOM.

function addnode() {
  let newnode = document.createElement("div");            //Crea elemento div
  let content = document.createTextNode(                  //Crea elemento de texto
    prompt("¿Cuál desea que sea el contenido del nodo?")  
  );
  newnode.appendChild(content);                           //Anida el elemento de texto al div
  document.body.appendChild(newnode);                     //Anida el div al body
}

function deletenode() {
  document.body.removeChild(document.body.lastChild);     //Borra el ultimo nodo del body
}

document.getElementById("add").addEventListener("click", addnode);
document.getElementById("delete").addEventListener("click", deletenode);

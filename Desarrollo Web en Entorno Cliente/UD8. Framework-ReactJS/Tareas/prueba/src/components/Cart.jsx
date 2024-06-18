// En el componente Cart.js, implementaremos la lógica para mostrar los elementos agregados al carrito, su cantidad y precio.
// También agregaremos funciones para agregar y eliminar elementos del carrito.

import Linea from "./Linea"
import carritoJson from "../json/cart.json"
import Button from "../components/Button"


function Cart() {
  let total = 0;

  const comprar = () => {
    fetch("http://0.0.0.0:8000/src/json/borrarCarrito.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("Compra realizada");
        } else {
          window.alert("Error al comprar los articulos");
        }
      })
      .catch((error) => {
        console.error("Error al comprar los articulos:", error);
        window.alert("Error al comprar los articulos");
      });
  };
  const vaciar = () => {
    fetch("http://0.0.0.0:8000/src/json/borrarCarrito.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("Carrito vaciado");
        } else {
          window.alert("Error al vaciar el carrito");
        }
      })
      .catch((error) => {
        console.error("Error al vaciar el carrito:", error);
        window.alert("Error al vaciar el carrito");
      });
  };
  return (
    <main style={{ minHeight: '100vh' }}>
      <h1>Carrito</h1> <br />
      {carritoJson.cart.length === 0 ? (
        <h2>No hay productos en el carrito</h2>
      ) : (
        <>
          {carritoJson.cart.map(producto => {
            total += parseFloat(producto.precio.replace('€', '')) * producto.cantidad;
            return (
              <Linea 
                key={producto.nombre} 
                img={producto.imagen}  
                text={producto.nombre} 
                cant={producto.cantidad} 
                precio={producto.precio}
                descripcion={producto.descripcion}
              />
            );
          })}
          <p id="total">
            TOTAL: {total.toFixed(2)}€
          </p>
          <Button accion="Comprar" id="button" click={comprar}/>
          <Button accion="vaciar carrito" id="borrar" click={vaciar}/>
        </>
      )}
    </main>
  );
}
export default Cart;

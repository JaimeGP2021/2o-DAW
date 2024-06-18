import "../style/detail.css";
import inventario from "../json/inventario.json"
import queryString from 'query-string';
import Button from "../components/Button"

function Detail() {
  const urlCadena = queryString.parse(window.location.search);
  const idProducto = urlCadena.productoId;
  function addProduct() {
    fetch('http://127.0.0.1:8000/src/json/carrito.php?id_producto=' + idProducto) 
    .then(response => {
      if (response.ok) {
        window.alert("Producto añadido al carrito")
      }
    })
  }

  return (
    <main className="detail">
      <article>
        <h2 hidden>ª</h2>
        <section>
          <h2 hidden>ª</h2>
          <img src={"/src/assets/" + inventario.flores[idProducto].imagen } alt="Margarita" />
        </section>
        <section>
          <h2>{inventario.flores[idProducto].nombre}</h2>
          <div className="formulario">
            <form>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur quis auctor eros. Nulla congue neque et eros
                fringilla, ultrices feugiat nunc ullamcorper. Sed sodales
                ultrices erat, non volutpat ipsum venenatis at. Etiam aliquet
                tempus luctus. Curabitur eget tortor eu sem vehicula luctus non
                vitae ligula. Fusce quis sagittis nibh. Maecenas fermentum
                cursus lacus eu luctus. Proin tempor sapien eu vulputate
                fermentum. Vivamus mollis condimentum viverra. Vivamus at rutrum
                nibh. Etiam sodales sem non sem tempor cursus sed et mi. Nunc
                rutrum elit consectetur pharetra porta. Donec aliquam fringilla
                feugiat. Pellentesque dictum ipsum at neque porta convallis. In
                hac habitasse platea dictumst.
              </p>
              <br />
              <br />
              <p>
                Precio Caja: <strong>{inventario.flores[idProducto].precio}</strong>
              </p>
              <Button accion="Añadir al carrito" 
              click={addProduct} />
              <br />
              <br />
              <br />
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
export default Detail;

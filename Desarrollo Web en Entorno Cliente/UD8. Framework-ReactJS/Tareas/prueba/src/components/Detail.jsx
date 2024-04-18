import "../style/detail.css";

function Detail() {
  return (
    <main className="detail">
      <article>
        <h2 hidden>ª</h2>
        <section>
          <h2 hidden>ª</h2>
          <img src="../imágenes/Flor01.jpg" alt="Margarita" />
        </section>
        <section>
          <h2>MARGARITA</h2>
          <div className="formulario">
            <form>
              <br />
              <label for="variante">Variante</label>
              <br />
              <select id="variante">
                <option value="occidental">Occidental</option>
                <option value="asiatica">Asíatica</option>
                <option value="holandesa">Holandesa</option>
                <option value="meridional">Meridional</option>
              </select>
              <br />
              <br />
              <label for="color">Color</label>
              <br />
              <select id="color">
                <option value="rosa">Rosa</option>
                <option value="blanca">Blanca</option>
                <option value="roja">Roja</option>
                <option value="verde">Verde</option>
                <option value="biccolor">Bicolor</option>
              </select>
              <br />
              <br />
              <label for="nombre">Nombre</label>
              <br />
              <select id="nombre">
                <option value="estandar">Escarlata</option>
                <option value="asiatica">Lophophora</option>
                <option value="holandesa">Sativa</option>
                <option value="meridional">Erythroxylum</option>
              </select>
              <br />
              <br />
              <audio loop controls src="../audios/audio02_flor.mp3"></audio>
              <br />
              <br />
              <p>
                Precio Paquete: <strong>2.50€</strong>
              </p>
              <input type="number" min="0" placeholder="0" />
              <button className="boton">
                <strong>Añadir paquetes al carrito</strong>
              </button>{" "}
              <br />
              <p>
                Precio Caja: <strong>75€</strong>
              </p>
              <input type="number" min="0" placeholder="0" />
              <button className="boton">
                <strong>Añadir cajas al carrito</strong>
              </button>
              <br />
              <br />
              <br />
              <p className="precio">
                <strong>PRECIO TOTAL: 150€</strong>
              </p>
              <button id="ya">
                <strong>COMPRAR YA</strong>
              </button>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
export default Detail;

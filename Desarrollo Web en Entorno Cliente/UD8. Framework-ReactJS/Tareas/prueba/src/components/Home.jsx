import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import "../style/home.css";

function Home() {
  return (
    <main className="index">
      <article>
        <h2 hidden>ª</h2>
        <section>
          <h2>FLOR CORTADA DE PRODUCCIÓN CONTINUA</h2>
          <ReactAudioPlayer loop controls src="../assets/audio01_fondo.mp3" /> ARREGLA ESTA LÍNEA
          <input
            list="floresList"
            name="floresList"
            placeholder="Barra de búsqueda"
          />
          <datalist id="floresList">
            <option value="Margaritas">Margaritas</option>
            <option value="Gladiolos">Gladiolos</option>
            <option value="Liliums">Liliums</option>
            <option value="Eucaliptos">Eucaliptos</option>
            <option value="Gladiolos">Paniculata</option>
            <option value="Gerberas">Gerberas</option>
          </datalist>
          <br />
          <br />
          <div className="continua">
            <div className="uno">
              <a href="paginas/detail.html">
                <img src="imágenes/Flor01.jpg" alt="margaritas" />
                <p>Margaritas</p>
              </a>
              <img src="imágenes/Flor02.jpeg" alt="gladiolos" />
              <p>Gladiolos</p>
            </div>
            <div className="dos">
              <img src="imágenes/Flor03.jpeg" alt="lilliums" />
              <p>Liliums</p>
              <img src="imágenes/Flor04.jpg" alt="eucaliptos" />
              <p>Eucaliptos</p>
            </div>
            <div className="tres">
              <img src="imágenes/Flor05.jpg" alt="paniculatas" />
              <p>Paniculata</p>
              <img src="imágenes/Flor06.jpeg" alt="gerberas" />
              <p>Gerberas</p>
            </div>
          </div>
        </section>
        <section>
          <h2>FLOR CORTADA DE TEMPORADA</h2>
          <div className="temporada">
            <div className="uno">
              <img src="imágenes/Flor01.jpg" alt="margarita" />
              <p>Margaritas</p>
              <img src="imágenes/Flor02.jpeg" alt="margarita" />
              <p>Gladiolos</p>
            </div>
            <div className="dos">
              <img src="imágenes/Flor03.jpeg" alt="margarita" />
              <p>Lilium</p>
              <img src="imágenes/Flor04.jpg" alt="margarita" />
              <p>Eucaliptos</p>
            </div>
            <div className="tres">
              <img src="imágenes/Flor05.jpg" alt="margarita" />
              <p>Gladiolos</p>
              <img src="imágenes/Flor06.jpeg" alt="margarita" />
              <p>Gerberas</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
export default Home;

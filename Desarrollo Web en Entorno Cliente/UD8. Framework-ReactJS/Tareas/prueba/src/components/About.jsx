import '../style/about.css';
function About(){
    return (
        <main class="about">
      <h2 hidden>ª</h2>
      <article>
        <h2 hidden>ª</h2>
        <section>
          <h2 hidden>ª</h2>
          <div>
            <h2>¿Quiénes somos?</h2>
            <p>
              AzFlor es una empresa productora y comercializadora de flor
              cortada situada en Alhama de Murcia, dentro de la región de
              Murcia, y distribuidora a través de logística por toda España.
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V72-0ZNLGfI?si=XP3m2GcqBQu8jZgz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
        <section>
          <h2 hidden>ª</h2>
          <div>
            <h2>¿Cómo funcionamos?</h2>
            <p>
              Trabajamos con un estricto control de calidad y un seguimiento
              desde la plantación hasta llegar a su fecha de corte y envasado.
            </p>
            <p>
              Realizamos envíos a través de empresas de transporte urgente con
              entregas de 24 a 48 horas.
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JJW2R9smYF4?si=MH2ZcG1_YyuHcqHn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
        <section>
          <h2 hidden>ª</h2>
          <div>
            <h2>¿Qué encontrarás aquí?</h2>
            <p>
              Nuestros productos principales durante todo el año son Margaritas,
              Lilium occidental, Lilium Oriental, Gladiolos, Gerberas, Statices,
              Limonium y Eucaliptos.
            </p>
            <p>
              Después como flores de temporada tenemos Helianthus(girasol)
              Mathiolas, Lisianthus, Liatrix, Peonias y Fresias.
            </p>
          </div>
          <video controls
            src="src/assets/flores_marin_santos.mp4"
            width="560"
            height="315"
          ></video>
        </section>
      </article>
    </main>
    )
} 
export default About;

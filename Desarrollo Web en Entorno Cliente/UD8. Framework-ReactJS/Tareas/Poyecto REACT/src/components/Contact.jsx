import "../style/contact.css";

function Contact() {
  return (
    <main className="contact">
      <article>
        <h2 hidden>ª</h2>
        <section>
          <h2 hidden>ª</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12604.252750021977!2d-1.4109538448506045!3d37.83540657235668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd648fab702f80fd%3A0x8abc7137621cc54b!2sFLORES%20MARIN%20S.L.!5e0!3m2!1ses!2ses!4v1701979388847!5m2!1ses!2ses"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section>
          <h2 hidden>ª</h2>
          <div className="direccion" id="tooltip">
            <h2>DIRECCIÓN</h2>
            Autovía E-15 A7 - Salida 601A <br />
            30840 Alhama de Murcia
            <span id="tooltiptext">¡Visítanos cuando quieras!</span>
          </div>
          <div className="email">
            <h2>EMAIL</h2>
            email.example@gmail.com
          </div>
          <div className="telefono">
            <h2>TELÉFONO</h2>
            123 45 67 89
            <br />
            321 54 76 98
          </div>
          <div className="formulario">
            <h2>FORMULARIO DE CONTACTO</h2>
            <form>
              <label>Nombre</label>
              <br />
              <input type="text" placeholder="Campo obligatorio" />
              <br />
              <br />
              <label>Correo electrónico</label>
              <br />
              <input type="email" placeholder="Campo obligatorio" />
              <br />
              <br />
              <label>Mensaje</label>
              <br />
              <textarea
                name="mensaje"
                id="mensaje"
                cols="53"
                rows="10"
                placeholder="Campo obligatorio"
              ></textarea>
              <button>Enviar</button>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
export default Contact;

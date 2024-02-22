import "../style/header.css";

function Header() {
  return (
    <header>
      <nav>
        <a href="index.html">
          <img src="/src/assets/Logo_AZflor.png" alt="Logotipo" height="50" />
        </a>
        <h1>AZ FLOR</h1>
        <ul>
          <li>
            <a href="#" className="Selected">Inicio</a>
          </li>
          <li>
            <a href="#">Carrito</a>
          </li>
          <li>
            <a href="#">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

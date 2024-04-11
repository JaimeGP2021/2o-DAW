import { Link } from "react-router-dom";
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
            <Link to="/" className="Selected"> Inicio </Link>
          </li>
          <li>
            <Link to="/Cart"> Carrito </Link>
          </li>
          <li>
            <Link to="/About"> Sobre Nosotros </Link>
          </li>
          <li>
            <Link to="/Contact"> Contacto </Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

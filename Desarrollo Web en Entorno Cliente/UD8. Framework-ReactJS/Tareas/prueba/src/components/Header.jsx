import { NavLink } from "react-router-dom";
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
            <NavLink to="/"> Inicio </NavLink>
          </li>
          <li>
            <NavLink to="/Cart"> Carrito </NavLink>
          </li>
          <li>
            <NavLink to="/About"> Sobre Nosotros </NavLink>
          </li>
          <li>
            <NavLink to="/Contact"> Contacto </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

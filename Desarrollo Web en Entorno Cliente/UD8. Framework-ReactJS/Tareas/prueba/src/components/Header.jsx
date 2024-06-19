import { NavLink } from "react-router-dom";
import "../style/header.css";
import cart from "../json/cart.json"

function Header() {
  const totalCantidades = cart.cart.reduce((total, producto) => total + producto.cantidad, 0);
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
            <NavLink to="/Cart"> Carrito{totalCantidades>0?'('+totalCantidades+')':''} </NavLink>
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

import "../../style/NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul >
        <li><p className="busquedas">PRODUCTOS</p></li>
        <li><p className="busquedas">CATEGORIAS</p></li>
        <li><p className="busquedas">CONTACTO</p></li>
        <CartWidget/>
      </ul>
    </nav>
  );
};

export default NavBar;

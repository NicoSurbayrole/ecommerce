import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

//sacar cartWidget del ul y retocar estilos para q quede prolijo

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <Link to={'/'}><li><p className="busquedas">FullSniker</p></li></Link>
        <Link to={'/products'}><li><p className="busquedas">PRODUCTOS</p></li></Link>
        <Link to={'/category'}><li><p className="busquedas">CATEGORIAS</p></li></Link>
        <Link to={'/contact'}><li><p className="busquedas">CONTACTO</p></li></Link>
        <CartWidget/>
      </ul>
    </nav>
  ); 
};

export default NavBar;
 
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"


const NavBar = () => {
  const [dropdown,setDropDown] = useState(false);
  const abrirCerrarDropdown = () => setDropDown(!dropdown);

  return (
    <nav className="navBar">
      <ul>
        <Link to={'/'}><li><p className="busquedas">FullSniker</p></li></Link>
        <Link to={'/products'}><li><p className="busquedas">PRODUCTOS</p></li></Link>
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle className="buttonCategory">
            <li><p className="pCategory">CATEGORIAS</p></li>
          </DropdownToggle>
          <DropdownMenu>
            <Link to={"category/1"}><DropdownItem>ZAPATILLAS</DropdownItem></Link>
            <Link to={"category/2"}><DropdownItem>REMERAS</DropdownItem></Link>
            <Link to={"category/3"}><DropdownItem>PANTALON</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>
        <Link to={'/contact'}><li><p className="busquedas">CONTACTO</p></li></Link>
        <CartWidget/>
      </ul>
    </nav>
  ); 
};

export default NavBar;
 
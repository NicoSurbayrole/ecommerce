import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";
import {Cuenta} from './hooks/Count'

const CartWidget = () => {
const {numeroInicial,suma,resta,reset} = Cuenta()
  const [dropdown,setDropDown] = useState(false);

  const abrirCerrarDropdown = () => setDropDown(!dropdown);


  return (
      <ul className="cart">
        <li>
          <p className="contador">El valor del contador es de: {numeroInicial}</p>
        </li>
        <li className="logoCarrito">
          <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
            <DropdownToggle>
              <img
                className="carrito"
                src="https://media.discordapp.net/attachments/968164817351352401/1019429148873199737/icons8-agregar-a-carrito-de-compras-100.png"
                alt="logo carrito"
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={suma}>SUMAR</DropdownItem>
              <DropdownItem onClick={resta}>RESTAR</DropdownItem>
              <DropdownItem onClick={reset}>RESETEAR</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
  );
};

export default CartWidget;

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";
const InicialState = 0;

const CartWidget = () => {
  const [numeroInicial, setNumeroInicial] = useState(InicialState);
  const [dropdown,setDropDown] = useState(false);

  const abrirCerrarDropdown = () => setDropDown(!dropdown);
  const cuenta = (operacion) => {
    if (operacion === "suma") setNumeroInicial(numeroInicial + 1);
    else numeroInicial !== 0 ? setNumeroInicial(numeroInicial - 1) : alert("El contador no puede bajar de 0")
  };
  const resetear = () => setNumeroInicial(InicialState);

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
              <DropdownItem onClick={() =>{cuenta("suma")}}>SUMAR</DropdownItem>
              <DropdownItem onClick={cuenta}>RESTAR</DropdownItem>
              <DropdownItem onClick={resetear}>RESETEAR</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
  );
};

export default CartWidget;

import '../../style/Contador.css' 
import { useState } from "react";
const InicialState = 0;

const ItemCounter = () => {
  const [numeroInicial, setNumeroInicial] = useState(InicialState);

  const cuenta = (operacion) => {
    if (operacion === "suma") setNumeroInicial(numeroInicial + 1);
    else numeroInicial !== 0 ? setNumeroInicial(numeroInicial - 1) : alert("El contador no puede bajar de 0")

  };

  const resetear = () => setNumeroInicial(InicialState);

  return (
    <main>
      <p>El valor del contador es de: {numeroInicial}</p>
      <button onClick={() => cuenta("suma")}>SUMAR</button>
      <button onClick={cuenta}>RESTAR</button>
      <button onClick={resetear}>RESETEAR</button>
    </main>
  );
};

export default ItemCounter;

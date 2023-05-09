import { useState } from "react";


export const Cuenta = (InicialState = 0) => {
    const [numeroInicial, setNumeroInicial] = useState(InicialState);


    const suma = () => setNumeroInicial(numeroInicial + 1);
    const resta = () => numeroInicial !== 0 ? setNumeroInicial(numeroInicial - 1) : alert("El contador no puede bajar de 0")
    const reset = () => setNumeroInicial(InicialState)

    return{numeroInicial,suma,resta,reset}
  };
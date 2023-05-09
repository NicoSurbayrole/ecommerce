import { useEffect, useState } from "react";
import products from "../../../productos.json"

export const GetProducts = () =>{
  const [productos, setProducts] = useState([]);

    const getIteList = new Promise((res, rej) => {
        res(products);
      });
    
      useEffect(() => {
        getIteList.then((res) => {
          setProducts(res.productos);
        });
      });

      return{productos}
} 
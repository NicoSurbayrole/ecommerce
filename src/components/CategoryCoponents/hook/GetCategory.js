import { useEffect, useState } from "react";
import products from "../../../productos.json"

export const GetCategory = () =>{
  const [productos, setProducts] = useState([]);

    const getCategory = new Promise((res, rej) => {
            res(products);
      });
    
      useEffect(() => {
        getCategory.then((res) => {
          setProducts(res.productos);
        });
      });

      return{productos}
} 
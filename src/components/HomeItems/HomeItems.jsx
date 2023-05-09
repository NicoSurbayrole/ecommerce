import { useEffect, useState } from "react";
import products from "../../productos.json"
import ItemList from "../itemListContainer/ItemLis";
import "./Items.css";
import Spinner from 'react-bootstrap/Spinner';

const HomeItems = () => {
    const [productos,setProducts] = useState([]);
    
    const getIteList = new Promise((res,rej) =>{
        setTimeout(()=>{
            res(products);
        },2000);
    });

    useEffect(()=>{
        getIteList.then((res) =>{
            setProducts(res.productos)
        })
    });

  return productos.length > 0 ? (
    <ItemList listaProductos={productos} />
  ) : (
    <Spinner animation="grow" />
  );
};

export default HomeItems;

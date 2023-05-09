import ItemList from "../itemListContainer/ItemLis";
import Spinner from "react-bootstrap/Spinner";
import { GetProducts } from "./hook/GetProducts";
import "./Items.css";

const HomeItems = () => {
  const { productos } = GetProducts();

  return productos.length > 0 ? (
    <ItemList listaProductos={productos} />
  ) : (
    <>
      <h1>Cargando...</h1>
      <Spinner animation="grow" />
    </>
  );
};

export default HomeItems;

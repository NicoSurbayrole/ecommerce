import ItemList from "../itemListContainer/ItemLis";
import Spinner from 'react-bootstrap/Spinner';
import { GetProducts } from "../SimpleProduct/hooks/GetProducts";
import "./Items.css";


const HomeItems = () => {
  const { productos } = GetProducts();

  return productos.length > 0 ? (
    <ItemList listaProductos={productos} />
  ) : (
    <Spinner animation="grow" />
  );
};

export default HomeItems;

import { Item } from "../Item/Item";
const ItemList = ({ listaProductos }) => {
  return (
    <section>
      {listaProductos.map((producto) => {
        return (
          <Item
            productId={producto.productId}
            imgUrl={producto.imgUrl}
            stock={producto.stok}
            description={producto.description}
            price={producto.price}
            articulo={producto.articulo}
          />
        );
      })}
    </section>
  );
};

export default ItemList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../productos.json";
import Card from "react-bootstrap/Card";

const SimpleProduct = () => {
  const { productId } = useParams();
  const [params, setParams] = useState(productId);
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    setParams(productId);
  }, [productId]);

  const getIteList = new Promise((res, rej) => {
    res(products);
  });

  useEffect(() => {
    getIteList.then((res) => {
      setProducts(res.productos);
    });
  });

  const singleProduct = productos.filter((product) =>  product.productId === Number(params));

  return singleProduct.map(({ articulo, description, imgUrl, price }) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{articulo}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>precio: {price}$</Card.Text>
        </Card.Body>
      </Card>
    );
  });
};

export default SimpleProduct;

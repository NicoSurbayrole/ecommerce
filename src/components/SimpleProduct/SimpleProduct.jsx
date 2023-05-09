import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProducts } from "./hooks/GetProducts";
import Card from "react-bootstrap/Card";

const SimpleProduct = () => {
  const { productos } = GetProducts();
  const { productId } = useParams();
  const [params, setParams] = useState(productId);

  useEffect(() => {
    setParams(productId);
  }, [productId]);

  const singleProduct = productos.filter(
    (product) => product.productId === Number(params)
  );

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

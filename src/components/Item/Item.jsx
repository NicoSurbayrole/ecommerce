import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ articulo, description, imgUrl, price, productId }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{articulo}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">
          <Link to={`/item/${productId}`}>VER PRODUCTO</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

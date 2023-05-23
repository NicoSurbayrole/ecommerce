import { GetCategory } from "./hook/GetCategory"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Category = () =>{
    const { productos } = GetCategory();
    const { categoryId } = useParams();
    const [params, setParams] = useState(categoryId);

    useEffect(() => {
      setParams(categoryId);
    }, [categoryId]);
  
    const singleProduct = productos.filter(
      (product) => product.categoryId === Number(params)
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
}


export default Category


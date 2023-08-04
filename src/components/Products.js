import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const GET_PRODUCTS_API = "https://fakestoreapi.com/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(GET_PRODUCTS_API)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error.message));
  }, []);

  const cards = products.map((product) => (
    <div key={product.id} style={{ marginBottom: "15px" }} className="col-md-3">
      <Card className="h-100" style={{ padding: "1rem" }}>
        <div className="text-center">
          <Card.Img
            style={{ width: "100px", height: "130px" }}
            variant="top"
            src={product.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>₹ {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="primary">Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div style={{ padding: "1.5rem" }} className="row">
      {cards}
    </div>
  );
}

export default Products;

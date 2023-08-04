import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProductsAsync } from "../store/productSlice";

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === "loading") {
    return (
      <div
        style={{
          marginTop: "18%",
          transform: "scalce(1.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
        }}
      >
        <i class="fi fi-rr-loading"></i>
      </div>
    );
  } else if (status === "error") {
    return (
      <div
        style={{
          marginTop: "18%",
          transform: "scalce(1.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
        }}
      >
        <i class="fi fi-sr-exclamation"></i>
      </div>
    );
  }

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
          <Button onClick={() => addToCart(product)} variant="primary">
            Add to Cart
          </Button>
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

import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeProductFromCart = (id) => {
    dispatch(remove(id));
  };

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
          <Button
            onClick={() => removeProductFromCart(product.id)}
            variant="danger"
          >
            Remove from Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div style={{ padding: "1.5rem" }} className="row">
      {cards.length ? (
        cards
      ) : (
        <p
          style={{
            marginTop: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            color: "#555",
          }}
        >
          Cart is empty {" :)"}
        </p>
      )}
    </div>
  );
}

export default Cart;

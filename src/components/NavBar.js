import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cartProductsCount = useSelector((state) => state.cart.length);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-between">
            <Nav.Link
              style={{ transition: "0.3s all ease" }}
              className="link"
              as={Link}
              to="/"
            >
              Products
            </Nav.Link>
            <Nav.Link
              style={{ transition: "0.3s all ease" }}
              className="link"
              as={Link}
              to="/cart"
            >
              <i class="fi fi-rr-shopping-cart">{cartProductsCount}</i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

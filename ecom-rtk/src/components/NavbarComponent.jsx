import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContextProvider';

export default function NavbarComponent() {
  // let {quantity} = React.useContext(CartContext);

  return (
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ACME Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">
             <FontAwesomeIcon icon={faCartShopping} color='white' />
             <Badge>{0}</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/form">Product Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

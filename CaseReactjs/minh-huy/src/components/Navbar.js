import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-weight-bold text-white">MyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Form inline className="d-flex mr-3">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 custom-form-control" />
            <Button variant="outline-light" className="btn-search">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login" className="nav-link-custom text-white">Login</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link-custom text-white">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

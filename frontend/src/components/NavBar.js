import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navvbar = () => {
  return (
    <div>
      <>
      <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/contactlist">Contact List</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
  </>
    </div>
  )
}

export default Navvbar;
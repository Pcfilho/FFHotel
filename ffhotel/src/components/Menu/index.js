import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Menu = () => {
    return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">FFHotel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}
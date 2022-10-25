import React from 'react';
import { Container, Navbar } from "react-bootstrap";

export const MenuClean = () => {
    return (
      <Navbar className="navbar navbar-dark bg-primary" fixed='top'>
        <Container className="d-flex align-content-start">
          <Navbar.Brand href="#home">FFHotel</Navbar.Brand>
        </Container>
      </Navbar>
    )
}
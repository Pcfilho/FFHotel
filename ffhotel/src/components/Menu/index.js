import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


export const Menu = () => {
    return (
      <Navbar className="navbar navbar-dark bg-primary" fixed="top" >
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">FFHotel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Grupos</Nav.Link>
            <Nav.Link href="#pricing">Favoritos</Nav.Link>
            <Nav.Link href="#pricing">Perfil</Nav.Link>
            
          </Nav>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
              <button class="btn btn-outline-light" type="submit">Pesquisar</button>
            </form>
        </Container>
      </Navbar>
    )
}
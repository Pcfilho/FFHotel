import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';


export const Menu = () => {
    const navigate = useNavigate();


    return (
      <Navbar className="navbar navbar-dark bg-primary p-3" fixed="top" >
          <Navbar.Brand href="#home">
            <Link to="/">
            <Navbar.Brand href="#home">
              Home
            </Navbar.Brand>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Grupos</Nav.Link>
            <Nav.Link href="#pricing">Favoritos</Nav.Link>
            <Nav.Link onClick={() => navigate('/cadastro')}>
            Cadastro

            </Nav.Link>
            
            
          </Nav>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
              <button class="btn btn-outline-light" type="submit">Pesquisar</button>
            </form>
      </Navbar>
    )
}
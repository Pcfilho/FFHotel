import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

export const MenuClean = () => {
    const navigate = useNavigate();

    return (
      <Navbar className="navbar navbar-dark bg-primary" fixed='top'>
        <Container className="d-flex align-content-start">
          <Navbar.Brand>
            <Nav.Link onClick={() => navigate('/')}>
              FFHotel
            </Nav.Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}
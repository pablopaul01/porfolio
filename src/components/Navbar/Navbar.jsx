import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarM = () => {
  return (
    <Navbar expand="lg" className="navMenu">
    <Container>
      <Navbar.Brand href="#home" className='brackets'>
        &lt; <span className='itemLink'>JPS</span> /&gt;</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex gap-3">
          <Nav.Link className='itemLink'>Inicio</Nav.Link>
          <Nav.Link className='itemLink'>Sobre mi</Nav.Link>
          <Nav.Link className='itemLink'>Servicios</Nav.Link>
          <Nav.Link className='itemLink'>Proyectos</Nav.Link>
          <Nav.Link className='itemLink'>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarM
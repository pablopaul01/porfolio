import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarM = ({currentSection}) => {
  return (
    <Navbar expand="lg" className="navMenu">
    <Container>
      <Navbar.Brand href="#home" className='brackets'>
        &lt; <span className='itemLink'>JPS</span> /&gt;</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex gap-3">
          {console.log(currentSection)}
          <Nav.Link  className={`itemLink ${currentSection === '#hero' ? 'active' : ''}`}
              href='#hero'>Inicio</Nav.Link>
          <Nav.Link href='#aboutMe' className={`itemLink ${currentSection === '#aboutMe' ? 'active' : ''}`}>Sobre mi</Nav.Link>
          <Nav.Link className={`itemLink ${currentSection === '#services' ? 'active' : ''}`} href='#services'>Servicios</Nav.Link>
          <Nav.Link className='itemLink' href='#projects'>Proyectos</Nav.Link>
          <Nav.Link className='itemLink' href='#contact'>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarM
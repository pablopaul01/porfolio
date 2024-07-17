
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarM = ({currentSection}) => {
  return (
    <Navbar expand="lg" className="navMenu sticky-top" >
    <Container>
      <Navbar.Brand href="#home" className='brackets'>
        &lt; <span className='itemLink'>JPS</span> /&gt;</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
      <span>
      <GiHamburgerMenu className='hamburguer'/> 
    </span>
        </Navbar.Toggle >
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex gap-3">
          <Nav.Link  className={`itemLink ${currentSection === '#hero' ? 'active' : 'desactive'}`}
              href='#hero'>Inicio</Nav.Link>
          <Nav.Link className='itemLink' href='#projects'>Proyectos</Nav.Link>
          <Nav.Link href='#aboutMe' className={`itemLink ${currentSection === '#aboutMe' ? 'active' : 'desactive'}`}>Sobre mi</Nav.Link>
          <Nav.Link className={`itemLink ${currentSection === '#services' ? 'active' : 'desactive'}`} href='#services'>Servicios</Nav.Link>
          <Nav.Link className='itemLink' href='#contact'>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarM
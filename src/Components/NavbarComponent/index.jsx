import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import imgUser from '../../img/user-interface.png';

const NavbarComponent = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    onLoginSuccess();
    console.log('Cerrando sesión');
  };

  return (
    <Navbar className='header'>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">DiBanka</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Aliados</Nav.Link>
            </Nav>
            <Nav className="profile-nav">
              <img src={imgUser} alt="perfil" className="profile-image" />
              <Nav.Link href="#">User</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link id="salirbtn" onClick={handleLogin}>Salir</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Navbar>
  );
};

export { NavbarComponent };

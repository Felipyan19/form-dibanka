import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './Header.css'; 

const Header = ({onLoginSuccess}) => {
    const handelLogin = () => {
        onLoginSuccess();
        console.log('cerrando sesion');
    }
    return (
        <header className="header-container">
            <Container fluid>
                <Nav className="nav-container">
                    <Nav.Item>
                        <Nav.Link href="#" className="nav-link">DiBanka</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#" className="nav-link">Aliados</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <img src="./img/perfil.png" alt="perfil" className="profile-image" />
                        <label className="user-label" htmlFor="file">User</label>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#" className="nav-link">Buscar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                        id="salirbtn" 
                        className="nav-link"
                        onClick={handelLogin}>
                        Salir</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </header>
    );
}

export { Header };


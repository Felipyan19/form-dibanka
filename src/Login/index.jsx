import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Login.css'; 
import { sendLoginData } from '../Api'; 

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await sendLoginData(username, password, props.onLoginSuccess);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <main className="px-3 mt-5">
            <Container fluid id="login-container">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col xl={10}>
                        <Card className="login-card mt-5">
                            <Row>
                                <Col md={6} lg={5} className="d-none d-md-block text-center login-image">
                                    <img src="./img/vus-logo.png" alt="login form" className="img-fluid" width="75%" />
                                </Col>
                                <Col md={6} lg={7} className="d-flex align-items-center mt-5 mb-5">
                                    <Card.Body className="p-4 p-lg-5 text-black">
                                        <Form>
                                            <div className="logo-section">
                                                <i className="fas fa-cubes fa-2x me-3 logo-icon"></i>
                                                <img src="./img/logo-ccg.png" alt="logo" width="35%" className="img-fluid" />
                                            </div>
                                            <h5 className="fw-normal form-title mb-5">Formulario</h5>
                                            <Form.Group className="mb-3" controlId="username">
                                                <Form.Label>Usuario</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    value={username}
                                                    onChange={handleUsernameChange}
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                />
                                            </Form.Group>
                                            <div className="d-grid gap-2 login-button mt-5">
                                                <Button 
                                                variant="dark" 
                                                type="button" 
                                                className="custom-button"
                                                onClick={handleLogin}>
                                                Ingresar
                                                </Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Login;

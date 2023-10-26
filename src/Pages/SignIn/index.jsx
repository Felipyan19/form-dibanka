import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Login.css'; 
import { sendLoginData } from '../../Api'; 
import imgLogin from '../../img/dibanka-beneficios.png';
import imgLogo from '../../img/Logo-dibanka-768x158-1.png'

const SignIn = (props) => {
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
                                    <img src={imgLogin} alt="login form" className="img-fluid" width="75%" />
                                </Col>
                                <Col md={6} lg={7} className="d-flex align-items-center mt-5 mb-5">
                                    <Card.Body className="p-4 p-lg-5 text-black">
                                        <Form>
                                            <div className="logo-section mb-5">
                                                <img src={imgLogo} alt="logo" width="45%" className="img-fluid" />
                                            </div>

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

export  { SignIn };

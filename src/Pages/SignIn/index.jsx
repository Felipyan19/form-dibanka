import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Login.css'; 
import imgLogin from '../../img/dibanka-beneficios.png';
import imgLogo from '../../img/Logo-dibanka-768x158-1.png'

const SignIn = (props) => {
    
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

        const handleLogin = async () => {
            try {

                if (props.username === 'admin' && password === 'password') {
                    props.login(true);  
                    navigate('/Home');
                } else {
                    throw new Error('Usuario o contraseña incorrectos.');
                }
            } catch (error) {
                console.error(error);
            }
        };


    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        console.log(searchParams);
        const ani = searchParams.get('ani');
        const dnis = searchParams.get('dnis');
        const id_customer = searchParams.get('id_customer');
        const id_call = searchParams.get('id_call');
        const webrtc = searchParams.get('webrtc');
    
        console.log(`ani: ${ani}`);
        console.log(`dnis: ${dnis}`);
        console.log(`ID Customer: ${id_customer}`);
        console.log(`ID Call: ${id_call}`);
        console.log(`WebRTC: ${webrtc}`);
    }, []);

    const handleUsernameChange = (e) => {
        props.setUsername(e.target.value);
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
                                                    value={props.username}
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

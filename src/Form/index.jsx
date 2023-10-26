import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MyModal } from '../Modal';
import { NewForm } from '../newForm';
import formData from './formData';
import './formContainer.css';
import imgForm from '../img/plataforma-de-beneficios-scaled.jpg';
import imgCCG from '../img/logo-ccgltda-1586537131.png';
import { send_data } from '../send_data';
function FormContainer() {
    const [selectedCampaña, setSelectedCampaña] = useState('');
    const [telefono, setTelefono] = useState('');
    const [formArray, setFormArray] = useState([]);
    const [selectedData, setSelectedData] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(imgForm);
    const [text, setText] = useState('Soy Dibanka');

    const handleCampañaChange = (e) => {
        const filterdata = e.target.value;
        setSelectedCampaña(filterdata);
    
        if (formData[filterdata] && formData[filterdata].data) {
            const initialFormArray = formData[filterdata].data.map((form) => ({ ...form, value: '' }));
            setFormArray(initialFormArray);
            setBackgroundImage(formData[filterdata].config.backgroundImage);
            setText(formData[filterdata].config.text);

        } else {
            setFormArray([]);
        }
    };
    

    const handleTelefono = (e) => {
        setTelefono(e.target.value);
    }

    const handleFieldChange = (fieldName, fieldValue) => {
        const updatedFormArray = formArray.map((form) =>
            form.title === fieldName ? { ...form, value: fieldValue } : form
        );
        setFormArray(updatedFormArray);
    };

    const handleShowData = () => {
        const data = {
            Campaña: selectedCampaña,
            Telefono: telefono,
        };

        formArray.forEach((form) => {
            data[form.title] = form.value;
        });
        data.source = 'hoja 1';
        console.log(data);
        setSelectedData(data);
        send_data(data)
    };

    return (
        <section className="container-fluid" id="formulario-container">
            <Container fluid>
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col xl={10}>
                        <Card>
                            <Row>
                                <Col md={6} lg={7} className="d-flex align-items-center">
                                    <Card.Body className="p-5">
                                        <img src={imgCCG} alt="logo" width="45%" className="img-fluid mb-5" />
                                        <Form>
                                            <Form.Group as={Row} className="mb-3" controlId="formTelefono">
                                                <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                                    Telefono
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Anonymous"
                                                    value={telefono}
                                                    onChange={(e) => handleTelefono(e)}
                                                />
                                            </Form.Group>
                                            <Form.Group as={Row} className="mb-3" controlId="formCampaña">
                                                <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                                    Campaña
                                                </Form.Label>
                                                <Form.Select value={selectedCampaña} onChange={handleCampañaChange}>
                                                    <option value="">Select a campaign</option>
                                                    {Object.keys(formData).map((campaña) => (
                                                        <option key={campaña} value={campaña}>
                                                            {campaña}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                            {formArray.map((form) => (
                                                <NewForm
                                                    key={form.title}
                                                    type={form.type}
                                                    title={form.title}
                                                    options={form.options}
                                                    value={form.value}
                                                    onValueChange={(fieldValue) =>
                                                        handleFieldChange(form.title, fieldValue)
                                                    }
                                                />
                                            ))}
                                            <Button className="btn mt-5" variant="primary" onClick={handleShowData}>
                                                Enviar Datos
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Col>
                                <Col md={6} lg={5} className="text-center-col">
                                    <div className="background-container">
                                        <img src={backgroundImage} alt="login form background" className="img-background" />
                                    </div>
                                    <p className="text-img">{text}</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <MyModal selectedData={selectedData} />
        </section>
    );
}

export { FormContainer };

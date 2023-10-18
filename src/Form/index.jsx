import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MyModal } from '../Modal';
import { NewForm } from '../newForm';
import formData from './formData';
import './formContainer.css';

function FormContainer() {
    const [selectedCampaña, setSelectedCampaña] = useState('');
    const [telefono, setTelefono] = useState('');
    const [formArray, setFormArray] = useState([]);
    const [selectedData, setSelectedData] = useState({});

    const handleCampañaChange = (e) => {
        setSelectedCampaña(e.target.value);

        if (formData[e.target.value]) {
            const initialFormArray = formData[e.target.value].map((form) => ({ ...form, value: '' }));
            setFormArray(initialFormArray);
        } else {
            setFormArray([]);
        }
    };

    const handleTelefono = (e) => {
        setTelefono(e.target.value); // Cambiado a 'telefono'
    }

    const handleFieldChange = (fieldName, fieldValue) => {
        // Actualizar el valor de un campo específico en el estado
        const updatedFormArray = formArray.map((form) =>
            form.title === fieldName ? { ...form, value: fieldValue } : form
        );
        setFormArray(updatedFormArray);
    };

    const handleShowData = () => {
        const data = {
            plantilla: selectedCampaña,
            telefono: telefono,
        };

        formArray.forEach((form) => {
            data[form.title] = form.value;
        });
        setSelectedData(data);
        console.log(data);
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
                                        <Form>
                                            <Form.Group as={Row} className="mb-3" controlId="formTelefono">

                                                <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                                    Telefono
                                                </Form.Label>

                                                <Form.Control
                                                    type="text" placeholder="Anonymous"
                                                    value={telefono}
                                                    onChange={(e) => handleTelefono(e)} />

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
                                            <Button variant="primary" onClick={handleShowData}>
                                                Mostrar Datos
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Col>
                                <Col md={6} lg={5} className="text-center-col">

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

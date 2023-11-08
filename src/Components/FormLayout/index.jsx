import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Renderiza un diseño de formulario con los componentes hijos proporcionados.
 *
 * @param {object} children - Los componentes hijos a renderizar dentro del formulario.
 * @return {JSX.Element} - El diseño de formulario renderizado.
 */
function FormLayout({ children }) {
    return (
      <section className="container-fluid">
        <Container fluid>
            <Row className="d-flex justify-content-center align-items-center">
                <Col xl={10}>
                    <Card>
                        <Row>{children}</Row>
                    </Card>
                </Col>
            </Row>
        </Container>
      </section>
    );
}

export { FormLayout };

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Renders a form layout with the given children.
 *
 * @param {object} children - The children components to render within the form.
 * @return {JSX.Element} - The rendered form layout.
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
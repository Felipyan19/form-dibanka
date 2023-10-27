import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
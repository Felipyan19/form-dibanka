import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
 * Renders a modal component with a form submission success message.
 *
 * @return {JSX.Element} The rendered modal component.
 */
const MyModal = () => {
    return (
        <div>
            <Modal show={false} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <h1 className="modal-title fs-5">Formulario registrado correctamente</h1>
                    <Button variant="secondary" >Salir</Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center" id="spinner">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p>Cargando...</p>
                    </div>
                    <div id="MensajeModal" style={{ display: 'none' }}>¿Deseas enviar otro formulario?</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" >Enviar otro formulario</Button>
                </Modal.Footer>
            </Modal>

            <div id="exito" style={{ color: 'rgb(168, 195, 206)', display: 'none' }}></div>
        </div>
    );
}

export { MyModal };

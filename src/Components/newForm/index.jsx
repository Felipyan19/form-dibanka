import React from 'react';
import { Form, Row } from 'react-bootstrap';

const NewForm = (props) => {
    const { type, title, options, value, onValueChange } = props;

    const handleSelectChange = (e) => {
        onValueChange(e.target.value);
    };

    const renderFormField = () => {
        if (type === 'list' && options) {
            return (
                <Form.Select value={value} onChange={handleSelectChange}>
                    <option value="">Seleccione</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            );
        } else if (type === 'text') {
            return <Form.Control type="text" placeholder="Anonymous" value={value} onChange={(e) => onValueChange(e.target.value)} />;
        } else if (type === 'textarea') {
            return <Form.Control as="textarea" rows={3} placeholder="Message" value={value} onChange={(e) => onValueChange(e.target.value)} />;
        } else {
            return <Form.Control type="text" placeholder="Campo de texto predeterminado" value={value} onChange={(e) => onValueChange(e.target.value)} />;
        }
    };

    return (
        <Form.Group as={Row} className="mb-3" controlId="form">
            <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                {title}
            </Form.Label>
            {renderFormField()}
        </Form.Group>

    );
};

export { NewForm };

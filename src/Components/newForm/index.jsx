import React from 'react';
import { Form, Row } from 'react-bootstrap';

const NewForm = (props) => {
    const { type, title, options, value, onValueChange, handleChange, values, touched, errors } = props;

    const handleSelectChange = (e) => {
        onValueChange(e.target.value);
        handleChange(title)(e); 
    };
const renderFormField = () => {
    let inputProps = {
        values,
        name: title,
        value,
        onChange: handleSelectChange,
        isValid: touched[title] && !errors[title]
    };

    if (type === 'list' && options) {
        return (
            <div>
                <Form.Select {...inputProps}>
                    <option value="">Seleccione</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
                {touched[title] && errors[title] && <div className="text-danger">{errors[title]}</div>}
            </div>
        );
    } else if (type === 'text') {
        return (
            <div>
                <Form.Control {...inputProps} type="text" placeholder="Anonymous" />
                {touched[title] && errors[title] && <div className="text-danger">{errors[title]}</div>}
            </div>
        );
    } else if (type === 'textarea') {
        return (
            <div>
                <Form.Control {...inputProps} as="textarea" rows={3} placeholder="Message" />
                {touched[title] && errors[title] && <div className="text-danger">{errors[title]}</div>}
            </div>
        );
    } else {
        return (
            <div>
                <Form.Control {...inputProps} type="text" placeholder="Campo de texto predeterminado" />
                {touched[title] && errors[title] && <div className="text-danger">{errors[title]}</div>}
            </div>
        );
    }
};

return (
    <Form.Group as={Row} className="mb-3" controlId={title}>
        <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {title}
        </Form.Label>
        {renderFormField()}
    </Form.Group>
);
};

export { NewForm };
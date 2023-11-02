import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';

const NewForm = (props) => {
    const {
        type,
        title,
        options,
        value,
        onValueChange,
        handleChange,
        values,
        touched,
        errors,
        urlData,
        selectedPagaduria,
        motivoConsulta,
        setMotivoConsulta,
        motivoEspecifico,
        setMotivoEspecifico,
        motivoEspecificoBackup,
        setMotivoEspecificoBackup,
    } = props;

    useEffect(() => {
        if (title === 'Motivo Específico') {
            setMotivoEspecifico(options);
            setMotivoEspecificoBackup(options);
        }
    }, []);

    const handleSelectChange = (e) => {
        onValueChange(e.target.value);
        handleChange(title)(e);
    };

    const handleMotivoChange = (e) => {
        onValueChange(e.target.value);
        handleChange(title)(e);
        setMotivoConsulta(e.target.value);
    };

    useEffect(() => {
        if (motivoConsulta) {
            let filterNumber = '';
            if (motivoConsulta.match(/^\d+/)) {
                filterNumber = motivoConsulta.match(/^\d+/)[0];
            }
            const filteredOptions = motivoEspecificoBackup.filter((opcion) => opcion.startsWith(filterNumber));
            if (filteredOptions.length === 0) {
                setMotivoEspecifico(['N/A']);
            }else{
                setMotivoEspecifico(filteredOptions);
            }
         } 
    }, [motivoConsulta]);

    const renderMotivo = () => {
        return (
            <div>
                <Form.Select
                    name={title}
                    value={value}
                    onChange={handleMotivoChange}
                    isValid={touched[title] && !errors[title]}
                >
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
    };

    const renderEspecifico = () => {
        return (
            <div>
                <Form.Select
                    name={title}
                    value={value}
                    onChange={handleSelectChange}
                    isValid={touched[title] && !errors[title]}
                >
                    <option value="">Seleccione</option>
                    {motivoEspecifico.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
                {touched[title] && errors[title] && <div className="text-danger">{errors[title]}</div>}
            </div>
        );
    };

    const renderFormField = () => {
        if (type === 'list' && options) {
            if (title === 'Motivo Consulta') {
                return renderMotivo();
            }
            if (title === 'Motivo Específico') {
                return renderEspecifico();
            }
            return (
                <div>
                    <Form.Select
                        name={title}
                        value={value}
                        onChange={handleSelectChange}
                        isValid={touched[title] && !errors[title]}
                    >
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
            let initialValue = value;

            if (title === 'Numero de Identificación' && urlData.cedulaCliente) {
                initialValue = urlData.cedulaCliente;
            }

            if (title === 'Tipo de Identificación') {
                initialValue = selectedPagaduria === 'Afiliados' ? 'CEDULA DE CIUDADANIA' : 'NIT';
            }

            return (
                <div>
                    <Form.Control
                        name={title}
                        value={initialValue}
                        onChange={handleSelectChange}
                        type="text"
                        placeholder={initialValue || 'Anonymous'}
                        isValid={touched[title] && !errors[title]}
                    />
                    {touched[title] && errors[title] && <div className="text-danger">{errors[title]}</div>}
                </div>
            );
        } else if (type === 'textarea') {
            return (
                <div>
                    <Form.Control
                        name={title}
                        value={value}
                        onChange={handleSelectChange}
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                        isValid={touched[title] && !errors[title]}
                    />
                    {touched[title] && errors[title] && <div className="text-danger">{errors[title]}</div>}
                </div>
            );
        } else {
            return (
                <div>
                    <Form.Control
                        name={title}
                        value={value}
                        onChange={handleSelectChange}
                        type="text"
                        placeholder="Campo de texto predeterminado"
                        isValid={touched[title] && !errors[title]}
                    />
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

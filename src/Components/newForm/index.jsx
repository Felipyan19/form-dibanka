import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';

/**
 * Renders a form field based on the provided props.
 *
 * @param {Object} props - The props object containing the necessary data for rendering the form field.
 * @param {string} props.type - The type of the form field.
 * @param {string} props.title - The title of the form field.
 * @param {Array} props.options - The options for the form field.
 * @param {string} props.value - The current value of the form field.
 * @param {function} props.onValueChange - The callback function for when the value of the form field changes.
 * @param {function} props.handleChange - The callback function for when the form field changes.
 * @param {Object} props.values - The values object containing the current values of all form fields.
 * @param {Object} props.touched - The touched object indicating if a form field has been touched.
 * @param {Object} props.errors - The errors object containing the validation errors for the form fields.
 * @param {Object} props.urlData - The data object containing additional data from the URL.
 * @param {string} props.selectedPagaduria - The selected pagaduria.
 * @param {string} props.motivoConsulta - The selected motivo consulta.
 * @param {function} props.setMotivoConsulta - The callback function for setting the motivo consulta value.
 * @param {Array} props.motivoEspecifico - The motivo especifico options.
 * @param {function} props.setMotivoEspecifico - The callback function for setting the motivo especifico value.
 * @param {Array} props.motivoEspecificoBackup - The backup motivo especifico options.
 * @param {function} props.setMotivoEspecificoBackup - The callback function for setting the backup motivo especifico options.
 * @return {JSX.Element} The rendered form field.
 */
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

    /**
     * Handles the change event of the select element.
     *
     * @param {Event} e - The event object.
     * @return {void} No return value.
     */
    const handleSelectChange = (e) => {
        onValueChange(e.target.value);
        handleChange(title)(e);
    };

    /**
     * Handles the change event for the motivo input.
     *
     * @param {Event} e - The change event object.
     * @return {void} 
     */
    const handleMotivoChange = (e) => {
        onValueChange(e.target.value);
        handleChange(title)(e);
        setMotivoConsulta(e.target.value);
    };
    
    /**
     * Updates the motivoEspecifico array based on the selected motivoConsulta value.
     * 
     * @param {string} motivoConsulta - The selected motivo consulta value.
     * @param {array} motivoEspecificoBackup - The backup motivo especifico options.
     * @returns {void} - This function does not return anything.
     */
    useEffect(() => {
        if (motivoConsulta) {
            let filterNumber = '';
            if (motivoConsulta.match(/^\d+/)) {
                filterNumber = motivoConsulta.match(/^\d+/)[0];
            }
            const filteredOptions = motivoEspecificoBackup.filter((opcion) => opcion.startsWith(filterNumber));
            if (filteredOptions.length === 0) {
                setMotivoEspecifico(['N/A']);
            } else {
                setMotivoEspecifico(filteredOptions);
            }
        }
    }, [motivoConsulta]);


    /**
     * Renders the Motivo component.
     *
     * @return {JSX.Element} The rendered JSX element.
     */
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

    /**
     * Render a specific element.
     *
     * @return {JSX.Element} The rendered specific element.
     */
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

    /**
     * Renders a form field based on the type and options provided.
     *
     * @return {JSX.Element} The rendered form field.
     */
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

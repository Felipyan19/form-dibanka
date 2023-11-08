import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';

/**
 * Renderiza un campo de formulario basado en las propiedades proporcionadas.
 *
 * @param {Object} props - El objeto de propiedades que contiene los datos necesarios para renderizar el campo de formulario.
 * @param {string} props.type - El tipo de campo de formulario.
 * @param {string} props.title - El título del campo de formulario.
 * @param {Array} props.options - Las opciones para el campo de formulario.
 * @param {string} props.value - El valor actual del campo de formulario.
 * @param {function} props.onValueChange - La función de devolución de llamada cuando cambia el valor del campo de formulario.
 * @param {function} props.handleChange - La función de devolución de llamada cuando cambia el campo de formulario.
 * @param {Object} props.values - El objeto de valores que contiene los valores actuales de todos los campos de formulario.
 * @param {Object} props.touched - El objeto tocado que indica si se ha tocado un campo de formulario.
 * @param {Object} props.errors - El objeto de errores que contiene los errores de validación de los campos de formulario.
 * @param {Object} props.urlData - El objeto de datos que contiene datos adicionales de la URL.
 * @param {string} props.selectedPagaduria - La pagaduría seleccionada.
 * @param {string} props.motivoConsulta - El motivo de consulta seleccionado.
 * @param {function} props.setMotivoConsulta - La función de devolución de llamada para establecer el valor del motivo de consulta.
 * @param {Array} props.motivoEspecifico - Las opciones de motivo específico.
 * @param {function} props.setMotivoEspecifico - La función de devolución de llamada para establecer el valor del motivo específico.
 * @param {Array} props.motivoEspecificoBackup - Las opciones de motivo específico de respaldo.
 * @param {function} props.setMotivoEspecificoBackup - La función de devolución de llamada para establecer las opciones de motivo específico de respaldo.
 * @return {JSX.Element} El campo de formulario renderizado.
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
     * Maneja el evento de cambio del elemento select.
     *
     * @param {Event} e - El objeto de evento.
     * @return {void} No devuelve ningún valor.
     */

    const handleSelectChange = (e) => {
        onValueChange(e.target.value);
        handleChange(title)(e);
    };

    /**
     * Maneja el evento de cambio para el input del motivo.
     *
     * @param {Event} e - El objeto de evento de cambio.
     * @return {void} No devuelve ningún valor.
     */

    const handleMotivoChange = (e) => {
        onValueChange(e.target.value);
        handleChange(title)(e);
        setMotivoConsulta(e.target.value);
    };

    /**
     * Actualiza el array motivoEspecifico basándose en el valor de motivoConsulta seleccionado.
     *
     * @param {string} motivoConsulta - El valor del motivo de consulta seleccionado.
     * @param {array} motivoEspecificoBackup - Las opciones de motivo específico de respaldo.
     * @return {void} No devuelve nada.
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
            }else{
                setMotivoEspecifico(filteredOptions);
            }
         } 
    }, [motivoConsulta]);

    /**
     * Renderiza el componente Motivo.
     *
     * @return {JSX.Element} El elemento JSX renderizado.
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
     * Renderiza un elemento específico.
     *
     * @return {JSX.Element} El elemento específico renderizado.
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
     * Renderiza un campo de formulario según el tipo y las opciones proporcionadas.
     *
     * @return {JSX.Element} El campo de formulario renderizado.
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
import React, { useEffect } from 'react';
import { Row, Form } from 'react-bootstrap';

/**
 * Genera el formulario para los valores predeterminados.
 *
 * @param {object} values - los valores para el formulario
 * @param {function} handleChange - la función para manejar los cambios en el formulario
 * @param {object} touched - los campos del formulario que se han tocado
 * @param {object} errors - los errores del formulario
 * @param {string} selectedPagaduria - la pagaduría seleccionada
 * @param {function} handlePagaduriaChange - la función para manejar los cambios de la pagaduría
 * @param {object} formData - los datos del formulario
 * @param {string} selectedCampaña - la campaña seleccionada
 * @param {function} handleCampañaChange - la función para manejar los cambios de la campaña
 * @param {function} setTelefono - la función para establecer el teléfono
 * @param {function} setIdWolkvox - la función para establecer el ID de Wolkvox
 * @param {object} urlData - los datos de la URL
 * @return {JSX.Element} - el componente del formulario
 */
const FormDefault = ({
  values,
  handleChange,
  touched,
  errors,
  selectedPagaduria,
  handlePagaduriaChange,
  formData,
  selectedCampaña,
  handleCampañaChange,
  setTelefono,
  setIdWolkvox,
  urlData
}) => {

  /**
   * Renderiza las opciones para un conjunto de opciones.
   *
   * @param {Object} options - Las opciones a renderizar.
   * @return {Array} Un arreglo de elementos de opción.
   */
  const renderOptions = (options) =>
    Object.keys(options).map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

  /**
   * Una función que maneja el cambio de un nombre y un valor.
   *
   * @param {string} name - el nombre del campo de entrada
   * @param {any} value - el valor del campo de entrada
   */
  const customHandleChange = (name, value) => {
    if (name === 'formTelefono') {
      setTelefono(value);
    } else if (name === 'formIdWolkvox') {
      setIdWolkvox(value);
    }
    handleChange(name)(value);
  };
  const words = urlData.mensaje?.split('-');

  /**
   * Ejecuta dos ganchos useEffect para establecer valores basados en urlData y manejar cambios.
   *
   * @param {object} urlData - Un objeto que contiene datos de la URL, incluyendo `ani`, `id_call`, `mensaje` y `cedulaCliente`.
   * @param {string} selectedPagaduria - La pagaduría actualmente seleccionada.
   * @param {string} selectedCampaña - La campaña actualmente seleccionada.
   * @param {function} handleChange - Una función para manejar cambios en el formulario.
   * @param {function} handlePagaduriaChange - Una función para manejar cambios en la pagaduría.
   * @param {function} handleCampañaChange - Una función para manejar cambios en la campaña.
   * @param {function} setTelefono - Una función para establecer el valor del teléfono.
   * @param {function} setIdWolkvox - Una función para establecer el ID de Wolkvox.
   */
  useEffect(() => {
    if (urlData.ani) {
      setTelefono(urlData.ani);
      handleChange('formTelefono')(urlData.ani);
    }
    if (urlData.id_call) {
      setIdWolkvox(urlData.id_call);
      handleChange('formIdWolkvox')(urlData.id_call);
    }
    if (urlData.mensaje) {
      handlePagaduriaChange(words[0]);
      handleChange('Pagaduria')(words[0]);
    }
    if (urlData.cedulaCliente) {
      handleChange('Número de Identificación')(urlData.cedulaCliente);
    }
  }, [urlData.ani, words, urlData.id_call, urlData.mensaje, urlData.cedulaCliente, handleChange, handlePagaduriaChange, setTelefono, setIdWolkvox]);

  useEffect(() => {
    if (urlData.mensaje) {
      handleCampañaChange(words[1]);
      handleChange('Campaña')(words[1]);
    }
  }, [selectedPagaduria, urlData.mensaje, words, handleCampañaChange, handleChange]);

  /**
   * Renderiza un elemento de grupo de formulario.
   *
   * @param {string} id - El ID para el control del formulario.
   * @param {string} label - La etiqueta para el control del formulario.
   * @param {object} selectOptions - Las opciones de selección para el control del formulario.
   * @return {JSX.Element} El elemento de grupo de formulario renderizado.
   */
  const renderFormGroup = (id, label, selectOptions) => {

    const initialValue = label && label[1] ? label[1] : '';

    return (
      <Form.Group as={Row} className="mb-3" controlId={id}>
        <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {label[0]}
        </Form.Label>
        {!selectOptions && (
          <div>
            <Form.Control
              name={id}
              type="text"
              placeholder={initialValue || "Anónimo"}
              value={values[id] || initialValue} // Usar el valor inicial si existe
              onChange={(e) => customHandleChange(id, e.target.value)} // Usar la función personalizada
              isValid={touched[id] && !errors[id]}
            />
          </div>
        )}
        {selectOptions && (
          <div>
            <Form.Select
              name={id}
              value={selectOptions.value || initialValue} // Usar el valor inicial si existe
              onChange={(e) => {
                selectOptions.onChange(e.target.value)
                customHandleChange(id, e.target.value)
              }}
              isValid={touched[id] && !errors[id]}
            >
              <option value=""> Seleccione</option>
              {renderOptions(selectOptions.data)}
            </Form.Select>
          </div>
        )}
        {touched[id] && errors[id] && <div className="text-danger">{errors[id]}</div>}
      </Form.Group>
    );
  };

  return (
    <>
      {renderFormGroup('formTelefono', ['Teléfono', urlData.ani])}
      {renderFormGroup('formIdWolkvox', ['ID Wolkvox', urlData.id_call])}
      {renderFormGroup('formPagaduria', ['Campaña'], {
        value: selectedPagaduria,
        onChange: handlePagaduriaChange,
        data: formData,
      })}
      {renderFormGroup('formCampaña', ['Pagaduria'], {
        value: selectedCampaña,
        onChange: handleCampañaChange,
        data: selectedPagaduria && formData[selectedPagaduria],
      })}
    </>
  );
};

export { FormDefault };

// Importa las bibliotecas y componentes necesarios
import React, { useEffect } from 'react';
import { Row, Form } from 'react-bootstrap';

/**
 * Generates the form for the default values.
 *
 * @param {object} values - the values for the form
 * @param {function} handleChange - the function to handle form changes
 * @param {object} touched - the touched form fields
 * @param {object} errors - the form errors
 * @param {string} selectedPagaduria - the selected pagaduria
 * @param {function} handlePagaduriaChange - the function to handle pagaduria changes
 * @param {object} formData - the form data
 * @param {string} selectedCampaña - the selected campaña
 * @param {function} handleCampañaChange - the function to handle campaña changes
 * @param {function} setTelefono - the function to set telefono
 * @param {function} setIdWolkvox - the function to set idWolkvox
 * @param {object} urlData - the url data
 * @return {JSX.Element} - the form component
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
   * Renders the options for a given set of options.
   *
   * @param {Object} options - The options to render.
   * @return {Array} An array of option elements.
   */
  const renderOptions = (options) =>
    Object.keys(options).map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

  /**
   * A function that handles the change of a name and value.
   *
   * @param {string} name - the name of the input field
   * @param {any} value - the value of the input field
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
   * Executes two useEffect hooks to set values based on urlData and handle changes.
   *
   * @param {object} urlData - An object containing data from the URL, including `ani`, `id_call`, `mensaje`, and `cedulaCliente`.
   * @param {string} selectedPagaduria - The currently selected pagaduria.
   * @param {string} selectedCampaña - The currently selected campaña.
   * @param {function} handleChange - A function to handle form changes.
   * @param {function} handlePagaduriaChange - A function to handle pagaduria changes.
   * @param {function} handleCampañaChange - A function to handle campaña changes.
   * @param {function} setTelefono - A function to set the telefono value.
   * @param {function} setIdWolkvox - A function to set the idWolkvox value.
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
    if(urlData.mensaje){
      handlePagaduriaChange(words[0]);
      handleChange('Pagaduria')(words[0]);
    }
    if (urlData.cedulaCliente) {
      handleChange('Numero de Identificación')(urlData.cedulaCliente);
    }
  },[ urlData.ani, words,urlData.id_call, urlData.mensaje, urlData.cedulaCliente, handleChange, handlePagaduriaChange, setTelefono, setIdWolkvox])

  useEffect(() => {
    if(urlData.mensaje){
      handleCampañaChange(words[1]);
      handleChange('Campaña')(words[1]);
    }
  },[selectedPagaduria,urlData.mensaje,words,handleCampañaChange,handleChange])


  /**
   * Renders a form group element.
   *
   * @param {string} id - The ID for the form control.
   * @param {string} label - The label for the form control.
   * @param {object} selectOptions - The select options for the form control.
   * @return {JSX.Element} The rendered form group element.
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
              placeholder={initialValue || "Anonymous" }
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
      {renderFormGroup('formTelefono', ['Telefono', urlData.ani])}
      {renderFormGroup('formIdWolkvox', ['ID Wolkvox',urlData.id_call])}
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

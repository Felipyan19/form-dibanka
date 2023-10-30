// Importa las bibliotecas y componentes necesarios
import React, { useEffect } from 'react';
import { Row, Form } from 'react-bootstrap';

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
}) => {
  const urlData = JSON.parse(localStorage.getItem('urlParametres'));
  const renderOptions = (options) =>
    Object.keys(options).map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

  const customHandleChange = (name, value) => {
    if (name === 'formTelefono') {
      setTelefono(value);
    } else if (name === 'formIdWolkvox') {
      setIdWolkvox(value);
    }
    handleChange(name)(value);
  };
  const words = urlData.mensaje?.split('-');
  console.log(words);
  
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
    console.log(urlData);
  },[])

  useEffect(() => {
    if(urlData.mensaje){
      handleCampañaChange(words[1]);
      handleChange('Campaña')(words[1]);
    }
  },[selectedPagaduria])

  const renderFormGroup = (id, label, selectOptions) => {
    // Define el valor inicial en función de la existencia de la etiqueta
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
              <option value="">Select a {label[0].toLowerCase()}</option>
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
      {renderFormGroup('formPagaduria', ['Pagaduria'], {
        value: selectedPagaduria,
        onChange: handlePagaduriaChange,
        data: formData,
      })}
      {renderFormGroup('formCampaña', ['Campaña'], {
        value: selectedCampaña,
        onChange: handleCampañaChange,
        data: selectedPagaduria && formData[selectedPagaduria],
      })}
    </>
  );
};

export { FormDefault };

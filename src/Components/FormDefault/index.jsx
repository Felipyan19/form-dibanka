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
}) => {
  const renderOptions = (options) =>
    Object.keys(options).map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

  const customHandleChange = (name, value) => {
    console.log(`Campo: ${name}, Valor: ${value}`);
    handleChange(name)(value);
  };

  const renderFormGroup = (id, label, selectOptions) => (
    <Form.Group as={Row} className="mb-3" controlId={id}>
      <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
        {label}
      </Form.Label>
      {!selectOptions && (
        <div>
          <Form.Control
            name={id}
            type="text"
            placeholder="Anonymous"
            value={values[id]}
            onChange={(e) => customHandleChange(id, e.target.value)} // Usar la función personalizada
            isValid={touched[id] && !errors[id]}
          />
        </div>
      )}
      {selectOptions && (
        <div>
          <Form.Select
            name={id}
            value={selectOptions.value || ''}
            onChange={(e) => {
                selectOptions.onChange(e.target.value)
                customHandleChange(id, e.target.value)
                }}
            isValid={touched[id] && !errors[id]}
          >
            <option value="">Select a {label.toLowerCase()}</option>
            {renderOptions(selectOptions.data)}
          </Form.Select>
        </div>
      )}
      {touched[id] && errors[id] && <div className="text-danger">{errors[id]}</div>}
    </Form.Group>
  );

  return (
    <>
      {renderFormGroup('formTelefono', 'Telefono')}
      {renderFormGroup('formIdWolkvox', 'ID Wolkvox')}
      {renderFormGroup('formPagaduria', 'Pagaduria', {
        value: selectedPagaduria,
        onChange: handlePagaduriaChange,
        data: formData,
      })}
      {renderFormGroup('formCampaña', 'Campaña', {
        value: selectedCampaña,
        onChange: handleCampañaChange,
        data: selectedPagaduria && formData[selectedPagaduria],
      })}
    </>
  );
};

export { FormDefault };

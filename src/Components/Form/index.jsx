import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';
import { FormDefault } from '../FormDefault';
import { Card, Button } from 'react-bootstrap';
import { NewForm } from '../../Components/newForm';
import imgCCG from '../../img/logo-ccgltda-1586537131.png';
import formData from '../../Components/Form/formData';
import { send_data } from '../../send_data';

const FormCard = ({
  selectedCampaña,
  setSelectedCampaña,
  selectedPagaduria,
  setSelectedPagaduria,
  formArray,
  setFormArray,
  setSelectedData,
  backgroundImage,
  setBackgroundImage,
  text,
  setText,
  telefono,
  setTelefono,
}) => {
  const schema = yup.object().shape({
    formTelefono: yup.string().required('Este campo es obligatorio'),
    formIdWolkvox: yup.string().required('Este campo es obligatorio'),
    formPagaduria: yup.string().required('Este campo es obligatorio'),
    formCampaña : yup.string().required('Este campo es obligatorio'),
  });

  const handleCampaignChange = (value) => {
    const filterDataCampaign = value;
    console.log(filterDataCampaign);
    const dataForm = formData[selectedPagaduria][filterDataCampaign].data;
    const configForm = formData[selectedPagaduria][filterDataCampaign].config;
    setSelectedCampaña(filterDataCampaign);

    if (formData[selectedPagaduria][filterDataCampaign] && dataForm) {
      const initialFormArray = dataForm.map((form) => ({ ...form, value: '' }));
      setFormArray(initialFormArray);
      setBackgroundImage(configForm.backgroundImage);
      setText(configForm.text);
    } else {
      setFormArray([]);
    }
  };

  const handlePagaduriaChange = (value) => {
    setSelectedPagaduria(value);
  };

  const handleFieldChange = (fieldName, fieldValue) => {
    const updatedFormArray = formArray.map((form) =>
      form.title === fieldName ? { ...form, value: fieldValue } : form
    );
    setFormArray(updatedFormArray);
  };

  const isFormValid = () => {
    return !formArray.some((form) => form.required && form.value === '');
  };

  const handleShowData = () => {
    if (!isFormValid()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    const data = {
      campaign: selectedCampaña,
      telefono: telefono,
    };

    formArray.forEach((form) => {
      data[form.title] = form.value;
    });
    data.source = 'hoja 1';

    setSelectedData(data);
    send_data(data);
  };

  return (
    <Card.Body className="p-5">
      <img src={imgCCG} alt="logo" width="45%" className="img-fluid mb-5" />
      <Formik
        validationSchema={schema}
        onSubmit={handleShowData}
        initialValues={{
            formTelefono: '',
            formIdWolkvox: '',
            formPagaduria: '',
            formCampaña: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <FormikForm noValidate onSubmit={handleSubmit}>
            <FormDefault
              values={values}
              handleChange={handleChange}
              touched={touched}
              errors={errors}
              selectedPagaduria={selectedPagaduria}
              setSelectedPagaduria={setSelectedPagaduria}
              handlePagaduriaChange={handlePagaduriaChange}
              formData={formData}
              selectedCampaña={selectedCampaña}
              setSelectedCampaña={setSelectedCampaña}
              handleCampañaChange={handleCampaignChange}
            />
            {formArray.map((form) => (
              <NewForm
                key={form.title}
                type={form.type}
                title={form.title}
                options={form.options}
                value={form.value}
                onValueChange={(fieldValue) =>
                  handleFieldChange(form.title, fieldValue)
                }
              />
            ))}
            <Button type="submit" className="btn mt-5" variant="primary">
              Enviar Datos
            </Button>
          </FormikForm>
        )}
      </Formik>
    </Card.Body>
  );
};

export { FormCard };
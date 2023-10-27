import { useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
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
  IdWolkvox,
  setIdWolkvox,
}) => {
    const [sendtoExcel, setSendtoExcel] = useState(false);
    const [arraySchema, setArraySchema] = useState({
        formTelefono: yup.string().required('Este campo es obligatorio'),
        formIdWolkvox: yup.string().required('Este campo es obligatorio'),
        formPagaduria: yup.string().required('Este campo es obligatorio'),
        formCampaña : yup.string().required('Este campo es obligatorio'),
    });

  const [arrayInitialValues, setArrayInitialValues] = useState({
        formTelefono: '',
        formIdWolkvox: '',
        formPagaduria: '',
        formCampaña: '',
  });
  const schema = yup.object().shape(arraySchema);
  const handleCampaignChange = (value) => {
    const filterDataCampaign = value;
    const dataForm = formData[selectedPagaduria][filterDataCampaign].data;
    const configForm = formData[selectedPagaduria][filterDataCampaign].config;
    setSelectedCampaña(filterDataCampaign);
  
    if (formData[selectedPagaduria][filterDataCampaign] && dataForm) {
      const updatedSchema = { ...arraySchema };
      const updatedInitialValues = { ...arrayInitialValues };
  
      dataForm.forEach((form) => {
        updatedInitialValues[form.title] = '';
        updatedSchema[form.title] = yup.string().required('Este campo es obligatorio');
      });
  
      setArraySchema(updatedSchema); // Actualiza el estado con el nuevo objeto
      setArrayInitialValues(updatedInitialValues); // Actualiza el estado con el nuevo objeto
  
      const initialFormArray = dataForm.map((form) => ({
        ...form,
        value: '',
      }));
  
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
      IdWolkvox: IdWolkvox,
      pagaduria: selectedPagaduria,
    };

    formArray.forEach((form) => {
      data[form.title] = form.value;
    });
    data.source =  selectedPagaduria + '-' + selectedCampaña;

    setSelectedData(data);
    console.log(data);
    send_data(data, setSendtoExcel);
  };

  return (
    !sendtoExcel ? (
      <Card.Body className="p-5">
        <div className="d-flex justify-content-between align-items-center">
          <img src={imgCCG} alt="logo" width="45%" className="img-fluid mb-3" />
          <h1 className='text-center'>
            {selectedCampaña ? selectedPagaduria + '-' + selectedCampaña : 'DiBanka'}
          </h1>
        </div>
        <Formik
          validationSchema={schema}
          onSubmit={handleShowData}
          initialValues={arrayInitialValues}
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
              setTelefono={setTelefono}
              setIdWolkvox={setIdWolkvox}
            />
            {formArray.map((form) => (
              <NewForm
                key={form.title}
                type={form.type}
                title={form.title}
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
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
    ) : (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton count={3} />
    </p>
  </SkeletonTheme>
    )
  );
  
};

export { FormCard };
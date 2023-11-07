import { useEffect, useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FormDefault } from '../FormDefault';
import { Card, Button } from 'react-bootstrap';
import { NewForm } from '../../Components/newForm';
import imgCCG from '../../img/logo-ccgltda-1586537131.png';
import formData from '../../Components/Form/formData';
import { send_data } from '../../send_data';
import Swal from 'sweetalert2'

/**
 * Renders a form card component.
 *
 * @param {Object} selectedCampaña - the currently selected campaign
 * @param {function} setSelectedCampaña - a function to set the selected campaign
 * @param {Object} selectedPagaduria - the currently selected pagaduria
 * @param {function} setSelectedPagaduria - a function to set the selected pagaduria
 * @param {Array} formArray - an array of form data
 * @param {function} setFormArray - a function to set the form data array
 * @param {function} setSelectedData - a function to set the selected data
 * @param {string} backgroundImage - the background image for the card
 * @param {function} setBackgroundImage - a function to set the background image
 * @param {string} text - the text for the card
 * @param {function} setText - a function to set the text
 * @param {string} telefono - the telephone number
 * @param {function} setTelefono - a function to set the telephone number
 * @param {string} IdWolkvox - the Wolkvox ID
 * @param {function} setIdWolkvox - a function to set the Wolkvox ID
 * @return {JSX.Element} - the rendered form card component
 */
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
  const [motivoEspecificoBackup, setMotivoEspecificoBackup] = useState([]);
  const [motivoConsulta, setMotivoConsulta] = useState('');
  const [motivoEspecifico, setMotivoEspecifico] = useState([]);
  const [response, setResponse] = useState('');
  const urlData = JSON.parse(localStorage.getItem('urlParametres'));
  const [modal, setModal] = useState(false)
  const [sendtoExcel, setSendtoExcel] = useState(false);
  const [arraySchema, setArraySchema] = useState({
    formTelefono: yup.string().required('Este campo es obligatorio'),
    formIdWolkvox: yup.string().required('Este campo es obligatorio'),
    // formPagaduria: yup.string().required('Este campo es obligatorio'),
    // formCampaña : yup.string().required('Este campo es obligatorio'),
  });

  const [arrayInitialValues, setArrayInitialValues] = useState({
    formTelefono: '',
    formIdWolkvox: '',
    formPagaduria: '',
    formCampaña: '',
  });
  const schema = yup.object().shape(arraySchema);
  const handleCampaignChange = (value) => {
    if (!formData[selectedPagaduria]) {
      return; 
    }
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

      setArraySchema(updatedSchema); 
      setArrayInitialValues(updatedInitialValues);

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
 useEffect(() => {
   if(selectedCampaña){
    handleCampaignChange(selectedCampaña)
    setMotivoEspecificoBackup(formData[selectedPagaduria][selectedCampaña].data[8].options)
   }
 },[selectedPagaduria])

  /**
   * Handles the change event for the "Pagaduria" input.
   *
   * @param {type} value - The new value selected for the "Pagaduria" input.
   * @return {undefined} This function does not return anything.
   */
  const handlePagaduriaChange = (value) => {

    setSelectedPagaduria(value);

  };

  /**
   * Updates a field in the form array.
   *
   * @param {string} fieldName - The name of the field to be updated.
   * @param {any} fieldValue - The new value for the field.
   * @return {void} This function does not return anything.
   */
  const handleFieldChange = (fieldName, fieldValue) => {
    const updatedFormArray = formArray.map((form) =>
      form.title === fieldName ? { ...form, value: fieldValue } : form
    );
    setFormArray(updatedFormArray);
  };

  /**
   * Checks if the form is valid.
   *
   * @return {boolean} Returns true if the form is valid, otherwise false.
   */
  const isFormValid = () => {
    return !formArray.some((form) => form.required && form.value === '');
  };

  /**
   * Handle the action of showing data.
   *
   * @return {undefined} No return value.
   */
  const handleShowData = () => {
    if (!isFormValid()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    const data = {
      Campaña: selectedCampaña,
      Telefono: telefono,
      IdWolkvox: IdWolkvox,
      Pagaduria: selectedPagaduria,
    };

    formArray.forEach((form) => {
      data[form.title] = form.value;
    });

    if (urlData.cedulaCliente) {
      data['Numero de Identificación'] = urlData.cedulaCliente;
    }

    if(selectedPagaduria === 'Aliados'){
      data['Tipo de Identificación'] = 'NIT';
    }
    if(selectedPagaduria === 'Afiliados'){
      data['Tipo de Identificación'] = 'CEDULA DE CIUDADANIA';
    }
    data.Agente = Cookies.get('userName')
    data.source = selectedPagaduria + '-' + selectedCampaña;
    setSelectedData(data);

    send_data(data, setSendtoExcel, setModal,setResponse);
  };
  if (modal) {
    Swal.fire({
      title: 'Registro Exitoso #'+response,
      text: 'Se ha registrado con exito en la hoja '+selectedPagaduria+'-'+selectedCampaña,
      icon: 'success',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      } 
    });
  }
  return (
    <Card.Body className="p-5">
      <div className="d-flex justify-content-between align-items-center">
        <img src={imgCCG} alt="logo" width="45%" className="img-fluid mb-3" />
        <h1 className='text-center'>
          {selectedCampaña ? selectedPagaduria + '-' + selectedCampaña : 'DiBanka'}
        </h1>
      </div>
      {!sendtoExcel ? (
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
                urlData={urlData}
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
                  urlData={urlData}
                  onValueChange={(fieldValue) => handleFieldChange(form.title, fieldValue)}
                  selectedPagaduria = {selectedPagaduria}
                  motivoConsulta = {motivoConsulta}
                  setMotivoConsulta = {setMotivoConsulta}
                  motivoEspecifico = {motivoEspecifico}
                  setMotivoEspecifico = {setMotivoEspecifico}
                  motivoEspecificoBackup = {motivoEspecificoBackup}
                  setMotivoEspecificoBackup = {setMotivoEspecificoBackup}

                />
              ))}
              <Button 
                onClick={() => handleChange('Tipo de Identificación')('go')} 
                type="submit" 
                className="btn mt-5" 
                variant="primary"
                >
                Enviar Datos
              </Button>
            </FormikForm>
          )}
        </Formik>
      ) : (
        <p className='mb-5 mt-5 '>
          {
            <Skeleton count={10} height={30} />
          }

        </p>
      )}
    </Card.Body>
  );
};

export { FormCard };
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
 * Renderiza un componente de tarjeta de formulario.
 *
 * @param {Object} selectedCampaña - la campaña actualmente seleccionada
 * @param {function} setSelectedCampaña - una función para establecer la campaña seleccionada
 * @param {Object} selectedPagaduria - la pagaduría actualmente seleccionada
 * @param {function} setSelectedPagaduria - una función para establecer la pagaduría seleccionada
 * @param {Array} formArray - un arreglo de datos de formulario
 * @param {function} setFormArray - una función para establecer el arreglo de datos de formulario
 * @param {function} setSelectedData - una función para establecer los datos seleccionados
 * @param {string} backgroundImage - la imagen de fondo para la tarjeta
 * @param {function} setBackgroundImage - una función para establecer la imagen de fondo
 * @param {function} setText - una función para establecer el texto
 * @param {string} telefono - el número de teléfono
 * @param {function} setTelefono - una función para establecer el número de teléfono
 * @param {string} IdWolkvox - el ID de Wolkvox
 * @param {function} setIdWolkvox - una función para establecer el ID de Wolkvox
 * @return {JSX.Element} - el componente de tarjeta de formulario renderizado
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
  /**
   * Maneja el evento de cambio para la campaña.
   *
   * @param {type} value - el nuevo valor de la campaña
   * @return {type} - ninguno
   */
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
   * Maneja el evento de cambio para el input "Pagaduria".
   *
   * @param {type} value - El nuevo valor seleccionado para el input "Pagaduria".
   * @return {undefined} Esta función no retorna nada.
   */
  const handlePagaduriaChange = (value) => {

    setSelectedPagaduria(value);

  };

    /**
   * Actualiza un campo en el arreglo de formularios.
   *
   * @param {string} fieldName - El nombre del campo que se actualizará.
   * @param {any} fieldValue - El nuevo valor para el campo.
   * @return {void} Esta función no retorna nada.
   */

  const handleFieldChange = (fieldName, fieldValue) => {
    const updatedFormArray = formArray.map((form) =>
      form.title === fieldName ? { ...form, value: fieldValue } : form
    );
    setFormArray(updatedFormArray);
  };

    /**
   * Comprueba si el formulario es válido.
   *
   * @return {boolean} Devuelve true si el formulario es válido, de lo contrario, devuelve false.
   */
  const isFormValid = () => {
    return !formArray.some((form) => form.required && form.value === '');
  };
  
   /**
   * Maneja la acción de mostrar los datos.
   *
   * @return {undefined} No retorna ningún valor.
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
    console.log(data)
  };
  // if (!modal) {
    // Swal.mixin({
    //   title: 'Registro Exitoso #'+response,
    //   text: 'Se ha registrado con exito en la hoja '+selectedPagaduria+'-'+selectedCampaña,
    //   icon: 'success',
    //   confirmButtonText: 'Ok',
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     window.location.reload();
    //   } 
    // });
  // }
  
  if(modal){
    const Toast = Swal.mixin({
      toast: true,
      showConfirmButton: true,
      timerProgressBar: false,
    });
    Toast.fire({
      title: 'Registro Exitoso #'+response,
      text: 'Se ha registrado con exito en la hoja '+selectedPagaduria+'-'+selectedCampaña,
      icon: 'success',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://operaciones.contactcentergrupo.com/DiBanka';
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
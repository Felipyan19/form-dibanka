import { Formik, Field, Form as FormikForm } from 'formik';
import * as yup from 'yup';
import { Row,  Card, Form, Button } from 'react-bootstrap';
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
    setText
}) => {


    const schema = yup.object().shape({
        telefono: yup.string().required('Este campo es obligatorio'),
        // Agrega más validaciones para otros campos según tus necesidades
    });

    const handleCampañaChange = (e) => {
        const filterdataCampaña = e.target.value;
        const dataform = formData[selectedPagaduria][filterdataCampaña].data;
        const configform = formData[selectedPagaduria][filterdataCampaña].config;
        setSelectedCampaña(filterdataCampaña);

        if (formData[selectedPagaduria][filterdataCampaña] && dataform) {
            const initialFormArray = dataform.map((form) => ({ ...form, value: '' }));
            setFormArray(initialFormArray);
            setBackgroundImage(configform.backgroundImage);
            setText(configform.text);
        } else {
            setFormArray([]);
        }
    };

    const handlePagaduriaChange = (e) => {
        const filterdata = e.target.value;
        setSelectedPagaduria(filterdata);
    };

    const handleFieldChange = (fieldName, fieldValue) => {
        const updatedFormArray = formArray.map((form) =>
            form.title === fieldName ? { ...form, value: fieldValue } : form
        );
        setFormArray(updatedFormArray);
    };

    const isFormValid = () => {
        // Verifica si todos los campos requeridos tienen un valor
        return !formArray.some((form) => form.required && form.value === '');
    };

    const handleShowData = () => {
        if (!isFormValid()) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        const data = {
            Campaña: selectedCampaña,
            Telefono: telefono,
        };

        formArray.forEach((form) => {
            data[form.title] = form.value;
        });
        data.source = 'hoja 1';
        console.log(data);
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
                                telefono: '',
                            }}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <FormikForm noValidate onSubmit={handleSubmit}>
                                    <Form.Group as={Row} className="mb-3" controlId="formTelefono">
                                        <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                            Telefono
                                        </Form.Label>
                                        <Field
                                            name="telefono"
                                            type="text"
                                            placeholder="Anonymous"
                                            value={values.telefono}
                                            onChange={handleChange}
                                        />
                                        {touched.telefono && errors.telefono ? (
                                            <div className="text-danger">{errors.telefono}</div>
                                        ) : null}
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formWolkvox">
                                        <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                            ID Wolkvox
                                        </Form.Label>
                                        <Field
                                            name="idWolkvox"
                                            type="text"
                                            placeholder="Anonymous"
                                            value={values.idWolkvox}
                                            onChange={handleChange}
                                        />
                                        {touched.idWolkvox && errors.idWolkvox ? (
                                            <div className="text-danger">{errors.idWolkvox}</div>
                                        ) : null}
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formCampaña">
                                        <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                            Pagaduria
                                        </Form.Label>
                                        <Form.Select value={selectedPagaduria} onChange={handlePagaduriaChange}>
                                            <option value="">Select a pagaduria</option>
                                            {Object.keys(formData).map((Pagaduria) => (
                                                <option key={Pagaduria} value={Pagaduria}>
                                                    {Pagaduria}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formCampaña">
                                        <Form.Label column style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                            Campaña
                                        </Form.Label>
                                        <Form.Select value={selectedCampaña} onChange={handleCampañaChange}>
                                            <option value="">Select a campaign</option>
                                            {Object.keys(formData[selectedPagaduria] || {}).map((campaña) => (
                                                <option key={campaña} value={campaña}>
                                                    {campaña}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
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
}

export { FormCard };
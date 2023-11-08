import React, { useState } from 'react';
import { Col } from 'react-bootstrap'
import { Layout } from '../../Components/Layout';
import { FormLayout } from '../../Components/FormLayout';
import { FormCard } from '../../Components/Form';
import { MyModal } from '../../Components/Modal';
import imgForm from '../../img/plataforma-de-beneficios-scaled.jpg';
import './style.css';

/**
 * Renderiza el componente Home.
 *
 * @return {JSX.Element} El componente Home renderizado.
 */

function Home({urlParametres}) {

    /**
     * Estado para el valor de la campaña seleccionada.
     * @type {string}
     */
    const [selectedCampaña, setSelectedCampaña] = useState('');

    /**
     * Estado para la pagaduría seleccionada.
     * @type {string}
     */
    const [selectedPagaduria, setSelectedPagaduria] = useState('');

    /**
     * Estado para el arreglo de formularios.
     * @type {Array}
     */
    const [formArray, setFormArray] = useState([]);

    /**
     * Estado para los datos seleccionados.
     * @type {Object}
     */
    const [selectedData, setSelectedData] = useState({});

    /**
     * Estado para la imagen de fondo.
     * @type {string}
     */
    const [backgroundImage, setBackgroundImage] = useState(imgForm);

    /**
     * Estado para el texto.
     * @type {Array}
     */
    const [text, setText] = useState([]);

    /**
     * Estado para el número de teléfono.
     * @type {string}
     */
    const [telefono, setTelefono] = useState('');

    /**
     * Estado para el ID de Wolkvox.
     * @type {string}
     */
    const [IdWolkvox, setIdWolkvox] = useState('');

    /**
     * Datos de la URL almacenados en el almacenamiento local.
     * @type {Object}
     */
    const urlData = JSON.parse(localStorage.getItem('urlParametres'));

    return (
        <Layout>
            <FormLayout>
                <Col lg={7} className="d-flex">
                    <FormCard 
                        selectedCampaña={selectedCampaña}
                        setSelectedCampaña={setSelectedCampaña}
                        selectedPagaduria={selectedPagaduria}
                        setSelectedPagaduria={setSelectedPagaduria}
                        formArray={formArray}
                        setFormArray={setFormArray}
                        setSelectedData={setSelectedData}
                        backgroundImage={backgroundImage}
                        setBackgroundImage={setBackgroundImage}
                        text={text}
                        setText={setText}
                        telefono={telefono}
                        setTelefono={setTelefono}
                        IdWolkvox={IdWolkvox}
                        setIdWolkvox={setIdWolkvox}
                        urlParametres={urlData}
                    />
                </Col>
                <Col md={6} lg={5} className="text-center-col p-5">
                    <div className="container-card">
                        <div className="container-img mb-5">
                            <img src={backgroundImage} alt="login form background" className="img-fluid" />
                        </div>
                        {text &&
                            text.map((parrafo, index) => (
                                <p
                                    key={index}
                                    className={`parrafo-${index + 1} mt-5`}
                                    dangerouslySetInnerHTML={{ __html: parrafo }}
                                ></p>
                            ))}
                    </div>
                </Col>
                <MyModal selectedData={selectedData} />
            </FormLayout>
        </Layout>
    );
}

export { Home };
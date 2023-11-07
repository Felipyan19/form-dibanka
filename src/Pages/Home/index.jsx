import React, { useState } from 'react';
import { Col } from 'react-bootstrap'
import { Layout } from '../../Components/Layout';
import { FormLayout } from '../../Components/FormLayout';
import { FormCard } from '../../Components/Form';
import { MyModal } from '../../Components/Modal';
import imgForm from '../../img/plataforma-de-beneficios-scaled.jpg';
import './style.css';


/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
function Home() {

    const [selectedCampaña, setSelectedCampaña] = useState('');
    const [selectedPagaduria, setSelectedPagaduria] = useState('');
    const [formArray, setFormArray] = useState([]);
    const [selectedData, setSelectedData] = useState({});
    const [backgroundImage, setBackgroundImage] = useState(imgForm);
    const [text, setText] = useState([]);
    const [telefono, setTelefono] = useState('');
    const [IdWolkvox, setIdWolkvox] = useState('');
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

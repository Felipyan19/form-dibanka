import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProtectedRoute } from '../../Utils/ProtectedRoute';
import { NotFound } from '../NotFound'; // Importa NotFound correctamente
import { SignIn } from '../SignIn';
import { NavbarComponent } from '../../Components/NavbarComponent';
import { Home } from '../Home';
import './App.css';

const AppRoutes = (
  { 
    setAceptedLogin, 
    aceptedLogin, 
    username, 
    setUsername, 
    urlParametres, 
    setUrlParametres 
  }) => { 
    
    let routes = useRoutes([
      { path: '/Home', 
      element: (
        <ProtectedRoute canActivate={aceptedLogin}>
          <Home urlParametres={urlParametres} />
        </ProtectedRoute>
      )
    },    
    { path: '/', element: 
    <SignIn
       login={setAceptedLogin} 
       username={username}
       setUsername={setUsername}
       setUrlParametres={setUrlParametres}
       /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
}

const App = () => {
  const [aceptedLogin, setAceptedLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [loginUrl, setLoginUrl] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const ani = searchParams.get('ani');
    const dnis = searchParams.get('dnis');
    const id_customer = searchParams.get('id_customer');
    const id_call = searchParams.get('id_call');
    const webrtc = searchParams.get('webrtc');
    const mensaje = searchParams.get('mensaje');
    const cedulaCliente = searchParams.get('cedula_cliente');

    const urlParams = {
      ani: ani,
      dnis: dnis,
      id_customer: id_customer,
      id_call: id_call,
      webrtc: webrtc,
      mensaje: mensaje,
      cedulaCliente: cedulaCliente
    };

    localStorage.setItem('urlParametres', JSON.stringify(urlParams));
    setLoginUrl(true);
  }, []);

  return (
    <BrowserRouter>
     {aceptedLogin ? <NavbarComponent 
        setAceptedLogin={setAceptedLogin}
        username={username}
         /> : null}
      {
        loginUrl ? 
      <AppRoutes 
        setAceptedLogin={setAceptedLogin} 
        aceptedLogin={aceptedLogin} 
        username={username}
        setUsername={setUsername} 
        /> : null 
      }
    </BrowserRouter>
  );
}

export default App;

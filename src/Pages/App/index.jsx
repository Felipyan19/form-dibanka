import { useRoutes, BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProtectedRoute } from '../../Utils/ProtectedRoute';
import { NotFound } from '../NotFound'; // Importa NotFound correctamente
import ExternalPage from './ExternalPage';
import { SignIn } from '../SignIn';
import { NavbarComponent } from '../../Components/NavbarComponent';
import { Home } from '../Home';
import './App.css';

/**
 * Genera las rutas para la aplicación.
 *
 * @param {function} setAceptedLogin - función para establecer el estado de inicio de sesión aceptado
 * @param {boolean} aceptedLogin - el estado de inicio de sesión aceptado
 * @param {string} username - el nombre de usuario
 * @param {function} setUsername - función para establecer el nombre de usuario
 * @param {object} urlParametres - los parámetros de la URL
 * @param {function} setUrlParametres - función para establecer los parámetros de la URL
 * @return {object} las rutas generadas
 */

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
      { path: '/DiBanka/Home', 
      element: (
        <ProtectedRoute canActivate={aceptedLogin}>
          <Home urlParametres={urlParametres} />
        </ProtectedRoute>
      )
    },    
    { path: '/DiBanka', element: 
    <SignIn
       login={setAceptedLogin} 
       username={username}
       setUsername={setUsername}
       setUrlParametres={setUrlParametres}
       /> },
     { path: '/DiBanka/Docs', element: <ExternalPage /> },
     { path: '/DiBanka/*', element: <NotFound /> },
  ]);
  return routes;
}

/**
 * Genera el comentario de función para el cuerpo de la función dada.
 *
 * @return {JSX.Element} El elemento JSX renderizado.
 */

const App = () => {
  const [aceptedLogin, setAceptedLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [loginUrl, setLoginUrl] = useState(false);

  /**
       * Recupera los parámetros de la URL desde la URL actual de la ventana utilizando la API `URLSearchParams`,
       * almacena los parámetros en el almacenamiento local como una cadena JSON y establece la variable de estado `loginUrl` en `true`.
       * 
       * @returns {void}
       */

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const ani = searchParams.get('ani');
    const dnis = searchParams.get('dnis');
    const id_customer = searchParams.get('id_customer');
    const id_call = searchParams.get('id_call');
    const webrtc = searchParams.get('webrtc');
    let mensaje = searchParams.get('mensaje');
    const cedulaCliente = searchParams.get('cedula_cliente');

    const urlParams = {
      ani: ani,
      dnis: dnis,
      id_customer: id_customer,
      id_call: id_call,
      webrtc: webrtc,
      mensaje: mensaje || null,
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
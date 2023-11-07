import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProtectedRoute } from '../../Utils/ProtectedRoute';
import { NotFound } from '../NotFound'; // Importa NotFound correctamente
import { SignIn } from '../SignIn';
import { NavbarComponent } from '../../Components/NavbarComponent';
import { Home } from '../Home';
import './App.css';

/**
 * Generates the routes for the App.
 *
 * @param {function} setAceptedLogin - function to set the accepted login status
 * @param {boolean} aceptedLogin - the accepted login status
 * @param {string} username - the username
 * @param {function} setUsername - function to set the username
 * @param {object} urlParametres - the URL parameters
 * @param {function} setUrlParametres - function to set the URL parameters
 * @return {object} the generated routes
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

/**
 * Generate the function comment for the given function body.
 *
 * @return {JSX.Element} The rendered JSX element.
 */
const App = () => {
  const [aceptedLogin, setAceptedLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [loginUrl, setLoginUrl] = useState(false);

  useEffect(() => {
      /**
       * Retrieves URL parameters from the current window's URL using the `URLSearchParams` API,
       * stores the parameters in the local storage as a JSON string, and sets the `loginUrl` state variable to `true`.
       * 
       * @returns {void}
       */
      const arrow_function = () => {
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
      };

      arrow_function();
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

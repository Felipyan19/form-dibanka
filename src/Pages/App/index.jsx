import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { ProtectedRoute } from '../../Utils/ProtectedRoute';
import { NotFound } from '../NotFound'; // Importa NotFound correctamente
import { SignIn } from '../SignIn';
import { NavbarComponent } from '../../Components/NavbarComponent';
import { Home } from '../Home';
import './App.css';

const AppRoutes = ({ setAceptedLogin, aceptedLogin, username, setUsername }) => { 
  
  let routes = useRoutes([
    { path: '/Home', element: <ProtectedRoute canActivate={aceptedLogin}><Home /></ProtectedRoute> },
    { path: '/', element: 
    <SignIn
       login={setAceptedLogin} 
       username={username}
       setUsername={setUsername}
       /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
}

const App = () => {
  const [aceptedLogin, setAceptedLogin] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <BrowserRouter>
     {aceptedLogin ? <NavbarComponent 
        setAceptedLogin={setAceptedLogin}
        username={username}
         /> : null}
      <AppRoutes 
        setAceptedLogin={setAceptedLogin} 
        aceptedLogin={aceptedLogin} 
        username={username}
        setUsername={setUsername}  
        /> 
    </BrowserRouter>
  );
}

export default App;

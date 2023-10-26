import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { ProtectedRoute } from '../../Utils/ProtectedRoute';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { NavbarComponent } from '../../Components/NavbarComponent';
import { Home } from '../Home';
import './App.css';

const AppRoutes = () => {
  const [aceptedLogin, setAceptedLogin] = useState(false);
  
  let routes = useRoutes([
    { path: '/Home', element: <ProtectedRoute canActivate={aceptedLogin}><Home /></ProtectedRoute> },
    { path: '/', element: <SignIn login={setAceptedLogin} /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
        <NavbarComponent />
        <AppRoutes /> 
    </BrowserRouter>
  );
};

export default App;
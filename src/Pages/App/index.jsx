import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../Utils/ProtectedRoute';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { NavbarComponent } from '../../Components/NavbarComponent';
import { Home } from '../Home';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/Home', element: <ProtectedRoute canActivate={true}><Home /></ProtectedRoute> },
    { path: '/', element: <SignIn /> },
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
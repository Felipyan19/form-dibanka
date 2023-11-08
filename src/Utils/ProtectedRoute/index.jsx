import { Navigate } from 'react-router-dom';

/**
 * Ruta protegida que redirige a otra ruta si el usuario no puede acceder a ella.
 *
 * @param {object} canActivate - Un valor booleano que indica si el usuario puede acceder a la ruta.
 * @param {string} redirectPath - La ruta a la que se redirigirá si el usuario no puede acceder. El valor predeterminado es '/'.
 * @param {ReactNode} children - Los componentes hijos que se renderizarán si el usuario puede acceder a la ruta.
 * @return {ReactNode|null} Los componentes hijos renderizados si el usuario puede acceder a la ruta, de lo contrario, nulo.
 */
const ProtectedRoute = ({ canActivate, redirectPath = '/', children }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return canActivate ? children : null;
};

export { ProtectedRoute };


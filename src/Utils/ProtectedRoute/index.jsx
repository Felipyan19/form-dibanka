import { Navigate } from 'react-router-dom';

/**
 * Generate the function comment for the given function body.
 *
 * @param {object} canActivate - A boolean value indicating whether the user can access the route.
 * @param {string} redirectPath - The path to redirect to if the user cannot access the route. Default is '/'.
 * @param {ReactNode} children - The children components to render if the user can access the route.
 * @return {ReactNode|null} The rendered children components if the user can access the route, otherwise null.
 */
const ProtectedRoute = ({ canActivate, redirectPath = '/', children }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return canActivate ? children : null;
};

export { ProtectedRoute };

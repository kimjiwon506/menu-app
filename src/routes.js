import { Navigate, useRoutes } from "react-router-dom";
import CustomerMenu from './pages/CustomerMenu';
import Home from './pages/Home';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/customer',
      element: <CustomerMenu />,
    },
    {
      path: '*',
      element: <Navigate to={'/'} replace />,
    },
  ]);
};

export default Routes;

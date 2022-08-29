import { Navigate, useRoutes } from "react-router-dom";
import Home from './pages/Home';
import CustomerMenu from './pages/CustomerMenu';
import NotFound from "./pages/NotFound";

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
      // element: <Navigate to={'/'} replace />,
      element: <NotFound />
    },
  ]);
};

export default Routes;

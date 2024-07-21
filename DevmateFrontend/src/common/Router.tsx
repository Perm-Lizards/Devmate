import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SignIn from '../components/sign-in/SignIn';
import SignUp from '../components/sign-up/SignUp';
import NotFound from '../components/not-found/NotFound';
// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

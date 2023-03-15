import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import DetailPage from '../Pages/Detail';
import ListPage from '../Pages/List';
import MainPage from '../Pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/:owner/:repository/:page/:sort/:perPage',
        element: <ListPage />,
      },
      {
        path: '/:owner/:repository/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;

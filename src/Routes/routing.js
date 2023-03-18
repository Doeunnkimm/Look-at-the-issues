import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Layout'
import DetailPage from '../Pages/Detail'
import ListPage from '../Pages/List'
import MainPage from '../Pages/Main'

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
				path: '/:owner/:repository/:page/:sort/:per_page',
				element: <ListPage />,
			},
			{
				path: '/:owner/:repository/:number',
				element: <DetailPage />,
			},
		],
	},
])

export default router

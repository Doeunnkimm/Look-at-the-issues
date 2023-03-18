import { Global, ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import router from './Routes/routing'
import { store } from './Stores'
import globalStyles from './Styles/global'
import theme from './Styles/theme'

function App() {
	// get요청 예시
	// useEffect(() => {
	//   const getData = async () => {
	//     try {
	//       const res = await IssuesAPI.getData('angular', 'angular-cli', {
	//         sort: 'comments',
	//       });
	//       console.log(res);
	//     } catch (err) {
	//       console.log(err);
	//     }
	//   };

	//   getData();
	// });
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyles} />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	)
}

export default App

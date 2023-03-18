import axios from 'axios'

export const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
	},
})

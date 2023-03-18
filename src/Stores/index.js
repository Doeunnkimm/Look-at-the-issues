import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { anIssueSlice } from './issue'
import { issueSlice } from './issues'
import { searchSlice } from './search'
export const store = configureStore({
	reducer: {
		search: searchSlice.reducer,
		issue: issueSlice.reducer,
		anIssue: anIssueSlice.reducer,
	},
	devTools: process.env.NODE_ENV === 'development',
	middleware: defaultMiddleware => {
		if (process.env.NODE_ENV === 'development') {
			return [...defaultMiddleware(), logger]
		}
		return defaultMiddleware()
	},
})

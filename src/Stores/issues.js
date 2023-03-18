import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IssuesAPI } from '../Apis/issues'

const initialState = {
	issues: [],
	getIssuesState: {
		loading: false,
		done: false,
		err: null,
	},
}

export const getIssues = createAsyncThunk(
	'issue/getIssues',
	async ({ owner, repository, params }) => {
		const res = await IssuesAPI.getData(owner, repository, params)
		return res.data
	},
)

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		builder.addCase(getIssues.pending, state => {
			state.getIssuesState.loading = true
		})

		builder.addCase(getIssues.fulfilled, (state, action) => {
			state.issues = action.payload
			state.getIssuesState.loading = false
			state.getIssuesState.done = true
			state.getIssuesState.err = null
		})

		builder.addCase(getIssues.rejected, (state, action) => {
			state.getIssuesState.loading = false
			state.getIssuesState.done = true
			state.getIssuesState.err = action.payload
		})
	},
})

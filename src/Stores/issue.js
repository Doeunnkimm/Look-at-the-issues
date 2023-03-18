import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IssuesAPI } from '../Apis/issues'

const initialState = {
	issue: {},
	getAnIssueState: {
		loading: false,
		done: false,
		err: null,
	},
}

export const getAnIssue = createAsyncThunk(
	'issue/getAnIssue',
	async ({ owner, repository, number }) => {
		const res = await IssuesAPI.getAnIssue(owner, repository, number)
		return res.data
	},
)

export const anIssueSlice = createSlice({
	name: 'anIssue',
	initialState,
	extraReducers: builder => {
		builder.addCase(getAnIssue.pending, state => {
			state.getAnIssueState.loading = true
		})
		builder.addCase(getAnIssue.fulfilled, (state, action) => {
			state.issue = action.payload
			state.getAnIssueState.loading = false
			state.getAnIssueState.done = true
			state.getAnIssueState.err = null
		})
		builder.addCase(getAnIssue.rejected, (state, action) => {
			state.getAnIssueState.loading = false
			state.getAnIssueState.done = true
			state.getAnIssueState.err = action.payload
		})
	},
})

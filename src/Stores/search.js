import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	text: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		editSearchText: (state, action) => {
			state.text = action.payload
		},
	},
})

export const searchActions = searchSlice.actions

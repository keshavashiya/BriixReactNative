import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	stateLoading: false,
	stateSuccess: null,
	stateError: null,
};

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		state(state) {
			state.stateLoading = true;
		},
		// login(state) {
		// 	state.getLoading = true;
		// },
		stateSuccess(state, action) {
			state.stateLoading = false;
			state.stateError = null;
			state.stateSuccess = action.payload;
		},
		stateError(state, action) {
			state.stateLoading = false;
			state.stateError = action;
			state.stateSuccess = null;
		},
		reset(state) {
			state.stateLoading = false;
			state.stateError = null;
			state.stateSuccess = null;
		},
	},
	extraReducers: {},
});

export const { name, reducer, actions } = slice;
// export default slice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { fetchComments } from './commentsService';
import { IComment } from './interfaces';

type ICommentsState = {
	commentsList: IComment[];
	loading: boolean;
	error: string | null;
};

const initialState: ICommentsState = {
	commentsList: [],
	loading: false,
	error: null,
};

const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchComments.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchComments.fulfilled, (state, action) => {
				state.loading = false;
				state.commentsList = action.payload;
			})
		}
});

export default commentsSlice.reducer;

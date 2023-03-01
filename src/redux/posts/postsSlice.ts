import { createSlice } from '@reduxjs/toolkit';

import { IPost } from './interfaces';
import { deletePostById, fetchPosts } from './postsService';

type IPostsState = {
	list: IPost[];
	postById: IPost;
	loading: boolean;
	error: string | null;
};

const initialState: IPostsState = {
	list: [],
	postById: {} as IPost,
	loading: false,
	error: null,
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.loading = false;
				state.list = action.payload;
			})
			
			.addCase(deletePostById.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deletePostById.fulfilled, (state, action) => {
				state.loading = false;
				state.postById = action.payload;
			})
		}
});

export default postsSlice.reducer;

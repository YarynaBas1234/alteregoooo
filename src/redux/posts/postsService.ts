import { createAsyncThunk } from '@reduxjs/toolkit';

import { IPost } from './interfaces';
import { deletePostApi, fetchPostsApi } from './postsAPI';

export const fetchPosts = createAsyncThunk<IPost[], undefined, { rejectValue: string }>(
	'posts/fetchPosts',
	async function () {
		const response = await fetchPostsApi();
		
		if (response.status === 200) return response.data;
	}
);

export const deletePostById = createAsyncThunk<IPost, number, { rejectValue: string }>(
	'posts/deletePostById',
	async function (id) {
		const response = await deletePostApi(id);
		
		if (response.status === 200) return response.data;
	}
);

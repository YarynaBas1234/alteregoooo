import { createAsyncThunk } from '@reduxjs/toolkit';

import { IComment } from './interfaces';
import { fetchCommentsApi } from './commentsAPI';

export const fetchComments = createAsyncThunk<IComment[], undefined, { rejectValue: string }>(
	'comments/fetchComments',
	async function () {
		const response = await fetchCommentsApi();
		
		if (response.status === 200) return response.data;
	}
);

import axios from 'axios';

import { API_URL } from 'src/constants';
import { _handleSuccessResponse, _handleFailedRequest } from 'src/helpers';

export const fetchPostsApi = async () => {
	return await axios(`${API_URL}/posts`).then(_handleSuccessResponse).catch(_handleFailedRequest);
};

export const deletePostApi = async (id: number) => {
	return await axios(`${API_URL}/posts/${id}`, { method: 'DELETE' }).then(_handleSuccessResponse).catch(_handleFailedRequest);
};

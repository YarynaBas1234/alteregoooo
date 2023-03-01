import axios from 'axios';
import { API_URL } from 'src/constants';
import { _handleFailedRequest, _handleSuccessResponse } from 'src/helpers';

export const fetchCommentsApi = async () => {
	return await axios(`${API_URL}/comments`).then(_handleSuccessResponse).catch(_handleFailedRequest);
};

import { toast } from 'react-toastify';

import { IDefaultAPIResponse } from 'src/interfaces';

const _showError = (str: string) => {
	toast.error(`Error: ${str}`);
};

export const _handleSuccessResponse = (res: IDefaultAPIResponse): IDefaultAPIResponse => {
	return {
		data: res.data,
		status: res.status,
	};
};

export const _handleFailedRequest = ({ response }: { response: IDefaultAPIResponse }) => {
	if (response?.data) {
		if (typeof response.data !== 'object') {
			_showError(response.data);
		} else {
			_showError('Something went wrong');
		}

		return { data: response.data, status: response.status };
	}
	return { data: null, status: 400 };
};

const mockApiServiceCreator = () => {
	return (params: any) =>
		new Promise<IDefaultAPIResponse>((resolve, reject) => {
			setTimeout(() => {
				if (params.error) {
					return reject(_handleFailedRequest({ response: { status: 404, data: params.error } }));
				}
				return resolve(_handleSuccessResponse({ status: 200, data: params }));
			}, 500);
		});
};

export const mockApiService = mockApiServiceCreator();

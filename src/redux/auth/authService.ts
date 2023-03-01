import { createAsyncThunk } from '@reduxjs/toolkit';

import { userData } from 'src/constants';
import { mockApiService } from 'src/helpers';
import { localStorageService } from 'src/services';
import { ILoginActionValues } from './interfaces';

export const loginUser = createAsyncThunk<any, ILoginActionValues, { rejectValue: string }
>('auth/loginUser', async function ({ username, password }: ILoginActionValues, { rejectWithValue }) {
	const validUser = userData.password === password && userData.username === username;

	if (validUser) {
		const { data } = await mockApiService(validUser);
		localStorageService.addToLocalStorage('isLoggedIn', data);

		return { isLoggedIn: data };
	} else {
		const { data } = await mockApiService({ error: 'Username or password entered incorrectly' });
		
		return rejectWithValue(data);
	}
});

export const getUserData = createAsyncThunk<any, undefined, { rejectValue: string }>(
	'auth/getUserData',
	async function () {
		const { data } = await mockApiService(userData);

		return { userData: data };
	}
);

export const logoutUser = createAsyncThunk<any, undefined, { rejectValue: string }>(
	'auth/logoutUser',
	async function () {
		localStorageService.deleteFromLocalStorage('isLoggedIn');

		return { isLoggedIn: null };
	}
);

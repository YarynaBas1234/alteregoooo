import { createSlice } from '@reduxjs/toolkit';

import { localStorageService } from 'src/services';

import { getUserData, loginUser, logoutUser } from './authService';
import { IAuthState, IUserData } from './interfaces';

const initialState: IAuthState = {
    isLoggedIn: Boolean(localStorageService.getFromLocalStorage('isLoggedIn')),
    logedUserData: {} as IUserData,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.isLoggedIn = action.payload.isLoggedIn;
			})
			
			.addCase(getUserData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
            .addCase(getUserData.fulfilled, (state, action) => {
				state.loading = false;
				state.logedUserData = action.payload.userData;
			})

            .addCase(logoutUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
            .addCase(logoutUser.fulfilled, (state, action) => {
				state.loading = false;
                state.isLoggedIn = action.payload.isLoggedIn;
			})
		}
});

export default authSlice.reducer;

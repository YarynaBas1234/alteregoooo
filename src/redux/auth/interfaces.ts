export interface ILoginActionValues {
	username: string;
	password: string;
}

export interface IUserData {
	username: null | string;
	password: null | string;
	id: string;
	name: string;
    phone: string;
    position: string;
    email: string;
}

export type IAuthState = {
    isLoggedIn: boolean | null;
    logedUserData: IUserData;
	loading: boolean;
	error: string | null;
};

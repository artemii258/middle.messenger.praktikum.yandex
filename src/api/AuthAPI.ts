import HTTPTransport from '../services/Requests';

export interface ISigninData {
	headers: Record<string, any>;
	data: {
		login: string;
		password: string;
	};
}
export interface IPassword {
	headers: Record<string, any>;
	data: IPasswordBody;
}
export interface IPasswordBody {
	oldPassword: string;
	newPassword: string;
}

export interface ISignupData {
	headers: Record<string, any>;
	data: ISignupBody;
}

export interface ISignupBody {
	first_name: string;
	second_name: string;
	login: string;
	email: string;
	password: string;
	phone: string;
}

export interface IUser {
	headers?: Record<string, any>;
	data: IUserBody;
}
export interface IUserBody {
	id?: number;
	first_name: string;
	second_name: string;
	display_name: string;
	login: string;
	email: string;
	password?: string;
	phone: string;
	avatar?: string;
}

export class AuthAPI {
	request: HTTPTransport;
	constructor() {
		this.request = new HTTPTransport();
	}

	signin(data: ISigninData) {
		return this.request.post('auth/signin', data);
	}

	signup(data: ISignupData) {
		return this.request.post('auth/signup', data);
	}

	read() {
		return this.request.get('auth/user');
	}

	changeDate(data: IUser) {
		return this.request.put('user/profile', data);
	}
	changePassword(data: IPassword) {
		return this.request.put('user/profile/password', data);
	}
	changeAvatar(data: any) {
		return this.request.put('user/profile/avatar', data);
	}

	logout() {
		return this.request.post('auth/logout', { headers: { accept: 'application/json' } });
	}
}

export default new AuthAPI();

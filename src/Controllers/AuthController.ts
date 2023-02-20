import API, { AuthAPI, ISigninData, ISignupData, IUserBody, IPasswordBody } from '../api/AuthAPI';
import store from '../store/Store';
import ActivationRoute from '../utils/Routes';
import router from '../utils/Routes/Router';

export class AuthController {
	private readonly api: AuthAPI;

	constructor() {
		this.api = API;
	}

	async signin(data: ISigninData) {
		await this.api
			.signin(data)
			.then(() => {
				this.fetchUser();
			})
			.then(() => {
				new ActivationRoute().activation();
			})
			.then(() => router.go('/messenger'))
			.catch((err) => console.log(err));
	}

	async signup(data: ISignupData) {
		await this.api
			.signup(data)
			.then(() => {
				this.fetchUser();
			})
			.then(() => new ActivationRoute().activation())
			.then(() => router.go('/messenger'))
			.catch((err) => console.log(err));
	}
	async changeDate(data: IUserBody) {
		this.api
			.changeDate({
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json'
				},
				data
			})
			.then((res) => {
				store.set('user', res);
			})
			.catch((err) => console.log(err));
	}
	async changePassword(data: IPasswordBody) {
		this.api
			.changePassword({
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json'
				},
				data
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}
	async changeAvatar(data: any) {
		this.api
			.changeAvatar({
				data
			})
			.then((res) => store.set('user', res))
			.then(() => {
				(document.querySelector('#popup__avatar') as HTMLElement).style.display = 'none';
			})
			.catch((err) => console.log(err));
	}

	async fetchUser() {
		const user = await this.api.read();
		store.set('user', user);
	}

	async logout() {
		try {
			await this.api.logout();
			new ActivationRoute().activationForNonRegistered();
			router.go('/');
		} catch (e: any) {
			console.error(e.message);
		}
	}
}

export const AuthentificationController = new AuthController();

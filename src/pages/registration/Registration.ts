import Block from '../../utils/Block';
import { Button } from '../../blocks/libs/button/Button';
import { Input } from '../../blocks/libs/input/Input';
import { Links } from '../../blocks/libs/links/Links';
import { AuthentificationController } from '../../Controllers/AuthController';
import { ISignupBody } from '../../api/AuthAPI';
import template from './registration.pug';

interface IRegistration {
	classes?: string;
	events: {
		submit: (e: Event) => void;
	};
}

export default class Registration extends Block {
	constructor(props: IRegistration) {
		super({ ...props });
	}
	init() {
		this.children.email = new Input({
			name: 'email',
			classes: 'registration',
			type: 'email'
		});
		this.children.login = new Input({
			name: 'login',
			classes: 'registration',
			type: 'text'
		});
		this.children.first_name = new Input({
			name: 'first_name',
			classes: 'registration',
			type: 'first_name'
		});
		this.children.second_name = new Input({
			name: 'second_name',
			classes: 'registration',
			type: 'text'
		});
		this.children.phone = new Input({
			name: 'phone',
			classes: 'registration',
			type: 'tel'
		});
		this.children.password = new Input({
			name: 'password',
			classes: 'registration',
			type: 'password'
		});
		this.children.passwordReplay = new Input({
			name: 'passwordRepeat',
			classes: 'registration',
			type: 'password'
		});
		this.children.button = new Button({
			label: 'Зарегистрироваться',
			classes: 'registration',
			type: 'submit'
		});
		this.children.link = new Links({
			text: 'Войти',
			classes: 'registration',
			href: '/'
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const onSubmitRegistration = (e: Event) => {
	e.preventDefault();

	const form: HTMLFormElement | null = document.querySelector('.registration__form');
	const inputs = form?.querySelectorAll('input');
	if (inputs) {
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].classList.contains('validation') || inputs[i].value === '') {
				return;
			}
		}
	}
	if (form) {
		const formData: FormData = new FormData(form);
		const data = {
			email: formData.get('email'),
			login: formData.get('login'),
			first_name: formData.get('first_name'),
			second_name: formData.get('second_name'),
			phone: formData.get('phone'),
			password: formData.get('password')
		};
		AuthentificationController.signup({
			headers: { 'Content-Type': 'application/json' },
			data: data as ISignupBody
		});
	}
};

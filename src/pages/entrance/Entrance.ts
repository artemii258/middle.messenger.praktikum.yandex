import Block from '../../utils/Block';
import { Button } from '../../blocks/libs/button/Button';
import { Input } from '../../blocks/libs/input/Input';
import { Links } from '../../blocks/libs/links/Links';
import template from './entrance.pug';
import { AuthentificationController } from '../../Controllers/AuthController';

export default class Entrance extends Block {
	constructor() {
		super({});
	}
	init() {
		this.children.login = new Input({
			name: 'login',
			classes: 'entrance',
			type: 'text'
		});
		this.children.password = new Input({
			name: 'password',
			classes: 'entrance',
			type: 'password'
		});
		this.children.button = new Button({
			label: 'Авторизоваться',
			classes: 'entrance',
			type: 'submit',
			events: {
				click: this.onSubmit
			}
		});
		this.children.link = new Links({
			text: 'Нет аккаунта?',
			classes: 'entrance',
			href: '/sign-up'
		});
	}
	onSubmit(e: Event) {
		const form: HTMLFormElement | null = document.querySelector('.entrance__form');
		const inputs = form?.querySelectorAll('input');
		e.preventDefault();
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
				login: formData.get('login')! as string,
				password: formData.get('password')! as string
			};
			AuthentificationController.signin({
				data,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

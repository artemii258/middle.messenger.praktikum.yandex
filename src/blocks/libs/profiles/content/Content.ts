import { AuthentificationController } from '../../../../Controllers/AuthController';
import { withStore } from '../../../../store/Store';
import Block from '../../../../utils/Block';
import { Button } from '../../button/Button';
import Profiles from '../Profiles';
import template from './_content.pug';

export interface IContent {
	trigger: string;
	events?: {
		submit: (e: Event) => void;
	};
}
export default class Content extends Block<IContent> {
	constructor(props: IContent) {
		super({ ...props });
	}
	init() {
		this.children.emailInput = new Profiles({
			text: 'Почта',
			name: 'email',
			type: 'email',
			placeholder: 'pochta@yandex.ru'
		});
		this.children.loginInput = new Profiles({
			text: 'Логин',
			name: 'login',
			type: 'text',
			placeholder: 'ivanivanov'
		});
		this.children.first_nameInput = new Profiles({
			text: 'Имя',
			name: 'first_name',
			type: 'text',
			placeholder: 'Иван'
		});
		this.children.second_nameInput = new Profiles({
			text: 'Фамилия',
			name: 'second_name',
			type: 'text',
			placeholder: 'Иванов'
		});
		this.children.display_nameInput = new Profiles({
			text: 'Имя в чате',
			name: 'display_name',
			type: 'text',
			placeholder: 'Иван'
		});
		this.children.phoneInput = new Profiles({
			text: 'Телефон',
			name: 'phone',
			type: 'tel',
			placeholder: '+7 (909) 967 30 30'
		});
		this.children.oldPasswordInput = new Profiles({
			text: 'Старый пароль',
			name: 'oldPassword',
			type: 'password',
			placeholder: ''
		});
		this.children.newPasswordInput = new Profiles({
			text: 'Новый пароль',
			name: 'newPassword',
			type: 'password',
			placeholder: ''
		});
		this.children.newPassword2Input = new Profiles({
			text: 'Повторите новый пароль',
			name: 'newPasswordRepeat',
			type: 'password',
			placeholder: ''
		});

		this.children.button = new Button({
			label: 'Сохранить',
			classes: 'profile',
			type: 'submit'
		});
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

export const onSubmitProfile = (e: Event, id: string) => {
	const form: HTMLFormElement | null = document.querySelector(`#${id}`);
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
		let data;
		if (formData.get('email')) {
			data = {
				email: formData.get('email')! as string,
				login: formData.get('login')! as string,
				first_name: formData.get('first_name')! as string,
				second_name: formData.get('second_name')! as string,
				display_name: formData.get('display_name')! as string,
				phone: formData.get('phone')! as string
			};
			AuthentificationController.changeDate(data);
		} else {
			data = {
				oldPassword: formData.get('oldPassword')! as string,
				newPassword: formData.get('newPassword')! as string
			};
			AuthentificationController.changePassword(data);
		}
	}
};

const withUser = withStore((state) => ({ ...state.user }));

export const ContentPage = withUser<IContent>(Content);

import Block from '../../../../utils/Block';
import { Button } from '../../button/Button';
import Profiles from '../Profiles';
import template from './_content.pug';
interface IContent {
	trigger: string;
}
export default class Content extends Block<IContent> {
	constructor(props: IContent) {
		super({ ...props });
	}
	init() {
		this.children.email = new Profiles({
			text: 'Почта',
			name: 'email',
			type: 'email',
			placeholder: 'pochta@yandex.ru'
		});
		this.children.login = new Profiles({
			text: 'Логин',
			name: 'login',
			type: 'text',
			placeholder: 'ivanivanov'
		});
		this.children.first_name = new Profiles({
			text: 'Имя',
			name: 'first_name',
			type: 'text',
			placeholder: 'Иван'
		});
		this.children.second_name = new Profiles({
			text: 'Фамилия',
			name: 'second_name',
			type: 'text',
			placeholder: 'Иванов'
		});
		this.children.display_name = new Profiles({
			text: 'Имя в чате',
			name: 'display_name',
			type: 'text',
			placeholder: 'Иван'
		});
		this.children.phone = new Profiles({
			text: 'Телефон',
			name: 'phone',
			type: 'tel',
			placeholder: '+7 (909) 967 30 30'
		});
		this.children.oldPassword = new Profiles({
			text: 'Старый пароль',
			name: 'oldPassword',
			type: 'password',
			placeholder: ''
		});
		this.children.newPassword = new Profiles({
			text: 'Новый пароль',
			name: 'newPassword',
			type: 'password',
			placeholder: ''
		});
		this.children.newPassword2 = new Profiles({
			text: 'Повторите новый пароль',
			name: 'newPasswordRepeat',
			type: 'password',
			placeholder: ''
		});

		this.children.button = new Button({
			label: 'Сохранить',
			classes: 'profile',
			type: 'submit',
			events: {
				click: () => this.onSubmit(this.props.trigger)
			}
		});
	}
	onSubmit(id: string) {
		const form: HTMLFormElement | null = document.querySelector(`#${id} form`);
		const inputs = form?.querySelectorAll('input');
		const submit = (e: Event) => {
			e.preventDefault();
			if (inputs) {
				for (let i = 0; i < inputs.length; i++) {
					if (inputs[i].classList.contains('validation') || inputs[i].value === '') {
						form?.removeEventListener('submit', submit);
						return;
					}
				}
			}
			if (form) {
				const formData: FormData = new FormData(form);
				let data;
				if (formData.get('email')) {
					data = {
						email: formData.get('email'),
						login: formData.get('login'),
						first_name: formData.get('first_name'),
						second_name: formData.get('second_name'),
						display_name: formData.get('display_name'),
						phone: formData.get('phone')
					};
				} else {
					data = {
						oldPassword: formData.get('oldPassword'),
						newPassword: formData.get('newPassword')
					};
				}

				console.log(data);
				form?.removeEventListener('submit', submit);
			}
		};

		form?.addEventListener('submit', submit);
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

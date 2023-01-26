import Block from '../../utils/block';
import { Button } from '../../blocks/libs/button/Button';
import { Input } from '../../blocks/libs/input/Input';
import { Links } from '../../blocks/libs/links/Links';
import template from './registration.pug';

interface IRegistration {
	classes: string;
}

export class Registration extends Block {
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
			type: 'login'
		});
		this.children.first_name = new Input({
			name: 'first_name',
			classes: 'registration',
			type: 'first_name'
		});
		this.children.second_name = new Input({
			name: 'second_name',
			classes: 'registration',
			type: 'second_name'
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
			name: 'password',
			classes: 'registration',
			type: 'password'
		});
		this.children.button = new Button({
			label: 'Зарегистрироваться',
			classes: 'registration',
			type: 'submit',
			events: {
				click: () => console.log('submit')
			}
		});
		this.children.link = new Links({
			text: 'Войти',
			classes: 'registration',
			href: '#'
		});
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

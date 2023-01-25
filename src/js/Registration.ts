import Block from '../block';
import { Button } from '../Button';
import template from './registration.pug';
export class Registration extends Block {
	constructor() {
		super({});
	}
	init() {
		this.children.button = new Button({
			label: 'Войти',
			events: {
				click: () => console.log('submit')
			}
		});
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

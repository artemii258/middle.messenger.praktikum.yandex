import Block from '../../utils/Block';
import { Button } from '../../blocks/libs/button/Button';
import template from './error500.pug';

export default class Error500 extends Block {
	constructor() {
		super({});
	}
	init() {
		this.children.button = new Button({
			label: 'Назад к чатам',
			classes: 'error500',
			events: {
				click: () => console.log('submit')
			}
		});
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

import Block from '../../utils/Block';
import { Button } from '../../blocks/libs/button/Button';
import template from './error404.pug';

interface IError404 {
	images: HTMLImageElement;
}

export default class Error404 extends Block<IError404> {
	constructor(props: IError404) {
		super({ ...props });
	}
	init() {
		this.children.button = new Button({
			label: 'Назад к чатам',
			classes: 'error404',
			events: {
				click: () => console.log('submit')
			}
		});
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

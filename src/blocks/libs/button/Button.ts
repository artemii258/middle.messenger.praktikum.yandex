import Block from '../../../utils/Block';
import template from './_button.pug';

interface ButtonProps {
	label: string;
	classes: string;
	events?: {
		click: (e: Event) => void;
	};
	type?: string;
}
export class Button extends Block<ButtonProps> {
	constructor(props: ButtonProps) {
		super({ type: 'button', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

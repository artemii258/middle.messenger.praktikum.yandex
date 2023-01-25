import Block from './block';
import template from './blocks/libs/_button.hbs';

interface ButtonProps {
	type?: string;
	label: string;
	events: {
		click: () => void;
	};
}
export class Button extends Block<ButtonProps> {
	constructor(props: ButtonProps) {
		console.log(template);
		super({ type: 'button', ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

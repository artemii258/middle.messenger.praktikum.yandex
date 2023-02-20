import Validation from '../../../services/Validation';
import Block from '../../../utils/Block';
import template from './_input.pug';

interface IInputProps {
	name: string;
	classes: string;
	placeholder?: string;
	id?: string;
	type?: string;
	text?: string;
	events?: {
		focus?: (e: FocusEvent) => void;
		blur?: (e: FocusEvent) => void;
		input?: (e: Event) => void;
	};
}
export class Input extends Block<IInputProps> {
	constructor(props: IInputProps) {
		super({
			...props,
			events: { ...props.events, focus: new Validation().onFocus, blur: new Validation().onBlur }
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

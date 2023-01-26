import Block from '../../../utils/block';
import template from './_input.pug';

interface IInputProps {
	name: string;
	classes: string;
	placeholder?: string;
	id?: string;
	type?: string;
}
export class Input extends Block<IInputProps> {
	constructor(props: IInputProps) {
		super({ ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

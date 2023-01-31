import Block from '../../../utils/Block';
import template from './_profiles.pug';
import { Input } from '../input/Input';
interface IProfilesProp {
	text: string;
	name: string;
	type: string;
	placeholder: string;
}
export default class Profiles extends Block<IProfilesProp> {
	constructor(props: IProfilesProp) {
		super({ ...props });
	}
	init() {
		this.children.input = new Input({
			name: this.props.name,
			classes: 'profile',
			type: this.props.type,
			placeholder: this.props.placeholder
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

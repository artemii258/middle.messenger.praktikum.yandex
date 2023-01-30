import Block from '../../utils/Block';
import template from './pageDisplay.pug';

export default class pageDisplay extends Block {
	constructor() {
		super({});
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

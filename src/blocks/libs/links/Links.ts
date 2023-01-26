import Block from '../../../utils/block';
import template from './_links.pug';

interface ILinksProps {
	text: string;
	classes: string;
	href: string;
	li?: boolean;
}
export class Links extends Block<ILinksProps> {
	constructor(props: ILinksProps) {
		super({ ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

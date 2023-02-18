import Block from '../../../utils/Block';
import ActivationRoute from '../../../utils/Routes';
import template from './_links.pug';

interface ILinksProps {
	text?: string;
	classes: string;
	href: string;
	events?: {
		click: (e: Event) => void;
	};
	li?: boolean;
}
export class Links extends Block<ILinksProps> {
	constructor(props: ILinksProps) {
		super({
			...props,
			events: {
				click: new ActivationRoute().onClick
			}
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

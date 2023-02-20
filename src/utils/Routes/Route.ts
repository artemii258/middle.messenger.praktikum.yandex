import { ContentPage } from '../../blocks/libs/profiles/content/Content';
import Chats from '../../pages/chats/Chats';
import Popup from '../../pages/popup/Popup';
import { ProfilePage } from '../../pages/profile/Profile';
import Block from '../Block';

function isEqual(lhs: string, rhs: string): boolean {
	return lhs === rhs;
}

function render(query: string, block: Block) {
	const root = document.querySelector(query);
	if (root === null) {
		throw new Error(`root not found by selector "${query}"`);
	}
	if (
		(block instanceof Chats && document.querySelector('.popup')) ||
		(block instanceof ProfilePage && document.querySelector('.popup'))
	) {
		document.querySelector('.popup')?.remove();
	} else if (!(block instanceof Popup)) {
		if (block instanceof ProfilePage && document.querySelector('.profile')) {
		} else if (block instanceof ProfilePage) {
			root.innerHTML = '';
			root.append(block.getContent()!);
		} else if (block instanceof ContentPage) {
			document.querySelector('.profile__content')?.remove();
			root.append(block.getContent()!);
		} else {
			root.innerHTML = '';
			root.append(block.getContent()!);
		}
	} else {
		root.append(block.getContent()!);
	}

	return root;
}

export default class Route {
	private block: Block | null = null;

	constructor(
		private readonly pathname: string,
		public readonly blockClass: typeof Block,
		private readonly query: string,
		private props: object
	) {}

	leave() {
		this.block = null;
	}

	match(pathname: string) {
		return isEqual(pathname, this.pathname);
	}

	render(query: string = this.query) {
		if (!this.block) {
			this.block = new this.blockClass(this.props);

			render(query, this.block);
			return;
		}
	}
}

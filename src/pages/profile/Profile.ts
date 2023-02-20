import Block from '../../utils/Block';
import { Links } from '../../blocks/libs/links/Links';
import template from './profile.pug';
import { withStore } from '../../store/Store';
import { AuthentificationController } from '../../Controllers/AuthController';

export interface IProfile {
	events: {
		click: () => void;
	};
}

export default class Profile extends Block<IProfile> {
	constructor(props: IProfile) {
		super({ ...props });
	}
	init() {
		AuthentificationController.fetchUser();

		this.children.chat = new Links({
			text: 'Чат',
			classes: 'profile',
			href: '/messenger',
			li: true
		});
		this.children.profile = new Links({
			text: 'Профиль',
			classes: 'profile__menu-active profile',
			href: '/profile',
			li: true
		});
		this.children.data = new Links({
			text: 'Изменить данные',
			classes: 'profile',
			href: '/profile/data',
			li: true
		});
		this.children.password = new Links({
			text: 'Изменить пароль',
			classes: 'profile',
			href: '/profile/password',
			li: true
		});
		this.children.exit = new Links({
			text: 'Выйти',
			classes: 'profile',
			href: '#',
			li: true
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

const withUser = withStore((state) => ({ ...state.user }));

export const ProfilePage = withUser<IProfile>(Profile);

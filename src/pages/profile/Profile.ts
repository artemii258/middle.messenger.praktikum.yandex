import Block from '../../utils/Block';
import { Links } from '../../blocks/libs/links/Links';
import Content from '../../blocks/libs/profiles/content/Content';
import { onSubmitProfile } from '../../blocks/libs/profiles/content/Content';
import template from './profile.pug';

interface IProfile {
	avatar: HTMLImageElement;
}

export default class Profile extends Block<IProfile> {
	constructor(props: IProfile) {
		super({ ...props });
	}
	init() {
		this.children.chat = new Links({
			text: 'Чат',
			classes: 'profile',
			href: '#',
			li: true
		});
		this.children.data = new Links({
			text: 'Изменить данные',
			classes: 'profile',
			href: '#',
			li: true
		});
		this.children.password = new Links({
			text: 'Изменить пароль',
			classes: 'profile',
			href: '#',
			li: true
		});
		this.children.exit = new Links({
			text: 'Выйти',
			classes: 'profile',
			href: '#',
			li: true
		});
		this.children.profile = new Content({
			trigger: 'profile'
		});
		this.children.changesData = new Content({
			trigger: 'data',
			events: {
				submit: (e: Event) => onSubmitProfile(e, 'data')
			}
		});
		this.children.changesPassword = new Content({
			trigger: 'password',
			events: {
				submit: (e: Event) => onSubmitProfile(e, 'password')
			}
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
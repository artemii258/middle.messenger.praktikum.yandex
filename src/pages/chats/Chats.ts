import Block from '../../utils/Block';
import { Input } from '../../blocks/libs/input/Input';
import { Links } from '../../blocks/libs/links/Links';
import magnifier from '../../assets/icons/Union.png';
import trash from '../../assets/svg/trash.svg';
import menu from '../../assets/svg/menu.svg';
import picture from '../../assets/images/picture.png';
import checkMark from '../../assets/svg/checkMark.svg';
import checkMark2 from '../../assets/svg/checkMark2.svg';
import paperclip from '../../assets/icons/paperclip.png';
import photo from '../../assets/svg/photo.svg';
import file from '../../assets/svg/file.svg';
import send from '../../assets/svg/send.svg';
import avatar from '../../assets/images/avatar.jpg';
import template from './chats.pug';
import { Button } from '../../blocks/libs/button/Button';

export const images = {
	magnifier,
	trash,
	menu,
	picture,
	checkMark,
	checkMark2,
	paperclip,
	photo,
	file,
	send,
	avatar
};

interface IChats {
	classes: string;
	images: Record<string, HTMLImageElement>;
}

export default class Chats extends Block<IChats> {
	constructor(props: IChats) {
		super({ ...props });
	}
	init() {
		this.children.link = new Links({
			text: 'Профиль',
			classes: 'chats',
			href: '#'
		});
		this.children.search = new Input({
			name: 'search',
			classes: 'chats',
			type: 'text',
			placeholder: 'Поиск'
		});
		this.children.message = new Input({
			name: 'message',
			classes: 'chats__message-input chats',
			type: 'text',
			placeholder: 'Сообщение'
		});
		this.children.button = new Button({
			label: 'Отправить',
			classes: 'chats__message-send chats',
			type: 'submit',
			events: {
				click: this.onSubmit
			}
		});
	}
	onSubmit() {
		const form: HTMLFormElement | null = document.querySelector('.chats__message-form');
		const inputs = form?.querySelectorAll('input');
		const submit = (e: Event) => {
			e.preventDefault();
			if (inputs) {
				for (let i = 0; i < inputs.length; i++) {
					if (inputs[i].value === '') {
						form?.removeEventListener('submit', submit);
						return;
					}
				}
			}
			if (form) {
				const formData: FormData = new FormData(form);
				const data = {
					message: formData.get('message')
				};
				console.log(data);
				form?.removeEventListener('submit', submit);
			}
		};
		form?.addEventListener('submit', submit);
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

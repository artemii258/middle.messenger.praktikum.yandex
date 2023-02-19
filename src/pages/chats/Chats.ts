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
import template from './chats.pug';
import { ChatsList } from './ChatListBase/ChatListBase';
import { Button } from '../../blocks/libs/button/Button';
import { ChatController } from '../../Controllers/ChatsController';
import store, { withStore } from '../../store/Store';
import { MessageController } from '../../Controllers/MessagesController';
import { MessengerList } from './Messages/Messages';

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
	send
};

interface IChats {
	classes?: string;
}

export default class Chats extends Block<IChats> {
	constructor(props: IChats) {
		super({ ...props });
	}
	init() {
		ChatController.fetchChats();

		this.children.list = new ChatsList({});

		this.children.messages = new MessengerList({});
		this.children.link = new Links({
			text: 'Профиль',
			classes: 'chats',
			href: '/profile'
		});
		this.children.photoOrVideo = new Links({
			text: 'Фото или Видео',
			classes: 'chats',
			href: '/messenger/addPhotoOrVideo',
			li: true
		});
		this.children.file = new Links({
			text: 'Файл',
			classes: 'chats',
			href: '/messenger/addFile',
			li: true
		});
		this.children.addUser = new Links({
			text: 'Добавить пользователя',
			classes: 'chats',
			href: '/messenger/addUser',
			li: true
		});
		this.children.deleteUser = new Links({
			text: 'Удалить пользователя',
			classes: 'chats',
			href: '/messenger/deleteUser',
			li: true
		});
		this.children.search = new Input({
			name: 'search',
			classes: 'chats',
			type: 'text',
			placeholder: 'Поиск',
			events: {
				input: (e: Event) => {
					const target = e.target as HTMLInputElement;
					const regexp = new RegExp(`^${target.value}`, 'i');
					const res = store.getState().chats.filter((obj: { title: string }) => {
						return regexp.test(obj.title);
					});
					store.set('search', res);
				}
			}
		});
		this.children.message = new Input({
			name: 'message',
			classes: 'chats__message-input chats',
			type: 'text',
			placeholder: 'Сообщение'
		});
		this.children.button = new Button({
			label: '',
			classes: 'chats__message-send chats',
			type: 'submit',
			events: {
				click: (e: Event) => {
					const form: HTMLFormElement | null = document.querySelector('.chats__message-form');
					const inputs = form?.querySelectorAll('input');
					e.preventDefault();
					if (inputs) {
						for (let i = 0; i < inputs.length; i++) {
							if (inputs[i].value === '') {
								return;
							}
						}
					}
					if (form) {
						const formData: FormData = new FormData(form);
						const message = formData.get('message') as string;
						inputs![0].value = '';

						MessageController.sendMessage(store.getState().selectedChat!, message);
					}
				}
			}
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

const withSelectedChatMessages = withStore((state) => ({
	...state.user,
	...state.selectedChat
}));

export const Messenger = withSelectedChatMessages(Chats);

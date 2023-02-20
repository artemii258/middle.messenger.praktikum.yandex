import Block from '../../utils/Block';
import { Button } from '../../blocks/libs/button/Button';
import { Input } from '../../blocks/libs/input/Input';
import template from './popup.pug';
import { AuthentificationController } from '../../Controllers/AuthController';
import { ChatController } from '../../Controllers/ChatsController';
import store from '../../store/Store';
import { IChatInfo } from '../../api/ChatAPI';

interface IPopup {
	title: string;
	name: string;
	label: string;
	id: string;
	events: {
		submit: (e: Event) => void;
	};
	placeholder?: string;
	typeInput?: string;
	typeButton?: string;
}

export default class Popup extends Block {
	constructor(props: IPopup) {
		super({ ...props });
	}
	init() {
		this.children.input = new Input({
			name: this.props.name,
			classes: `popup__input popup`,
			id: this.props.id,
			type: this.props.typeInput
		});
		this.children.button = new Button({
			label: this.props.label,
			classes: 'popup',
			type: this.props.typeButton
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}

export const onSubmitPopup = (e: Event, id: string) => {
	const form: HTMLFormElement | null = document.querySelector(`#popup__${id} form`);
	const inputs = form?.querySelectorAll('input');
	e.preventDefault();
	if (inputs) {
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].classList.contains('validation') || inputs[i].value === '') {
				return;
			}
		}
	}
	if (form) {
		const formData: FormData = new FormData(form);
		if (id === 'add') {
			const title = formData.get('login') as string;

			ChatController.create(title, inputs![0]);
		} else if (id === 'avatar') {
			const formData: FormData = new FormData();
			const input: HTMLInputElement = inputs![0];

			formData.append('avatar', input.files?.item(0)!);
			AuthentificationController.changeAvatar(formData);
		} else if (id === 'delete') {
			const allChats = store.getState();
			const id = allChats.chats.find((chat: IChatInfo) => chat.title === formData.get('login')).id;
			ChatController.delete(id, inputs![0]);
		}
	}
};

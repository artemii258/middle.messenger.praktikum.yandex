import Block from '../../utils/Block';
import { Button } from '../../blocks/libs/button/Button';
import { Input } from '../../blocks/libs/input/Input';
import template from './popup.pug';

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
		let data;
		if (formData.get('login')) {
			data = {
				login: formData.get('login')
			};
		} else if (formData.get('file')) {
			console.log(formData.get('file'));
			data = {
				file: formData.get('file')
			};
		}
		console.log(data);
	}
};
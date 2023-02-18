export default class Validation {
	onFocus = (e: FocusEvent) => {
		this.checkInput(e);
	};
	onBlur = (e: FocusEvent) => {
		this.checkInput(e);
	};
	checkInput = (e: FocusEvent) => {
		const input = e.target as HTMLInputElement;
		switch (input.name) {
			case 'email':
				this.email(input);
				break;

			case 'login':
				this.login(input);
				break;

			case 'first_name':
				this.firstNameOrSecondName(input);
				break;

			case 'second_name':
				this.firstNameOrSecondName(input);
				break;

			case 'phone':
				this.phone(input);
				break;

			case 'message':
				this.message(input);
				break;
			case 'password':
				this.password(input);
				break;
			case 'display_name':
				this.login(input);
				break;
			case 'oldPassword':
				this.password(input);
				break;
			case 'newPassword':
				this.password(input);
				break;
			case 'newPasswordRepeat':
				this.passwordRepeat(input);
				break;

			default:
				break;
		}
	};
	email = (input: HTMLInputElement) => {
		if (/^[\w]+@[\w]+\.[A-Za-z]{2,}$/i.test(input.value)) {
			input.classList.remove('validation');
			if (input.nextSibling) {
				input.nextSibling.textContent = '';
			}
		} else {
			if (input.nextSibling) {
				input.nextSibling.textContent =
					'латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы';
			}
			input.classList.add('validation');
		}
	};
	login = (input: HTMLInputElement) => {
		if (
			/^[\w\S]{3,20}$/i.test(input.value) &&
			input.value.match(/\D/gi)?.length &&
			!input.value.match(/[`~!@#$%^&*()|+\=?;:'",.<>\{\}\[\]\\\/]/gi)?.length
		) {
			input.classList.remove('validation');
			if (input.nextSibling) {
				input.nextSibling.textContent = '';
			}
		} else {
			if (input.nextSibling) {
				input.nextSibling.textContent =
					'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
			}
			input.classList.add('validation');
		}
	};
	firstNameOrSecondName = (input: HTMLInputElement) => {
		if (
			(/^[A-Z][A-Za-z]+$/.test(input.value) || /^[А-Я][А-Яа-яЁё]+$/.test(input.value)) &&
			!input.value.match(/[`~!@#$%^&*()|+\=_?;:'",.<>\{\}\[\]\\\/]/gi)?.length
		) {
			if (input.nextSibling) {
				input.nextSibling.textContent = '';
			}
			input.classList.remove('validation');
		} else {
			if (input.nextSibling) {
				input.nextSibling.textContent =
					'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)';
			}
			input.classList.add('validation');
		}
	};
	password = (input: HTMLInputElement) => {
		if (/\w{8,40}/.test(input.value) && input.value.match(/[A-Z]/g) && input.value.match(/\d/g)) {
			if (input.nextSibling) {
				input.nextSibling.textContent = '';
			}
			input.classList.remove('validation');
		} else {
			if (input.nextSibling) {
				input.nextSibling.textContent =
					'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
			}
			input.classList.add('validation');
		}
	};
	passwordRepeat = (input: HTMLInputElement) => {
		if (/\w{8,40}/.test(input.value) && input.value.match(/[A-Z]/g) && input.value.match(/\d/g)) {
			if (input.nextSibling) {
				input.nextSibling.textContent = '';
			}
			input.classList.remove('validation');
		} else {
			if (input.nextSibling) {
				input.nextSibling.textContent = 'пароль не совпадает';
			}
			input.classList.add('validation');
		}
	};
	phone = (input: HTMLInputElement) => {
		if (/^\+?\d{10,15}$/.test(input.value)) {
			if (input.nextSibling) {
				input.nextSibling.textContent = '';
			}
			input.classList.remove('validation');
		} else {
			if (input.nextSibling) {
				input.nextSibling.textContent =
					'от 10 до 15 символов, состоит из цифр, может начинается с плюса';
			}
			input.classList.add('validation');
		}
	};
	message = (input: HTMLInputElement) => {
		if (input.value.length !== 0) {
			if (input.nextSibling) {
				input.nextSibling.textContent = '';
			}
			input.classList.remove('validationMessage');
		} else {
			if (input.nextSibling) {
				input.nextSibling.textContent = 'не должно быть пустым';
			}
			input.classList.add('validationMessage');
		}
	};
}

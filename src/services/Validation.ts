export default class Validation {
	onFocus = (e: FocusEvent) => {
		this.checkInput(e);
	};
	onBlur = (e: FocusEvent) => {
		this.checkInput(e);
	};
	checkData = (data: Object) => {};
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

			default:
				break;
		}
	};
	email = (input: HTMLInputElement) => {
		if (/^[\w]+@[\w]+\.[A-Za-z]{2,}$/i.test(input.value)) {
			input.classList.remove('validation');
		} else {
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
		} else {
			input.classList.add('validation');
		}
	};
	firstNameOrSecondName = (input: HTMLInputElement) => {
		if (
			(/^[A-Z][A-Za-z]+$/.test(input.value) || /^[А-Я][А-Яа-яЁё]+$/.test(input.value)) &&
			!input.value.match(/[`~!@#$%^&*()|+\=_?;:'",.<>\{\}\[\]\\\/]/gi)?.length
		) {
			input.classList.remove('validation');
		} else {
			input.classList.add('validation');
		}
	};
	password = (input: HTMLInputElement) => {
		if (/\w{8,40}/.test(input.value) && input.value.match(/[A-Z]/g) && input.value.match(/\d/g)) {
			input.classList.remove('validation');
		} else {
			input.classList.add('validation');
		}
	};
	phone = (input: HTMLInputElement) => {
		if (/^\+?\d{10,15}$/.test(input.value)) {
			input.classList.remove('validation');
		} else {
			input.classList.add('validation');
		}
	};
	message = (input: HTMLInputElement) => {
		if (input.value.length !== 0) {
			input.classList.remove('validationMessage');
		} else {
			input.classList.add('validationMessage');
		}
	};
}

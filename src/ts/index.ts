// @ts-ignore
import tabs from './tabs';
import MainPage from '../pages/mainPage/MainPage';
window.addEventListener('DOMContentLoaded', () => {
	const root = document.querySelector('#app')!;
	const mainPage = new MainPage();
	root.append(mainPage.getContent()!);

	mainPage.dispatchComponentDidMount();
	tabs();

	// const forms = document.querySelectorAll('form');
	// forms.forEach((form) => {
	// 	form.addEventListener('submit', (e) => {
	// 		e.preventDefault();

	// 		if (form) {
	// 			const formData: FormData = new FormData(form);
	// 			let data;
	// 			if (formData.get('email')) {
	// 				data = {
	// 					email: formData.get('email'),
	// 					login: formData.get('login'),
	// 					first_name: formData.get('first_name'),
	// 					second_name: formData.get('second_name'),
	// 					display_name: formData.get('display_name'),
	// 					phone: formData.get('phone')
	// 				};
	// 			} else if (formData.get('oldPassword')) {
	// 				data = {
	// 					oldPassword: formData.get('oldPassword'),
	// 					newPassword: formData.get('newPassword')
	// 				};
	// 			} else if (formData.get('login') && formData.get('password')) {
	// 				data = {
	// 					login: formData.get('login'),
	// 					password: formData.get('password')
	// 				};
	// 			} else if (formData.get('login')) {
	// 				data = {
	// 					login: formData.get('login')
	// 				};
	// 			} else {
	// 				data = {
	// 					login: formData.get('file')
	// 				};
	// 			}
	// 			console.log(data);
	// 		}
	// 	});
	// });
});

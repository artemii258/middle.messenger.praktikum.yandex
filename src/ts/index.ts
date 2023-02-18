// @ts-ignore
import AuthController from '../Controllers/AuthController';
import ChatsController from '../Controllers/ChatsController';
import ActivationRoute from '../utils/Routes';

window.addEventListener('DOMContentLoaded', async () => {
	AuthController.fetchUser();
	const route = new ActivationRoute();
	if (/profile/g.test(location.pathname)) {
		highlightingText();
	}

	try {
		await AuthController.fetchUser();

		route.activation();
	} catch (e) {
		route.activationRorNonRegistered();
	}
});

function highlightingText() {
	const menu = document.querySelector('.profile__menu');
	const links: NodeListOf<HTMLAnchorElement> | undefined = menu?.querySelectorAll('a');
	links?.forEach((a) => {
		a.classList.remove('profile__menu-active');
		if (location.pathname === '/profile' && a.textContent === 'Профиль') {
			a.classList.add('profile__menu-active');
		}
		if (location.pathname === '/profile/data' && a.textContent === 'Изменить данные') {
			a.classList.add('profile__menu-active');
		}
		if (location.pathname === '/profile/password' && a.textContent === 'Изменить пароль') {
			a.classList.add('profile__menu-active');
		}
	});
}

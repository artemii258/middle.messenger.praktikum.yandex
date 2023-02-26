// @ts-ignore
import { AuthentificationController } from '../Controllers/AuthController';
import ActivationRoute from '../utils/Routes';

import '../style/style.scss';

window.addEventListener('DOMContentLoaded', async () => {
	const route = new ActivationRoute();
	if (/profile/g.test(location.pathname)) {
		highlightingText();
	}

	try {
		await AuthentificationController.fetchUser();

		route.activation();
	} catch (e) {
		route.activationForNonRegistered();
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

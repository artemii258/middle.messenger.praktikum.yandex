export default function () {
	const entrance = document.querySelector('.entrance'),
		chats = document.querySelector('.chats'),
		chatsPlug = document.querySelector('.chats__block-right'),
		chatsMessage = document.querySelector('.chats__message'),
		profile = document.querySelector('.profile'),
		profileContent = document.querySelectorAll('.profile__content'),
		registration = document.querySelector('.registration'),
		popups = document.querySelectorAll('.popup'),
		background = document.querySelector('.popup__backgraund'),
		error404 = document.querySelector('.error404'),
		error500 = document.querySelector('.error500');

	const pages = [
		entrance,
		chats,
		chatsPlug,
		chatsMessage,
		profile,
		profileContent,
		registration,
		popups,
		background,
		error404,
		error500,
	];

	const wrapper = document.querySelector('.pageDisplay__wrapper');
	wrapper.addEventListener('click', (e) => {
		if (e.target !== wrapper) {
			for (let i = 0; i < pages.length; i++) {
				if (pages[i].length) {
					for (let j = 0; j < pages[i].length; j++) {
						pages[i][j].style.display = 'none';
					}
				} else {
					pages[i].style.display = 'none';
				}
			}
			switch (e.target.textContent) {
				case 'Вход':
					entrance.style.display = 'block';
					break;
				case 'Регистрация':
					registration.style.display = 'block';
					break;
				case 'Чат':
					chats.style.display = 'block';
					chatsMessage.style.display = 'block';
					break;
				case 'Чат заглушка':
					chats.style.display = 'block';
					chatsPlug.style.display = 'block';
					break;
				case 'Добавить':
					popups[0].style.display = 'block';
					background.style.display = 'block';
					break;
				case 'Удалить':
					popups[1].style.display = 'block';
					background.style.display = 'block';
					break;
				case 'Загрузить':
					popups[2].style.display = 'block';
					background.style.display = 'block';
					break;
				case 'Профиль':
					profile.style.display = 'block';
					profileContent[0].style.display = 'block';
					break;
				case 'Изменить данные':
					profile.style.display = 'block';
					profileContent[1].style.display = 'block';
					break;
				case 'Изменить пароль':
					profile.style.display = 'block';
					profileContent[2].style.display = 'block';
					break;
				case 'Ошибка 404':
					error404.style.display = 'flex';
					break;
				case 'Ошибка 500':
					error500.style.display = 'flex';
					break;
			}
		}
	});
}

import { onSubmitProfile } from '../../blocks/libs/profiles/content/Content';
import Chats, { images, Messenger } from '../../pages/chats/Chats';
import Entrance from '../../pages/entrance/Entrance';
import Popup, { onSubmitPopup } from '../../pages/popup/Popup';
import error from '../../assets/images/error.jpg';
import { ProfilePage } from '../../pages/profile/Profile';
import { ContentPage } from '../../blocks/libs/profiles/content/Content';
import Registration, { onSubmitRegistration } from '../../pages/registration/Registration';
import Block from '../Block';
import page from './Router';
import { AuthentificationController } from '../../Controllers/AuthController';
import Error404 from '../../pages/error404/Error404';

enum Routes {
	Index = '/',
	Register = '/sign-up',
	Chats = '/messenger',
	AddFile = '/messenger/addFile',
	addPhotoOrVideo = '/messenger/addPhotoOrVideo',
	addUser = '/messenger/addUser',
	deleteUser = '/messenger/deleteUser',
	Profile = '/profile',
	ChangesData = '/profile/data',
	ChangePassword = '/profile/password',
	ChangeAvatar = '/profile/changeAvatar',
	Error404 = '/error404'
}
export default class ActivationRoute {
	activation = () => {
		page
			.use(Routes.Chats, Messenger as typeof Block, { classes: 'chats', images })
			.use(Routes.AddFile, Chats as typeof Block, { classes: 'chats', images })
			.use(Routes.AddFile, Popup as typeof Block, {
				title: 'Загрузите файл',
				name: 'file',
				label: 'Добавить',
				id: 'file',
				events: {
					submit: (e: Event) => onSubmitPopup(e, 'file')
				},
				typeButton: 'submit',
				typeInput: 'file'
			})
			.use(Routes.addPhotoOrVideo, Messenger as typeof Block, { classes: 'chats', images })
			.use(Routes.addPhotoOrVideo, Popup as typeof Block, {
				title: 'Загрузите файл',
				name: 'file',
				label: 'Добавить',
				id: 'file',
				events: {
					submit: (e: Event) => onSubmitPopup(e, 'file')
				},
				typeButton: 'submit',
				typeInput: 'file'
			})
			.use(Routes.addUser, Messenger as typeof Block, { classes: 'chats', images })
			.use(Routes.addUser, Popup as typeof Block, {
				title: 'Добавить пользователя',
				name: 'login',
				label: 'Добавить',
				id: 'add',
				events: {
					submit: (e: Event) => onSubmitPopup(e, 'add')
				},
				typeButton: 'submit',
				typeInput: 'text'
			})
			.use(Routes.deleteUser, Messenger as typeof Block, { classes: 'chats', images })
			.use(Routes.deleteUser, Popup as typeof Block, {
				title: 'Удалить пользователя',
				name: 'login',
				label: 'Удалить',
				id: 'delete',
				events: {
					submit: (e: Event) => onSubmitPopup(e, 'delete')
				},
				typeButton: 'submit',
				typeInput: 'text'
			})
			.use(Routes.Profile, ProfilePage as typeof Block, {
				events: {
					click: this.onClick
				}
			})
			.use(Routes.ChangesData, ProfilePage as typeof Block, {
				events: {
					click: this.onClick
				}
			})
			.use(Routes.ChangePassword, ProfilePage as typeof Block, {
				events: {
					click: this.onClick
				}
			})
			.use(Routes.ChangeAvatar, ProfilePage as typeof Block, {
				events: {
					click: this.onClick
				}
			})
			.use(Routes.Profile, ContentPage as typeof Block, {
				trigger: 'profile'
			})
			.use(Routes.ChangesData, ContentPage as typeof Block, {
				trigger: 'data',
				events: {
					submit: (e: Event) => onSubmitProfile(e, 'data')
				}
			})
			.use(Routes.ChangePassword, ContentPage as typeof Block, {
				trigger: 'password',
				events: {
					submit: (e: Event) => onSubmitProfile(e, 'password')
				}
			})
			.use(Routes.ChangeAvatar, Popup as typeof Block, {
				title: 'Загрузите файл',
				name: 'file',
				label: 'Поменять',
				id: 'avatar',
				events: {
					submit: (e: Event) => onSubmitPopup(e, 'avatar')
				},
				typeButton: 'submit',
				typeInput: 'file'
			})
			.use(Routes.Error404, Error404 as typeof Block, {
				images: error
			})
			.start();
	};
	activationForNonRegistered = () => {
		page
			.use(Routes.Index, Entrance)
			.use(Routes.Register, Registration as typeof Block, {
				classes: 'registration',
				events: {
					submit: onSubmitRegistration
				}
			})
			.use(Routes.Error404, Error404 as typeof Block, {
				images: error
			})
			.start();
	};
	onClick = (e: Event) => {
		e.preventDefault();

		const target = e.target as HTMLLinkElement;
		if (target.getAttribute('href') === '#') {
			AuthentificationController.logout();
			return;
		}
		let path = target.getAttribute('href')
			? target.getAttribute('href')
			: target.getAttribute('data-href');
		if (target.getAttribute('data-href') === '/#') {
			if (/profile/g.test(window.location.pathname)) {
				page.go('/profile');
			} else {
				page.go('/messenger');
			}
			return;
		}
		if (!target.classList.contains('profile__hover')) {
			if (/profile/g.test(target.getAttribute('class')!)) {
				if (target.tagName === 'A') {
					const prof = document.querySelector('.profile');
					const a = prof?.querySelectorAll('a');
					a?.forEach((a) => {
						a.classList.remove('profile__menu-active');
					});
					target.classList.add('profile__menu-active');
				}
			}
		}
		if (path) {
			page.go(path);
		}
	};
}

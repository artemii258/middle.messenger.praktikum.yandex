import Block from '../../utils/Block';
import Registration from '../../pages/registration/Registration';
import Chats from '../chats/Chats';
import Popup from '../popup/Popup';
import Entrance from '../entrance/Entrance';
import Profile from '../profile/Profile';
import Error404 from '../error404/Error404';
import Error500 from '../error500/Error500';
import pageDisplay from '../pageDisplay/PageDisplay';
import { images } from '../chats/Chats';
import error from '../../assets/images/error.jpg';
import template from './mainPage.pug';

export default class MainPage extends Block {
	constructor() {
		super({});
	}
	init() {
		this.children.registration = new Registration({
			classes: 'registration'
		});
		this.children.chats = new Chats({
			classes: 'chats',
			images
		});
		this.children.popupAdd = new Popup({
			title: 'Добавить пользователя',
			name: 'login',
			label: 'Добавить',
			id: 'add',
			typeButton: 'submit',
			typeInput: 'text'
		});
		this.children.popupDelete = new Popup({
			title: 'Удалить пользователя',
			name: 'login',
			label: 'Удалить',
			id: 'delete',
			typeButton: 'submit',
			typeInput: 'text'
		});
		this.children.popupDownload = new Popup({
			title: 'Загрузите файл',
			name: 'avatar',
			label: 'Поменять',
			id: 'avatar',
			typeButton: 'submit',
			typeInput: 'file'
		});
		this.children.entrance = new Entrance();
		this.children.profile = new Profile({
			avatar: images.avatar
		});
		this.children.error404 = new Error404({
			images: error
		});
		this.children.error500 = new Error500();
		this.children.pageDisplay = new pageDisplay();
	}
	render() {
		return this.compile(template, { ...this.props });
	}
}

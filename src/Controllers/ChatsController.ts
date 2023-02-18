import API, { ChatsAPI } from '../api/ChatAPI';
import store from '../store/Store';
import MessagesController from './MessagesController';

class ChatsController {
	private readonly api: ChatsAPI;

	constructor() {
		this.api = API;
	}

	async create(title: string, input: HTMLInputElement) {
		await this.api.create(title).then((res) => {
			input.value = '';
		});

		this.fetchChats();
	}

	async fetchChats() {
		const chats = await this.api.read();

		chats.map(async (chat) => {
			const token = await this.getToken(chat.id);
			await MessagesController.connect(chat.id, token);
		});
		store.set('chats', chats);
		store.set('search', chats);
	}

	addUserToChat(id: number, userId: number) {
		this.api.addUsers(id, [userId]);
	}

	async delete(id: number, input: HTMLInputElement) {
		await this.api
			.delete(+id)
			.then((res) => {
				input.value = '';
				console.log(res);
			})
			.catch((err) => console.log(err));

		this.fetchChats();
	}

	getToken(id: number) {
		return this.api.getToken(id);
	}

	selectChat(id: number) {
		store.set('selectedChat', id);
	}
}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;

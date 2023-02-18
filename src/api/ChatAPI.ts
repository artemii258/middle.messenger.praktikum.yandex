import { IUser } from './AuthAPI';
import HTTPTransport from '../services/Requests';

export interface IChatInfo {
	id: number;
	title: string;
	avatar: string;
	unread_count: number;
	last_message: {
		user: IUser;
		time: string;
		content: string;
	};
}

export class ChatsAPI {
	request: HTTPTransport;
	constructor() {
		this.request = new HTTPTransport();
	}

	create(title: string) {
		return this.request.post('chats', {
			headers: { accept: 'application/json', 'Content-Type': 'application/json' },
			data: { title }
		});
	}

	delete(id: number): Promise<unknown> {
		return this.request.delete('chats', {
			headers: { accept: 'application/json', 'Content-Type': 'application/json' },
			data: { chatId: id }
		});
	}

	read(): Promise<IChatInfo[]> {
		return this.request.get('chats');
	}

	getUsers(id: number): Promise<Array<IUser & { role: string }>> {
		return this.request.get(`chats/${id}/users`);
	}

	addUsers(id: number, users: number[]): Promise<unknown> {
		return this.request.put('chats/users', { users, chatId: id });
	}

	async getToken(id: number): Promise<string> {
		const response = await this.request.post<{ token: string }>(`chats/token/${id}`);

		return response.token;
	}

	update = undefined;
}

export default new ChatsAPI();

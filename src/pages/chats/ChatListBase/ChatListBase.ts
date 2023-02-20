import Block from '../../../utils/Block';
import template from './ChatListBase.pug';
import { Chat } from './ChatList/ChatList';
import { withStore } from '../../../store/Store';
import { IChatInfo } from '../../../api/ChatAPI';
import { ChatController } from '../../../Controllers/ChatsController';

interface ChatsListProps {
	chats: IChatInfo[];
}

class ChatsListBase extends Block<ChatsListProps> {
	constructor(props: ChatsListProps) {
		super({ ...props });
	}

	protected init() {
		this.children.chats = this.createChats(this.props);
	}
	protected componentDidUpdate(_oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
		this.children.chats = this.createChats(newProps);
		return true;
	}

	private createChats(props: ChatsListProps) {
		const chats = props.chats.map((chat) => {
			const hours = new Date(chat.last_message?.time).getHours();
			const minutes = new Date(chat.last_message?.time).getMinutes();
			return {
				...chat,
				last_message: chat.last_message
					? {
							...chat.last_message,
							time: `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
					  }
					: null
			};
		});
		return chats.map((data) => {
			return new Chat({
				...data,
				events: {
					click: () => {
						ChatController.selectChat(data.id);
						(document.querySelector('.chats__message-form') as HTMLElement).style.display = 'flex';
						(document.querySelector('.chats__block-right') as HTMLElement).style.display = 'none';
					}
				}
			});
		});
	}

	protected render() {
		return this.compile(template, { ...this.props });
	}
}

const withChats = withStore((state) => {
	if (
		state.selectedChat &&
		document.querySelector('.chats__message-form') &&
		document.querySelector('.chats__block-right')
	) {
		(document.querySelector('.chats__message-form') as HTMLElement).style.display = 'flex';
		(document.querySelector('.chats__block-right') as HTMLElement).style.display = 'none';
	}
	if (state.selectedChat) {
		return { chats: [...(state.search || [])], selectedChat: { ...state.selectedChat } };
	}
	return { chats: [...(state.search || [])] };
});

export const ChatsList = withChats(ChatsListBase);

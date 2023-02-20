import Block from '../../../../utils/Block';
import template from './chatList.pug';
import { withStore } from '../../../../store/Store';
import { IChatInfo } from '../../../../api/ChatAPI';

interface ChatProps {
	id: number;
	title: string;
	unread_count: number;
	selectedChat: IChatInfo;
	events: {
		click: () => void;
	};
}

class ChatBase extends Block<ChatProps> {
	constructor(props: ChatProps) {
		super(props);
	}

	protected render() {
		return this.compile(template, {
			...this.props,
			isSelected: this.props.id === this.props.selectedChat?.id
		});
	}
}

export const withSelectedChat = withStore((state) => {
	return {
		selectedChat: (state.search || []).find((list: IChatInfo, i: number) => {
			if (state.selectedChat === list.id) {
				document.querySelectorAll('.chats__friends-list')[i]?.classList.add('background-link');
				return list.id === state.selectedChat;
			}
			return false;
		})
	};
});

export const Chat = withSelectedChat(ChatBase);

import Block from '../../../utils/Block';
import template from './messages.pug';
import { Message } from '../Message/Message';
import { withStore } from '../../../store/Store';
import { IMessage } from '../../../Controllers/MessagesController';

interface MessengerProps {
	selectedChat: number | undefined;
	messages: IMessage[];
	userId: number;
}

class MessengerBase extends Block<MessengerProps> {
	constructor(props: MessengerProps) {
		super(props);
	}
	protected init() {
		this.children.messages = this.createMessages(this.props);
	}

	protected componentDidUpdate(_oldProps: MessengerProps, newProps: MessengerProps): boolean {
		this.children.messages = this.createMessages(newProps);

		return true;
	}

	private createMessages(props: MessengerProps) {
		return props.messages.map((data) => {
			const hours = new Date(data.time).getHours();
			const minutes = new Date(data.time).getMinutes();
			const newData = {
				...data,
				time: `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
			};
			return new Message({ ...newData, isMine: props.userId === data.user_id });
		});
	}

	protected render() {
		return this.compile(template, { ...this.props });
	}
}

const withSelectedChatMessages = withStore((state) => {
	const selectedChatId = state.selectedChat;

	if (!selectedChatId) {
		return {
			messages: [],
			selectedChat: undefined,
			userId: state.user?.id
		};
	}

	return {
		messages: (state.messages || {})[selectedChatId] || [],
		selectedChat: state.selectedChat,
		userId: state.user?.id
	};
});

export const MessengerList = withSelectedChatMessages(MessengerBase);

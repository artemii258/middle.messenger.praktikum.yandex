import EventBus from '../utils/Event-bus';
import { set } from '../utils/helpers';
import Block from '../utils/Block';

export enum StoreEvents {
	Updated = 'updated'
}
type PlainObject<T = any> = {
	[k in string]: T;
};

export class Store extends EventBus {
	constructor() {
		super();
	}
	private state: any = {};

	public set(keypath: string, data: unknown) {
		set(this.state, keypath, data);

		this.emit(StoreEvents.Updated, this.getState());
	}

	public getState() {
		return this.state;
	}
}

const store = new Store();

function isPlainObject(value: unknown): value is PlainObject {
	return (
		typeof value === 'object' &&
		value !== null &&
		value.constructor === Object &&
		Object.prototype.toString.call(value) === '[object Object]'
	);
}

function isArray(value: unknown): value is [] {
	return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
	return isPlainObject(value) || isArray(value);
}

function isEqual(lhs: PlainObject, rhs: PlainObject) {
	if (Object.keys(lhs).length !== Object.keys(rhs).length) {
		return false;
	}

	for (const [key, value] of Object.entries(lhs)) {
		const rightValue = rhs[key];
		if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
			if (isEqual(value, rightValue)) {
				continue;
			}
			return false;
		}

		if (value !== rightValue) {
			return false;
		}
	}

	return true;
}

export function withStore(mapStateToProps: (state: any) => any) {
	return function wrap<T extends Record<string, any>>(Component: typeof Block<T>) {
		let previousState: any;

		return class WithStore extends Component {
			constructor(props: any) {
				previousState = mapStateToProps(store.getState());
				super({ ...props, ...previousState });

				store.on(StoreEvents.Updated, () => {
					const stateProps = mapStateToProps(store.getState());
					if (!isEqual(previousState, stateProps) || stateProps.selectedChat || stateProps.search) {
						previousState = stateProps;
						this.setProps({ ...stateProps });
					}
				});
			}
		};
	};
}

export default store;

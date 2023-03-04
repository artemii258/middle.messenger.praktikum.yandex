import { IPassword, IUser } from '../api/AuthAPI';

enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

type OptionsRequest = {
	headers?: Record<string, string>;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	data?: any;
	credentials?: string;
};
type Options = {
	headers?: Record<string, string>;
	data?: Object;
};

function queryStringify(data: string) {
	if (typeof data !== 'object') {
		throw new Error('Data must be object');
	}

	const keys = Object.keys(data);
	return keys.reduce((result, key, index) => {
		return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
	}, '?');
}

export default class HTTPTransport {
	private baseURL: string;

	constructor() {
		this.baseURL = 'https://ya-praktikum.tech/api/v2/';
	}
	get = <Response>(url: string): Promise<Response> => {
		return this.request<Response>(`${this.baseURL}${url}`, { method: METHODS.GET });
	};

	post = <Response>(url: string, options?: Options): Promise<Response> => {
		return this.request<Response>(`${this.baseURL}${url}`, { ...options, method: METHODS.POST });
	};

	put = <Response>(url: string, options?: IUser | IPassword | Object): Promise<Response> => {
		return this.request(`${this.baseURL}${url}`, {
			...options,
			method: METHODS.PUT
		});
	};

	delete = <Response>(url: string, options: Options): Promise<Response> => {
		return this.request(`${this.baseURL}${url}`, { ...options, method: METHODS.DELETE });
	};
	private request = <Response>(url: string, options: OptionsRequest): Promise<Response> => {
		const { headers = {}, method, data } = options;
		return new Promise(function (resolve, reject) {
			if (!method) {
				reject('No method');
				return;
			}
			const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.GET;

			xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

			Object.keys(headers).forEach((key) => {
				xhr.setRequestHeader(key, headers[key]);
			});
			xhr.withCredentials = true;
			xhr.responseType = 'json';
			xhr.onabort = reject;
			xhr.onerror = reject;
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(xhr.response);
					} else {
						reject(xhr.response);
					}
				}
			};
			xhr.ontimeout = reject;
			const dataJSON = data instanceof FormData ? data : JSON.stringify(data);
			if (isGet || !data) {
				xhr.send();
			} else {
				xhr.send(dataJSON);
			}
		});
	};
}

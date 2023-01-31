enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}
interface IGET {
	headers: Record<string, string>;
	data: string;
	method: string;
}

type Options = {
	headers: Record<string, string>;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	data?: any;
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
	baseURL: string;

	constructor() {
		this.baseURL = 'https://ya-praktikum.tech/api/v2/';
	}
	get = <Response>(url: string, options: IGET): Promise<Response> => {
		return this.request<Response>(`${this.baseURL}${url}`, { ...options, method: METHODS.GET });
	};

	post = <Response>(url: string, options: Options): Promise<Response> => {
		return this.request<Response>(`${this.baseURL}${url}`, { ...options, method: METHODS.POST });
	};

	put = <Response>(url: string, options: Options): Promise<Response> => {
		return this.request(`${this.baseURL}${url}`, { ...options, method: METHODS.PUT });
	};

	delete = <Response>(url: string, options: Options): Promise<Response> => {
		return this.request(`${this.baseURL}${url}`, { ...options, method: METHODS.DELETE });
	};
	private request = <Response>(url: string, options: Options): Promise<Response> => {
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

			xhr.onload = function () {
				resolve(xhr.response);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;

			xhr.ontimeout = reject;

			if (isGet || !data) {
				xhr.send();
			} else {
				xhr.send(data);
			}
		});
	};
}

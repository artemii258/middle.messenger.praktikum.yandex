import HTTPTransport from './Requests';
const users = {
	avatar: '/429cc534-178c-48c3-986d-4a5d7241d221/8b76c7bd-0c5e-4118-92ab-1e4c0637def7_avatar.jpg',
	display_name: 'ArteemiX',
	email: 'arteeemiy@arteeemiy.ru',
	first_name: 'Arteeemiy',
	id: '317166',
	login: 'Arteeemiy',
	phone: '+74564545456',
	second_name: 'Arteeemiy'
};
function mockFetch(status: number, data?: { [key: string]: string }) {
	const xhrMockObj = {
		open: jest.fn(),
		send: jest.fn(),
		setRequestHeader: jest.fn(),
		readyState: 4,
		status,
		response: data
	};

	const xhrMockClass = () => xhrMockObj;

	// @ts-ignore
	window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

	setTimeout(() => {
		// @ts-ignore
		xhrMockObj['onreadystatechange']();
	}, 0);
}

test('testing HTTPTransport', async () => {
	const xhrAPI = new HTTPTransport();
	window.XMLHttpRequest;
	mockFetch(200, users);

	const res = await xhrAPI.get('www.example.ru');

	expect(res).toEqual(users);
});

import Router from './Router';
describe('test router', () => {
	beforeEach(() => {
		Router.go = jest.fn((pathname) => global.history.pushState({}, '', pathname));
	});
	test('test location changes', () => {
		Router.go('/profile');

		expect(global.location.pathname).toBe('/profile');
	});
	test('test go', () => {
		global.history.pushState = jest.fn();
		Router.go('/messenger');
		const res = jest.spyOn(global.history, 'pushState');

		expect(res).toHaveBeenCalled();
	});
});

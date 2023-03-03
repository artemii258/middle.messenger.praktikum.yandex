import Router from './Router';

test('test go', () => {
	Router.go = jest.fn((pathname) => global.history.pushState({}, '', pathname));
	global.history.pushState = jest.fn();
	Router.go('/messenger');
	const res = jest.spyOn(global.history, 'pushState');

	expect(res).toHaveBeenCalled();
});

import Block from './Block';

describe('test Block', () => {
	class Component extends Block<{}> {
		render() {
			return new DocumentFragment();
		}
	}
	test('test Component', () => {
		const renderSpy = jest.spyOn(Component.prototype, 'render');
		const testComponent = new Component({ test: 'test' });
		testComponent.setProps({
			test: 'success'
		});
		expect(renderSpy).toHaveBeenCalled();
	});
});

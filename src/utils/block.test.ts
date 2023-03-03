import Block from './Block';

describe('test Block', () => {
	const template = jest.fn(() => 'compile');

	class Component extends Block<{}> {
		render() {
			return this.compile(template, { ...this.props });
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
	test('test compile', () => {
		const testComponent = new Component({});

		expect(testComponent.render().textContent).toBe('compile');
	});
});

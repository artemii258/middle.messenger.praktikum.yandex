// import tabs from './tabs';
import { Registration } from './Registration';
window.addEventListener('DOMContentLoaded', () => {
	// tabs();
	const root = document.querySelector('#app')!;
	const homePage = new Registration();
	root.append(homePage.getContent()!);

	homePage.dispatchComponentDidMount();
});

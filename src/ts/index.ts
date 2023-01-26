// import tabs from './tabs';
import { Registration } from '../pages/registration/Registration';
window.addEventListener('DOMContentLoaded', () => {
	// tabs();
	const root = document.querySelector('#app')!;
	const homePage = new Registration({ classes: 'registration' });
	root.append(homePage.getContent()!);

	homePage.dispatchComponentDidMount();
});

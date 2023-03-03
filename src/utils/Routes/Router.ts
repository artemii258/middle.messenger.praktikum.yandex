import Popup from '../../pages/popup/Popup';
import Block from '../Block';
import Route from './Route';

export class Router {
	private static __instance: Router;
	private routes: Route[] = [];
	private currentRoute: Route | null = null;
	private history = window.history;

	constructor(private readonly rootQuery: string) {
		if (Router.__instance) {
			return Router.__instance;
		}
		this.routes = [];

		Router.__instance = this;
	}

	public use(pathname: string, block: typeof Block, props: object = {}) {
		const route = new Route(pathname, block, this.rootQuery, props);
		this.routes.push(route);

		return this;
	}

	public start() {
		window.onpopstate = (event: PopStateEvent) => {
			const target = event.currentTarget as Window;

			this._onRoute(target.location.pathname);
		};

		this._onRoute(window.location.pathname);
	}

	private _onRoute(pathname: string) {
		const checkPathname = this.routes.find((route) => route.match(pathname));
		if (checkPathname) {
			const route = this.getRoute(pathname);
			route.forEach((route) => {
				if (!route) {
					return;
				}

				if (this.currentRoute && this.currentRoute !== route) {
					this.currentRoute.leave();
				}

				this.currentRoute = route;
				const checkClass = route.blockClass;

				if (checkClass === Popup) {
					route.render('body');
				} else {
					route.render();
				}
			});
		} else if (pathname === '/' || pathname === '/sign-up') {
			this.go('/messenger');
		} else {
			this.go('/error404');
		}
	}

	public go(pathname: string) {
		this.history.pushState({}, '', pathname);

		this._onRoute(pathname);
	}

	public back() {
		this.history.back();
	}

	public forward() {
		this.history.forward();
	}

	private getRoute(pathname: string) {
		return this.routes.filter((route) => route.match(pathname));
	}
}

export default new Router('#app');

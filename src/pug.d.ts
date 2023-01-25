declare module '*.pug' {
	declare const template: (context: any) => string;

	export default template;
}

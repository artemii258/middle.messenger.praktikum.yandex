declare module '*.pug' {
	declare const template: (context: any) => string;

	export default template;
}
declare module '*.svg' {
	const content: HTMLImageElement;
	export default content;
}
declare module '*.png' {
	const content: HTMLImageElement;
	export default content;
}
declare module '*.jpg' {
	const content: HTMLImageElement;
	export default content;
}

export default class Loader {
	constructor () {
		this.body = document.body;
	}

	init () {
		this.body.classList.add('loaded');
	}
}

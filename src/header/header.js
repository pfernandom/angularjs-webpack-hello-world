require('./header.css')

import html from './header.html'

class Header {

    constructor() {
        this.template = html;
    }
	link(scope, element, attributes) {
        console.log("directive link");
		console.log(scope);
    }
}
export { Header }
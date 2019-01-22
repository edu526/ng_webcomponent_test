import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	wc1: IWebComponent = {
		tag: 'first-app',
		file: 'wc1',
		positionId: 'div1',
		html: '<first-app message="Prueba de Componente Web 2"></first-app>',
		inputs: [{
			key: 'message',
			value: 'Prueba de Componente Web 2'
		}]
	};

	wc2: IWebComponent = {
		tag: 'second-app',
		file: 'wc2',
		html: '<second-app></second-app>',
		positionId: 'div2',
	};

	addWebCompoent(webCompoent: IWebComponent): void {
		this.addScriptTag(webCompoent.file);
		this.addElementToRef(webCompoent);
	}

	addElementToRef(webCompoent: IWebComponent): void {
		const content = document.getElementById(webCompoent.positionId);
		content.insertAdjacentHTML('beforeend', webCompoent.html);
		// const element = document.createElement(webCompoent.tag);
		// if (webCompoent.outputs) {
		// 	webCompoent.outputs.forEach(output => {
		// 		element.setAttribute(output.key, output.callback);
		// 	});
		// }
		// content.appendChild(element);
		// if (webCompoent.inputs) {
		// 	webCompoent.inputs.forEach(input => {
		// 		element.setAttribute(input.key, input.value);
		// 	});
		// }
	}

	addScriptTag(fileName: string): void {
		const scriptId = `${fileName}_script`;
		const tmpScript = document.getElementById(scriptId);
		if (!tmpScript) {
			const scriptTag = document.createElement(`script`);

			scriptTag.setAttribute('src', `assets/ng-elements/${fileName}.js`);
			scriptTag.setAttribute('type', 'text/javascript');
			scriptTag.setAttribute('id', `${fileName}_script`);

			document.body.appendChild(scriptTag);
		}

	}
}

export interface IWebComponent {
	tag: string;
	file: string;
	positionId: string;
	html: string;
	inputs?: Array<{ key: string, value: any }>;
	outputs?: Array<{ key: string, callback: any }>;
}

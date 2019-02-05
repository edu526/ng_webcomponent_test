import { Renderer } from '@angular/core';

export const addElementToRef = (webCompoent: IWebComponent, renderer?: Renderer): void => {
	const content = document.getElementById(webCompoent.positionId);
	// content.insertAdjacentHTML('beforeend', webCompoent.html);
	// if (renderer) {
	// 	renderer.invokeElementMethod(content, 'insertAdjacentHTML', ['beforeend', webCompoent.html]);

	// } else {
		const element = document.createElement(webCompoent.tag);
		if (webCompoent.outputs) {
			webCompoent.outputs.forEach(output => {
				element.setAttribute(output.key, output.callback);
			});
		}
		if (webCompoent.inputs) {
			webCompoent.inputs.forEach(input => {
				element[input.key] = input.value;
			});
		}
		setTimeout(() => content.appendChild(element));
	// }
};

export const addScriptTag = (fileName: string): void => {
	const scriptId = `${fileName}_script`;
	const tmpScript = document.getElementById(scriptId);
	if (!tmpScript) {
		const scriptTag = document.createElement(`script`);

		scriptTag.setAttribute('src', `assets/ng-elements/${fileName}.js`);
		scriptTag.setAttribute('type', 'text/javascript');
		scriptTag.setAttribute('id', `${fileName}_script`);

		document.body.appendChild(scriptTag);
	}

};

export interface IWebComponent {
	tag?: string;
	file: string;
	positionId: string;
	html: string;
	inputs?: Array<{ key: string, value: any }>;
	outputs?: Array<{ key: string, callback: any }>;
}

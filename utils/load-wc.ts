export const addElementToRef = (webCompoent: IWebComponent): void => {
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

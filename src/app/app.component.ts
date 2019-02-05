import { Component, Renderer } from '@angular/core';
import { addScriptTag, addElementToRef, IWebComponent } from 'utils/load-wc';

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
		html: '<first-app message="Prueba de Componente Web 2" anydata="[1, 2, 3]" timer="timer($event)"></first-app>',
		inputs: [
			{
				key: 'message',
				value: 'Prueba de Componente Web 2'
			},
			{
				key: 'anydata',
				value: [1, 2, 3]
			}
		],
		outputs: [
			{
				key: 'timer',
				callback: this.timer
			}
		]
	};

	wc2: IWebComponent = {
		tag: 'second-app',
		file: 'wc2',
		html: '<second-app></second-app>',
		positionId: 'div2',
	};

	constructor(
		private renderer: Renderer
	){}

	addWebCompoent(webCompoent: IWebComponent): void {
		addScriptTag(webCompoent.file);
		addElementToRef(webCompoent, this.renderer);
	}

	timer(data): void {
		console.log(data);
	}

}

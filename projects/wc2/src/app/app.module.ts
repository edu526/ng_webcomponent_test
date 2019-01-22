import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WC2Component } from './wc2/wc2.component';

@NgModule({
	declarations: [WC2Component],
	imports: [BrowserModule],
	entryComponents: [WC2Component]
})
export class AppModule {
	constructor(
		private injector: Injector
	) {
	}

	ngDoBootstrap() {
		const name = 'second-app';
		// if (!customElements.get(name)) {
		const element = createCustomElement(WC2Component, { injector: this.injector });
		customElements.define(name, element);
		// }
	}
}

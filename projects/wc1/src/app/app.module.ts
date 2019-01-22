import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { WC1Component } from './wc1/wc1.component';

@NgModule({
	declarations: [WC1Component],
	imports: [BrowserModule, HttpClientModule],
	entryComponents: [WC1Component]
})
export class AppModule {

	constructor(
		private injector: Injector
	) {
	}

	ngDoBootstrap() {
		const name = 'first-app';
		// if (!customElements.get(name)) {
		const element = createCustomElement(WC1Component, { injector: this.injector });
		customElements.define(name, element);
		// }
	}
}

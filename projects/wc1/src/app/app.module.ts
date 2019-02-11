import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { WC1Component } from './wc1/wc1.component';
import { appReducers } from 'src/app/store/reducers/app.reducers';
import { ConfigEffects } from 'src/app/store/effects/config.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
	declarations: [WC1Component],
	imports: [
		BrowserModule,
		HttpClientModule,
		StoreModule,
		EffectsModule.forRoot([ConfigEffects])
		// StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
	],
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

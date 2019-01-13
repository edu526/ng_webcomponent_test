import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-wc1',
	template: `
    <link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script" rel="stylesheet">
    <div class="component_container">
      <h1>{{message}}</h1>
      <img src="{{imagen}}" *ngIf="imagen"/>
    </div>
  `,
	styles: [`
    .component_container {
      font-family: 'Nanum Pen Script', cursive;
      width: 580px;
      height: auto;
      border: 1px solid #CECECE;
      padding: 20px;
      text-align: center;
      background: #F2F2F2;
    }
    .component_container img {
      width: 100%;
      height: auto;
    }
  `],
	encapsulation: ViewEncapsulation.Emulated
})
export class WC1Component implements OnInit {

	public imagen;
	@Input() message = 'Dog of The Day';

	constructor(
		public http: HttpClient
	) { }

	ngOnInit() {
		this.http.get(environment.api_url).subscribe((dotd: any) => {
			this.imagen = dotd.message;
		});
	}
}

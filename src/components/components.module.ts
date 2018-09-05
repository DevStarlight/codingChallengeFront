import { NgModule } from '@angular/core';

import { IonicModule } from "ionic-angular";

import { LoadingComponent } from './loading/loading';
import { ToastComponent } from './toast/toast';

@NgModule({
	declarations: [
		LoadingComponent,
		ToastComponent
	],
	imports: [IonicModule],
	exports: [
		LoadingComponent,
		ToastComponent
	],
	providers: [
		LoadingComponent,
		ToastComponent
	]
})

export class ComponentsModule {}

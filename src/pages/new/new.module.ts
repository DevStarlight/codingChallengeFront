import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPage } from './new';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
		NewPage
  	],
	imports: [
		IonicPageModule.forChild(NewPage),
		ComponentsModule
	],
	exports: [
		NewPage
	]
})

export class HomeModule {}

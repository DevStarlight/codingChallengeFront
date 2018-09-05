import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer-provider';
import { LoadingComponent } from '../../components/loading/loading';
import { ToastComponent } from '../../components/toast/toast';

@IonicPage()
@Component({
	selector: 'page-new',
	templateUrl: 'new.html'
})

export class NewPage {
	
	name: String;
	bags: Number;

	constructor(
		private customerProvider: CustomerProvider,
		private loading: LoadingComponent,
		private navCtrl: NavController,
		private toast: ToastComponent
	) {}

	/**
	 * State of the app
	 */
	ionViewDidLoad() {
	}
	
	createCustomer() {
		this.loading.createAnimation('Creating customer...');
		this.customerProvider.createCustomer(this.name, this.bags).then(response => {
			this.loading.stopAnimation();
			this.navCtrl.pop();
		}).catch(e => {
			this.toast.setToastError(e);
		})
	}

}

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer-provider';
import { LoadingComponent } from '../../components/loading/loading';
import { ToastComponent } from '../../components/toast/toast';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	customerList: String;
	offset: number;
	limit: number;

	constructor(
		private loading: LoadingComponent,
		private customerProvider: CustomerProvider,
		private navCtrl: NavController,
		private toast: ToastComponent
	) { }

	/**
	 * State of the app
	 */
	ionViewDidLoad() {
		this.offset = 0;
		this.limit = 5;
	}

	/**
	 * State of the app
	 */
	ionViewDidEnter() {
		this.customerProvider.clearCustomers();
		this.getCustomers();
	}

	/**
	 * Starts a loading animation meanwhile is loading the list of customers.
	 * After the response, thow an error or load the list and stops the animation
	 */
	getCustomers() {
		this.loading.createAnimation('Cargando listado...');
		return this.customerProvider.getCustomers(this.offset, this.limit).then(response => {
			this.offset += this.limit;
			this.customerList = response;
			this.loading.stopAnimation();
		});
	}

	/**
	 * Launch an infinite scroll event to load more customers
	 * @param infiniteScroll Event of infinite scroll
	 */
	doInfinite(infiniteScroll) {
		this.getCustomers().then(() => {
			setTimeout(() => {
				infiniteScroll.complete();
			}, 500);
		}).catch(e => {
			this.toast.setToastError(e);
		});
	}

	/**
	 * Routing - Redirect to new customer page
	 */
	pushNewCreateDishPage() {
		this.navCtrl.push('NewPage');
	}

}

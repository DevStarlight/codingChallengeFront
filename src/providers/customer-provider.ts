import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { GlobalProvider } from './global-provider';

@Injectable()
export class CustomerProvider {

	serverURL: String;
	customerList: any;

	constructor(
		private http: Http,
		private globalProvider: GlobalProvider
	) {
		this.serverURL = this.globalProvider.serverURL;
		this.customerList = [];
	}

	public getCustomers(offset, limit) {
		let path = `${this.serverURL}customer?offset=${offset || 0}&limit=${limit || 2000}`;
		return this.http.get(path).toPromise().then(response => {
			const data = response.json();
			for (let i = 0; i < data.length; i += 1) {
				this.customerList.push(data[i]);
			}
			return this.customerList;
		});
	}

	public createCustomer(name, bags) {
		return this.http.post(
			`${this.serverURL}customer`,
			JSON.stringify({ name: name, bags: bags }),
		).toPromise().then(response => {
			return response.json();
		});
	}

	public clearCustomers() {
		this.customerList = [];
	}
}

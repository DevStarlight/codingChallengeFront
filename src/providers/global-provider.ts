import { Injectable } from '@angular/core';

// Provider for global variables & app stuff
@Injectable()
export class GlobalProvider {

	public serverURL: String = "http://backend:3000/"; // Development

	constructor() {}
}

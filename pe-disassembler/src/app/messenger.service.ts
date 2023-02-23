import { Injectable } from '@angular/core';
import Message from './message';

@Injectable({
	providedIn: 'root'
})
export class MessengerService {

	static MESSAGE_LIFETIME = 3000; // milliseconds

	messages: Message[] = [];

	constructor() { }

	getMessages(): Message[] {

		return this.messages;
	}


}

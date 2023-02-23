import { Component } from '@angular/core';
import Message from '../message';

import { MessengerService } from '../messenger.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

	constructor(private messengerService: MessengerService) { }

	getMessages(): Message[] {

		return this.messengerService.getMessages();
	}
}

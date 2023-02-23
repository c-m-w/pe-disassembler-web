import { Component } from '@angular/core';
import getTime from '../getTime';
import Message from '../message';

import { MessengerService } from '../messenger.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

	constructor(private messengerService: MessengerService) { 

        messengerService.addMessage(new Message(Message.M_INFO, "info"))
        messengerService.addMessage(new Message(Message.M_SUCCESS, "success"))
        messengerService.addMessage(new Message(Message.M_ERROR, "error"))
    }

	getMessages(): Message[] {

		return this.messengerService.getMessages();
	}

    isInfoMessage(message: Message): boolean {

        return message.type === Message.M_INFO;
    }

    isSuccessMessage(message: Message): boolean {

        return message.type === Message.M_SUCCESS;
    }

    isErrorMessage(message: Message): boolean {

        return message.type === Message.M_ERROR;
    }
}

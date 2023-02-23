import { Injectable } from '@angular/core';
import getTime from './getTime';
import Message from './message';

@Injectable({
	providedIn: 'root'
})
export class MessengerService {

	static MESSAGE_LIFETIME = 6e3; // milliseconds
    static WANE_TIME = 500;

	messages: Message[] = [];

	constructor() { }

	getMessages(): Message[] {

		return this.messages;
	}

    addMessage(message: Message) {

        this.messages.push(message);
        setTimeout(() => {

            message.waning = true;

            setTimeout(() => {

                this.messages = this.messages.filter(m => m !== message);
            }, MessengerService.WANE_TIME);
        }, MessengerService.MESSAGE_LIFETIME - MessengerService.WANE_TIME);
    }

    timeUntilDeath(message: Message): number {

        return MessengerService.MESSAGE_LIFETIME - (getTime() - message.time);
    }
}

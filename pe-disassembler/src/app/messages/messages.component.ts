import { Component } from "@angular/core";
import {
    trigger,
    query,
    transition,
    animate,
    style,
    stagger,
    group
} from "@angular/animations";

import Message from "../message";

import { MessengerService } from "../messenger.service";

@Component({
    selector: "app-messages",
    templateUrl: "./messages.component.html",
    styleUrls: ["./messages.component.css"],
    animations: [
        trigger("bounceIn", [
            transition(":increment", [
                group([
                    query(":enter", [
                        style({ transform: "translateY(100%)", opacity: 0 }),
                        animate("500ms 500ms cubic-bezier(0,1.14,.75,.99)", style({ transform: "*", opacity: 1 })),
                    ])
                ])
            ]),
            transition(":decrement", [
                query(":leave", [
                    animate(500, style({transform: "translateY(100%)", opacity: 0}))
                ])
            ])
        ])
    ]
})
export class MessagesComponent {

    constructor(private messengerService: MessengerService) { }

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

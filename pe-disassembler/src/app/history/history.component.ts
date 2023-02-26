import { Component, HostBinding, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {
    trigger,
    transition,
    query,
    style,
    stagger,
    animate
} from "@angular/animations";

import Message from '../message';

import { MessengerService } from '../messenger.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
    animations: [
        trigger('fadeAnimation', [
            transition(':increment', [
                query(':enter', [
                    style({ opacity: 0, transform: 'translateY(-100px)' }),
                    stagger(100, [
                        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
                            style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ]),
    ]
})
export class HistoryComponent implements OnInit {
    @HostBinding("@fadeAnimation")

    data: Array<any> = [];
    n: number = 0;

    constructor(private apiService: ApiService,
        private messengerService: MessengerService) { }

    ngOnInit(): void {

        setTimeout(() => {
            this.messengerService.addMessage(new Message(Message.M_INFO, "Requesting PE history..."))

            setTimeout(() => {

                this.apiService.getData()
                    .subscribe(data => {

                        this.messengerService.addMessage(new Message(Message.M_SUCCESS, "Retrieved PE history"))
                        this.data = data.data;

                        if (this.data?.length === 0) {

                            this.messengerService.addMessage(new Message(Message.M_INFO, "PE history is empty"))
                        } else {

                            this.n = 5;
                        }
                    });
            }, 500);
        }, 1000)
    }

    incrementView(): void {

        this.n += 5;
    }
}

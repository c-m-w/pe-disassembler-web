import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import Message from '../message';

import { MessengerService } from '../messenger.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {

    data?: Array<any>;
    n: number = 5;

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
                    });
            }, 500);
        }, 1000)
    }

    incrementView(): void {

        this.n += 5;
    }
}

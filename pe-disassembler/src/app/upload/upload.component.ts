import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import Message from '../message';
import { MessengerService } from '../messenger.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent {

    constructor(private apiService: ApiService,
        private messengerService: MessengerService,
        private route: Router) { }

    uploadFile(e: any): void {

        this.messengerService.addMessage(new Message(Message.M_INFO, "Begin uploading file..."));
        const file = e.target.files[0];

        this.apiService.uploadFile(file)
            .subscribe(data => {
                if (data && data.success) {

                    this.messengerService.addMessage(new Message(Message.M_SUCCESS, "Uploaded file"));
                    this.route.navigate([`detail/${data.data}`]);
                } else if (data) {
                    // todo error
                }
            });
    }
}

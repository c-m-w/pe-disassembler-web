import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {
    trigger,
    transition,
    query,
    style,
    state,
    animate
} from "@angular/animations"

import { ApiService } from '../api.service';
import Message from '../message';
import { MessengerService } from '../messenger.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css'],
    animations: [
        trigger("imageLoaded", [
            state("false",
                style({
                    opacity: 0,
                    transform: "scale(0.5)"
                })
            ),
            state("true",
                style({
                    opacity: 1,
                    transform: "scale(1)"
                })
            ),
            transition("false => true", [
                animate("500ms cubic-bezier(.32,1.93,.74,.83)")
            ])
        ])
    ]
})
export class UploadComponent {

    imageLoaded: boolean = false;
    uploading: boolean = false;
    uploaded: boolean = false;

    constructor(private apiService: ApiService,
        private messengerService: MessengerService,
        private route: Router) { }

    uploadFile(e: any): void {

        this.messengerService.addMessage(new Message(Message.M_INFO, "Begin uploading file..."));
        this.uploading = true;
        const file = e.target.files[0];

        this.apiService.uploadFile(file)
            .subscribe(data => {

                this.uploading = false;
                if (data && data.success) {

                    this.uploaded = true;
                    this.messengerService.addMessage(new Message(Message.M_SUCCESS, "Uploaded file"));

                    setTimeout(() => {
                        this.route.navigate([`detail/${data.data}`]);
                    }, 2000)
                } else if (data) {

                    this.messengerService.addMessage(new Message(Message.M_ERROR, data.message));
                }
            });
    }
}

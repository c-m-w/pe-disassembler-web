import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent {

    constructor(private apiService: ApiService,
        private route: Router) { }

    uploadFile(e: any): void {

        const file = e.target.files[0]

        this.apiService.uploadFile(file)
            .subscribe(data => {
                if (data.success) {

                    this.route.navigate([`detail/${data.data}`])
                } else {
                    // todo error
                }
            });
    }
}

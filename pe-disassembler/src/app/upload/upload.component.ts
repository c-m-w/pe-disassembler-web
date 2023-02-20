import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent {

    constructor(private apiService: ApiService) { }

    uploadFile(e: any): void {

        let file = e.target.files[0]

        this.apiService.uploadFile(file);
    }
}

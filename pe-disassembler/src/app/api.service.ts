import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    uploadFile(f: File): void {

        const formData: FormData = new FormData();

        formData.append("fileKey", f, f.name);

        console.log("requesting..");
        this.http
            .post("http://127.0.0.1:5000/api/upload", formData, {headers: {}})
            .subscribe();
    }
}

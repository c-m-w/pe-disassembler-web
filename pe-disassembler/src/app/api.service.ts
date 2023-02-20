import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    uploadFile(f: File): Observable<any> {

        const formData: FormData = new FormData();

        formData.append("fileKey", f, f.name);

        console.log("requesting..");
        return this.http.post("http://127.0.0.1:5000/api/upload", formData, {headers: {}});
    }

    getData(): Observable<any> {

        return this.http.get("http://127.0.0.1:5000/api/data");
    }
}

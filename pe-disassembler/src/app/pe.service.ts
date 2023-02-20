import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";
import { ApiService } from './api.service';

import { data } from './static';

@Injectable({
    providedIn: 'root'
})
export class PeService {

    constructor(private apiService: ApiService) { }

    getData(): Observable<Array<any>> {

        return of(data);
    }
}

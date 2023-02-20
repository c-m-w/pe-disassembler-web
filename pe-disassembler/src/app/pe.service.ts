import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";

import { data } from './static';

@Injectable({
    providedIn: 'root'
})
export class PeService {

    constructor() { }

    getData(): Observable<Array<any>> {

        return of(data);
    }
}

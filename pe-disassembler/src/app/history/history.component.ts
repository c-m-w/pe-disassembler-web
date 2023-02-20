import { Component } from '@angular/core';

import { PeService } from '../pe.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {

    data?: Array<any>;

    constructor(private peService: PeService) { }

    ngOnInit(): void {

        this.peService.getData()
            .subscribe(data => this.data = data);
    }
}

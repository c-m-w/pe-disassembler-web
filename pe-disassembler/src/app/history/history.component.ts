import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {

    data?: Array<any>;
    n: number = 5;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {

        this.apiService.getData()
            .subscribe(data => {
                console.log(data);
                this.data = data.data;
            });
    }

    incrementView(): void {

        console.log("test");
        this.n += 5;
    }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { ApiService } from '../api.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    pe?: any;
    showSections: boolean[] = [false, false, false, false, false];

    constructor(private apiService: ApiService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {

        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

        this.apiService.getData()
            .subscribe(data => {
                const pe = data.data[id-1];

                console.log(data.data);
                this.pe = {...pe, data: JSON.parse(pe.data)};
                console.log(this.pe);
            });
    }

    toggleSection(section: number): void {

        this.showSections[section] = !this.showSections[section];
    }

    goBack(): void {

        this.location.back();
    }
}

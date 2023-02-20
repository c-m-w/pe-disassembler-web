import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { PeService } from '../pe.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    pe?: any;
    showSections: boolean[] = [false, false, false, false, false];

    constructor(private peService: PeService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {

        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

        this.peService.getData()
            .subscribe(data => {this.pe = data[id - 1]; console.log(data[id-1])});
    }

    toggleSection(section: number): void {

        this.showSections[section] = !this.showSections[section];
    }

    goBack(): void {

        this.location.back();
    }
}

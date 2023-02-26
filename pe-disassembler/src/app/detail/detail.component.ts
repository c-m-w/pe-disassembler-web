import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import {
    trigger,
    transition,
    query,
    style,
    animate,
    group,
    animateChild,
    stagger
} from "@angular/animations";

import { ApiService } from '../api.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    animations: [
        trigger("headerAnimation", [
            transition(":enter", [
                query(".section-header", [
                    style({ transform: "translateX(-10%)", opacity: 0 }),
                    stagger(100, [
                        animate("1000ms 100ms cubic-bezier(.17,2,.25,.87)", style({
                            transform: "translateX(0)",
                            opacity: 1
                        })),
                        animateChild()
                    ])
                ])
            ])
        ]),
        trigger("sectionAnimation", [
            transition(":increment", [
                group([
                    query("section:enter", [
                        style({ height: 0, opacity: 0 }),
                        animate("500ms cubic-bezier(.17,2,.25,.87)", style({
                            height: "*",
                            opacity: 1
                        }))
                    ]),
                    query(".section-header", [
                        animateChild()
                    ])
                ])
            ])
        ])
    ]
})
export class DetailComponent {

    pe?: any;
    showCounter: number = 0;
    showSections: boolean[] = [false, false, false, false, false];

    constructor(private apiService: ApiService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {

        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

        this.apiService.getData()
            .subscribe(data => {
                const pe = data.data[id - 1];

                console.log(data.data);
                this.pe = { ...pe, data: JSON.parse(pe.data) };
                console.log(this.pe);
            });
    }

    toggleSection(section: number): void {

        this.showSections[section] = !this.showSections[section];
        this.showCounter += this.showSections[section] ? 1 : -1;
    }

    goBack(): void {

        this.location.back();
    }
}

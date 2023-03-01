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
                    query("section:enter, .data-display", [
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
        ]),
        trigger("totalImports", [
            transition(":increment", [
                query(".module:enter", [
                    style({height: 0, opacity: 0}),
                    animate("500ms ease-out", style({
                        height: "*",
                        opacity: 1
                    }))
                ])
            ]),
            transition(":decrement", [
                query(".module:leave", [
                    style({height: "*", opacity: 1}),
                    animate("500ms ease-in", style({
                        height: 0,
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
})
export class DetailComponent {

    pe?: any;
    filteredImports: Array<any> = [];
    totalImports: number = 0;
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

                this.pe = { ...pe, data: JSON.parse(pe.data) };
                this.filterImports("");
            });
    }

    filterImports(filter: string): void {

        filter = filter ? filter.trim().toLowerCase() : '';

        this.filteredImports = this.pe.data.imports.filter((module: any) => module.module.toLowerCase().includes(filter));
        this.totalImports = this.filteredImports.length
    }

    toggleSection(section: number): void {

        this.showSections[section] = !this.showSections[section];
        this.showCounter += this.showSections[section] ? 1 : -1;

        if (section === 3) {
            
            this.filterImports("");
        }
    }

    goBack(): void {

        this.location.back();
    }
}

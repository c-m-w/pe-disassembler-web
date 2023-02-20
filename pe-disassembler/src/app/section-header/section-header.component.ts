import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-section-header',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent {

    @Input() name!: string;
    @Input() enabled!: boolean;
    @Output() onToggle: EventEmitter<any> = new EventEmitter();
}

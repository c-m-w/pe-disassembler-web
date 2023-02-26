import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import {
    trigger,
    query,
    transition,
    animate,
    style,
    animateChild
} from "@angular/animations";

@Component({
    selector: 'app-section-header',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.css'],
    animations: [
        trigger("arrowAnimation", [
            transition("false => true", [
                query("img", [
                    style({
                        transform: "rotate(0)"
                    }),
                    animate("500ms cubic-bezier(0,2.25,.62,.81)", style({
                        transform: "*"
                    })),
                    animateChild()
                ])
            ]),
            transition("true => false", [
                query("img", [
                    style({
                        transform: "rotate(90deg)"
                    }),
                    animate("500ms cubic-bezier(0,2.25,.62,.81)", style({
                        transform: "*"
                    })),
                ]),
                animateChild()
            ])
        ])
    ]
})
export class SectionHeaderComponent {

    @Input() name!: string;
    @Input() enabled!: boolean;
    @Input() even!: boolean;
    @Output() onToggle: EventEmitter<any> = new EventEmitter();
}

import { Component } from "@angular/core";
import { ChildrenOutletContexts } from "@angular/router";
import {
    trigger,
    transition,
    style,
    query,
    animate,
    animateChild,
    group
} from "@angular/animations";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    animations: [
        trigger("pageAnimations", [
            transition("home => detail", [
                style({ position: "relative" }),
                query(":enter, :leave", style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%"
                })),
                query(":enter", [
                    style({
                        left: "100%",
                        opacity: 0
                    })
                ]),
                query(":leave", animateChild()),
                group([
                    query(":leave", [
                        animate("300ms ease-out", style({
                            left: "-100%",
                            opacity: 0
                        }))
                    ]),
                    query(":enter", [
                        animate("300ms ease-out", style({
                            left: "0%",
                            opacity: 1
                        }))
                    ]),
                ]),
            ]),
            transition("detail => home", [
                style({ position: "relative" }),
                query(":enter, :leave", style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%"
                })),
                query(":enter", [
                    style({
                        left: "-100%",
                        opacity: 0
                    })
                ]),
                query(":leave", animateChild()),
                group([
                    query(":leave", [
                        animate("300ms ease-out", style({
                            left: "100%",
                            opacity: 0
                        }))
                    ]),
                    query(":enter", [
                        animate("300ms ease-out", style({
                            left: "0%",
                            opacity: 1
                        }))
                    ]),
                ]),
                query(":enter", [animateChild()])
            ])
        ])
    ]
})
export class AppComponent {
    title = "pe-disassembler";

    constructor(private contexts: ChildrenOutletContexts) { }

    getPage(): string {

        return this.contexts.getContext("primary")?.route?.snapshot?.data?.["page"];
    }
}

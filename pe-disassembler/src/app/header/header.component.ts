import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title: string = "Windows PE Disassembler";
    caption: string = "View the contents of a 32-bit Windows PE"
}

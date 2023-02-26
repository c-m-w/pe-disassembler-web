import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { UploadComponent } from './upload/upload.component';
import { HistoryComponent } from './history/history.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        DetailComponent,
        UploadComponent,
        HistoryComponent,
        SectionHeaderComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

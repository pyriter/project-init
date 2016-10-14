import {RouterModule} from '@angular/router/src';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import AppComponent from "./app.component";
import HomeComponent from "./home.component";
import AboutComponent from "./about.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: "", component: HomeComponent },
            { path: "about", component: AboutComponent },
            { path: "**", component: HomeComponent },
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
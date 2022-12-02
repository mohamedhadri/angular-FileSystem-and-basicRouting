import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SubCompModule } from './sub-comp/sub-comp.module';

import { RouterModule } from '@angular/router';
import { ChildCompComponent } from './sub-comp/child-comp/child-comp.component';
import { SubCompComponent } from './sub-comp/sub-comp.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SubCompModule,
      RouterModule.forRoot([]),
      AppRoutingModule

    ]
})
export class AppModule { }

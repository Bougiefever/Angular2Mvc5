/// <reference path="../../typings/index.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CollapseOnClick } from './collapse-on-click.directive';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, CollapseOnClick],
    bootstrap: [AppComponent]
})
export class AppModule { }
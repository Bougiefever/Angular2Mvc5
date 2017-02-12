/// <reference path="../../typings/index.d.ts" />

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LessonsList } from './lessons-list.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, LessonsList],
    bootstrap: [AppComponent],

})
export class AppModule { }

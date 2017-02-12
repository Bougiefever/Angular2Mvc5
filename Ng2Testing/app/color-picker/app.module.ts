/// <reference path="../../typings/index.d.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker.component';
import { ColorPreviewerComponent } from './color-previewer.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ColorPickerComponent, ColorPreviewerComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

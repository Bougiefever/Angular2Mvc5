import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorSample } from './color-sample';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ColorSample],
    bootstrap: [AppComponent]
})
export class AppModule { }

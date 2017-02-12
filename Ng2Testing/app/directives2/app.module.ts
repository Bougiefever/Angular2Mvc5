import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Hero} from './hero';
import { Heroes} from './heroes';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, Hero, Heroes],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ImagesList } from './images-list.component';
import { ImagesService } from './images.service';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, ImagesList],
    bootstrap: [AppComponent],
    providers: [ImagesService]
})
export class AppModule { }

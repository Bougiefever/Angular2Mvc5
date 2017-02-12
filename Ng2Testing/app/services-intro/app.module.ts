import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LessonsList } from './lessons-list.component';
import { LessonsService } from './lessons.service';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, LessonsList],
    bootstrap: [AppComponent],
    providers: [LessonsService]
})
export class AppModule { }

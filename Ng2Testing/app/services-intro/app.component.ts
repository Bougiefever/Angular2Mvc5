import { Component } from '@angular/core';
import "rxjs/Rx";
import { LessonsList } from './lessons-list.component';
import { Http } from '@angular/http';

import { lessonsData } from './lessons';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    name = 'Services';

    lessons = lessonsData;

    constructor(private http: Http) {}
}
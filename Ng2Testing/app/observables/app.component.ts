import { Component } from '@angular/core';
import "rxjs/Rx";
import { LessonsList } from './images-list.component';

import { lessonsData } from "./images";
import { LessonsService } from './lessons.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    name = 'Observables';

    lessons = lessonsData;

    constructor(private lessonsService: LessonsService) {}
}
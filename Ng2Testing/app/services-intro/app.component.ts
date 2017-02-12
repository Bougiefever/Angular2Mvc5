import { Component } from '@angular/core';
import "rxjs/Rx";
import { LessonsList } from './lessons-list.component';

import { lessonsData } from './lessons';
import { LessonsService } from './lessons.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    name = 'Services';

    lessons = lessonsData;

    constructor(private lessonsService: LessonsService) {}
}
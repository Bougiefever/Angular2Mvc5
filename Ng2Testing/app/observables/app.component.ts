import { Component } from '@angular/core';
import "rxjs/Rx";
import { LessonsList } from './images-list.component';

import { imagesData } from "./images";
import { ImagesService } from './images.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    name = 'Observables';

    images = imagesData;

    constructor(private imagesService: ImagesService) {}
}
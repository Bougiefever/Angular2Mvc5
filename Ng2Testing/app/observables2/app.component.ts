import { Component } from '@angular/core';
import "rxjs/Rx";
import { ImagesList } from './images-list.component';
import { initObservable } from "./init-observable";
import { Observable } from "rxjs/Observable";
import { ImagesService } from './images.service';
import { Image } from './image';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    name = 'Observables';

    images$: Observable<Image[]>;

    constructor(private imagesService: ImagesService) {
        this.images$ = imagesService.loadImages();
        initObservable();
    }

}
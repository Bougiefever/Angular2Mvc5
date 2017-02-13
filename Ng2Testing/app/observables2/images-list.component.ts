import {Component, Input} from "@angular/core";
import { ImagesService } from './images.service';
import { Image } from './image';

@Component({
    selector:'images-list',
    template: `
            <table class="lessons-list card card-strong">
                <tr *ngFor="let image of images">
                    <td>
                        <img class="lesson-logo" 
                        src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">  
                    </td>
                    <td>{{image.id}}</td>
                    <td>
                        {{image.caption}}    
                    </td>
                    <td>
                        <button (click)="imagesService.delete(image.id)">Delete</button>
                    </td>
                </tr>
           </table>

        `
})
export class ImagesList {
    @Input()
    images: Image[] = [];

    constructor(private imagesService: ImagesService) {}
}
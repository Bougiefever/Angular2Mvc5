import { Injectable } from "@angular/core";
import { imagesData } from "./images";

@Injectable()
export class ImagesService {

    lessons = [];

    constructor() {
        this.loadLessons();
    }

    loadLessons() {
        this.lessons = imagesData;
    }

}
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { imagesData } from "./images";
import { Image } from './image';

@Injectable()
export class ImagesService {

    images: Image[] = [];

    constructor(private http: Http) {
        this.loadImages();
    }

    loadImages() : Observable<Image[]>  {
        return this.http.get('http://localhost/MediaApi/api/Images')
            .map(res => res.json().data);
        //.subscribe(images => {
        //    this.images = images as Image[];
        //});
    }

    delete(id: number) {
        console.log(`delete ${id}`);
    }
}
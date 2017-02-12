import { Injectable } from "@angular/core";
import { lessonsData } from "./images";

@Injectable()
export class LessonsService {

    lessons = [];
    
    constructor() {
        this.loadLessons();
    }
        
    loadLessons() {
        this.lessons = lessonsData;
    }
    
}
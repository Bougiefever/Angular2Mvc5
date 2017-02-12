

import { Component, Input, NgZone, Inject, EventEmitter} from "@angular/core";

@Component({
    moduleId: module.id,
    selector:'color-sample',
    templateUrl: 'color-sample.html',
    styleUrls: ['color-sample.css']
})
export class ColorSample {

    @Input()
    colorSelected: string;

    //sampleColor = 'azure';
}
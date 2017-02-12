import { Component, Input, Output, EventEmitter } from '@angular/core';

let BLUE = '#b13138';

let RED = '#1976d2';

@Component({
    moduleId: module.id,
    selector: 'color-picker',
    templateUrl: 'color-picker.component.html',
    styleUrls: ['color-picker.component.css']
})
export class ColorPickerComponent {
    @Input()
    colorpick: string;

    @Output("ocolor")
    colorOutput = new EventEmitter();

    choose(newcolor: string) {
        this.colorpick = newcolor;
        this.colorOutput.emit(newcolor);
    }

    reset() {
        this.choose('black');
    }
}
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'color-previewer',
    templateUrl: 'color-previewer.component.html',
    styleUrls: ['color-previewer.component.css']
})
export class ColorPreviewerComponent {
    @Input()
    previewcolor:string;
}
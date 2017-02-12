"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BLUE = '#b13138';
var RED = '#1976d2';
var ColorPickerComponent = (function () {
    function ColorPickerComponent() {
        this.colorOutput = new core_1.EventEmitter();
    }
    ColorPickerComponent.prototype.choose = function (newcolor) {
        this.colorpick = newcolor;
        this.colorOutput.emit(newcolor);
    };
    ColorPickerComponent.prototype.reset = function () {
        this.choose('black');
    };
    return ColorPickerComponent;
}());
__decorate([
    core_1.Input()
], ColorPickerComponent.prototype, "colorpick", void 0);
__decorate([
    core_1.Output("ocolor")
], ColorPickerComponent.prototype, "colorOutput", void 0);
ColorPickerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'color-picker',
        templateUrl: 'color-picker.component.html',
        styleUrls: ['color-picker.component.css']
    })
], ColorPickerComponent);
exports.ColorPickerComponent = ColorPickerComponent;
//# sourceMappingURL=color-picker.component.js.map
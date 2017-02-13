"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var images_service_1 = require("./images.service");
var ImagesList = (function () {
    function ImagesList(imagesService) {
        this.imagesService = imagesService;
        this.images = [];
    }
    return ImagesList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ImagesList.prototype, "images", void 0);
ImagesList = __decorate([
    core_1.Component({
        selector: 'images-list',
        template: "\n            <table class=\"lessons-list card card-strong\">\n                <tr *ngFor=\"let image of images\">\n                    <td>\n                        <img class=\"lesson-logo\" \n                        src=\"https://material.angularjs.org/latest/img/icons/angular-logo.svg\">  \n                    </td>\n                    <td>{{image.id}}</td>\n                    <td>\n                        {{image.caption}}    \n                    </td>\n                    <td>\n                        <button (click)=\"imagesService.delete(image.id)\">Delete</button>\n                    </td>\n                </tr>\n           </table>\n\n        "
    }),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], ImagesList);
exports.ImagesList = ImagesList;

//# sourceMappingURL=images-list.component.js.map

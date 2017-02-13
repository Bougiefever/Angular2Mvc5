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
var http_1 = require("@angular/http");
var ImagesService = (function () {
    function ImagesService(http) {
        this.http = http;
        this.images = [];
        this.loadImages();
    }
    ImagesService.prototype.loadImages = function () {
        return this.http.get('http://localhost/MediaApi/api/Images')
            .map(function (res) { return res.json().data; });
        //.subscribe(images => {
        //    this.images = images as Image[];
        //});
    };
    ImagesService.prototype.delete = function (id) {
        console.log("delete " + id);
    };
    return ImagesService;
}());
ImagesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ImagesService);
exports.ImagesService = ImagesService;

//# sourceMappingURL=images.service.js.map

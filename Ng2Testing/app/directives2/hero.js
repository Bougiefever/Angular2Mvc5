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
var Hero = (function () {
    function Hero() {
        this.marvel = false;
    }
    return Hero;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Hero.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Hero.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Hero.prototype, "marvel", void 0);
Hero = __decorate([
    core_1.Directive({
        selector: 'hero',
    })
], Hero);
exports.Hero = Hero;

//# sourceMappingURL=hero.js.map

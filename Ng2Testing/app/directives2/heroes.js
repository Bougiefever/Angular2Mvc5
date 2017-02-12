"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var HEROES = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
];
var Heroes = (function () {
    function Heroes() {
    }
    Object.defineProperty(Heroes.prototype, "styles", {
        get: function () {
            return { 'color': 'pink', 'text-decoration': 'underline' };
        },
        enumerable: true,
        configurable: true
    });
    Heroes.prototype.classes = function (hero) {
        return {
            marvel: hero.marvel,
            hulk: hero.name === "Hulk"
        };
    };
    return Heroes;
}());
__decorate([
    core_1.ContentChildren(hero_1.Hero)
], Heroes.prototype, "heroes", void 0);
Heroes = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'heroes',
        templateUrl: 'heroes.html',
        styleUrls: ['lesson.css']
    })
], Heroes);
exports.Heroes = Heroes;
//# sourceMappingURL=heroes.js.map
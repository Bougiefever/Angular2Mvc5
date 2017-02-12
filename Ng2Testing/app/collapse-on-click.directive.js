"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CollapseOnClick = (function () {
    function CollapseOnClick() {
        this.collapsedOutput = new core_1.EventEmitter();
    }
    Object.defineProperty(CollapseOnClick.prototype, "collapsed", {
        get: function () {
            return this.isCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    CollapseOnClick.prototype.toggle = function () {
        this.isCollapsed = !this.isCollapsed;
        this.collapsedOutput.emit(this.isCollapsed);
    };
    return CollapseOnClick;
}());
__decorate([
    core_1.Input("collapsed")
], CollapseOnClick.prototype, "isCollapsed", void 0);
__decorate([
    core_1.Output("collapsed")
], CollapseOnClick.prototype, "collapsedOutput", void 0);
__decorate([
    core_1.HostBinding('class.collapsed')
], CollapseOnClick.prototype, "collapsed", null);
__decorate([
    core_1.HostListener('click')
], CollapseOnClick.prototype, "toggle", null);
CollapseOnClick = __decorate([
    core_1.Directive({
        selector: '[collapse-on-click]',
        exportAs: 'collapsible'
    })
], CollapseOnClick);
exports.CollapseOnClick = CollapseOnClick;
//# sourceMappingURL=collapse-on-click.directive.js.map
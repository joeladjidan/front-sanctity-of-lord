"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatherIconsComponent = void 0;
var core_1 = require("@angular/core");
var FeatherIconsComponent = /** @class */ (function () {
    function FeatherIconsComponent() {
    }
    FeatherIconsComponent.prototype.ngOnInit = function () { };
    __decorate([
        (0, core_1.Input)("icon")
    ], FeatherIconsComponent.prototype, "icon", void 0);
    __decorate([
        (0, core_1.Input)("class")
    ], FeatherIconsComponent.prototype, "class", void 0);
    FeatherIconsComponent = __decorate([
        (0, core_1.Component)({
            selector: "app-feather-icons",
            templateUrl: "./feather-icons.component.html",
            styleUrls: ["./feather-icons.component.sass"],
        })
    ], FeatherIconsComponent);
    return FeatherIconsComponent;
}());
exports.FeatherIconsComponent = FeatherIconsComponent;

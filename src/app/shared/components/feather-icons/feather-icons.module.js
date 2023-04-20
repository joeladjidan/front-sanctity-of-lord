"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatherIconsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var feather_icons_component_1 = require("./feather-icons.component");
var angular_feather_1 = require("angular-feather");
var icons_1 = require("angular-feather/icons");
var FeatherIconsModule = /** @class */ (function () {
    function FeatherIconsModule() {
    }
    FeatherIconsModule = __decorate([
        (0, core_1.NgModule)({
            imports: [common_1.CommonModule, angular_feather_1.FeatherModule.pick(icons_1.allIcons)],
            exports: [feather_icons_component_1.FeatherIconsComponent, angular_feather_1.FeatherModule],
            declarations: [feather_icons_component_1.FeatherIconsComponent],
        })
    ], FeatherIconsModule);
    return FeatherIconsModule;
}());
exports.FeatherIconsModule = FeatherIconsModule;

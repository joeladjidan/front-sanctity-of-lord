"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationComponent = void 0;
var core_1 = require("@angular/core");
var ValidationComponent = /** @class */ (function () {
    function ValidationComponent() {
        this.customStylesValidated = false;
        this.browserDefaultsValidated = false;
        this.tooltipValidated = false;
    }
    ValidationComponent.prototype.ngOnInit = function () { };
    ValidationComponent.prototype.onSubmit1 = function () {
        this.customStylesValidated = true;
        console.log('Submit... 1');
    };
    ValidationComponent.prototype.onReset1 = function () {
        this.customStylesValidated = false;
        console.log('Reset... 1');
    };
    ValidationComponent.prototype.onSubmit2 = function () {
        this.browserDefaultsValidated = true;
        console.log('Submit... 2');
    };
    ValidationComponent.prototype.onReset2 = function () {
        this.browserDefaultsValidated = false;
        console.log('Reset... 3');
    };
    ValidationComponent.prototype.onSubmit3 = function () {
        this.tooltipValidated = true;
        console.log('Submit... 3');
    };
    ValidationComponent.prototype.onReset3 = function () {
        this.tooltipValidated = false;
        console.log('Reset... 3');
    };
    ValidationComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-validation',
            templateUrl: './validation.component.html',
            styleUrls: ['./validation.component.scss']
        })
    ], ValidationComponent);
    return ValidationComponent;
}());
exports.ValidationComponent = ValidationComponent;

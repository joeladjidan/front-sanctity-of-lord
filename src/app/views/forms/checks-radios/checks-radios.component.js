"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecksRadiosComponent = void 0;
var core_1 = require("@angular/core");
var ChecksRadiosComponent = /** @class */ (function () {
    function ChecksRadiosComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.formGroup = this.formBuilder.group({
            flexRadioGroup: this.formBuilder.group({
                flexRadioDefault: this.formBuilder.control('two')
            }),
            flexRadioGroupDisabled: this.formBuilder.group({
                flexRadioDefault: this.formBuilder.control({ value: 'two', disabled: true })
            }),
            flexCheckGroup: this.formBuilder.group({
                checkOne: [false],
                checkTwo: [true]
            }),
            flexCheckGroupDisabled: this.formBuilder.group({
                checkThree: [{ value: false, disabled: true }],
                checkFour: [{ value: true, disabled: true }]
            }),
            btnCheckGroup: this.formBuilder.group({
                checkbox1: [true],
                checkbox2: [false],
                checkbox3: [{ value: false, disabled: true }]
            }),
            btnRadioGroup: this.formBuilder.group({
                radio1: this.formBuilder.control({ value: 'Radio2' })
            })
        });
    }
    ChecksRadiosComponent.prototype.setCheckBoxValue = function (controlName) {
        var _a;
        var btnCheckGroup = this.formGroup.controls['btnCheckGroup'];
        var prevValue = (_a = btnCheckGroup.get(controlName)) === null || _a === void 0 ? void 0 : _a.value;
        var groupValue = __assign({}, btnCheckGroup.value);
        groupValue[controlName] = !prevValue;
        btnCheckGroup.patchValue(groupValue);
    };
    ChecksRadiosComponent.prototype.setRadioValue = function (value) {
        var group = this.formGroup.controls['btnRadioGroup'];
        group.setValue({ radio1: value });
    };
    ChecksRadiosComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-checks-radios',
            templateUrl: './checks-radios.component.html',
            styleUrls: ['./checks-radios.component.scss']
        })
    ], ChecksRadiosComponent);
    return ChecksRadiosComponent;
}());
exports.ChecksRadiosComponent = ChecksRadiosComponent;

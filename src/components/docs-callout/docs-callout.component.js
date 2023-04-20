"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsCalloutComponent = void 0;
var core_1 = require("@angular/core");
var package_json_1 = require("../../../package.json");
var DocsCalloutComponent = /** @class */ (function () {
    function DocsCalloutComponent() {
        this.name = '';
        this._href = 'https://coreui.io/angular/docs/';
    }
    Object.defineProperty(DocsCalloutComponent.prototype, "href", {
        get: function () {
            return this._href;
        },
        set: function (value) {
            var _a, _b, _c;
            var version = (_a = package_json_1.default === null || package_json_1.default === void 0 ? void 0 : package_json_1.default.config) === null || _a === void 0 ? void 0 : _a.coreui_library_short_version;
            var docsUrl = (_c = (_b = package_json_1.default === null || package_json_1.default === void 0 ? void 0 : package_json_1.default.config) === null || _b === void 0 ? void 0 : _b.coreui_library_docs_url) !== null && _c !== void 0 ? _c : 'https://coreui.io/angular/';
            // const path: string = version ? `${version}/${value}` : `${value}`;
            var path = value;
            this._href = "".concat(docsUrl).concat(path);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocsCalloutComponent.prototype, "plural", {
        get: function () {
            var _a;
            return ((_a = this.name) === null || _a === void 0 ? void 0 : _a.slice(-1)) === 's';
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, core_1.Input)()
    ], DocsCalloutComponent.prototype, "name", void 0);
    __decorate([
        (0, core_1.Input)()
    ], DocsCalloutComponent.prototype, "href", null);
    DocsCalloutComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-docs-callout',
            templateUrl: './docs-callout.component.html',
            styleUrls: ['./docs-callout.component.scss']
        })
    ], DocsCalloutComponent);
    return DocsCalloutComponent;
}());
exports.DocsCalloutComponent = DocsCalloutComponent;

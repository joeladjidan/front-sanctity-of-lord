"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsExampleComponent = void 0;
var core_1 = require("@angular/core");
var package_json_1 = require("../../../package.json");
var DocsExampleComponent = /** @class */ (function () {
    function DocsExampleComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._href = 'https://coreui.io/angular/docs/';
    }
    Object.defineProperty(DocsExampleComponent.prototype, "href", {
        get: function () {
            return this._href;
        },
        set: function (value) {
            var _a, _b, _c;
            var version = (_a = package_json_1.default === null || package_json_1.default === void 0 ? void 0 : package_json_1.default.config) === null || _a === void 0 ? void 0 : _a.coreui_library_short_version;
            var docsUrl = (_c = (_b = package_json_1.default === null || package_json_1.default === void 0 ? void 0 : package_json_1.default.config) === null || _b === void 0 ? void 0 : _b.coreui_library_docs_url) !== null && _c !== void 0 ? _c : 'https://coreui.io/angular/';
            // const path: string = version ? `${version}/#/${value}` : '#';
            // const path: string = version ? `${version}/${value}` : '';
            this._href = "".concat(docsUrl).concat(value);
        },
        enumerable: false,
        configurable: true
    });
    DocsExampleComponent.prototype.ngAfterContentInit = function () {
        this.changeDetectorRef.detectChanges();
    };
    DocsExampleComponent.prototype.ngAfterViewInit = function () {
        this.changeDetectorRef.markForCheck();
    };
    __decorate([
        (0, core_1.Input)()
    ], DocsExampleComponent.prototype, "fragment", void 0);
    __decorate([
        (0, core_1.Input)()
    ], DocsExampleComponent.prototype, "href", null);
    DocsExampleComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-docs-example',
            templateUrl: './docs-example.component.html',
            styleUrls: ['./docs-example.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], DocsExampleComponent);
    return DocsExampleComponent;
}());
exports.DocsExampleComponent = DocsExampleComponent;

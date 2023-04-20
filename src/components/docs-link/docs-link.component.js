"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsLinkComponent = void 0;
var core_1 = require("@angular/core");
var DocsLinkComponent = /** @class */ (function () {
    function DocsLinkComponent() {
        this.href = 'https://coreui.io/angular/docs/';
    }
    Object.defineProperty(DocsLinkComponent.prototype, "hostClasses", {
        get: function () {
            return {
                'float-end': true
            };
        },
        enumerable: false,
        configurable: true
    });
    DocsLinkComponent.prototype.ngOnInit = function () {
        this.href = this.name ? "https://coreui.io/angular/docs/components/".concat(this.name) : this.href;
    };
    __decorate([
        (0, core_1.Input)()
    ], DocsLinkComponent.prototype, "href", void 0);
    __decorate([
        (0, core_1.Input)()
    ], DocsLinkComponent.prototype, "name", void 0);
    __decorate([
        (0, core_1.Input)()
    ], DocsLinkComponent.prototype, "text", void 0);
    __decorate([
        (0, core_1.HostBinding)('class')
    ], DocsLinkComponent.prototype, "hostClasses", null);
    DocsLinkComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-docs-link',
            templateUrl: './docs-link.component.html',
            styleUrls: ['./docs-link.component.scss']
        })
    ], DocsLinkComponent);
    return DocsLinkComponent;
}());
exports.DocsLinkComponent = DocsLinkComponent;

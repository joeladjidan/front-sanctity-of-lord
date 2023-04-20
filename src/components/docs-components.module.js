"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsComponentsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var angular_1 = require("@coreui/angular");
var icons_angular_1 = require("@coreui/icons-angular");
var docs_example_component_1 = require("./docs-example/docs-example.component");
var docs_link_component_1 = require("./docs-link/docs-link.component");
var docs_callout_component_1 = require("./docs-callout/docs-callout.component");
var DocsComponentsModule = /** @class */ (function () {
    function DocsComponentsModule() {
    }
    DocsComponentsModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                docs_example_component_1.DocsExampleComponent,
                docs_link_component_1.DocsLinkComponent,
                docs_callout_component_1.DocsCalloutComponent
            ],
            exports: [
                docs_example_component_1.DocsExampleComponent,
                docs_link_component_1.DocsLinkComponent,
                docs_callout_component_1.DocsCalloutComponent
            ],
            imports: [
                common_1.CommonModule,
                angular_1.NavModule,
                icons_angular_1.IconModule,
                router_1.RouterModule,
                angular_1.TabsModule,
                angular_1.UtilitiesModule,
                angular_1.CalloutModule
            ]
        })
    ], DocsComponentsModule);
    return DocsComponentsModule;
}());
exports.DocsComponentsModule = DocsComponentsModule;

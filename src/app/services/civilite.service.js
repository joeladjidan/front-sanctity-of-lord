"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiviliteService = void 0;
var core_1 = require("@angular/core");
var base_service_1 = require("@docs-components/base-service");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var CiviliteService = /** @class */ (function (_super) {
    __extends(CiviliteService, _super);
    function CiviliteService(config, http) {
        var _this = _super.call(this, config, http) || this;
        _this.baseUrl = _this.rootUrl + "/civilite";
        return _this;
    }
    CiviliteService.prototype.getListCivilite = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        __headers.set('Access-Control-Allow-Origin', '*');
        var __body = null;
        var req = new http_1.HttpRequest('GET', "".concat(this.baseUrl, "/tous"), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0, operators_1.filter)(function (r) { return r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (__r) {
            return __r;
        }));
    };
    CiviliteService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], CiviliteService);
    return CiviliteService;
}(base_service_1.BaseService));
exports.CiviliteService = CiviliteService;

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
exports.AuthenticationService = void 0;
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../../components/base-service");
var operators_1 = require("rxjs/operators");
var AuthenticationService = /** @class */ (function (_super) {
    __extends(AuthenticationService, _super);
    function AuthenticationService(config, http) {
        var _this = _super.call(this, config, http) || this;
        _this.baseUrl = _this.rootUrl + "/auth/authenticate";
        return _this;
    }
    /**
     * @param body undefined
     * @return successful operation
     */
    AuthenticationService.prototype.authenticateResponse = function (body) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body;
        __body = body;
        var req = new http_1.HttpRequest('POST', "".concat(this.baseUrl), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0, operators_1.filter)(function (_r) { return _r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (_r) {
            return _r;
        }));
    };
    /**
     * @param body undefined
     * @return successful operation
     */
    AuthenticationService.prototype.authenticate = function (body) {
        return this.authenticateResponse(body).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    AuthenticationService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root',
        })
    ], AuthenticationService);
    return AuthenticationService;
}(base_service_1.BaseService));
exports.AuthenticationService = AuthenticationService;

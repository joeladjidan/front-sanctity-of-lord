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
exports.VilleService = void 0;
var core_1 = require("@angular/core");
var base_service_1 = require("../../components/base-service");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var VilleService = /** @class */ (function (_super) {
    __extends(VilleService, _super);
    function VilleService(config, http) {
        var _this = _super.call(this, config, http) || this;
        _this.baseUrl = _this.rootUrl + "/ville";
        return _this;
    }
    VilleService.prototype.getListVille = function () {
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
    // Handle API errors
    VilleService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") +
                "body was: ".concat(error.error));
        }
        // return an observable with a user-facing error message
        return (0, rxjs_1.throwError)('Something bad happened; please try again later.');
    };
    ;
    VilleService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], VilleService);
    return VilleService;
}(base_service_1.BaseService));
exports.VilleService = VilleService;

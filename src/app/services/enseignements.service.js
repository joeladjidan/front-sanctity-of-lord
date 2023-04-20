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
exports.EnseignementsService = void 0;
var core_1 = require("@angular/core");
var base_service_1 = require("../../components/base-service");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var EnseignementsService = /** @class */ (function (_super) {
    __extends(EnseignementsService, _super);
    function EnseignementsService(config, http) {
        var _this = _super.call(this, config, http) || this;
        _this.baseUrl = _this.rootUrl + "/enseignement";
        // Http Options
        _this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return _this;
    }
    EnseignementsService.prototype.enregistrer = function (data) {
        return this.http
            .post(this.baseUrl + "/enregistrer", data, this.httpOptions)
            .pipe((0, operators_1.retry)(2), (0, operators_1.catchError)(this.handleError));
    };
    EnseignementsService.prototype.getListEnseignement = function () {
        debugger;
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        __headers.set('Access-Control-Allow-Origin', '*');
        var __body = null;
        var req = new http_1.HttpRequest('GET', "".concat(this.baseUrl, "/tous"), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req)
            .pipe((0, operators_1.retry)(2), (0, operators_1.catchError)(this.handleError), (0, operators_1.filter)(function (r) { return r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (__r) {
            return __r;
        }));
    };
    EnseignementsService.prototype.searchEnseignements = function (titreMessage, typeEnseignement) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        __headers.set('Access-Control-Allow-Origin', '*');
        var __body = null;
        var req = new http_1.HttpRequest('GET', "".concat(this.baseUrl, "/search/").concat(titreMessage, "/").concat(typeEnseignement), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req)
            .pipe((0, operators_1.retry)(2), (0, operators_1.catchError)(this.handleError), (0, operators_1.filter)(function (r) { return r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (__r) {
            return __r;
        }));
    };
    // Handle API errors
    EnseignementsService.prototype.handleError = function (error) {
        debugger;
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
    EnseignementsService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], EnseignementsService);
    return EnseignementsService;
}(base_service_1.BaseService));
exports.EnseignementsService = EnseignementsService;

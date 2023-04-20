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
exports.EntreprisesService = void 0;
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../../components/base-service");
var operators_1 = require("rxjs/operators");
var EntreprisesService = /** @class */ (function (_super) {
    __extends(EntreprisesService, _super);
    function EntreprisesService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return successful operation
     */
    EntreprisesService.prototype.findAllResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/gestiondestock/v1/entreprises/all", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0, operators_1.filter)(function (_r) { return _r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (_r) {
            return _r;
        }));
    };
    /**
     * @return successful operation
     */
    EntreprisesService.prototype.findAll = function () {
        return this.findAllResponse().pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    /**
     * @param body undefined
     * @return successful operation
     */
    EntreprisesService.prototype.saveResponse = function (body) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = body;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/gestiondestock/v1/entreprises/create", __body, {
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
    EntreprisesService.prototype.save = function (body) {
        return this.saveResponse(body).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    /**
     * @param idEntreprise undefined
     */
    EntreprisesService.prototype.deleteResponse = function (idEntreprise) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + "/gestiondestock/v1/entreprises/delete/".concat(idEntreprise), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0, operators_1.filter)(function (_r) { return _r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (_r) {
            return _r;
        }));
    };
    /**
     * @param idEntreprise undefined
     */
    EntreprisesService.prototype.delete = function (idEntreprise) {
        return this.deleteResponse(idEntreprise).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    /**
     * @param idEntreprise undefined
     * @return successful operation
     */
    EntreprisesService.prototype.findByIdResponse = function (idEntreprise) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/gestiondestock/v1/entreprises/".concat(idEntreprise), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0, operators_1.filter)(function (_r) { return _r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (_r) {
            return _r;
        }));
    };
    /**
     * @param idEntreprise undefined
     * @return successful operation
     */
    EntreprisesService.prototype.findById = function (idEntreprise) {
        return this.findByIdResponse(idEntreprise).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    EntreprisesService.findAllPath = '/gestiondestock/v1/entreprises/all';
    EntreprisesService.savePath = '/gestiondestock/v1/entreprises/create';
    EntreprisesService.deletePath = '/gestiondestock/v1/entreprises/delete/{idEntreprise}';
    EntreprisesService.findByIdPath = '/gestiondestock/v1/entreprises/{idEntreprise}';
    EntreprisesService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root',
        })
    ], EntreprisesService);
    return EntreprisesService;
}(base_service_1.BaseService));
exports.EntreprisesService = EntreprisesService;

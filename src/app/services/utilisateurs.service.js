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
exports.UtilisateursService = void 0;
/* tslint:disable */
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var base_service_1 = require("@docs-components/base-service");
var UtilisateursService = /** @class */ (function (_super) {
    __extends(UtilisateursService, _super);
    function UtilisateursService(config, http, https, authenticationService) {
        var _this = _super.call(this, config, http) || this;
        _this.https = https;
        _this.authenticationService = authenticationService;
        _this.baseUrl = _this.rootUrl + "/utilisateurs";
        _this.loggedIn = new rxjs_1.BehaviorSubject(false);
        _this.ACCESS_TOKEN = 'accessToken';
        return _this;
    }
    /**
     * @return successful operation
     */
    UtilisateursService.prototype.findAllResponse = function () {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        __headers.set('Access-Control-Allow-Origin', '*');
        var __body = null;
        var req = new http_1.HttpRequest('GET', "".concat(this.baseUrl, "/tous"), __body, {
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
    UtilisateursService.prototype.findAll = function () {
        return this.findAllResponse().pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    ;
    /**
     * @param body undefined
     * @return successful operation
     */
    UtilisateursService.prototype.saveResponse = function (body) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = body;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/utilisateurs/enregistrer", __body, {
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
    UtilisateursService.prototype.save = function (body) {
        return this.saveResponse(body).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    /**
     * @param idUtilisateur undefined
     */
    UtilisateursService.prototype.deleteResponse = function (idUtilisateur) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('DELETE', this.rootUrl + "/utilisateurs/delete/".concat(idUtilisateur), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0, operators_1.filter)(function (_r) { return _r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (_r) {
            return _r;
        }));
    };
    /**
     * @param idUtilisateur undefined
     */
    UtilisateursService.prototype.delete = function (idUtilisateur) {
        return this.deleteResponse(idUtilisateur).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    /**
     * @param email undefined
     * @return successful operation
     */
    UtilisateursService.prototype.findByEmailResponse = function (email) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/utilisateurs/find/".concat(email), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0, operators_1.filter)(function (_r) { return _r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (_r) {
            return _r;
        }));
    };
    /**
     * @param email undefined
     * @return successful operation
     */
    UtilisateursService.prototype.findByEmail = function (email) {
        return this.findByEmailResponse(email).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    /**
     * @param body undefined
     * @return successful operation
     */
    UtilisateursService.prototype.changerMotDePasseResponse = function (body) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        __body = body;
        var req = new http_1.HttpRequest('POST', this.rootUrl + "/utilisateurs/update/password", __body, {
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
    UtilisateursService.prototype.changerMotDePasse = function (body) {
        return this.changerMotDePasseResponse(body).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    /**
     * @param idUtilisateur undefined
     * @return successful operation
     */
    UtilisateursService.prototype.findByIdResponse = function (idUtilisateur) {
        var __params = this.newParams();
        var __headers = new http_1.HttpHeaders();
        var __body = null;
        var req = new http_1.HttpRequest('GET', this.rootUrl + "/utilisateurs/".concat(idUtilisateur), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0, operators_1.filter)(function (_r) { return _r instanceof http_1.HttpResponse; }), (0, operators_1.map)(function (_r) {
            return _r;
        }));
    };
    /**
     * @param idUtilisateur undefined
     * @return successful operation
     */
    UtilisateursService.prototype.findById = function (idUtilisateur) {
        return this.findByIdResponse(idUtilisateur).pipe((0, operators_1.map)(function (_r) { return _r.body; }));
    };
    UtilisateursService.prototype.login = function (authenticationRequest) {
        return this.authenticationService.authenticate(authenticationRequest);
    };
    UtilisateursService.prototype.getUserByEmail = function (email) {
        if (email !== undefined) {
            return this.findByEmail(email);
        }
        return (0, rxjs_1.of)();
    };
    UtilisateursService.prototype.setAccessToken = function (authenticationResponse) {
        localStorage.setItem(this.ACCESS_TOKEN, JSON.stringify(authenticationResponse.accessToken));
    };
    UtilisateursService.prototype.setConnectedUser = function (utilisateur) {
        localStorage.setItem('connectedUser', JSON.stringify(utilisateur));
    };
    UtilisateursService.prototype.getConnectedUser = function () {
        if (localStorage.getItem('connectedUser')) {
            return JSON.parse(localStorage.getItem('connectedUser'));
        }
        return {};
    };
    UtilisateursService.prototype.isUserLoggedAndAccessTokenValid = function () {
        // localStorage.removeItem('accessToken');
        if (this.loggedIn.getValue()) {
            return true;
        }
        return false;
    };
    UtilisateursService.prototype.logout = function () {
        localStorage.removeItem(this.ACCESS_TOKEN);
        this.loggedIn.next(false);
    };
    // Handle API errors
    UtilisateursService.prototype.handleError = function (error) {
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
    UtilisateursService.savePath = '/gestiondestock/v1/utilisateurs/create';
    UtilisateursService.deletePath = '/gestiondestock/v1/utilisateurs/delete/{idUtilisateur}';
    UtilisateursService.findByEmailPath = '/gestiondestock/v1/utilisateurs/find/{email}';
    UtilisateursService.changerMotDePassePath = '/gestiondestock/v1/utilisateurs/update/password';
    UtilisateursService.findByIdPath = '/gestiondestock/v1/utilisateurs/{idUtilisateur}';
    UtilisateursService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], UtilisateursService);
    return UtilisateursService;
}(base_service_1.BaseService));
exports.UtilisateursService = UtilisateursService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var fileUpload = /** @class */ (function () {
    function fileUpload() {
    }
    return fileUpload;
}());
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(host) {
        this.host = host;
        this.myFiles = [];
    }
    FileUploadComponent_1 = FileUploadComponent;
    FileUploadComponent.prototype.writeValue = function (value) {
        this.host.nativeElement.value = "";
        this.myFiles = [];
    };
    FileUploadComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileUploadComponent.prototype.registerOnTouched = function (fn) { };
    FileUploadComponent.prototype.getFileDetails = function (e) {
        this.myFiles = [];
        for (var i = 0; i < e.target.files.length; i++) {
            this.myFiles.push(e.target.files[i]);
        }
    };
    var FileUploadComponent_1;
    __decorate([
        (0, core_1.Input)()
    ], FileUploadComponent.prototype, "progress", void 0);
    FileUploadComponent = FileUploadComponent_1 = __decorate([
        (0, core_1.Component)({
            selector: "app-file-upload",
            templateUrl: "./file-upload.component.html",
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: FileUploadComponent_1,
                    multi: true,
                },
            ],
            styleUrls: ["./file-upload.component.scss"],
        })
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;

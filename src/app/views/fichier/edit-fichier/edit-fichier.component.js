"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditFichierComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var sweetalert2_1 = require("sweetalert2");
var EditFichierComponent = /** @class */ (function () {
    function EditFichierComponent(utilisateurService, service, route, formBuilder, router) {
        this.utilisateurService = utilisateurService;
        this.service = service;
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.donnee = [];
        this.submitted = false;
        this.loggedIn = this.utilisateurService.loggedIn.getValue();
    }
    EditFichierComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
    };
    Object.defineProperty(EditFichierComponent.prototype, "f", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    EditFichierComponent.prototype.onReset = function () {
        this.editForm.reset();
        this.router.navigateByUrl('fichier/list-fichier');
    };
    EditFichierComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a, _b, _c;
        this.donneeDto = {
            url: (_a = this.editForm.get('url')) === null || _a === void 0 ? void 0 : _a.value,
            format: (_b = this.editForm.get('format')) === null || _b === void 0 ? void 0 : _b.value,
            fileName: (_c = this.editForm.get('fileName')) === null || _c === void 0 ? void 0 : _c.value
        };
        if (this.donneeDto.url && this.donneeDto.format && this.donneeDto.fileName) {
            this.service.update(this.id, this.donneeDto)
                .subscribe(function (data) {
                sweetalert2_1.default.fire("Merci!", 'Modification effectuée avec success', 'success');
                _this.router.navigateByUrl('fichier/list-fichier');
            }, function (error) {
                sweetalert2_1.default.fire("Echec !", 'Lors de la modification', 'error');
                _this.router.navigate(['401']);
            });
        }
        else {
            sweetalert2_1.default.fire("Attention !", 'Veuillez saisir les champs obligatoire', 'warning');
        }
    };
    EditFichierComponent.prototype.changeFormat = function (value) {
        var _a;
        this.isYoutube = !this.isYoutube;
        if (((_a = value === null || value === void 0 ? void 0 : value.target) === null || _a === void 0 ? void 0 : _a.value) === "mp4") {
            this.isYoutube = true;
            this.editForm.get('url').setValue("");
            this.editForm.get('url').setValidators(forms_1.Validators.required);
        }
    };
    EditFichierComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.service.getDonneById(this.id).subscribe(function (data) {
            _this.donneeDto = data;
            console.log(_this.donneeDto);
            _this.editForm = _this.formBuilder.group({
                url: ['', forms_1.Validators.required],
                format: ['', forms_1.Validators.required],
                fileName: ['', forms_1.Validators.required],
            });
        });
    };
    EditFichierComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-edit-fichier',
            templateUrl: './edit-fichier.component.html',
            styleUrls: ['./edit-fichier.component.scss']
        })
    ], EditFichierComponent);
    return EditFichierComponent;
}());
exports.EditFichierComponent = EditFichierComponent;

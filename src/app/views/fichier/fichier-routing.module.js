"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FichierRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var create_fichier_component_1 = require("./create-fichier/create-fichier.component");
var view_fichier_component_1 = require("./view-fichier/view-fichier.component");
var list_fichier_component_1 = require("./list-fichier/list-fichier.component");
var edit_fichier_component_1 = require("./edit-fichier/edit-fichier.component");
var routes = [
    { path: '',
        redirectTo: 'create-fichier',
        pathMatch: 'full',
        data: {
            title: 'Ajouter une donnée',
        }
    },
    { path: 'list-fichier',
        component: list_fichier_component_1.ListFichierComponent,
        data: {
            title: 'Liste des données',
        }
        /* resolve: {
           travels: ListFichierResolver
         },*/
    },
    { path: ':id/view-fichier',
        component: view_fichier_component_1.ViewFichierComponent,
        data: {
            title: 'Détails du fichier',
        }
    },
    { path: 'create-fichier',
        component: create_fichier_component_1.CreateFichierComponent,
        data: {
            title: 'Ajouter une donnée',
        }
    },
    { path: ':id/edit-fichier',
        component: edit_fichier_component_1.EditFichierComponent,
        data: {
            title: 'Modifier une donnée',
        }
    }
];
var FichierRoutingModule = /** @class */ (function () {
    function FichierRoutingModule() {
    }
    FichierRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], FichierRoutingModule);
    return FichierRoutingModule;
}());
exports.FichierRoutingModule = FichierRoutingModule;

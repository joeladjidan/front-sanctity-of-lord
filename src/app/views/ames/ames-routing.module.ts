import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListAmesComponent} from "./list-ames/list-ames.component";
import {ViewAmesComponent} from "./view-ames/view-ames.component";
import {CreateAmesComponent} from "./create-ames/create-ames.component";
import {EditAmesComponent} from "./edit-ames/edit-ames.component";

const routes: Routes =
  [
    { path: '',
      redirectTo: 'list-ames',
      pathMatch: 'full',
      data: {
        title: 'Liste des ames',
      }
    },
    { path: 'list-ames',
      component: ListAmesComponent,
      /* resolve: {
         travels: ListFichierResolver
       },*/
    },
    { path: ':id/view-ames',
      component: ViewAmesComponent,
      data: {
        title: 'Détails du fichier',
      }
    },
    { path: 'create-ames',
      component: CreateAmesComponent,
      data: {
        title: 'Ajouter une personne à suivre',
      }
    },
    { path: ':id/edit-ames',
      component: EditAmesComponent,
      data: {
        title: 'Modification du fichier',
      }
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmesRoutingModule { }

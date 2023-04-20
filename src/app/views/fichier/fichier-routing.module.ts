import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateFichierComponent} from "./create-fichier/create-fichier.component";
import {ViewFichierComponent} from "./view-fichier/view-fichier.component";
import {ListFichierComponent} from "./list-fichier/list-fichier.component";
import {EditFichierComponent} from "./edit-fichier/edit-fichier.component";


const routes: Routes =
  [
    { path: '',
      redirectTo: 'create-fichier',
      pathMatch: 'full',
      data: {
        title: 'Ajouter une donnée',
      }
    },
    { path: 'list-fichier',
      component: ListFichierComponent,
      data: {
        title: 'Liste des données',
      }
     /* resolve: {
        travels: ListFichierResolver
      },*/
    },
    { path: ':id/view-fichier',
      component: ViewFichierComponent,
      data: {
        title: 'Détails du fichier',
      }
    },
    { path: 'create-fichier',
      component: CreateFichierComponent,
      data: {
        title: 'Ajouter une donnée',
      }
    },
    { path: ':id/edit-fichier',
      component: EditFichierComponent,
      data: {
        title: 'Modifier une donnée',
      }
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichierRoutingModule { }

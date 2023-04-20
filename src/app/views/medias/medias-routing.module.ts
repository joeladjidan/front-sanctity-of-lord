import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMediasComponent} from "./list-medias/list-medias.component";
import {CreateMediasComponent} from "./create-medias/create-medias.component";

const routes: Routes =
  [
    { path: '',
      redirectTo: 'create-medias',
      pathMatch: 'full',
      data: {
        title: 'Ajouter une donnée',
      }
    },
    { path: 'list-medias',
      component: ListMediasComponent,
      data: {
        title: 'Liste des fichiers',
      }
      /* resolve: {
         travels: ListFichierResolver
       },*/
    },
    { path: 'create-medias',
      component: CreateMediasComponent,
      data: {
        title: 'Ajouter un fichier',
      }
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediasRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {ViewComponent} from "./view/view.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes =
[
  { path: '',
    redirectTo: 'create',
    pathMatch: 'full',
    data: {
      title: 'Enregistrer-vous',
    }
  },
  { path: 'list',
    component: ListComponent
  },
  { path: ':id/view',
    component: ViewComponent,
    data: {
      title: 'Détails de la personne à contacter',
    }
  },
  { path: 'create',
    component: CreateComponent,
    data: {
      title: 'Enregistrer une personne à contacter',
    }
  },
  { path: ':id/edit',
    component: EditComponent,
    data: {
      title: 'Modification de la personne à contacter',
    }
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

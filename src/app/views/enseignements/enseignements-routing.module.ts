import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnseignementsComponent} from "./enseignements.component";


const routes: Routes = [
  {
    path: '',
    component: EnseignementsComponent,
    data: {
      title: 'Enseignements',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnseignementsRoutingModule { }

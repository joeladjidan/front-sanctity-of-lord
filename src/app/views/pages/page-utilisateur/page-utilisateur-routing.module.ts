import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageUtilisateurComponent} from "./page-utilisateur.component";

const routes: Routes = [
  {
    path: '',
    component: PageUtilisateurComponent,
    data: {
      title: 'Utilisateur',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageUtilisateurRoutingModule {}


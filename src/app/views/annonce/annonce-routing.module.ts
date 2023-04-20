import { NgModule } from '@angular/core';

import { AnnonceComponent } from './annonce.component';
import {RouterModule, Routes} from "@angular/router";
import {EmissionsComponent} from "../emissions/emissions.component";

const routes: Routes = [
  {
    path: '',
    component: AnnonceComponent,
    data: {
      title: $localize`Annonce`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnonceRoutingModule {
}

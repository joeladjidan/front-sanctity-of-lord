import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DonComponent} from "./don.component";

const routes: Routes = [
  {
    path: '',
    component: DonComponent,
    data: {
      title: 'Faire un don',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonRoutingModule { }

import { NgModule } from '@angular/core';
import {AproposComponent} from "./apropos.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: AproposComponent,
    data: {
      title: 'A Propos de nous',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AproposRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssistanceComponent} from "./assistance.component";

const routes: Routes = [
  {
    path: '',
    component: AssistanceComponent,
    data: {
      title: 'Assistance',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceRoutingModule { }

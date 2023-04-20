import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmissionsComponent} from "./emissions.component";

const routes: Routes = [
  {
    path: '',
    component: EmissionsComponent,
    data: {
      title: 'Emissions',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmissionsRoutingModule { }

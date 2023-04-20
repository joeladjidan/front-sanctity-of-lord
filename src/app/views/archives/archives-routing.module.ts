import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArchivesComponent} from "./archives.component";

const routes: Routes = [
  {
    path: '',
    component: ArchivesComponent,
    data: {
      title: 'Archives',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivesRoutingModule { }

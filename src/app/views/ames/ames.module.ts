import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule, ListGroupModule
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DocsComponentsModule} from "../../../components";
import {SharedModule} from "../../shared/shared.module";
import {AmesRoutingModule} from "./ames-routing.module";
import { CreateAmesComponent } from './create-ames/create-ames.component';
import { EditAmesComponent } from './edit-ames/edit-ames.component';
import { ListAmesComponent } from './list-ames/list-ames.component';
import { ViewAmesComponent } from './view-ames/view-ames.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    DocsComponentsModule,
    AmesRoutingModule
  ],
  declarations: [
    CreateAmesComponent,
    EditAmesComponent,
    ListAmesComponent,
    ViewAmesComponent
  ]
})
export class AmesModule { }

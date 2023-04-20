import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivesRoutingModule } from './archives-routing.module';
import {FormsRoutingModule} from "../forms/forms-routing.module";
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule, ListGroupModule,
  SharedModule
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DocsComponentsModule} from "../../../components";

@NgModule({
  imports: [
    ArchivesRoutingModule,
    CommonModule,
    FormsRoutingModule,
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
    DocsComponentsModule
  ]
})
export class ArchivesModule { }

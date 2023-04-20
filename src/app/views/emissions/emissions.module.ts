import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissionsRoutingModule } from './emissions-routing.module';
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
import {IconModule} from "@coreui/icons-angular";

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    IconModule,
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
    EmissionsRoutingModule
  ]
})
export class EmissionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceRoutingModule } from './assistance-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {DocsComponentsModule} from "../../../components";
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule, ListGroupModule, SharedModule,
  SpinnerModule
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    AssistanceRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    SpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class AssistanceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule, DropdownModule,
  FormModule,
  GridModule, ListGroupModule, SharedModule, SpinnerModule,
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EnseignementsRoutingModule} from "./enseignements-routing.module";
import {DocsComponentsModule} from "../../../components";

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    EnseignementsRoutingModule,
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
export class EnseignementsModule { }

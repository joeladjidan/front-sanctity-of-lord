import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule, FormModule,
  GridModule,
  ListGroupModule, SharedModule
} from '@coreui/angular';
import {PageUtilisateurComponent} from "./page-utilisateur.component";
import {DocsComponentsModule} from "../../../../components";
import {PageUtilisateurRoutingModule} from "./page-utilisateur-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormsRoutingModule} from "../../forms/forms-routing.module";

@NgModule({
  imports: [
    PageUtilisateurRoutingModule,
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
  ],
  declarations: [
    PageUtilisateurComponent
  ]
})
export class PageUtilisateurModule {
}

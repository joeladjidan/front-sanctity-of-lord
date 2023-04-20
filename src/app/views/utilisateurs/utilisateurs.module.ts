import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule, ListGroupModule
} from "@coreui/angular";
import {DocsComponentsModule} from "../../../components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UtilisateursRoutingModule} from "./utilisateurs-routing.module";
import {ComponentsModule} from "../../shared/components/components.module";
import {IconModule} from "@coreui/icons-angular";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    CommonModule,
    CardModule,
    IconModule,
    FormModule,
    FormsModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    ListGroupModule,
    DocsComponentsModule,
    UtilisateursRoutingModule,
    ComponentsModule,
  ]
})
export class UtilisateursModule { }

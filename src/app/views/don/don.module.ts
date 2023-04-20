import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonRoutingModule } from './don-routing.module';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule, ListGroupModule,
  SharedModule
} from "@coreui/angular";
import {IconModule} from "@coreui/icons-angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DocsComponentsModule} from "../../../components";


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
    DonRoutingModule
  ]
})
export class DonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule, ListGroupModule,
  SharedModule, SpinnerModule
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ViewComponent} from "./view/view.component";
import {CreateComponent} from "./create/create.component";
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";




@NgModule({
  declarations: [
    EditComponent,
    CreateComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    FormsModule,
    FormModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    CardModule,
    GridModule,
    ButtonModule,
    SpinnerModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    ListGroupModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

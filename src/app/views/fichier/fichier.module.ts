import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FichierRoutingModule} from './fichier-routing.module';
import {
  AccordionModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
  SpinnerModule
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditFichierComponent} from "./edit-fichier/edit-fichier.component";
import {CreateFichierComponent} from "./create-fichier/create-fichier.component";
import {ListFichierComponent} from "./list-fichier/list-fichier.component";
import {ViewFichierComponent} from "./view-fichier/view-fichier.component";
import {ImageCropperModule} from "ngx-image-cropper";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    EditFichierComponent,
    CreateFichierComponent,
    ListFichierComponent,
    ViewFichierComponent
  ],
  imports: [
    FormsModule,
    FormModule,
    ReactiveFormsModule,
    CommonModule,
    AccordionModule,
    SharedModule,
    CardModule,
    GridModule,
    ButtonModule,
    SpinnerModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    ListGroupModule,
    FichierRoutingModule,
    ImageCropperModule,
    NgbModule
  ]
})
export class FichierModule { }


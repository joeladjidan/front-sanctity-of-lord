import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MediasRoutingModule} from './medias-routing.module';
import {ListMediasComponent} from './list-medias/list-medias.component';
import {CreateMediasComponent} from './create-medias/create-medias.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {ImageCropperModule} from "ngx-image-cropper";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    ListMediasComponent,
    CreateMediasComponent
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
    MediasRoutingModule,
    ImageCropperModule,
    AccordionModule,
    SharedModule,

    // Material Modules
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ]
})
export class MediasModule { }

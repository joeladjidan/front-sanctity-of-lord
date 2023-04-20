import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediasRoutingModule } from './medias-routing.module';
import { ListMediasComponent } from './list-medias/list-medias.component';
import { CreateMediasComponent } from './create-medias/create-medias.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule, DropdownModule,
  FormModule,
  GridModule, ListGroupModule,
  SharedModule,
  SpinnerModule
} from "@coreui/angular";
import {ImageCropperModule} from "ngx-image-cropper";

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
    ImageCropperModule
  ]
})
export class MediasModule { }

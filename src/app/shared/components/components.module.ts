import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SharedModule } from '../shared.module';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [FileUploadComponent, BreadcrumbComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    SharedModule
  ],
  exports: [FileUploadComponent, BreadcrumbComponent]
})
export class ComponentsModule {}

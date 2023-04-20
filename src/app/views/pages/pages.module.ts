import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import {ReactiveFormsModule} from "@angular/forms";
import {Page401Component} from "./page401/page401.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    Page401Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class PagesModule {}

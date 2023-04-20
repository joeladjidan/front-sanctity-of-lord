import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import {HttpClientModule} from "@angular/common/http";
import {EmissionsModule} from "../emissions/emissions.module";
import {EmissionsComponent} from "../emissions/emissions.component";

@NgModule({
  imports: [
    HttpClientModule,
    AnnonceRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
  ],
  declarations: [AnnonceComponent]
})
export class AnnonceModule {
}

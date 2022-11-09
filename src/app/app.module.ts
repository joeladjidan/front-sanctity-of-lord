import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import {ApiConfiguration, ApiConfigurationInterface} from "./api-configuration";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http-interceptor.service";
import { EnseignementsComponent } from './views/enseignements/enseignements.component';
import { ArchivesComponent } from './views/archives/archives.component';
import { AproposComponent } from './views/apropos/apropos.component';
import { EmissionsComponent} from "./views/emissions/emissions.component";
import {DefaultAudioComponent} from "./containers/default-audio/default-audio.component";
import { DefaultVideoComponent } from './containers/default-video/default-video.component';
import { DefaultCardComponent } from './containers/default-card/default-card.component';
import { UtilisateursComponent } from './views/utilisateurs/utilisateurs.component';
import { DonComponent } from './views/don/don.component';
import {ContactsComponent} from "./views/contacts/contacts.component";
import {BrowserModule, Title} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {GalerieComponent} from "./views/galerie/galerie.component";
import {NgImageFullscreenViewModule} from "ng-image-fullscreen-view";
import { SafePipe } from './pipe/safe.pipe';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {GalerieModule} from "./views/galerie/galerie.module";
import {ComponentsModule} from "./shared/components/components.module";
import {MaterialModule} from "./shared/material.module";
import {NgxVideoListPlayerModule} from "ngx-video-list-player";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    EmissionsComponent,
    EnseignementsComponent,
    GalerieComponent,
    ArchivesComponent,
    AproposComponent,
    DefaultAudioComponent,
    DefaultVideoComponent,
    DefaultCardComponent,
    UtilisateursComponent,
    ContactsComponent,
    DonComponent,
    SafePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    MaterialModule,
    NgxAudioPlayerModule,
    NgxVideoListPlayerModule,
    NgxScrollTopModule,
    StickyNavModule,
    ComponentsModule,
    SharedModule,
    GalerieModule,
    NgImageFullscreenViewModule,
    NgxDatatableModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy, },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG, },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  static forRoot(customParams: ApiConfigurationInterface) {
    return {
      ngModule: AppModule,
      providers: [
        { provide: ApiConfiguration, useValue: {rootUrl: customParams.rootUrl} }
      ]
    }
  }
}


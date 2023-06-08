import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {StickyNavModule} from 'ng2-sticky-nav';
import {NgxScrollTopModule} from 'ngx-scrolltop';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
// Import routing module
import {AppRoutingModule} from './app-routing.module';
// Import app component
import {AppComponent} from './app.component';
// Import containers
import {DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent,} from './containers';

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
  SidebarModule,
  TabsModule,
  ToastModule,
  UtilitiesModule,
} from '@coreui/angular';

import {CarouselModule} from 'ngx-bootstrap/carousel';
import {IconModule, IconSetService} from '@coreui/icons-angular';
import {ApiConfiguration, ApiConfigurationInterface} from "./api-configuration";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http-interceptor.service";
import {EnseignementsComponent} from './views/enseignements/enseignements.component';
import {ArchivesComponent} from './views/archives/archives.component';
import {AproposComponent} from './views/apropos/apropos.component';
import {EmissionsComponent} from "./views/emissions/emissions.component";
import {DefaultAudioComponent} from "./containers/default-audio/default-audio.component";
import {DefaultVideoComponent} from './containers/default-video/default-video.component';
import {DefaultCardComponent} from './containers/default-card/default-card.component';
import {DonComponent} from './views/don/don.component';
import {BrowserModule, Title} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {GalerieComponent} from "./views/galerie/galerie.component";
import {NgImageFullscreenViewModule} from "ng-image-fullscreen-view";
import {SafePipe} from './pipe/safe.pipe';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ComponentsModule} from "./shared/components/components.module";
import {NgxVideoListPlayerModule} from "ngx-video-list-player";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NotificationsModule} from "./views/notifications/notifications.module";
import {UtilisateursModule} from "./views/utilisateurs/utilisateurs.module";
import {PagesModule} from './views/pages/pages.module';
import {HttpModule} from "@angular/http";
import {ChargementComponent} from './views/chargement/chargement.component';
import {FichierModule} from './views/fichier/fichier.module';
import {ContactModule} from "./views/contact/contact.module";
import {MediasModule} from "./views/medias/medias.module";
import {AssistanceComponent} from './views/assistance/assistance.component';
import {AssistanceModule} from "./views/assistance/assistance.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  exports: [
    HttpClientModule
  ],
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
    DonComponent,
    SafePipe,
    ChargementComponent,
    AssistanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
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
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgxAudioPlayerModule,
    NgxVideoListPlayerModule,
    NgxScrollTopModule,
    StickyNavModule,
    ComponentsModule,
    NgImageFullscreenViewModule,
    NgxDatatableModule,
    ToastModule,
    NotificationsModule,
    CarouselModule,
    UtilisateursModule,
    FichierModule,
    ContactModule,
    MediasModule,
    AssistanceModule,
    // Material Modules
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressBarModule,
    PagesModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy, },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG, },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
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


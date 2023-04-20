import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import {Page401Component} from "./views/pages/page401/page401.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '',
    redirectTo: 'emissions',
    pathMatch: 'full'
  },
  {
    path: '',
 //   canActivate: [ApplicationGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'Accueil'
    },
    children: [
      {
        path: 'annonce',
        loadChildren: () => import('./views/annonce/annonce.module').then((m) => m.AnnonceModule)
      },
      {
        path: 'emissions',
        loadChildren: () => import('./views/emissions/emissions.module').then((m) => m.EmissionsModule)
      },
      {
        path: 'apropos',
        loadChildren: () =>
          import('./views/apropos/apropos.module').then((m) => m.AproposModule)
      },
      {
        path: 'galerie',
        loadChildren: () => import('./views/galerie/galerie.module').then((m) => m.GalerieModule)
      },
      {
        path: 'enseignements',
        loadChildren: () =>
          import('./views/enseignements/enseignements.module').then((m) => m.EnseignementsModule)
      },
      {
        path: 'fichier',
        loadChildren: () =>
          import('./views/fichier/fichier.module').then((m) => m.FichierModule)
      },
      {
        path: 'medias',
        loadChildren: () =>
          import('./views/medias/medias.module').then((m) => m.MediasModule)
      },
      {
        path: 'archives',
        loadChildren: () => import('./views/archives/archives.module').then((m) => m.ArchivesModule)
      },
      {
        path: 'utilisateurs',
        loadChildren: () => import('./views/utilisateurs/utilisateurs.module').then((m) => m.UtilisateursModule)
      },
      {
        path: 'ames',
        data: {
          title: 'Liste des Ames'
        },
        loadChildren: () => import('./views/ames/ames.module').then((m) => m.AmesModule)
      },
      {
        path: 'don',
        data: {
          title: 'Faire un don'
        },
        loadChildren: () => import('./views/don/don.module').then((m) => m.DonModule)
      },
      {
        path: 'assistance',
        data: {
          title: 'Pour tous besoin d\'assistance'
        },
        loadChildren: () => import('./views/assistance/assistance.module').then((m) => m.AssistanceModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./views/contact/contact.module').then((m) => m.ContactModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      }
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '401',
    component: Page401Component,
    data: {
      title: 'Page 401'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
//    canActivate: [ApplicationGuard],
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

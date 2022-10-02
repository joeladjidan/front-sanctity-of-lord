import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {UtilisateursService} from "@docs-components/services";

@Injectable({
  providedIn: 'root'
})
export class ApplicationGuard implements CanActivate {
  constructor(
    private utilisateurService: UtilisateursService,
    private router: Router
  ) { }


canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if( !this.utilisateurService.isUserLoggedAndAccessTokenValid()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;

  this.router.navigate(['login']);
  return false;
  }
}


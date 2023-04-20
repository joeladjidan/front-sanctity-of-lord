/*
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DonneeDto} from '../models/donnee-dto';
import {DonneeService} from "../services/donnee.service";
import {error} from "@rxweb/reactive-form-validators";
import {catchError, retry} from "rxjs/operators";


@Injectable()
export class ListFichierResolver implements Resolve<DonneeDto[]> {

  constructor(private donneeService: DonneeService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DonneeDto[]> {
    return this.donneeService.getListDonnee() .pipe(
      retry(2),
      catchError(this.handleError(route, errorResponse))
    )
  }

  handleError(route: ActivatedRouteSnapshot, errorResponse: HTTPErrorResponse) {
    switch (errorResponse.status) {
      case 404: {
        this.router.navigate(['/not-found']);
        return Observable.of(null);
      }
      case 401: {
        const returnURL: string = '/' + route.url.map(segment => segment.path).join('/');
        this.router.navigate(['/login'], { queryParams: { returnURL: returnURL }});
        return Observable.of(null);
      }
      case 403: {
        this.router.navigate(['/unauthorized']);
        return Observable.of(null);
      }
      case default: {
      console.error(error);
      this.router.navigate(['/error']);
      return Observable.of(null);
    }
    }
  }
}
*/

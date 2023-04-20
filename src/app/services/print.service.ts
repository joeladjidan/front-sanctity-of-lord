import { Injectable } from '@angular/core';
import {BaseService as __BaseService} from "../../components/base-service";
import {ApiConfiguration as __Configuration} from "../api-configuration";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintService extends __BaseService {

  private amesUrl = this.rootUrl + `/ames/report`;
  private donneeUrl = this.rootUrl + `/donnee/report`;

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  getListAmes() { window.open(this.amesUrl + "/list") }

  getDetailAmes(id: number) {  window.open(this.amesUrl + "/details/" +id) }

  getDetailDonnee(id: number) {  window.open(this.donneeUrl + "/details/" +id) }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}


/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {UtilisateurDto} from '../../app/models/utilisateur-dto';
import {ChangerMotDePasseUtilisateurDto} from '../../app/models/changer-mot-de-passe-utilisateur-dto';
import {BehaviorSubject, Observable, throwError, of , fromEvent} from 'rxjs';
import {AuthenticationService} from "../../components/services";
import {AuthenticationRequest} from "../models/authentication-request";
import {AuthenticationResponse} from "../models/authentication-response";
import { Http} from '@angular/http';
import { filter as __filter, map as __map} from 'rxjs/operators';
import {BaseService as __BaseService} from "@docs-components/base-service";
import {ApiConfiguration as __Configuration} from "../api-configuration";
import {StrictHttpResponse as __StrictHttpResponse} from "@docs-components/strict-http-response";

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService extends __BaseService {

  private baseUrl = this.rootUrl + `/utilisateurs`;
  static readonly savePath = '/gestiondestock/v1/utilisateurs/create';
  static readonly deletePath = '/gestiondestock/v1/utilisateurs/delete/{idUtilisateur}';
  static readonly findByEmailPath = '/gestiondestock/v1/utilisateurs/find/{email}';
  static readonly changerMotDePassePath = '/gestiondestock/v1/utilisateurs/update/password';
  static readonly findByIdPath = '/gestiondestock/v1/utilisateurs/{idUtilisateur}';
  public loggedIn = new BehaviorSubject<boolean>(false);
  ACCESS_TOKEN = 'accessToken';

  constructor(
    config: __Configuration,
    http: HttpClient,
    public https: Http,
    private authenticationService: AuthenticationService
  ) {
    super(config, http);
  }


  /**
   * @return successful operation
   */
  findAllResponse(): Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    __headers.set('Access-Control-Allow-Origin', '*');
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      `${this.baseUrl}/tous`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      }),
    );
  }
  /**
   * @return successful operation
   */
  findAll(): Observable<Array<UtilisateurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    )};


  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: UtilisateurDto): Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/utilisateurs/enregistrer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: UtilisateurDto): Observable<UtilisateurDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param idUtilisateur undefined
   */
  deleteResponse(idUtilisateur: number): Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/utilisateurs/delete/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idUtilisateur undefined
   */
  delete(idUtilisateur: number): Observable<null> {
    return this.deleteResponse(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param email undefined
   * @return successful operation
   */
  findByEmailResponse(email: string): Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/utilisateurs/find/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param email undefined
   * @return successful operation
   */
  findByEmail(email: string): Observable<UtilisateurDto> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  changerMotDePasseResponse(body?: ChangerMotDePasseUtilisateurDto): Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/utilisateurs/update/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  changerMotDePasse(body?: ChangerMotDePasseUtilisateurDto): Observable<UtilisateurDto> {
    return this.changerMotDePasseResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param idUtilisateur undefined
   * @return successful operation
   */

  findByIdResponse(idUtilisateur: number): Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/utilisateurs/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param idUtilisateur undefined
   * @return successful operation
   */
  findById(idUtilisateur: number): Observable<UtilisateurDto> {
    return this.findByIdResponse(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate(authenticationRequest);
  }

  getUserByEmail(email?: string): Observable<UtilisateurDto> {
    if (email !== undefined) {
      return this.findByEmail(email);
    }
    return of();
  }

  setAccessToken(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem(this.ACCESS_TOKEN, JSON.stringify(authenticationResponse.accessToken));
  }


  setConnectedUser(utilisateur: UtilisateurDto): void {
    localStorage.setItem('connectedUser', JSON.stringify(utilisateur));
  }

  getConnectedUser(): UtilisateurDto {
    if (localStorage.getItem('connectedUser')) {
      return JSON.parse(localStorage.getItem('connectedUser') as string);
    }
    return {};
  }


  isUserLoggedAndAccessTokenValid(): boolean {
    // localStorage.removeItem('accessToken');
    if (this.loggedIn.getValue()) {
        return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.ACCESS_TOKEN);
    this.loggedIn.next(false);
  }

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


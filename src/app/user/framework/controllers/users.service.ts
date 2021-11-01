import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../../domain/models/user.model';
import { UserGateway } from '../../domain/services/user-gateway';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends UserGateway{

  constructor( private http: HttpClient) {super();}

  getAllUsers(): Observable<UserResponse[]> {
    const headers= new HttpHeaders()
    .set("auth", localStorage.getItem('token') || "");

    return this.http
    .get<UserResponse[]>(`${environment.API_ULR}/users`, {headers});
  }

  getUser(): Observable<void | UserResponse> {
    const userId = localStorage.getItem('user') || '';
    const headers= new HttpHeaders()
    .set("auth", localStorage.getItem('token') || "");
        return this.http
        .get<UserResponse>(`${environment.API_ULR}/users/${userId}`, {headers})
        .pipe(
          map((res:UserResponse) => {
            return res;
          }),
          catchError((err) => this.handlerError(err))
        );
  }
  
  private handlerError(err: { message: any; }): Observable<never> {
    let errorMessage = 'An error ocurred';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

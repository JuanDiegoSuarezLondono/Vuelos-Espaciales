import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, UserResponse } from "../../domain/models/user.model";
import { AuthGateWay } from "../../domain/services/auth-gateway";

@Injectable({
    providedIn: 'root'
})

export class LoginAuthUseCase{
    constructor(private authGateWay: AuthGateWay) {}

    login(authData:User): Observable<UserResponse | void> {
        return this.authGateWay.login(authData);
      }
}
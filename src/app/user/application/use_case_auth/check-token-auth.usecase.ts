import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, UserResponse } from "../../domain/models/user.model";
import { AuthGateWay } from "../../domain/services/auth-gateway";

@Injectable({
    providedIn: 'root'
})

export class CheckTokenAuthUseCase{
    constructor(private authGateWay: AuthGateWay) {}

    checkToken(): boolean {
        return this.authGateWay.checkToken();
      }
}
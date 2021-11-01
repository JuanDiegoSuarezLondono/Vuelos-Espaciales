import { Injectable } from "@angular/core";
import { AuthGateWay } from "../../domain/services/auth-gateway";

@Injectable({
    providedIn: 'root'
})

export class LogoutAuthUseCase{
    constructor(private authGateWay: AuthGateWay) {}

    logout():void {
        return this.authGateWay.logout();
      }
}
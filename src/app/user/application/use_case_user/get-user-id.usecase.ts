import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserResponse } from "../../domain/models/user.model";
import { UserGateway } from "../../domain/services/user-gateway";

@Injectable({
    providedIn: 'root'
})

export class GetUserIdUseCase{
    constructor(private userGateWay: UserGateway) {}

    getUser(): Observable<UserResponse | void> {
        return this.userGateWay.getUser();
      }
}
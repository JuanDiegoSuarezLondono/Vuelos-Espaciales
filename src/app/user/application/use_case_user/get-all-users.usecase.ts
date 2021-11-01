import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserResponse } from "../../domain/models/user.model";
import { UserGateway } from "../../domain/services/user-gateway";

@Injectable({
    providedIn: 'root'
})

export class GetAllUsersUseCase{
    constructor(private userGateWay: UserGateway) {}

    getAllUsers():Observable<Array<UserResponse>>{
        return this.userGateWay.getAllUsers();
      }

}
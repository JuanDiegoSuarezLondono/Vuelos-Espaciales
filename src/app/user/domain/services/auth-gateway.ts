import { Observable } from "rxjs";
import { User, UserResponse } from "../models/user.model";

export abstract class AuthGateWay {
    abstract login(authData:User): Observable<UserResponse | void>;
    abstract logout():void;
    abstract checkToken():boolean;
}
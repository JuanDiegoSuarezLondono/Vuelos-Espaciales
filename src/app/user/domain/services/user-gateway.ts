import { Observable } from "rxjs";
import { UserResponse } from '../../domain/models/user.model';

export abstract class UserGateway {
    abstract getAllUsers(): Observable<Array<UserResponse>>;
    abstract getUser(): Observable<UserResponse | void>;
}
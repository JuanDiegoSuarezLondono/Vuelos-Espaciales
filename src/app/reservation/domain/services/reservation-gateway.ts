import { Observable } from "rxjs";
import { Reservation } from "../models/reservation.model";

export abstract class ReservationGateWay {
    abstract getAllReservations():Observable<Array<Reservation>>;
}
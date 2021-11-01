import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Reservation } from "../../domain/models/reservation.model";
import { ReservationGateWay } from "../../domain/services/reservation-gateway";

@Injectable({
    providedIn: 'root'
})

export class GetAllReservations{
    constructor(private reservationGateWay:ReservationGateWay) {}

    getAllTrips():Observable<Array<Reservation>>{
        return this.reservationGateWay.getAllReservations();
    }
}
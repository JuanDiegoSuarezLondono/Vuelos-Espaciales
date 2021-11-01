import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Trip } from "../../domain/model/trip.model";
import { TripGateWay } from "../../domain/services/trip-gateway";

@Injectable({
    providedIn:'root'
})

export class GetTripIdUseCase {
    constructor(private tripGateWay:TripGateWay){}

    getTrip():Observable<Trip>{
        return this.tripGateWay.getTripId();
    }
}
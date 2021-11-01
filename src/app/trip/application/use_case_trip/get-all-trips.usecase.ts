import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Trip } from "../../domain/model/trip.model";
import { TripGateWay } from "../../domain/services/trip-gateway";

@Injectable({
    providedIn: 'root'
})

export class GetAllTripsUseCase{
    constructor(private tripGateWay:TripGateWay){}

    getAllTrips(): Observable<Array<Trip>>{
        return this.tripGateWay.getAllTrips();
    }

}
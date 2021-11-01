import { Observable } from "rxjs";
import { Trip } from "../model/trip.model";

export abstract class TripGateWay {
    abstract getAllTrips():Observable<Array<Trip>>;
    abstract getTripId():Observable<Trip>;
}
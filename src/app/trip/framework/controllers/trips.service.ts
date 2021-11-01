import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../../domain/model/trip.model';
import { environment } from './../../../../environments/environment';
import { TripGateWay } from '../../domain/services/trip-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService extends TripGateWay {

  constructor(private http: HttpClient) {super();}

  getAllTrips(): Observable<Array<Trip>> {
    const headers= new HttpHeaders()
    .set("auth", localStorage.getItem('token') || "");

    return this.http
    .get<Trip[]>(`${environment.API_ULR}/trips`, {headers});
  }

  getTripId(): Observable<Trip> {
    throw new Error('Method not implemented.');
  }

  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from './../models/trip.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { 
  }

  getAllTrips() {
    const headers= new HttpHeaders()
    .set("auth", localStorage.getItem('token') || "");

    return this.http
    .get<Trip[]>(`${environment.API_ULR}/trips`, {headers});
  }

  addTrip (){
    window.prompt("asdf");
  }

  editTrip() {

  }

  deleteTrip () {

  }

}

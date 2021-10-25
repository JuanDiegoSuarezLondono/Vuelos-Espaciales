import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  getAllReservations() {
    const headers= new HttpHeaders()
    .set("auth", localStorage.getItem('token') || "");

    return this.http
    .get<Reservation[]>(`${environment.API_ULR}/reservation`, {headers});
  }
}

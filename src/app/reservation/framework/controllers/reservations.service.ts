import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reservation } from '../../domain/models/reservation.model';
import { ReservationGateWay } from '../../domain/services/reservation-gateway';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService extends ReservationGateWay{

  constructor(private http: HttpClient) {super();}

  getAllReservations() {
    const headers= new HttpHeaders()
    .set("auth", localStorage.getItem('token') || "");

    return this.http
    .get<Reservation[]>(`${environment.API_ULR}/reservation`, {headers});
  }
}

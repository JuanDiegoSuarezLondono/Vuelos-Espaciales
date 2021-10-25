import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsService } from './service/trips.service';
import { UsersService } from './service/users.service';
import { ReservationsService } from './service/reservations.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TripsService,
    UsersService,
    ReservationsService
  ]
})
export class CoreModule { }
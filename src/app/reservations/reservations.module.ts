import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationsRoutingModule } from './reservations-routing.module';



@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }

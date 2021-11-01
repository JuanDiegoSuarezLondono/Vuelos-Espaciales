import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './UI/layout/layout.component';
import { SharedModule } from './UI/shared/shared.module';
import { UserGateway } from './user/domain/services/user-gateway';
import { UsersService } from './user/framework/controllers/users.service';
import { AuthGateWay } from './user/domain/services/auth-gateway';
import { AuthService } from './user/framework/controllers/auth.service';
import { TripGateWay } from './trip/domain/services/trip-gateway';
import { TripsService } from './trip/framework/controllers/trips.service';
import { ReservationGateWay } from './reservation/domain/services/reservation-gateway';
import { ReservationsService } from './reservation/framework/controllers/reservations.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {provide: UserGateway, useClass: UsersService},
    {provide: AuthGateWay, useClass: AuthService},
    {provide: TripGateWay, useClass: TripsService},
    {provide:ReservationGateWay, useClass: ReservationsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

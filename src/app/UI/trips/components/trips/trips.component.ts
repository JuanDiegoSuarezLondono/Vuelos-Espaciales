import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/trip/domain/model/trip.model';
import { GetAllTripsUseCase } from 'src/app/trip/application/use_case_trip/get-all-trips.usecase';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips : Trip[] = [];

  constructor(private getAllTrips:GetAllTripsUseCase) { }

  role = localStorage.getItem('role') || 1;

  ngOnInit(): void {
    this.fetchTrips();
  }

  fetchTrips() {
    this.getAllTrips.getAllTrips()
    .subscribe(trips => {
      this.trips = trips;
    });
  }

}

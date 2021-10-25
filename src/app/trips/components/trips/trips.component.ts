import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/core/service/trips.service';
import { Trip } from 'src/app/core/models/trip.model';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips : Trip[] = [];

  constructor(private tripsServ:TripsService) { }

  role = localStorage.getItem('role') || 1;

  ngOnInit(): void {
    this.fetchTrips();
  }

  fetchTrips() {
    this.tripsServ.getAllTrips()
    .subscribe(trips => {
      this.trips = trips;
    });
  }

}

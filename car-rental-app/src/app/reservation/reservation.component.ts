import { Component, OnInit } from '@angular/core';

import { ReservationService } from '../services/reservation.service';
import { Booking } from './reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  bookings: any;
  newBooking: any = new Booking();
  minDate = new Date();

  constructor(
    private _reservationService: ReservationService
  ) {}

  ngOnInit() {
    this._reservationService.getBookings().subscribe(data => {
      this.bookings = data.bookings
    })
  }

  onSubmit() {
    alert('Your car has been reserved!');
    //send data to backend
    //redirect to home
  }

}

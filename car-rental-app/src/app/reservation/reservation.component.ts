import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationService } from '../services/reservation.service';
import { Booking } from './reservation';
import { CarService } from '../services/car.service';

import * as _ from 'lodash';
import * as moment from 'moment';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  bookings: any;
  newBooking: any = new Booking();
  minDate = new Date();

  allcars: any;
  availableCars: any;
  first_name: string;
  last_name: string;

  constructor(
    private _reservationService: ReservationService,
    private _carService: CarService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._reservationService.getBookings().subscribe(data => {
      this.bookings = data.bookings
    })
    this._carService.getCars('all').subscribe(data => {
      this.allcars = data.cars;
    })
  }

  dateRangeSelected() {
    return (this.newBooking.start && this.newBooking.end) ? true : false;
  }

  filterAvailableCars() {
    if (!this.dateRangeSelected()) return;
    var overlappingBookings = _.filter(this.bookings, b => { 
      let startBtwn = moment(moment(this.newBooking.start).format('MM/DD/YYYY')).isBetween(b.start, b.end, 'day', '[]');
      let endBtwn = moment(moment(this.newBooking.end).format('MM/DD/YYYY')).isBetween(b.start, b.end, 'day', '[]');
      return startBtwn || endBtwn;
    });
    if (!overlappingBookings.length){ 
      this.availableCars = this.allcars
    } else {
      let bookedCars = _.map(overlappingBookings, 'car_id');
      this.availableCars = _.filter(this.allcars, c => {
        return !bookedCars.includes(c.id);
      })
    }    
  }

  isValid() {
    if (this.dateRangeSelected() && this.first_name && this.last_name && this.newBooking.car_id) {
      return true;
    }
    return false;
  }

  setCustomerId() {
    return Math.round(Math.random() * 1000);
  }

  onSubmit() {
    this.newBooking.customer = this.setCustomerId();
    this.newBooking.start = moment(this.newBooking.start).format('MM/DD/YYYY');
    this.newBooking.end = moment(this.newBooking.end).format('MM/DD/YYYY');
    this._reservationService.addBooking(this.newBooking).subscribe(resp => {
      let success = resp;
      alert(success.message);
      this._router.navigateByUrl('/');
    })
  }

}

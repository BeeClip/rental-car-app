import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getBookings(): any {
    return this.http.get('api/reserve')
  }

  addBooking(newBooking):any {
    return this.http.post('api/reserve', {booking: newBooking}, this.httpOptions)
  }
}

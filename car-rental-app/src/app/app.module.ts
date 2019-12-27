import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav-component/nav-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarComponent,
    CarListComponent,
    ReservationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

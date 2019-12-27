import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car-list/car-list.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars/:listType', component: CarListComponent },
  { path: 'reserve', component: ReservationComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

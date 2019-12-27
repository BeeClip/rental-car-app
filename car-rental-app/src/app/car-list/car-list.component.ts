import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarService } from '../services/car.service';

import { Car } from '../car/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  listType: string;
  cars: any;

  constructor(private _route: ActivatedRoute,
    private _carService: CarService) {}

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.listType = params.get('listType')
      this._carService.getCars(this.listType).subscribe(data => {
        this.cars = data.cars;
      })
    });
  }

}

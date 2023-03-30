import {Component, OnInit} from '@angular/core';
import {CarsService} from "../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  data:any
  constructor(private carsService:CarsService) {

  }
  ngOnInit() {
    this.carsService.getCars().subscribe((data)=>this.data=data)
  }
}

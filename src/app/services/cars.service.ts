import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }
  getCars(){
    return this.http.get(
      'https://car-data.p.rapidapi.com/cars',
      {headers:new HttpHeaders({

          'X-RapidAPI-Key': '14bc774910msh0a24f2d5939fcd7p105e5bjsn8b210431769f',
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        })}
    )
  }
}

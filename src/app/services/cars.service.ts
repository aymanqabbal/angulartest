import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarInterface} from "../../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }
  getCars():Observable<CarInterface[]>{
    return this.http.get<CarInterface[]>(
      'https://car-data.p.rapidapi.com/cars',
      {headers:new HttpHeaders({

          'X-RapidAPI-Key': '14bc774910msh0a24f2d5939fcd7p105e5bjsn8b210431769f',
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }) , params:new HttpParams().append('make','HUMMER')}

    )
  }
  getMakes():Observable<CarInterface[]>{
    return this.http.get<CarInterface[]>(
      'https://car-data.p.rapidapi.com/cars/makes',
      {headers:new HttpHeaders({

          'X-RapidAPI-Key': '14bc774910msh0a24f2d5939fcd7p105e5bjsn8b210431769f',
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        })}

    )
  }
}
// , params:new HttpParams().append('make','HUMMER')

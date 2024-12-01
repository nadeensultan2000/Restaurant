import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
apiurl='https://restaurantdeliveryapp.runasp.net/api/';

  constructor(private http:HttpClient) { }
  getRestaurants(){
    return this.http.get(`${this.apiurl}Restaurant`)
  }
  getRestaurantsByCity(city:string){
    return this.http.get(`${this.apiurl}Restaurant/bycity/${city}`)
  }
  getMenuById(id:any){
    return this.http.get(`${this.apiurl}Restaurant/${id}/menu`)
  }
  CreateNewOrder(Model: any) {
    return this.http.post(`${this.apiurl}Order`, Model);
  }
}

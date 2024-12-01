import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
[x: string]: any;
  cities = ['Mansoura', 'Alex', 'Cairo',''];
  
  restaurants: any[] = [];
 
  constructor(private service:SearchService){
  }
  ngOnInit():void{
 
    this.searchRestaurants();
    
  }
  city:string=''

  selectedCity: string=''
  searchRestaurants() {
    this.service.getRestaurants().subscribe((data:any)=>{
      this.restaurants=data
    })
    console.log(this.restaurants)
  }

    
    
  fillterRestaurant(selectedCity:any){
    if(selectedCity==0){
    this.searchRestaurants()
    }
    else{
    this.service.getRestaurantsByCity(selectedCity).subscribe((data:any)=> {
      this.restaurants=data;
   })
    console.log(this.restaurants);
  }
}
}


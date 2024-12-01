import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { HttpClientModule } from '@angular/common/http';
import { YourDataComponent } from './your-data/your-data.component';

const routes: Routes = [
  {path:'',redirectTo:'search',pathMatch:'full'},
  {path:'search',component:SearchComponent},
  {path:'menu/:id',component:MenuComponent},
  {path:'customer',component:CustomerDataComponent},
  {path:'yourdata',component:YourDataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule,BrowserModule,FormsModule]
})
export class AppRoutingModule{




 }

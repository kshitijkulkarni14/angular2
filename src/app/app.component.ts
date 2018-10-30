import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  regions = ['East','West','South','North','Midwest'];
  states = ['California','Quebec','Jalisco','Jalisco','Illinois'];
  loaded = false;
  customer :Customer; //= this.customers[0];  
}

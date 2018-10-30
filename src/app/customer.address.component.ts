import { Component,Input,OnInit } from '@angular/core';
import { Address } from './model';
import { DataService } from './data.service';

@Component({
  selector: 'customer-address',
  templateUrl: './customer.address.component.html',
  styleUrls: ['./app.component.css']
})
export class CustomerAddressComponent implements OnInit{
  @Input() address :Address;

  constructor(private dataService:DataService){}

    ngOnInit(){
    this.dataService.getStates().subscribe((states) => {
      this.states = states;
    });
  }

  regions = ['East','West','South','North','Midwest'];
  states :string[];
}

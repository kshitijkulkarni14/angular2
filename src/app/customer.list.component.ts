import { Component,OnInit } from '@angular/core';
import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer.list.component.html',
  styleUrls: ['./app.component.css']
})
export class CustomerListComponent implements OnInit{
  
  customers: Customer[] ;
  customer :Customer; //= this.customers[0];  
  showAddress = true;
  loaded = false;
  constructor(private dataService:DataService,private loggerService:LoggerService){}

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.loggerService.log("Getting customers . . . ");
    this.dataService.getCustomersOH().subscribe(cust => {
      this.customers = cust;
      this.loaded = true;
    } ,(errorMsg :string) => {
      this.loaded = true;
      alert(errorMsg);
    });
  }

  shift(increment:number){
    let i = this.customers.findIndex(c => c === this.customer) + increment;
    // console.log(i);
    if(i>-1 && i < this.customers.length)
      this.customer = this.customers[i];
  }
}

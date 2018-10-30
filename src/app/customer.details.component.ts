import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'customer-details',
  templateUrl: './customer.details.component.html',
  styleUrls: ['./app.component.css']
})
export class CustomerDetailsComponent {
  @Input() customer :Customer;
  @Output() shift1 = new EventEmitter<number>();
  
  states :string[];
  image="favicon.ico";
  showAddress = true;

  left(){
    this.shift1.emit(-1);
  }

  right(){
    this.shift1.emit(1);
  }
}

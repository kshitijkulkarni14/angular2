import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';

import { CustomerListComponent } from './customer.list.component'
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer.details.component';
import { CustomerAddressComponent } from './customer.address.component';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';


@NgModule({
  declarations: [
    AppComponent
    ,CustomerListComponent
    ,CustomerDetailsComponent
    ,CustomerAddressComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,HttpModule
  ],
  providers: [DataService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}

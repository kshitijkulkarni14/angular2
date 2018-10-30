import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { getCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/observable/throw';


@Injectable()
export class DataService {

    customerUrl: string = 'assets/customers.json';
    statesUrl: string = 'assets/states.json';
    customers: Customer[];

    constructor(private loggerService: LoggerService,
        private http: Http) { }

    getCustomersP(): Promise<Customer[]> {
        let customerList = getCustomers();
        this.loggerService.log("Getting customers using a Promise");

        return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                this.loggerService.log("We've got " + customerList.length + " customers");
                resolve(customerList);
            }, 1500);
        });
    }

    getCustomersPH(): Promise<Customer[]> {
        this.loggerService.log("Getting customers as a promise using http . . . ");
        return this.http.get(this.customerUrl)
            .toPromise()
            .then(response => {
                this.customers = response.json().data;
                this.loggerService.log("Got ${this.customers.length} customers");
                return this.customers;
            },
            error => {
                this.loggerService.log(`Error occured ${error} `);
                return Promise.reject('Something went wrong');
            });
    }

    getCustomersOH(): Observable<Customer[]> {
        return this.http.get(this.customerUrl).
            map(response => response.json().data);
    }

    getCustomers() {
        let customerList = getCustomers();
        this.loggerService.log("Getting customers using a Promise");

        return of(customerList)
            .delay(1500)
            .do(() => {
                this.loggerService.log("We've got " + customerList.length + " customers");
            });

    }



    getStates(): Observable<string[]> {
        return this.http.get(this.statesUrl).map(response =>
            response.json().data);
    }
}
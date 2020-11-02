import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Exchange} from '../models/exchange';
import {Rate} from '../models/rate';

@Injectable({
    providedIn: 'root'
})
export class RateServiceService {

    private apiUrl = `https://api.exchangeratesapi.io`;

    constructor(private http: HttpClient) {
    }

    getExchange(base: string): any {
        return this.http.get(`${this.apiUrl}/latest?base=${base}&symbols=USD,EUR,CHF,GBP`).pipe(
            map(result => {
                let rates: Rate[];

//todo for loop results, and push tu rates vairable object Rate for specific country

                let tempObject: Exchange = {
                    base: result.base,
                    date: result.date,
                    rates: rates
                };
            }));
    }
}

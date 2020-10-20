import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RateServiceService {

  private latestRatesUrl = `https://api.exchangeratesapi.io/latest`;
  constructor(private http: HttpClient) { }

  getDateRate() {
    return this.http.get(this.latestRatesUrl, {responseType: 'text'}).pipe(
        map(result => {
          let rows = result.split('\n');
          rows.splice(0, 1);
          //console.log(rows);
          rows.forEach(row => {
            let cols = row.split(/,(?=\S)/)


          })
          return result;
        })
    )
  }
}






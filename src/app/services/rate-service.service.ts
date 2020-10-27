import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RateServiceService {

  private latestRatesUrl = `https://api.exchangeratesapi.io/latest`;
  constructor(private http: HttpClient) { }

    // tslint:disable-next-line:typedef
  getDateRate(): Observable<string[]> {

    return this.http.get(this.latestRatesUrl, {responseType: 'text'}).pipe(
        map(result => {
            result.split('\n');
            return result.split(',');
        })
    );
  }
}






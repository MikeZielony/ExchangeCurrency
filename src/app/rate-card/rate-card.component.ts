import {Component} from '@angular/core';
import {RateServiceService} from 'src/app/services/rate-service.service';

@Component({
    selector: 'app-rate-card',
    templateUrl: './rate-card.component.html',
    styleUrls: ['./rate-card.component.css']
})
export class RateCardComponent {
    rates = [
        {
            base: 'USD',
            target: 'JPY'
        },

        {
            base: 'BGN',
            target: 'CZK'
        },

        {
            base: 'GBP',
            target: 'HUF'
        },

    ];

    index = 0;
    actualrate = {
    base: 'USD',
    target: 'JPY'
};
    // currencySign: string[] = ['USD', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB', 'TRY', 'AUD', 'BRL', 'CAD', 'CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MXN', 'MYR', 'NZD', 'PHP', 'SGD', 'THB', 'ZAR'];

    constructor(private service: RateServiceService) {
        this.setUpRateChangeInterval();
    }

    // tslint:disable-next-line:use-lifecycle-interface
    /*ngOnInit(): void {

        this.service.getDateRate()
            .subscribe(
                {
                    next: (rows) => {
                        for (let i = 1; i < rows.length - 2; i++) {
                            console.log('Kurs do Euro : ' + rows[i]);
                        }
                    }
                }
            );
    }*/

 setUpRateChangeInterval(){
        setInterval(() => {
            if (this.index === this.rates.length){
                this.index = 0;
                // tslint:disable-next-line:align
            } this.actualrate = this.rates[this.index++];

        },2000);
 }

}

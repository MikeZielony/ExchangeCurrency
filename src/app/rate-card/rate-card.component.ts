import {Component, OnInit} from '@angular/core';
import {RateServiceService} from 'src/app/services/rate-service.service';


@Component({
    selector: 'app-rate-card',
    templateUrl: './rate-card.component.html',
    styleUrls: ['./rate-card.component.css']
})
export class RateCardComponent implements OnInit {
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


    constructor(private service: RateServiceService) {
        this.setUpRateChangeInterval();
    }

    ngOnInit(): void {
    }


    setUpRateChangeInterval() {
        setInterval(() => {
            if (this.index === this.rates.length) {
                this.index = 0;
                // tslint:disable-next-line:align
            }
            this.actualrate = this.rates[this.index++];

        }, 2000);
    }

}

import {Component, OnInit} from '@angular/core';
import {RateServiceService} from 'src/app/services/rate-service.service';


@Component({
    selector: 'app-rate-card',
    templateUrl: './rate-card.component.html',
    styleUrls: ['./rate-card.component.css']
})
export class RateCardComponent implements OnInit {


    index = 0;
    actualrate = {
        base: 'USD',
        target: 'JPY'
    };
    exchange: any;


    constructor(private service: RateServiceService) {
        this.setUpRateChangeInterval();
    }

    ngOnInit(): void {
    }


    // tslint:disable-next-line:typedef
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

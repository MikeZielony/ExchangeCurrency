import {Component, OnInit} from '@angular/core';
import {RateServiceService} from 'src/app/services/rate-service.service';

@Component({
    selector: 'app-rate-card',
    templateUrl: './rate-card.component.html',
    styleUrls: ['./rate-card.component.css']
})
export class RateCardComponent {

    constructor(private service: RateServiceService) {
    }

    ngOnInit(): void {

        this.service.getDateRate()
            .subscribe(
                {
                    next: (rows) => {
                        for (let i = 1; i < rows.length - 2; i++) {
                            console.log("Kurs do Euro : " + rows[i]);
                        }
                    }
                }
            )
    }

}

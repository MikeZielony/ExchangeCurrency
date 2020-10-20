import { Component, OnInit } from '@angular/core';
import { RateServiceService } from 'src/app/services/rate-service.service';

@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.css']
})
export class RateCardComponent {

  constructor(private service : RateServiceService ) { }

  ngOnInit(): void {
    console.log("test1")
   this.service.getDateRate()
       .subscribe(
           {next : (rows)=>{
               console.log(rows);
               }}
       )



      }

}

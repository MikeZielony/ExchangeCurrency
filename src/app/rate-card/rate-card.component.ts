import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.css']
})
export class RateCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('test');
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-value',
  templateUrl: './total-value.component.html',
  styleUrls: ['./total-value.component.css']
})
export class TotalValueComponent implements OnInit {

  @Input("paymentList") paymentList: object
  @Input("totalValue") totalValue: number

  

  constructor() { }

  ngOnInit(): void {
  }

}

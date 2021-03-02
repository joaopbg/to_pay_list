import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-pay',
  templateUrl: './to-pay.component.html',
  styleUrls: ['./to-pay.component.css']
})
export class ToPayComponent implements OnInit {

  @Input("paymentList") paymentList: object
  @Input("testVar") testVar:string

  constructor() { }

  ngOnInit(): void {
    console.log(this.testVar)
  }

  

  

}

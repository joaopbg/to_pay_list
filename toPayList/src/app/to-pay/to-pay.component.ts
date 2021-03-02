import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-pay',
  templateUrl: './to-pay.component.html',
  styleUrls: ['./to-pay.component.css']
})
export class ToPayComponent implements OnInit {

  @Input("paymentList") paymentList: object
  @Output() buttonPaidoutPressed = new EventEmitter<object>()




  constructor() { }

  ngOnInit(): void {
  }

  public paidout(payment){
    this.buttonPaidoutPressed.emit(payment)

  }

  

  

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  @Output() buttonRegisterPressed = new EventEmitter<object>()

  constructor() { }

  ngOnInit(): void {
  }
  
  public billTitle: string
  public value: string
  public dueDate: string

  public addPayment(){
    this.buttonRegisterPressed.emit({billTitle:this.billTitle, value:this.value, dueDate:this.dueDate})
    this.cleanForm()
    
  }

  public cleanForm(){
    this.billTitle = ""
    this.value = ""
    this.dueDate = ""
  }

}

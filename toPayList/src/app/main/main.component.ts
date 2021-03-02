import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  }

  public paymentList = [{
    billTitle:"Credit Card",
    value:"R$ 900000,00",
    dueDate:"overdue"
  }]

  public testVar = "fuck you JS"
  

  private addPayment(payment){
    this.paymentList.push(payment)
  }

  private paidOut(paidOut){
    // this.paymentList.filter(bill => bill.billTitle != paidOut.billTitle)

  }

}

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

  public addPayment(payment){
  
    this.paymentList.push(payment)
  }

  public paidOut(paidOut){
    this.paymentList = this.paymentList.filter(paymentList => paymentList.billTitle != paidOut.billTitle)
  }

  public checkDuplicatedRegisters(payment){
    
  }

  public checkEmptyData(payment){

  }

  

}

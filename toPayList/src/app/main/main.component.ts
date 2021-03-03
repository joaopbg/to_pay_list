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
    value:"R$513,23",
    dueDate:"2021-26-03"
  }]

  public addPayment(payment){
    if(this.isEmptyData(payment)){}
    else this.paymentList.push(payment)
  }

  public paidOut(paidOut){
    this.paymentList = this.paymentList.filter(paymentList => paymentList.billTitle != paidOut.billTitle)
  }

  public isEmptyData(payment){
    if(payment.billTitle == null || payment.billTitle == " "){
      alert("Bill Title is empty, please set a name to this payment")
      return true      
    }else if(this.isDuplicatedRegister(payment)){
      alert("Bill already registred, please check bill title again")
        return true
    }else return false
  }

  public isDuplicatedRegister(payment){
    let obj = this.paymentList.filter(paymentList => paymentList.billTitle == payment.billTitle)
    if(obj.length >= 1){
      return true   
    }else return false
    
  }

  

}

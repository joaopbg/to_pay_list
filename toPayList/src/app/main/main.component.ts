import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getTotalValue()
  }

  public paymentList = [{
    billTitle:"Credit Card",
    value:"513.23",
    dueDate:"2021-26-03"
  }]

  public totalValue: number = 0

  public addPayment(payment){
    if(this.isEmptyData(payment)){}
    else{
      this.paymentList.push(payment)
      this.updateTotalValue(payment)
    } 
  }

  public paidOut(paidOut){
    this.totalValue = this.totalValue - Number(paidOut.value)
    this.paymentList = this.paymentList.filter(paymentList => paymentList.billTitle != paidOut.billTitle)
    
  }

  public isEmptyData(payment){
    if(payment.billTitle == undefined || payment.billTitle == "" || payment.value == undefined || payment.dueDate == ""){
      alert("Bill Title or value is empty, please check your input")
      return true      
    }else if(this.isDuplicatedRegister(payment)){
      alert("Bill already registred, please check bill title again")
        return true
    }else return false
  }

  public isDuplicatedRegister(payment){
    let obj = this.paymentList.filter(paymentList => paymentList.billTitle == payment.billTitle)
    if(obj.length >= 1)
      return true   
    else return false
    
  }

  public getTotalValue(){
    let index = 0
    for(index = 0; index < this.paymentList.length; index++){
      this.totalValue = this.totalValue + Number(this.paymentList[index].value)
    }

  }

  public updateTotalValue(payment){
    this.totalValue = this.totalValue + Number(payment.value)

  }

}

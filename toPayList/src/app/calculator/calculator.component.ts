import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public expression = []

  public data = []
  public operators = []

  public values = ["7","8","9","+","4","5","6","-","1","2","3","*","0","C","=","/"]

  public display: string = "C"


  public buttonPressed(value){
    this.display = value
  }

}

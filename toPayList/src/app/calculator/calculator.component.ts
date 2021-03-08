import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  public data = []
  public operators = []

  public values = ["7","8","9","+","4","5","6","-","1","2","3","*","0","C","=","/"]

  public display: string = ""


  public buttonPressed(value){
    if(this.isNumber(value)){
      this.display = this.display + value
    }else{
      this.operation(value)
    }
  }

  public isNumber(value){
    let number = ["1","2","3","4","5","6","7","8","9","0"]
    if(number.includes(value)) return true
    else return false
  }

  public operation(value){
    if(value == "="){
      this.data.push(Number(this.display))
      this.getResult()
    }
    else if(value == "C"){
      this.cleanData()
      this.cleanDisplay()
    }
    
    else this.organizeData(value)

  }

  public getResult(){
    this.solve()
    this.cleanData()
  }

  public cleanDisplay(){
    this.display = ""
  }

  public cleanData(){
    this.data = []
    this.operators = []
  }

  public organizeData(value){
    switch(value){
      case "+":
        this.sum()
        break
      case "-":
        this.sub()
        break
      case "*":
        this.mult()
        break
      case "/":
        this.div()
        break
      default:
        break
    }
    

  }

  private sum(){
    this.data.push(Number(this.display))
    this.operators.push("+")
    this.cleanDisplay()
  }

  private sub(){
    this.data.push(Number(this.display))
    this.operators.push("-")
    this.cleanDisplay()

  }

  private mult(){
    this.data.push(Number(this.display))
    this.operators.push("*")
    this.cleanDisplay()

  }
  private div(){
    this.data.push(Number(this.display))
    this.operators.push("/")
    this.cleanDisplay()

  }

  private solve(){
    let cache = []
    do{
      cache.push(this.data[0],this.data[1])
      this.data.shift()
      this.calc(cache, this.operators[0])
      this.operators.shift()
      cache = []
    }while(this.operators.length > 0)
    this.display = this.data[0]
  }

  private calc(cache, operation){
    let result: Number
    switch(operation){
      case "+":
        this.data[0] = cache[0]+cache[1]
        break
      case "-":
        this.data[0] = cache[0]-cache[1]
      break
      case "*":
        this.data[0] = cache[0]*cache[1]
      break
      case "/":
        this.data[0] = cache[0]/cache[1]
      break
    }

  }

}

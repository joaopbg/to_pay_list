import { Component, OnInit , EventEmitter , Input , Output} from '@angular/core';

@Component({
  selector: 'app-calculator-keyboard',
  templateUrl: './calculator-keyboard.component.html',
  styleUrls: ['./calculator-keyboard.component.css']
})
export class CalculatorKeyboardComponent implements OnInit {

  @Output() buttonPressedEvent = new EventEmitter<string>()
  @Input("values") values

  constructor() { }

  ngOnInit(): void {
  }

  public buttonPressed(value){
    this.buttonPressedEvent.emit(value)

  }

}

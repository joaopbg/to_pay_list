import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ToPayComponent } from './to-pay/to-pay.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { TotalValueComponent } from './total-value/total-value.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';
import { CalculatorKeyboardComponent } from './calculator-keyboard/calculator-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToPayComponent,
    PaymentFormComponent,
    TotalValueComponent,
    CalculatorComponent,
    CalculatorDisplayComponent,
    CalculatorKeyboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

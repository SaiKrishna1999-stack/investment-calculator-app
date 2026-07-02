import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone: true
})
export class UserInput {
  enteredInitialInvestment= "0";
  enteredAnnualInvestment= "0";
  enteredExpectedReturn= "0";
  enteredDuration= "0";
  constructor(private investmentService: InvestmentService) { }
  onSubmit() {
    this.investmentService.CaluculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    });
    this.enteredInitialInvestment = "0";
    this.enteredAnnualInvestment = "0";
    this.enteredExpectedReturn = "0";
    this.enteredDuration = "0";
  }
}

import { Component, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInput } from './user-input/user-input.component';
import { InvestmentResults } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInput, InvestmentResults],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class App {

  annualData: { 
    year: number; 
    interest: number; 
    valueEndOfYear: number; 
    annualInvestment: number; 
    totalInterest: number; 
    totalAmountInvested: number 
  }[] = [];

  onCaluculateInvestmentResults(event: { initialInvestment: number; annualInvestment: number; expectedReturn: number; duration: number }) {
    let investmentValue = event.initialInvestment;

    for (let i = 0; i < event.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (event.expectedReturn / 100);
      investmentValue += interestEarnedInYear + event.annualInvestment;
      const totalInterest =
        investmentValue - event.annualInvestment * year - event.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: event.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: event.initialInvestment + event.annualInvestment * year,
      });
    }
    console.log(this.annualData);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  annualData: { 
    year: number; 
    interest: number; 
    valueEndOfYear: number; 
    annualInvestment: number; 
    totalInterest: number; 
    totalAmountInvested: number 
  }[] = [];

  CaluculateInvestmentResults(event: { initialInvestment: number; annualInvestment: number; expectedReturn: number; duration: number }) {
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
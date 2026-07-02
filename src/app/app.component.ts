import { Component, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInput } from './user-input/user-input.component';
import { InvestmentResults } from './investment-results/investment-results.component';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInput, InvestmentResults],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class App {
  constructor(public investmentService: InvestmentService) {}
}

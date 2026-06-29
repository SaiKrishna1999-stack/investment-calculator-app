import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInput } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInput],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class App {
}

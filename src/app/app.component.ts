import { Component } from '@angular/core';
import { RestaurantsGridComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [RestaurantsGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

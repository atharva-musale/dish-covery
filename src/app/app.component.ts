import { Component } from '@angular/core';
import { RestaurantsGridComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [RestaurantsGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public headerImageUrl = 'url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)';
}

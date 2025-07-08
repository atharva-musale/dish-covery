import { Component, Input } from '@angular/core';
import { RestaurantType } from '../../../models';

@Component({
  selector: 'app-restaurant-type-badge',
  imports: [],
  templateUrl: './restaurant-type-badge.component.html',
  styleUrl: './restaurant-type-badge.component.css'
})
export class RestaurantTypeBadgeComponent {
  /**
   * The restaurant types to display as badges.
   */
  @Input()
  public restaurantType: RestaurantType[] = [];
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RestaurantType } from '../../models';

@Component({
  selector: 'app-restaurant-type-badge',
  imports: [],
  templateUrl: './restaurant-type-badge.component.html',
  styleUrl: './restaurant-type-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantTypeBadgeComponent {
  /**
   * The restaurant types to display as badges.
   */
  public readonly restaurantType = input<RestaurantType[]>([]);
}

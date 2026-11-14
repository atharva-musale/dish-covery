import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RatingBadgeComponent } from '@dish/shared/components';
import { RestaurantReviewData } from '@dish/shared/models';
import { RestaurantTypeBadgeComponent } from '../restaurant-type-badge/restaurant-type-badge.component';

@Component({
  selector: 'app-restaurant-teaser',
  imports: [RatingBadgeComponent, RestaurantTypeBadgeComponent],
  templateUrl: './restaurant-teaser.component.html',
  styleUrl: './restaurant-teaser.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantTeaserComponent {
  /**
   * Data about the restaurant to display
   */
  public readonly restaurant = input<RestaurantReviewData>();
}

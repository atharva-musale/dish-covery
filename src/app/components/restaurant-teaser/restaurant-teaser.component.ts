import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { RestaurantReviewData } from '../../../models';
import { RatingBadgeComponent } from '../rating-badge/rating-badge.component';

@Component({
  selector: 'app-restaurant-teaser',
  imports: [RatingBadgeComponent],
  templateUrl: './restaurant-teaser.component.html',
  styleUrl: './restaurant-teaser.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantTeaserComponent {
  /**
   * Data about the restaurant to display
   */
  @Input()
  public restaurant?: RestaurantReviewData;
}

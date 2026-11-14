import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RestaurantReviewData } from '@dish/shared/models';
import { RestaurantStateService } from '@dish/shared/services';
import { map, Observable } from 'rxjs';
import { RestaurantTeaserComponent } from '../../components/restaurant-teaser/restaurant-teaser.component';

@Component({
  selector: 'app-restaurants-grid',
  imports: [RestaurantTeaserComponent, AsyncPipe],
  templateUrl: './restaurants-grid.component.html',
  styleUrl: './restaurants-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantsGridComponent {
  private readonly restaurantStateService = inject(RestaurantStateService);

  /**
   * Restaurant details
   */
  public restaurants$: Observable<RestaurantReviewData[]>;

  constructor() {
    this.restaurants$ = this.restaurantStateService.filteredRestaurants$.pipe(
      map(restaurants => (
        restaurants.map(restaurant => ({
            ...restaurant,
            imageUrl: this.getImageUrl(restaurant)
          }))
      ))
    );
  }

  /**
   * Returns the image url based on following priority:
   * 1. imageUrl from backend
   * 2. imageAssetsPath from backend
   * 3. fallback image from assets
   *
   * @param restaurant restaurant data from backend
   * @returns image url
   */
  private getImageUrl(restaurant: RestaurantReviewData): string {
    const domain = window.document.URL;
    return restaurant.imageUrl ??
      `${domain}${(restaurant.imageAssetsPath ?? '/assets/images/fallback-restaurant.png')}`;
  }
}

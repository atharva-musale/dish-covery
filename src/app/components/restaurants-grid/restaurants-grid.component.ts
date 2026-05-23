import { Component, ViewEncapsulation } from '@angular/core';
import { RestaurantTeaserComponent } from '../restaurant-teaser/restaurant-teaser.component';
import { RestaurantDataService } from '../../services';
import { map, Observable } from 'rxjs';
import { RestaurantReviewData } from '../../models';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-restaurants-grid',
  imports: [RestaurantTeaserComponent, AsyncPipe],
  templateUrl: './restaurants-grid.component.html',
  styleUrl: './restaurants-grid.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RestaurantsGridComponent {
  /**
   * Restaurant details
   */
  public restaurants$: Observable<RestaurantReviewData[]>;

  constructor(private restaurantDataService: RestaurantDataService) {
    this.restaurants$ = this.restaurantDataService.restaurants$.pipe(
      map(restaurants => (
        restaurants
          .sort((a, b) => b.rating - a.rating)
          .map(restaurant => ({
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

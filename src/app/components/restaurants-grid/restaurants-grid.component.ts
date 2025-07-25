import { Component, ViewEncapsulation } from '@angular/core';
import { RestaurantTeaserComponent } from '../restaurant-teaser/restaurant-teaser.component';
import { RestaurantDataService } from '../../services';
import { map, Observable } from 'rxjs';
import { RestaurantReviewData } from '../../../models';
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
      map(restaurants => {
        // Sort in descending order
        const restaurantsSortedByRating = restaurants.sort((a, b) => b.rating - a.rating);
        return restaurantsSortedByRating.map(restaurant => ({ ...restaurant, imageUrl: `${window.document.URL}${restaurant.imageUrl}` }))
      })
    );
  }
}

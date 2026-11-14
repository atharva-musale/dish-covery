import { BehaviorSubject } from 'rxjs';
import { FilterState, RestaurantReviewData } from '../../models';
import { RestaurantStateService } from './restaurant-state.service';

export class RestaurantStateServiceMock implements Readonly<RestaurantStateService> {
  public restaurants$ = new BehaviorSubject<RestaurantReviewData[]>([]);
  public filteredRestaurants$ = new BehaviorSubject<RestaurantReviewData[]>([]);
  public filterState$ = new BehaviorSubject<FilterState>({ restaurantType: null, rating: null });

  public updateFilterState = vi.fn();
  public addNewRestaurant = vi.fn();
}

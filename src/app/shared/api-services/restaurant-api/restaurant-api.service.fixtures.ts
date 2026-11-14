import { RestaurantApiService } from './restaurant-api.service';

export class RestaurantApiServiceMock implements Readonly<RestaurantApiService> {
  public getRestaurants$ = vi.fn();
  public addNewRestaurant = vi.fn();
}
import { BehaviorSubject } from "rxjs";
import { FilterState, RestaurantReviewData } from "../../models";
import { RestaurantDataService } from "./restaurant-data.service";

export class RestaurantDataServiceFixtures implements Readonly<RestaurantDataService> {
  public filteredRestaurants$: BehaviorSubject<RestaurantReviewData[]>;
  public filterState$: BehaviorSubject<FilterState>;

  constructor() {
    this.filteredRestaurants$ = new BehaviorSubject<RestaurantReviewData[]>([]);
    this.filterState$ = new BehaviorSubject<FilterState>({ restaurantType: null, rating: null });
  }

  public updateFilterState = jasmine.createSpy('updateFilterState');
  public addNewRestaurant = jasmine.createSpy('addNewRestaurant');
  public getRestaurantsFromApi$ = jasmine.createSpy('getRestaurantsFromApi$');
}

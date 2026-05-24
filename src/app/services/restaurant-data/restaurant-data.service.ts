import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterState, RestaurantReviewData } from '../../models';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  private readonly apiUrl = 'http://localhost:3000/restaurants';
  private restaurants$: Observable<RestaurantReviewData[]>;
  private filterStateSubject$ = new BehaviorSubject<FilterState>({ restaurantType: null, rating: null });

  /** Observable stream of filtered restaurant*/
  public filteredRestaurants$: Observable<RestaurantReviewData[]>;

  /** Observable stream of the current filter state */
  public filterState$ = this.filterStateSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.restaurants$ = this.getRestaurantsFromApi$();
    const sortedRestaurants$ = this.restaurants$.pipe(
      map(restaurants => restaurants.sort((a, b) => b.rating - a.rating))
    );

    this.filteredRestaurants$ = combineLatest([
      sortedRestaurants$,
      this.filterState$
    ]).pipe(
      map(([restaurants, filterState]) => {
        return restaurants.filter(restaurant => this.matchFilter(restaurant, filterState));
      })
    );
  }

  /**
   * Makes an HTTP GET request to fetch restaurant data from the API.
   *
   * @returns Observable of restaurant data
   */
  public getRestaurantsFromApi$(): Observable<RestaurantReviewData[]> {
    return this.http.get<RestaurantReviewData[]>(this.apiUrl);
  }

  /**
   * Updates the current filter state
   *
   * @param newFilterState new filter state
   */
  public updateFilterState(newFilterState: FilterState) {
    this.filterStateSubject$.next({
      ...this.filterStateSubject$.value,
      ...newFilterState
    });
  }

  /**
   * Add a new restaurant review to the database
   *
   * @param restaurantData restaurant data
   * @returns Observable of the newly added restaurant data
   */
  public addNewRestaurant(restaurantData: Omit<RestaurantReviewData, 'id'>): Observable<RestaurantReviewData> {
    return this.http.post<RestaurantReviewData>(this.apiUrl, restaurantData);
  }

  /**
   * Checks if a restaurant matches the current filter state
   *
   * @param restaurant current restaurant
   * @param filterState filter state
   * @returns whether the restaurant matches or not
   */
  private matchFilter(restaurant: RestaurantReviewData, filterState: FilterState): boolean {
    let matchesType = true;
    let matchesRating = true;

    if (filterState.restaurantType?.length) {
      // Check if every selected restaurant type is included in the restaurant's types
      matchesType = filterState.restaurantType.every(type => restaurant.restaurantType.includes(type));
    }
    if (filterState.rating) {
      // Check if restaurant rating is greater than or equal to the selected rating
      matchesRating = restaurant.rating >= filterState.rating;
    }

    return matchesType && matchesRating;
  }
}


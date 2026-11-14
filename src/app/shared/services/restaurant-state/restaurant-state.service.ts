import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  Observable,
  of,
  retry,
  shareReplay,
  tap
} from 'rxjs';
import { RestaurantApiService } from '../../api-services';
import { FilterState, RestaurantReviewData } from '../../models';

const INITIAL_FILTER_STATE: FilterState = { restaurantType: null, rating: null };

/**
 * Holds the client-side restaurant state (list, filters, derived views).
 * All HTTP communication is delegated to {@link RestaurantApiService}.
 */
@Injectable({
  providedIn: 'root'
})
export class RestaurantStateService {
  private readonly restaurantApi = inject(RestaurantApiService);
  private readonly filterStateSubject$ = new BehaviorSubject<FilterState>(INITIAL_FILTER_STATE);

  /** Restaurants created during this session, appended to the fetched list */
  private readonly addedRestaurantsSubject$ = new BehaviorSubject<RestaurantReviewData[]>([]);

  private readonly fetchedRestaurants$ = this.restaurantApi.getRestaurants$().pipe(
    retry({ count: 2, delay: 1000 }),
    catchError(() => of([]))
  );

  /** Observable stream of all restaurants */
  public readonly restaurants$: Observable<RestaurantReviewData[]> = combineLatest([
    this.fetchedRestaurants$,
    this.addedRestaurantsSubject$
  ]).pipe(
    map(([fetched, added]) => [...fetched, ...added]),
    shareReplay(1)
  );

  /** Observable stream of the current filter state */
  public readonly filterState$ = this.filterStateSubject$.asObservable();

  /** Observable stream of restaurants sorted by rating (descending) and filtered by the current filter state */
  public readonly filteredRestaurants$: Observable<RestaurantReviewData[]> = combineLatest([
    this.restaurants$.pipe(map(restaurants => [...restaurants].sort((a, b) => b.rating - a.rating))),
    this.filterState$
  ]).pipe(
    map(([restaurants, filterState]) => restaurants.filter(restaurant => matchesFilter(restaurant, filterState))),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /**
   * Merges the given values into the current filter state
   *
   * @param filterState filter values to update
   */
  public updateFilterState(filterState: Partial<FilterState>) {
    this.filterStateSubject$.next({
      ...this.filterStateSubject$.value,
      ...filterState
    });
  }

  /**
   * Persists a new restaurant review and, on success, adds it to the restaurant list
   *
   * @param restaurantData restaurant data
   * @returns Observable of the newly added restaurant data
   */
  public addNewRestaurant(restaurantData: Omit<RestaurantReviewData, 'id'>): Observable<RestaurantReviewData> {
    return this.restaurantApi.addNewRestaurant(restaurantData).pipe(
      tap(created => this.addedRestaurantsSubject$.next([...this.addedRestaurantsSubject$.value, created]))
    );
  }
}

/**
 * Checks if a restaurant matches the given filter state
 *
 * @param restaurant current restaurant
 * @param filterState filter state
 * @returns whether the restaurant matches or not
 */
function matchesFilter(restaurant: RestaurantReviewData, filterState: FilterState): boolean {
  // Every selected type must be one of the restaurant's types
  const matchesType = !filterState.restaurantType?.length
    || filterState.restaurantType.every(type => restaurant.restaurantType.includes(type));
  const matchesRating = !filterState.rating || restaurant.rating >= filterState.rating;

  return matchesType && matchesRating;
}

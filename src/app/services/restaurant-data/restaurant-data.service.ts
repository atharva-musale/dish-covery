import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantReviewData } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  private readonly apiUrl = 'http://localhost:3000/restaurants';

  /** Observable stream of restaurant reviews */
  public restaurants$: Observable<RestaurantReviewData[]>;

  constructor(private http: HttpClient) {
    this.restaurants$ = this.http.get<RestaurantReviewData[]>(this.apiUrl);
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
}

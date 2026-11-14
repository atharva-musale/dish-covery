import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_CONFIG } from '@dish/core/configurations';
import { Observable } from 'rxjs';
import { RestaurantReviewData } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class RestaurantApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${inject(API_CONFIG).baseUrl}/restaurants`;

  /**
   * Makes an HTTP GET request to fetch restaurant data from the API.
   *
   * @returns Observable of restaurant data
   */
  public getRestaurants$(): Observable<RestaurantReviewData[]> {
    return this.http.get<RestaurantReviewData[]>(this.apiUrl);
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


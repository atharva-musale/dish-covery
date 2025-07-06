import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestaurantReviewData } from '../../../models';
import { reviewData } from '../../../assets';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  /**
   * List of restaurant reviews
   */
  private restaurants: RestaurantReviewData[] = reviewData;

  /**
   * Source of truth for restaurant reviews
   */
  private restaurantsSubject$ = new BehaviorSubject<RestaurantReviewData[]>(this.restaurants);
  public restaurants$ = this.restaurantsSubject$.asObservable();
}
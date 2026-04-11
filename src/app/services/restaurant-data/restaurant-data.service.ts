import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantReviewData } from '../../../models';
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
}

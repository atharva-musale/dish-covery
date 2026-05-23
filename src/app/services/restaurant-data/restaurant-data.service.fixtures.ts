import { BehaviorSubject } from "rxjs";
import { RestaurantReviewData } from "../../models";
import { RestaurantDataService } from "./restaurant-data.service";

export class RestaurantDataServiceFixtures implements Readonly<RestaurantDataService> {
  public restaurants$ = new BehaviorSubject<RestaurantReviewData[]>([]);
  public addNewRestaurant = jasmine.createSpy('addNewRestaurant');
}

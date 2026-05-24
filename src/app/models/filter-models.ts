import { RestaurantType } from "./restaurant-type.enum";

/**
 * Represents state of the filters applied to the restaurant list.
 * This includes the selected restaurant types and the minimum rating filter.
 * If value is null, it means no filter is applied for that criterion.
 */
export interface FilterState {
  restaurantType: RestaurantType[] | null;
  rating: number | null;
}

import { RestaurantType } from "./restaurant-type.enum";

/**
 * This file defines the data structure for restaurant reviews.
 */
export interface RestaurantReviewData {
  /**
   * Unique identifier for the restaurant.
   */
  id: string;

  /**
   * Rating given to the restaurant.
   * A number between 1 and 10, where 1 is the lowest rating and 10 is the highest.
   */
  rating: number;

  /**
   * Optional description of the restaurant.
   * This can include details about the ambiance, service, or any other relevant information.
   */
  description?: string;

  /**
   * Type of the restaurant.
   */
  restaurantType: RestaurantType[];

  /**
   * Name of the restaurant.
   * This is the official name of the restaurant as it appears in listings or on maps.
   */
  restaurantName: string;

  /**
   * Google Maps location URL for the restaurant.
   */
  restaurantMapsLocation?: string;

  /**
   * Optional URL of an image representing the restaurant.
   */
  imageUrl?: string;

  /**
   * Written review of the restaurant.
   * This is a text field where users can share their experiences, opinions, and recommendations about the restaurant.
   * It can include details about the food, service, atmosphere, and overall experience.
   */
  review: string;
}
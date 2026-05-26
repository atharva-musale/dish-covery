import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RestaurantDataService } from './restaurant-data.service';
import { RestaurantReviewData, API_CONFIG } from '../../models';
import { RestaurantType } from '../../models/restaurant-type.enum';
import { firstValueFrom, of } from 'rxjs';

describe('RestaurantDataService', () => {
  let service: RestaurantDataService;

  const mockRestaurants: RestaurantReviewData[] = [
    {
      id: '1',
      rating: 8,
      description: 'Great place',
      restaurantType: [RestaurantType.Italian],
      restaurantName: 'Italian Restaurant',
      review: 'Amazing Italian food'
    },
    {
      id: '2',
      rating: 8,
      description: 'Great place',
      restaurantType: [RestaurantType.Italian, RestaurantType.Mexican],
      restaurantName: 'Italian and Mexican Restaurant',
      review: 'Amazing food'
    },
    {
      id: '3',
      rating: 4,
      description: 'Bad place',
      restaurantType: [RestaurantType.Chinese],
      restaurantName: 'Chinese Restaurant',
      review: 'Bad food'
    },
    {
      id: '4',
      rating: 9,
      description: 'Great place',
      restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian],
      restaurantName: 'North and South Indian Restaurant',
      review: 'Amazing food'
    },
    {
      id: '7',
      rating: 8,
      description: 'Great place',
      restaurantType: [RestaurantType.Maharashtrian],
      restaurantName: 'Maharashtrian Restaurant',
      review: 'Amazing food'
    }
  ];

  beforeEach(() => {
    spyOn(RestaurantDataService.prototype, 'getRestaurantsFromApi$').and.returnValue(of(mockRestaurants));

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} },
        { provide: API_CONFIG, useValue: { baseUrl: 'http://localhost:3000' } }
      ]
    });

    service = TestBed.inject(RestaurantDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('filteredRestaurants$', () => {
    it('should sort restaurants even when no filter is applied', async () => {
      const filteredRestaurants = await firstValueFrom(service.filteredRestaurants$);

      expect(filteredRestaurants[0].id).toBe('4');
      expect(filteredRestaurants[1].id).toBe('1');
      expect(filteredRestaurants[2].id).toBe('2');
      expect(filteredRestaurants[3].id).toBe('7');
      expect(filteredRestaurants[4].id).toBe('3');
    });
  });

  describe('Filter', () => {
    it('should sort restaurants based on rating if rating filter is applied', async () => {
      service.updateFilterState({ restaurantType: null, rating: 7 });
      const filteredRestaurants = await firstValueFrom(service.filteredRestaurants$);

      expect(filteredRestaurants.length).toBe(4);
    });

    it('should filter restaurants based on restaurant type if restaurant type filter is applied', async () => {
      service.updateFilterState({ restaurantType: [RestaurantType.Italian], rating: null });
      const filteredRestaurants = await firstValueFrom(service.filteredRestaurants$);

      expect(filteredRestaurants.length).toBe(2);
    });

    it('should filter restaurants based on both restaurant type and rating if both filters are applied', async () => {
      service.updateFilterState({ restaurantType: [RestaurantType.Italian], rating: 7 });
      const filteredRestaurants = await firstValueFrom(service.filteredRestaurants$);

      expect(filteredRestaurants.length).toBe(2);
    });

    it('should return empty list if no restaurant matches the filter criteria', async () => {
      service.updateFilterState({ restaurantType: [RestaurantType.Chinese], rating: 7 });
      const filteredRestaurants = await firstValueFrom(service.filteredRestaurants$);

      expect(filteredRestaurants.length).toBe(0);
    });
  });

  describe('addNewRestaurant', () => {
    it('should post new restaurant data to the API', async () => {
      const newRestaurant: Omit<RestaurantReviewData, 'id'> = {
        rating: 9,
        description: 'New place',
        restaurantType: [RestaurantType.Italian],
        restaurantName: 'New Restaurant',
        review: 'Excellent'
      };

      const createdRestaurant: RestaurantReviewData = { id: '2', ...newRestaurant };

      spyOn(service, 'addNewRestaurant').and.returnValue(of(createdRestaurant));

      const result = await firstValueFrom(service.addNewRestaurant(newRestaurant));
      expect(result).toEqual(createdRestaurant);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { RestaurantApiService } from '../../api-services';
import { RestaurantApiServiceMock } from '../../api-services/fixtures';
import { RestaurantReviewData, RestaurantType } from '../../models';
import { RestaurantStateService } from './restaurant-state.service';

describe('RestaurantStateService', () => {
  let service: RestaurantStateService;
  let restaurantApi: RestaurantApiServiceMock;

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
    restaurantApi = new RestaurantApiServiceMock();
    restaurantApi.getRestaurants$.mockReturnValue(of(mockRestaurants));

    TestBed.configureTestingModule({
      providers: [
        { provide: RestaurantApiService, useValue: restaurantApi }
      ]
    });

    service = TestBed.inject(RestaurantStateService);
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

  describe('restaurants$', () => {
    it('should fetch restaurants only once for multiple subscribers', async () => {
      await firstValueFrom(service.restaurants$);
      await firstValueFrom(service.filteredRestaurants$);

      expect(restaurantApi.getRestaurants$).toHaveBeenCalledTimes(1);
    });

    it('should fall back to an empty list when fetching keeps failing', async () => {
      vi.useFakeTimers();
      restaurantApi.getRestaurants$.mockReturnValue(throwError(() => new Error('Network error')));
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        providers: [{ provide: RestaurantApiService, useValue: restaurantApi }]
      });
      service = TestBed.inject(RestaurantStateService);

      const restaurants = firstValueFrom(service.restaurants$);
      await vi.advanceTimersByTimeAsync(2000);

      expect(await restaurants).toEqual([]);
      vi.useRealTimers();
    });
  });

  describe('addNewRestaurant', () => {
    const newRestaurant: Omit<RestaurantReviewData, 'id'> = {
      rating: 10,
      description: 'New place',
      restaurantType: [RestaurantType.Italian],
      restaurantName: 'New Restaurant',
      review: 'Excellent'
    };
    const createdRestaurant: RestaurantReviewData = { id: '8', ...newRestaurant };

    it('should persist the restaurant through the API and return the created entry', async () => {
      restaurantApi.addNewRestaurant.mockReturnValue(of(createdRestaurant));

      const result = await firstValueFrom(service.addNewRestaurant(newRestaurant));

      expect(restaurantApi.addNewRestaurant).toHaveBeenCalledWith(newRestaurant);
      expect(result).toEqual(createdRestaurant);
    });

    it('should add the created restaurant to the restaurant streams', async () => {
      restaurantApi.addNewRestaurant.mockReturnValue(of(createdRestaurant));

      await firstValueFrom(service.addNewRestaurant(newRestaurant));

      expect(await firstValueFrom(service.restaurants$)).toEqual([...mockRestaurants, createdRestaurant]);
      expect((await firstValueFrom(service.filteredRestaurants$))[0]).toEqual(createdRestaurant);
    });

    it('should not change the restaurant list when the API call fails', async () => {
      restaurantApi.addNewRestaurant.mockReturnValue(throwError(() => new Error('Server error')));

      await expect(firstValueFrom(service.addNewRestaurant(newRestaurant))).rejects.toThrow('Server error');

      expect(await firstValueFrom(service.restaurants$)).toEqual(mockRestaurants);
    });
  });
});

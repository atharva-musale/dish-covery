import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_CONFIG } from '@dish/core/configurations';
import { firstValueFrom } from 'rxjs';
import { RestaurantReviewData, RestaurantType } from '../../models';
import { RestaurantApiService } from './restaurant-api.service';

describe('RestaurantApiService', () => {
  const baseUrl = 'http://api.test';
  const restaurantsUrl = `${baseUrl}/restaurants`;

  const newRestaurant: Omit<RestaurantReviewData, 'id'> = {
    rating: 8,
    restaurantType: [RestaurantType.Italian],
    restaurantName: 'Italian Restaurant',
    review: 'Amazing Italian food'
  };
  const savedRestaurant: RestaurantReviewData = { id: '1', ...newRestaurant };

  let service: RestaurantApiService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: API_CONFIG, useValue: { baseUrl } }
      ]
    });

    service = TestBed.inject(RestaurantApiService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  describe('getRestaurants$', () => {
    it('should GET restaurants from the configured base url', async () => {
      const result = firstValueFrom(service.getRestaurants$());

      const req = httpTesting.expectOne(restaurantsUrl);
      expect(req.request.method).toBe('GET');
      req.flush([savedRestaurant]);

      expect(await result).toEqual([savedRestaurant]);
    });

    it('should propagate HTTP errors', async () => {
      const result = firstValueFrom(service.getRestaurants$());

      httpTesting.expectOne(restaurantsUrl).flush('Server error', { status: 500, statusText: 'Server Error' });

      await expect(result).rejects.toMatchObject({ status: 500 });
    });
  });

  describe('addNewRestaurant', () => {
    it('should POST the restaurant and return the created entry', async () => {
      const result = firstValueFrom(service.addNewRestaurant(newRestaurant));

      const req = httpTesting.expectOne(restaurantsUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(newRestaurant);
      req.flush(savedRestaurant);

      expect(await result).toEqual(savedRestaurant);
    });
  });
});

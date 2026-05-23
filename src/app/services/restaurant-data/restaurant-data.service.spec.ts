import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RestaurantDataService } from './restaurant-data.service';
import { RestaurantReviewData } from '../../models';
import { RestaurantType } from '../../models/restaurant-type.enum';

describe('RestaurantDataService', () => {
  let service: RestaurantDataService;
  let httpMock: HttpTestingController;

  const apiUrl = 'http://localhost:3000/restaurants';

  const mockRestaurants: RestaurantReviewData[] = [
    {
      id: '1',
      rating: 8,
      description: 'Great place',
      restaurantType: [RestaurantType.Italian],
      restaurantName: 'Italian Restaurant',
      review: 'Amazing Italian food'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(RestaurantDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('restaurants$', () => {
    it('should fetch restaurants from the API', () => {
      service.restaurants$.subscribe(restaurants => {
        expect(restaurants).toEqual(mockRestaurants);
      });

      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockRestaurants);
    });
  });

  describe('addNewRestaurant', () => {
    it('should post new restaurant data to the API', () => {
      const newRestaurant: Omit<RestaurantReviewData, 'id'> = {
        rating: 9,
        description: 'New place',
        restaurantType: [RestaurantType.Italian],
        restaurantName: 'New Restaurant',
        review: 'Excellent'
      };

      const createdRestaurant: RestaurantReviewData = { id: '2', ...newRestaurant };

      service.addNewRestaurant(newRestaurant).subscribe(result => {
        expect(result).toEqual(createdRestaurant);
      });

      const postReq = httpMock.expectOne(req => req.method === 'POST' && req.url === apiUrl);
      expect(postReq.request.body).toEqual(newRestaurant);
      postReq.flush(createdRestaurant);
    });
  });
});

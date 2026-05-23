import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsGridComponent } from './restaurants-grid.component';
import { RestaurantDataService } from '../../services';
import { RestaurantDataServiceFixtures } from '../../../fixtures';
import { getElementBySelector } from '../../testing';
import { RestaurantReviewData } from '../../models';
import { RestaurantType } from '../../models/restaurant-type.enum';

const mockRestaurants: RestaurantReviewData[] = [
  {
    id: '1',
    restaurantName: 'Sushi Spot',
    rating: 8,
    restaurantType: [RestaurantType.Japanese],
    review: 'Great sushi',
    imageUrl: 'https://example.com/sushi.jpg',
  },
  {
    id: '2',
    restaurantName: 'Taco Town',
    rating: 9,
    restaurantType: [RestaurantType.Mexican],
    review: 'Amazing tacos',
    imageUrl: 'https://example.com/tacos.jpg',
  },
];

describe('RestaurantsGridComponent', () => {
  let component: RestaurantsGridComponent;
  let fixture: ComponentFixture<RestaurantsGridComponent>;
  let mockRestaurantDataService: RestaurantDataServiceFixtures;

  beforeEach(async () => {
    mockRestaurantDataService = new RestaurantDataServiceFixtures();
    mockRestaurantDataService.restaurants$.next(mockRestaurants);

    await TestBed.configureTestingModule({
      imports: [RestaurantsGridComponent],
      providers: [
        { provide: RestaurantDataService, useValue: mockRestaurantDataService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a restaurant teaser for each restaurant', () => {
    const teasers = fixture.nativeElement.querySelectorAll('app-restaurant-teaser');
    expect(teasers.length).toBe(2);
  });

  it('should sort restaurants by rating descending', () => {
    const teasers = fixture.nativeElement.querySelectorAll('app-restaurant-teaser');
    // Taco Town (rating 9) should come before Sushi Spot (rating 8)
    expect(teasers[0].textContent).toContain('Taco Town');
    expect(teasers[1].textContent).toContain('Sushi Spot');
  });

  it('should show empty message when there are no restaurants', () => {
    mockRestaurantDataService.restaurants$.next([]);
    fixture.detectChanges();

    const message = getElementBySelector('p', fixture);
    expect(message!.hasTextContent('No restaurants found.')).toBeTrue();
  });
});

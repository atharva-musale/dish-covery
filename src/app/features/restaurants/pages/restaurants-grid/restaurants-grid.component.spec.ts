import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantReviewData, RestaurantType } from '@dish/shared/models';
import { RestaurantStateService } from '@dish/shared/services';
import { RestaurantStateServiceMock } from '@dish/shared/services/fixtures';
import { firstValueFrom } from 'rxjs';
import { getElementBySelector } from '../../../../testing';
import { RestaurantsGridComponent } from './restaurants-grid.component';

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
  let mockRestaurantStateService: RestaurantStateServiceMock;

  beforeEach(async () => {
    mockRestaurantStateService = new RestaurantStateServiceMock();
    mockRestaurantStateService.filteredRestaurants$.next(mockRestaurants);

    await TestBed.configureTestingModule({
      imports: [RestaurantsGridComponent],
      providers: [
        { provide: RestaurantStateService, useValue: mockRestaurantStateService },
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
    expect(teasers[0].textContent).toContain('Sushi Spot');
    expect(teasers[1].textContent).toContain('Taco Town');
  });

  it('should show empty message when there are no restaurants', () => {
    mockRestaurantStateService.filteredRestaurants$.next([]);
    fixture.detectChanges();
    const message = getElementBySelector('p', fixture);

    expect(message?.hasTextContent('No restaurants found.')).toBe(true);
  });

  it('should use imageAssetsPath when imageUrl is not provided', async () => {
    mockRestaurantStateService.filteredRestaurants$.next([{
      id: '3',
      restaurantName: 'Path Place',
      rating: 7,
      restaurantType: [RestaurantType.Italian],
      review: 'Nice',
      imageAssetsPath: '/assets/images/custom.png',
    }]);
    fixture.detectChanges();
    const restaurants = await firstValueFrom(component.restaurants$);

    expect(restaurants[0].imageUrl).toContain('/assets/images/custom.png');
  });

  it('should use fallback image when neither imageUrl nor imageAssetsPath is provided', async () => {
    mockRestaurantStateService.filteredRestaurants$.next([{
      id: '4',
      restaurantName: 'Fallback Place',
      rating: 6,
      restaurantType: [RestaurantType.Mexican],
      review: 'OK',
    }]);
    fixture.detectChanges();
    const restaurants = await firstValueFrom(component.restaurants$);

    expect(restaurants[0].imageUrl).toContain('/assets/images/fallback-restaurant.png');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTeaserComponent } from './restaurant-teaser.component';
import { getElementBySelector } from '../../testing';
import { RestaurantReviewData } from '../../models';
import { RestaurantType } from '../../models/restaurant-type.enum';

const mockRestaurant: RestaurantReviewData = {
  id: '1',
  restaurantName: 'Pasta Palace',
  rating: 9,
  restaurantType: [RestaurantType.Italian],
  review: 'Excellent food and ambiance',
  imageUrl: 'https://example.com/pasta.jpg',
};

describe('RestaurantTeaserComponent', () => {
  let component: RestaurantTeaserComponent;
  let fixture: ComponentFixture<RestaurantTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantTeaserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantTeaserComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('restaurant', mockRestaurant);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the restaurant details', () => {
    const title = getElementBySelector('.restaurant-title', fixture);
    const img = getElementBySelector('.restaurant-image', fixture);
    const review = getElementBySelector('.remarks', fixture);

    expect(title!.hasTextContent('Pasta Palace')).toBeTrue();
    expect(img).not.toBeNull();
    expect(review!.hasTextContent('Excellent food and ambiance')).toBeTrue();
  });
});

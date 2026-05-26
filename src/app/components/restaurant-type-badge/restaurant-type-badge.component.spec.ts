import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTypeBadgeComponent } from './restaurant-type-badge.component';
import { RestaurantType } from '../../models';

describe('RestaurantTypeBadgeComponent', () => {
  let component: RestaurantTypeBadgeComponent;
  let fixture: ComponentFixture<RestaurantTypeBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantTypeBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantTypeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nothing when restaurantType is empty', () => {
    const spans = fixture.nativeElement.querySelectorAll('span');
    expect(spans.length).toBe(0);
  });

  it('should render a badge for each restaurant type', () => {
    fixture.componentRef.setInput('restaurantType', [RestaurantType.Italian, RestaurantType.Cafe]);
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('span');
    expect(spans.length).toBe(2);
    expect(spans[0].textContent.trim()).toBe('Italian');
    expect(spans[1].textContent.trim()).toBe('Cafe');
  });

  it('should render a single badge correctly', () => {
    fixture.componentRef.setInput('restaurantType', [RestaurantType.Japanese]);
    fixture.detectChanges();

    const spans = fixture.nativeElement.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent.trim()).toBe('Japanese');
  });
});

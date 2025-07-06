import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTypeBadgeComponent } from './restaurant-type-badge.component';

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
});

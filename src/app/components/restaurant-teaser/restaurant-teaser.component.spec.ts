import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTeaserComponent } from './restaurant-teaser.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBadgeComponent } from './rating-badge.component';
import { getElementBySelector } from '../../testing';

describe('RatingBadgeComponent', () => {
  let component: RatingBadgeComponent;
  let fixture: ComponentFixture<RatingBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the rating value', () => {
    fixture.componentRef.setInput('rating', 8);
    fixture.detectChanges();

    const value = getElementBySelector('.value', fixture);
    expect(value?.hasTextContent('8')).toBeTrue();
  });

  it('should apply "amazing" class for rating 10', () => {
    fixture.componentRef.setInput('rating', 10);
    fixture.detectChanges();

    const badge = getElementBySelector('.rating', fixture);
    expect(badge?.hasClass('amazing')).toBeTrue();
  });

  it('should apply "great" class for rating 8', () => {
    fixture.componentRef.setInput('rating', 8);
    fixture.detectChanges();

    const badge = getElementBySelector('.rating', fixture);
    expect(badge?.hasClass('great')).toBeTrue();
  });

  it('should apply "average" class for rating 5', () => {
    fixture.componentRef.setInput('rating', 5);
    fixture.detectChanges();

    const badge = getElementBySelector('.rating', fixture);
    expect(badge?.hasClass('average')).toBeTrue();
  });

  it('should apply "unrated" class for rating 0', () => {
    fixture.componentRef.setInput('rating', 0);
    fixture.detectChanges();

    const badge = getElementBySelector('.rating', fixture);
    expect(badge?.hasClass('unrated')).toBeTrue();
  });
});

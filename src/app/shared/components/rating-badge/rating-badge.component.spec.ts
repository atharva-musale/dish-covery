import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getElementBySelector } from '../../../testing';
import { RatingBadgeComponent } from './rating-badge.component';

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
    expect(value?.hasTextContent('8')).toBe(true);
  });

  it('should apply "amazing" class for rating 10', () => {
    fixture.componentRef.setInput('rating', 10);
    fixture.detectChanges();

    const badge = getElementBySelector('.rating', fixture);
    expect(badge?.hasClass('amazing')).toBe(true);
  });

  it('should apply "great" class for rating 8', () => {
    fixture.componentRef.setInput('rating', 8);
    fixture.detectChanges();

    const badge = getElementBySelector('.rating', fixture);
    expect(badge?.hasClass('great')).toBe(true);
  });

  it('should apply "average" class for rating 5', () => {
    fixture.componentRef.setInput('rating', 5);
    fixture.detectChanges();

    const badge = getElementBySelector('.rating', fixture);
    expect(badge?.hasClass('average')).toBe(true);
  });

  it('should apply "unrated" class for rating 0', () => {
    fixture.componentRef.setInput('rating', 0);
    fixture.detectChanges();

    const badge = getElementBySelector('.rating', fixture);
    expect(badge?.hasClass('unrated')).toBe(true);
  });
});

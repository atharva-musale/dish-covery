import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { ToolbarComponent } from './toolbar.component';
import { RestaurantDataService } from '../../services';
import { getElementBySelector } from '../../testing';
import { RestaurantDataServiceFixtures } from '../../../fixtures';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let mockRestaurantDataService: RestaurantDataServiceFixtures;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    mockRestaurantDataService = new RestaurantDataServiceFixtures();
    mockRestaurantDataService.updateFilterState.and.returnValue(undefined);

    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: RestaurantDataService, useValue: mockRestaurantDataService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render filter, rating, and add buttons', () => {
    const filterBtn = getElementBySelector('.filter-button', fixture);
    const ratingBtn = getElementBySelector('.rating-button', fixture);
    const addBtn = getElementBySelector('.add-restaurant-button', fixture);

    expect(filterBtn).not.toBeNull();
    expect(ratingBtn?.hasTextContent('Rating: 7+')).toBeTrue();
    expect(addBtn?.hasTextContent('Add new restaurant')).toBeTrue();
  });

  it('should open add restaurant dialog when add button is clicked', () => {
    dialogSpy.open.and.returnValue({ afterClosed: () => of(undefined) } as any);

    const addBtn = getElementBySelector('.add-restaurant-button', fixture);
    addBtn?.click();

    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('should call addNewRestaurant service when dialog returns data', () => {
    const mockResult = { restaurantName: 'New Place', rating: 8 };
    dialogSpy.open.and.returnValue({ afterClosed: () => of(mockResult) } as any);
    mockRestaurantDataService.addNewRestaurant.and.returnValue(of({ id: '1', ...mockResult } as any));

    component.openAddRestaurantDialog();

    expect(mockRestaurantDataService.addNewRestaurant).toHaveBeenCalledWith(mockResult as any);
  });

  it('should not call addNewRestaurant when dialog is cancelled', () => {
    dialogSpy.open.and.returnValue({ afterClosed: () => of(undefined) } as any);

    component.openAddRestaurantDialog();

    expect(mockRestaurantDataService.addNewRestaurant).not.toHaveBeenCalled();
  });

  describe('toggleFilterBySevenRating', () => {
    it('should activate the 7+ rating filter when toggled on', () => {
      component.toggleFilterBySevenRating();
      fixture.detectChanges();
      const ratingBtn = getElementBySelector('.rating-button', fixture);

      expect(ratingBtn?.hasClass('active')).toBeTrue();
      expect(component.isRatingBySevenFilterActive()).toBeTrue();
    });

    it('should deactivate the 7+ rating filter when toggled off', () => {
      component.toggleFilterBySevenRating(); // Toggle on
      component.toggleFilterBySevenRating(); // Toggle off

      expect(component.isRatingBySevenFilterActive()).toBeFalse();
    });
  });
});

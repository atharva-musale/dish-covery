import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FilterDialogComponent } from './filter-dialog.component';
import { FilterState, RestaurantType } from '../../../models';
import { MockMatDialogRef, provideMockDialogRef } from '../../../testing';

describe('FilterDialogComponent', () => {
  let component: FilterDialogComponent;
  let fixture: ComponentFixture<FilterDialogComponent>;
  let mockDialogRef: MockMatDialogRef;

  const defaultFilterState: FilterState = { restaurantType: null, rating: null };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDialogComponent],
      providers: [
        provideMockDialogRef(),
        { provide: MAT_DIALOG_DATA, useValue: defaultFilterState }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterDialogComponent);
    component = fixture.componentInstance;
    mockDialogRef = TestBed.inject(MatDialogRef) as unknown as MockMatDialogRef;
    fixture.detectChanges();
  });

  describe('initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize form with default null values when no data is provided', () => {
      expect(component.filterForm.value).toEqual({ restaurantType: null, rating: null });
    });

    it('should expose all restaurant types', () => {
      expect(component.restaurantTypes).toEqual(Object.values(RestaurantType));
    });
  });

  describe('initialization with provided filter state', () => {
    const initialState: FilterState = { restaurantType: [RestaurantType.Italian], rating: 7 };

    beforeEach(async () => {
      TestBed.resetTestingModule();
      await TestBed.configureTestingModule({
        imports: [FilterDialogComponent],
        providers: [
          provideMockDialogRef(),
          { provide: MAT_DIALOG_DATA, useValue: initialState }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(FilterDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should initialize form with provided filter state', () => {
      expect(component.filterForm.value).toEqual(initialState);
    });

    it('should preserve initial filter state until user modifies form', () => {
      expect(component.filterForm.get('rating')?.value).toBe(7);
      expect(component.filterForm.get('restaurantType')?.value).toEqual([RestaurantType.Italian]);
    });
  });

  describe('onCancel', () => {
    it('should close the dialog without returning data', () => {
      component.onCancel();
      expect(mockDialogRef.close).toHaveBeenCalledWith();
    });
  });

  describe('onSubmit', () => {
    it('should close the dialog with form values when form is valid', () => {
      component.filterForm.patchValue({ rating: 8, restaurantType: [RestaurantType.Chinese] });
      component.onSubmit();

      expect(mockDialogRef.close).toHaveBeenCalledWith({
        restaurantType: [RestaurantType.Chinese],
        rating: 8
      });
    });

    it('should keep rating as number in the result', () => {
      component.filterForm.patchValue({ rating: 5 });
      component.onSubmit();

      const result = mockDialogRef.close.calls.mostRecent().args[0];
      expect(result.rating).toBe(5);
    });

    it('should pass null rating as null', () => {
      component.filterForm.patchValue({ rating: null });
      component.onSubmit();

      const result = mockDialogRef.close.calls.mostRecent().args[0];
      expect(result.rating).toBeNull();
    });
  });
});

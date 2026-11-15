import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RestaurantType } from '@dish/shared/models';
import { RestaurantStateService } from '@dish/shared/services';
import { RestaurantStateServiceMock } from '@dish/shared/services/fixtures';
import { of } from 'rxjs';
import type { Mock } from 'vitest';
import { getElementBySelector } from '../../../../testing';
import { ToolbarComponent } from './toolbar.component';


describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let dialogSpy: { open: Mock };
  let mockRestaurantStateService: RestaurantStateServiceMock;

  beforeEach(async () => {
    dialogSpy = { open: vi.fn() };
    mockRestaurantStateService = new RestaurantStateServiceMock();
    mockRestaurantStateService.updateFilterState.mockReturnValue(undefined);

    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: RestaurantStateService, useValue: mockRestaurantStateService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render filter and add buttons', () => {
    const filterBtn = getElementBySelector('.filter-button', fixture);
    const addBtn = getElementBySelector('.add-restaurant-button', fixture);

    expect(filterBtn).not.toBeNull();
    expect(addBtn?.hasTextContent('Add new restaurant')).toBe(true);
  });

  it('should open add restaurant dialog when add button is clicked', () => {
    dialogSpy.open.mockReturnValue({ afterClosed: () => of(undefined) } as any);

    const addBtn = getElementBySelector('.add-restaurant-button', fixture);
    addBtn?.click();

    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('should call addNewRestaurant service when dialog returns data', () => {
    const mockResult = { restaurantName: 'New Place', rating: 8 };
    dialogSpy.open.mockReturnValue({ afterClosed: () => of(mockResult) } as any);
    mockRestaurantStateService.addNewRestaurant.mockReturnValue(of({ id: '1', ...mockResult } as any));

    component.openAddRestaurantDialog();

    expect(mockRestaurantStateService.addNewRestaurant).toHaveBeenCalledWith(mockResult as any);
  });

  it('should not call addNewRestaurant when dialog is cancelled', () => {
    dialogSpy.open.mockReturnValue({ afterClosed: () => of(undefined) } as any);

    component.openAddRestaurantDialog();

    expect(mockRestaurantStateService.addNewRestaurant).not.toHaveBeenCalled();
  });

  describe('openFilterDialog', () => {
    it('should patch filter form when dialog returns a result', async () => {
      const result = { restaurantType: ['Italian'], rating: '8' };
      dialogSpy.open.mockReturnValue({ afterClosed: () => of(result) } as any);

      await component.openFilterDialog();

      expect(component.filterForm.value).toEqual(expect.objectContaining(result));
    });

    it('should not patch filter form when dialog is cancelled', async () => {
      dialogSpy.open.mockReturnValue({ afterClosed: () => of(undefined) } as any);
      const initialValue = { ...component.filterForm.value };

      await component.openFilterDialog();

      expect(component.filterForm.value).toEqual(initialValue);
    });
  });

  describe('resetFilters', () => {
    it('should reset filter form to default null values', () => {
      component.filterForm.patchValue({ restaurantType: [RestaurantType.Italian], rating: 7 });
      component.resetFilters();

      expect(component.filterForm.value).toEqual({ restaurantType: null, rating: null });
    });

    it('should trigger updateFilterState on the service', () => {
      component.filterForm.patchValue({ restaurantType: [RestaurantType.Italian], rating: 7 });
      mockRestaurantStateService.updateFilterState.mockClear();
      component.resetFilters();

      expect(mockRestaurantStateService.updateFilterState).toHaveBeenCalledWith({ restaurantType: null, rating: null });
    });
  });

  describe('toolbarInfo$ and template rendering', () => {
    it('should display result count when data is available', () => {
      mockRestaurantStateService.restaurants$.next([{ id: '1' }, { id: '2' }, { id: '3' }] as any);
      mockRestaurantStateService.filteredRestaurants$.next([{ id: '1' }] as any);
      fixture.detectChanges();

      const currentCount = getElementBySelector('.current-count', fixture);
      const totalCount = getElementBySelector('.total-count', fixture);

      expect(currentCount?.hasTextContent('1')).toBe(true);
      expect(totalCount?.hasTextContent('3')).toBe(true);
    });

    it('should show reset filters link when filtered count differs from total', () => {
      mockRestaurantStateService.restaurants$.next([{ id: '1' }, { id: '2' }] as any);
      mockRestaurantStateService.filteredRestaurants$.next([{ id: '1' }] as any);
      fixture.detectChanges();

      const resetLink = getElementBySelector('.reset-filters-button', fixture);
      expect(resetLink).not.toBeNull();
    });

    it('should hide reset filters link when all results are shown', () => {
      mockRestaurantStateService.restaurants$.next([{ id: '1' }, { id: '2' }] as any);
      mockRestaurantStateService.filteredRestaurants$.next([{ id: '1' }, { id: '2' }] as any);
      fixture.detectChanges();

      const resetLink = getElementBySelector('.reset-filters-button', fixture);
      expect(resetLink).toBeNull();
    });

    it('should call resetFilters when reset link is clicked', () => {
      mockRestaurantStateService.restaurants$.next([{ id: '1' }, { id: '2' }] as any);
      mockRestaurantStateService.filteredRestaurants$.next([{ id: '1' }] as any);
      fixture.detectChanges();

      vi.spyOn(component, 'resetFilters');
      const resetLink = getElementBySelector('.reset-filters-button', fixture);
      resetLink?.click();

      expect(component.resetFilters).toHaveBeenCalled();
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { ToolbarComponent } from './toolbar.component';
import { RestaurantDataService } from '../../services';
import { getElementBySelector } from '../../testing';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let restaurantDataServiceSpy: jasmine.SpyObj<RestaurantDataService>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    restaurantDataServiceSpy = jasmine.createSpyObj('RestaurantDataService', ['addNewRestaurant']);

    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: RestaurantDataService, useValue: restaurantDataServiceSpy }
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
    restaurantDataServiceSpy.addNewRestaurant.and.returnValue(of({ id: '1', ...mockResult } as any));

    component.openAddRestaurantDialog();

    expect(restaurantDataServiceSpy.addNewRestaurant).toHaveBeenCalledWith(mockResult as any);
  });

  it('should not call addNewRestaurant when dialog is cancelled', () => {
    dialogSpy.open.and.returnValue({ afterClosed: () => of(undefined) } as any);

    component.openAddRestaurantDialog();

    expect(restaurantDataServiceSpy.addNewRestaurant).not.toHaveBeenCalled();
  });
});

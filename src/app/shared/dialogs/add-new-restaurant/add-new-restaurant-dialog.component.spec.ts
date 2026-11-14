import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import type { Mock } from 'vitest';

import { getElementBySelector } from '../../../testing';
import { RestaurantType } from '../../models';
import { AddNewRestaurantDialogComponent } from './add-new-restaurant-dialog.component';

describe('AddNewRestaurantDialogComponent', () => {
  let component: AddNewRestaurantDialogComponent;
  let fixture: ComponentFixture<AddNewRestaurantDialogComponent>;
  let dialogRef: { close: Mock };

  beforeEach(async () => {
    dialogRef = { close: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [AddNewRestaurantDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRestaurantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when required fields are empty', () => {
    expect(component.newRestaurantForm.valid).toBe(false);
  });

  it('should close dialog without data on cancel', () => {
    component.onCancel();
    expect(dialogRef.close).toHaveBeenCalledWith();
  });

  it('should not close dialog on submit when form is invalid', () => {
    component.onSubmit();
    expect(dialogRef.close).not.toHaveBeenCalled();
  });

  it('should close dialog with form data on valid submit', () => {
    component.newRestaurantForm.patchValue({
      restaurantName: 'Test Restaurant',
      restaurantType: [RestaurantType.Italian],
      rating: 8,
      review: 'Great food'
    });

    component.onSubmit();

    expect(dialogRef.close).toHaveBeenCalledWith(expect.objectContaining({
      restaurantName: 'Test Restaurant',
      restaurantType: [RestaurantType.Italian],
      rating: 8
    }));
  });

  it('should show error message when restaurantName is touched and empty', () => {
    const control = component.newRestaurantForm.get('restaurantName')!;
    control.markAsTouched();
    fixture.detectChanges();

    const error = getElementBySelector('.form-error', fixture);
    expect(error?.hasTextContent('Restaurant name is required')).toBe(true);
  });

  it('should report field as touched and invalid correctly', () => {
    const control = component.newRestaurantForm.get('restaurantName')!;

    expect(component.isFieldTouchedAndInvalid('restaurantName')).toBe(false);

    control.markAsTouched();
    expect(component.isFieldTouchedAndInvalid('restaurantName')).toBe(true);

    control.setValue('Some Name');
    expect(component.isFieldTouchedAndInvalid('restaurantName')).toBe(false);
  });
});

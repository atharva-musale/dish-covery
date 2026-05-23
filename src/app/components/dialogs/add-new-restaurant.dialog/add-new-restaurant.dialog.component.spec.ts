import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AddNewRestaurantDialogComponent } from './add-new-restaurant.dialog.component';
import { RestaurantType } from '../../../models';
import { getElementBySelector } from '../../../testing';

describe('AddNewRestaurantDialogComponent', () => {
  let component: AddNewRestaurantDialogComponent;
  let fixture: ComponentFixture<AddNewRestaurantDialogComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<AddNewRestaurantDialogComponent>>;

  beforeEach(async () => {
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

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
    expect(component.newRestaurantForm.valid).toBeFalse();
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

    expect(dialogRef.close).toHaveBeenCalledWith(jasmine.objectContaining({
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
    expect(error?.hasTextContent('Restaurant name is required')).toBeTrue();
  });

  it('should report field as touched and invalid correctly', () => {
    const control = component.newRestaurantForm.get('restaurantName')!;

    expect(component.isFieldTouchedAndInvalid('restaurantName')).toBeFalse();

    control.markAsTouched();
    expect(component.isFieldTouchedAndInvalid('restaurantName')).toBeTrue();

    control.setValue('Some Name');
    expect(component.isFieldTouchedAndInvalid('restaurantName')).toBeFalse();
  });
});

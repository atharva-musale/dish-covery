import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RestaurantType } from '../../../models';
import { MultiSelectDropdownComponent } from '../../multi-select-dropdown/multi-select-dropdown.component';

@Component({
  selector: 'app-add-new-restaurant-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MultiSelectDropdownComponent,
  ],
  templateUrl: './add-new-restaurant.dialog.component.html',
  styleUrl: './add-new-restaurant.dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewRestaurantDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<AddNewRestaurantDialogComponent>);
  private readonly formBuilder = inject(FormBuilder);

  /**
   * List of available restaurant types, derived from the RestaurantType enum.
   */
  public readonly restaurantTypes = Object.values(RestaurantType);

  /**
   * Reactive form group for the new restaurant form, with validation rules.
   */
  public newRestaurantForm: FormGroup;

  constructor() {
    this.newRestaurantForm = this.formBuilder.group({
      restaurantName: ['', Validators.required],
      restaurantType: [[] as RestaurantType[], Validators.required],
      description: [''],
      review: [''],
      rating: [null, [Validators.min(1), Validators.max(10)]],
      restaurantMapsLocation: [''],
      imageUrl: ['']
    });
  }

  public isFieldTouchedAndInvalid(fieldName: string): boolean {
    const control = this.newRestaurantForm.get(fieldName);
    return !!control && control.touched && control.invalid;
  }

  public onCancel() {
    this.dialogRef.close();
  }

  public onSubmit() {
    if (this.newRestaurantForm.valid) {
      this.dialogRef.close(this.newRestaurantForm.getRawValue());
    }
  }
}

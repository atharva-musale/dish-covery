import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MultiSelectDropdownComponent } from '../../utils';
import { FilterState, RestaurantType } from '../../../models';

interface FilterFormControls {
  restaurantType: FormControl<RestaurantType[] | null>;
  rating: FormControl<number | null>;
}

@Component({
  selector: 'app-filter-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MultiSelectDropdownComponent,
  ],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<FilterDialogComponent>);
  private readonly formBuilder = inject(FormBuilder);
  private readonly initialFilterState: FilterState = inject(MAT_DIALOG_DATA);

  /**
   * List of available restaurant types, derived from the RestaurantType enum.
   */
  public readonly restaurantTypes = Object.values(RestaurantType);

  /**
   * Form group for filter dialog
   */
  public filterForm: FormGroup<FilterFormControls>;

  constructor() {
    this.filterForm = this.formBuilder.group<FilterFormControls>({
      restaurantType: new FormControl(null),
      rating: new FormControl(null)
    });
    this.filterForm.patchValue(this.initialFilterState);
  }

  /**
   * Closes the dialog without applying filters.
   */
  public onCancel() {
    this.dialogRef.close();
  }

  /**
   * Closes the dialog and returns the current filter state if the form is valid.
   */
  public onSubmit() {
    if (this.filterForm.valid) {
      const rawValue = this.filterForm.getRawValue();
      this.dialogRef.close({
        restaurantType: rawValue.restaurantType,
        rating: rawValue.rating ? Number(rawValue.rating) : null
      } as FilterState);
    }
  }
}

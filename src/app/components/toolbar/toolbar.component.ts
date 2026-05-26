import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { AddNewRestaurantDialogComponent } from '../dialogs/add-new-restaurant/add-new-restaurant-dialog.component';
import { distinctUntilChanged, firstValueFrom, map, Observable, take, withLatestFrom } from 'rxjs';
import { RestaurantDataService } from '../../services';
import { FilterState, RestaurantReviewData } from '../../models';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FilterDialogComponent } from '../dialogs/filter-dialog/filter-dialog.component';
import { AsyncPipe } from '@angular/common';
import { RestaurantType } from '../../models/restaurant-type.enum';

interface ToolbarInfo {
  currentCount: number;
  totalCount: number;
}

interface FilterFormControls {
  restaurantType: FormControl<RestaurantType[] | null>;
  rating: FormControl<number | null>;
}

@Component({
  selector: 'app-toolbar',
  imports: [AsyncPipe],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  private readonly dialog = inject(MatDialog);
  private readonly restaurantDataService = inject(RestaurantDataService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  private readonly dialogConfig = {
    width: '72rem',
    maxWidth: '95vw',
    panelClass: 'no-border-radius-dialog',
  };

  /**
   * Form group for filter controls
   */
  public filterForm: FormGroup<FilterFormControls>;

  public toolbarInfo$: Observable<ToolbarInfo>;

  constructor() {
    this.filterForm = this.formBuilder.group<FilterFormControls>({
      restaurantType: new FormControl(null),
      rating: new FormControl(null)
    });

    this.filterForm.valueChanges.pipe(
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(value => {
      this.restaurantDataService.updateFilterState(value as FilterState);
    });

    this.toolbarInfo$ = this.restaurantDataService.filteredRestaurants$.pipe(
      withLatestFrom(this.restaurantDataService.restaurants$),
      map(([filteredRestaurants, allRestaurants]) => ({
        currentCount: filteredRestaurants.length,
        totalCount: allRestaurants.length
      }))
    );
  }

  /**
   * Opens the dialog to add a new restaurant review.
   * After the dialog is closed, if there is a result,
   * it adds the new restaurant.
   */
  public openAddRestaurantDialog() {
    this.dialog.open(AddNewRestaurantDialogComponent, this.dialogConfig)
      .afterClosed().pipe(take(1)).subscribe(result => {
        if (result) {
          this.addNewRestaurant(result);
        }
      });
  }

  /**
   * Opens the filter dialog.
   * After the dialog is closed, if there is a result,
   * it updates the filter form with the new filter state.
   */
  public async openFilterDialog() {
    const currentFilterState = await firstValueFrom(this.restaurantDataService.filterState$);
    this.dialog.open(FilterDialogComponent, {
      ...this.dialogConfig,
      height: '52rem',
      data: currentFilterState
    }).afterClosed().pipe(take(1)).subscribe(result => {
      if (result) {
        this.filterForm.patchValue(result);
      }
    });
  }

  /**
   * Adds a new restaurant using the restaurant data service.
   * @param restaurantData The data of the restaurant to be added, excluding the ID.
   */
  private async addNewRestaurant(restaurantData: Omit<RestaurantReviewData, 'id'>) {
    await firstValueFrom(this.restaurantDataService.addNewRestaurant(restaurantData));
  }

  /**
   * Resets all filters to their default (null) state.
   */
  public resetFilters() {
    this.filterForm.reset({ restaurantType: null, rating: null });
  }
}

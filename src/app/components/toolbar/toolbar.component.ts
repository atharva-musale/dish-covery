import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewRestaurantDialogComponent } from '../dialogs/add-new-restaurant/add-new-restaurant-dialog.component';
import { distinctUntilChanged, firstValueFrom, map, Observable, Subscription, take, withLatestFrom } from 'rxjs';
import { RestaurantDataService } from '../../services';
import { FilterState, RestaurantReviewData } from '../../models';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { FilterDialogComponent } from '../dialogs/filter-dialog/filter-dialog.component';
import { AsyncPipe } from '@angular/common';

interface ToolbarInfo {
  currentCount: number;
  totalCount: number;
}

@Component({
  selector: 'app-toolbar',
  imports: [AsyncPipe],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnDestroy {
  private readonly dialog = inject(MatDialog);
  private readonly restaurantDataService = inject(RestaurantDataService);
  private readonly formBuilder = inject(FormBuilder);

  private readonly dialogConfig = {
    width: '72rem',
    maxWidth: '95vw',
    panelClass: 'no-border-radius-dialog',
  };

  private subscriptions: Subscription[] = [];

  /**
   * Form group for filter controls
   */
  public filterForm: UntypedFormGroup;

  public toolbarInfo$: Observable<ToolbarInfo>;

  constructor() {
    this.filterForm = this.formBuilder.group({
      restaurantType: [null],
      rating: [null]
    });

    this.subscriptions.push(
      this.filterForm.valueChanges.pipe(
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
      ).subscribe(value => {
        this.restaurantDataService.updateFilterState(value as FilterState);
      })
    );

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

  public ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

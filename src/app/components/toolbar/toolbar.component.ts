import { ChangeDetectionStrategy, Component, inject, OnDestroy, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewRestaurantDialogComponent } from '../dialogs/add-new-restaurant.dialog/add-new-restaurant.dialog.component';
import { distinctUntilChanged, firstValueFrom, Subscription, take } from 'rxjs';
import { RestaurantDataService } from '../../services';
import { FilterState, RestaurantReviewData } from '../../models';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnDestroy {
  private readonly dialog = inject(MatDialog);
  private readonly restaurantDataService = inject(RestaurantDataService);
  private readonly formBuilder = inject(FormBuilder);

  private subscriptions: Subscription[] = [];

  /**
   * Whether the "Rating: 7+" filter is active or not
   */
  public isRatingBySevenFilterActive = signal(false);

  /**
   * Form group for filter controls
   */
  public filterForm: UntypedFormGroup;

  constructor() {
    this.filterForm = this.formBuilder.group({
      restaurantType: [null],
      rating: [null]
    });

    this.filterForm.valueChanges.pipe(
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
    ).subscribe(value => {
      this.restaurantDataService.updateFilterState(value as FilterState);
    });
  }

  /**
   * Opens the dialog to add a new restaurant review.
   * After the dialog is closed, if there is a result,
   * it adds the new restaurant.
   */
  public openAddRestaurantDialog() {
    this.dialog.open(AddNewRestaurantDialogComponent, {
      width: '72rem',
      maxWidth: '95vw',
      panelClass: 'no-border-radius-dialog',
    }).afterClosed().pipe(take(1)).subscribe(result => {
      if (result) {
        this.addNewRestaurant(result);
      }
    });
  }

  /**
   * Opens the filter dialog. (Currently a placeholder for future implementation)
   */
  public openFilterDialog() {
    console.log('Filter dialog opened');
  }

  /**
   * Toggles the "Rating: 7+" filter.
   * If the filter is currently active, it deactivates it, and vice versa.
   */
  public toggleFilterBySevenRating() {
    const current = this.filterForm.get('rating')?.value;
    this.filterForm.patchValue({ rating: current === 7 ? null : 7 });
    this.isRatingBySevenFilterActive.set(this.filterForm.get('rating')?.value === 7);
  }

  /**
   * Adds a new restaurant using the restaurant data service.
   * @param restaurantData The data of the restaurant to be added, excluding the ID.
   */
  private async addNewRestaurant(restaurantData: Omit<RestaurantReviewData, 'id'>) {
    await firstValueFrom(this.restaurantDataService.addNewRestaurant(restaurantData));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}

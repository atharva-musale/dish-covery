import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewRestaurantDialogComponent } from '../dialogs/add-new-restaurant.dialog/add-new-restaurant.dialog.component';
import { firstValueFrom, take } from 'rxjs';
import { RestaurantDataService } from '../../services';
import { RestaurantReviewData } from '../../models';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  private readonly dialog = inject(MatDialog);
  private readonly restaurantDataService = inject(RestaurantDataService);

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

  public openFilterDialog() {
    console.log('Filter dialog opened');
  }

  public filterByRating() {
    console.log('Filtering by rating 7+');
  }

  private async addNewRestaurant(restaurantData: Omit<RestaurantReviewData, 'id'>) {
    await firstValueFrom(this.restaurantDataService.addNewRestaurant(restaurantData));
  }
}

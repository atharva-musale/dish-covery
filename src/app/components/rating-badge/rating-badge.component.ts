import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-badge',
  imports: [CommonModule],
  templateUrl: './rating-badge.component.html',
  styleUrl: './rating-badge.component.css'
})
export class RatingBadgeComponent {
  /**
   * Rating of the restaurant
   */
  @Input()
  public rating = 0;

  /**
   * Assigns a class based on the rating
   *
   * @param rating rating of the restaurant
   * @returns 
   */
  public getRatingClass(rating: number) {
    switch(rating) {
      case 10:
        return 'amazing';
      case 9:
        return 'amazing';
      case 8:
        return 'great';
      case 7:
        return 'good';
      case 6:
        return 'average';
      case 5:
        return 'average';
      case 4:
        return 'below-average';
      case 3:
        return 'below-average';
      case 2:
        return 'bad';
      case 1:
        return 'bad';
      default:
        return 'unrated';
    }
  }
}

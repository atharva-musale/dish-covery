import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-badge',
  imports: [],
  templateUrl: './rating-badge.component.html',
  styleUrl: './rating-badge.component.css'
})
export class RatingBadgeComponent {
  /**
   * Rating of the restaurant
   */
  @Input()
  public rating = 0;
}

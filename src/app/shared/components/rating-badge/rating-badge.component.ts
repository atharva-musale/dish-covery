import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

const RATING_CLASS_MAP: Record<number, string> = {
  10: 'amazing',
  9: 'amazing',
  8: 'great',
  7: 'good',
  6: 'average',
  5: 'average',
  4: 'below-average',
  3: 'below-average',
  2: 'bad',
  1: 'bad',
};

@Component({
  selector: 'app-rating-badge',
  imports: [NgClass],
  templateUrl: './rating-badge.component.html',
  styleUrl: './rating-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingBadgeComponent {
  /**
   * Rating of the restaurant
   */
  public readonly rating = input(0);

  public getRatingClass(rating: number): string {
    return RATING_CLASS_MAP[rating] ?? 'unrated';
  }
}

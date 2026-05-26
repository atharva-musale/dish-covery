import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-chip',
  imports: [NgClass],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {
  public readonly item = input('');

  public readonly classes = input('');

  public readonly removeButtonClick = output<string>();

  /**
   * Emit event when the remove button is clicked
   */
  public removeChip() {
    this.removeButtonClick.emit(this.item());
  }
}

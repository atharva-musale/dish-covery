import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  imports: [NgClass],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css'
})
export class ChipComponent {
  @Input()
  public item = '';

  @Input()
  public classes = '';

  @Output()
  public removeButtonClick = new EventEmitter<string>();

  /**
   * Emit event when the remove button is clicked
   */
  public removeChip() {
    this.removeButtonClick.emit(this.item);
  }

}

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Signal,
  computed,
  forwardRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'app-multi-select-dropdown',
  imports: [ChipComponent],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectDropdownComponent),
      multi: true,
    },
  ],
})
export class MultiSelectDropdownComponent implements ControlValueAccessor {
  private readonly elementRef = inject(ElementRef);

  /** All available options */
  public readonly options = input.required<string[]>();

  /** Placeholder when nothing is selected */
  public readonly placeholder = input('Select…');

  /** Whether the dropdown is open */
  public readonly isOpen = signal(false);

  /** Current filter text */
  public readonly filter = signal('');

  /** Currently selected options */
  public readonly selected = signal<string[]>([]);

  public readonly filteredOptions: Signal<string[]>;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: string[]) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  constructor() {
    this.filteredOptions = computed(() => {
      const userText = this.filter().toLowerCase();
      return userText
        ? this.options().filter(o => o.toLowerCase().includes(userText))
        : this.options();
    });
  }

  /**
   * Close dropdown when clicking outside
   */
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  public toggleDropdown() {
    this.isOpen.update(v => !v);
    if (this.isOpen()) {
      this.filter.set('');
    }
    this.onTouched();
  }

  public isSelected(option: string): boolean {
    return this.selected().includes(option);
  }

  public toggleOption(option: string): void {
    this.selected.update(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
    this.onChange(this.selected());
  }

  public removeChip(option: string): void {
    this.toggleOption(option);
  }

  public onFilterInput(event: Event): void {
    this.filter.set((event.target as HTMLInputElement).value);
  }

  public onTriggerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleDropdown();
    }
  }

  public onOptionKeydown(event: KeyboardEvent, option: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleOption(option);
    }
  }

  /* ControlValueAccessor */
  public writeValue(value: string[]): void {
    this.selected.set(value ?? []);
  }

  public registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectDropdownComponent } from './multi-select-dropdown.component';
import { getElementBySelector } from '../../../testing';

describe('MultiSelectDropdownComponent', () => {
  let component: MultiSelectDropdownComponent;
  let fixture: ComponentFixture<MultiSelectDropdownComponent>;
  const options = ['Italian', 'Japanese', 'Mexican', 'Indian'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('options', options);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show placeholder when nothing is selected', () => {
    const trigger = getElementBySelector('.ms-trigger', fixture);
    expect(trigger?.hasTextContent('Select…')).toBeTrue();
  });

  it('should accept a custom placeholder', () => {
    fixture.componentRef.setInput('placeholder', 'Pick cuisines');
    fixture.detectChanges();

    const trigger = getElementBySelector('.ms-trigger', fixture);
    expect(trigger?.hasTextContent('Pick cuisines')).toBeTrue();
  });

  describe('dropdown toggle', () => {
    it('should be closed by default', () => {
      expect(component.isOpen()).toBeFalse();
      expect(getElementBySelector('.ms-dropdown', fixture)).toBeNull();
    });

    it('should open when trigger is clicked', () => {
      getElementBySelector('.ms-trigger', fixture)?.click();
      fixture.detectChanges();

      expect(component.isOpen()).toBeTrue();
      expect(getElementBySelector('.ms-dropdown', fixture)?.nativeElement).not.toBeNull();
    });
  });

  describe('option selection', () => {
    beforeEach(() => {
      component.toggleDropdown();
      fixture.detectChanges();
    });

    it('should select multiple options', () => {
      component.toggleOption('Italian');
      component.toggleOption('Mexican');
      fixture.detectChanges();

      expect(component.selected()).toEqual(['Italian', 'Mexican']);
    });

    it('should deselect an option when clicked again', () => {
      component.toggleOption('Italian');
      fixture.detectChanges();

      const items = fixture.nativeElement.querySelectorAll('li[role="option"]');
      items[0].click();
      fixture.detectChanges();

      expect(component.selected()).toEqual([]);
    });
  });

  describe('filtering', () => {
    beforeEach(() => {
      component.toggleDropdown();
      fixture.detectChanges();
    });

    it('should filter options based on input', () => {
      component.filter.set('ital');
      fixture.detectChanges();

      const items = fixture.nativeElement.querySelectorAll('li[role="option"]');
      expect(items.length).toBe(1);
      expect(items[0].textContent).toContain('Italian');
    });

    it('should show no results message when filter has no match', () => {
      component.filter.set('zzz');
      fixture.detectChanges();

      const noResults = fixture.nativeElement.querySelector('.ms-no-results');
      expect(noResults).not.toBeNull();
      expect(noResults.textContent).toContain('No matching options');
    });

    it('should reset filter when dropdown is reopened', () => {
      component.filter.set('ital');
      fixture.detectChanges();

      component.toggleDropdown(); // close
      component.toggleDropdown(); // reopen
      fixture.detectChanges();

      expect(component.filter()).toBe('');
    });
  });

  describe('chips', () => {
    it('should display chips for selected items', () => {
      component.selected.set(['Italian', 'Japanese']);
      fixture.detectChanges();

      const chips = fixture.nativeElement.querySelectorAll('app-chip');
      expect(chips.length).toBe(2);
    });

    it('should remove chip when removeChip is called', () => {
      component.selected.set(['Italian', 'Japanese']);
      component.removeChip('Italian');
      fixture.detectChanges();

      expect(component.selected()).toEqual(['Japanese']);
    });
  });
});

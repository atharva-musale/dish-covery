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

  describe('keyboard navigation', () => {
    it('should open dropdown on Enter key', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      spyOn(event, 'preventDefault');
      component.onTriggerKeydown(event);
      expect(component.isOpen()).toBeTrue();
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should open dropdown on Space key', () => {
      const event = new KeyboardEvent('keydown', { key: ' ' });
      spyOn(event, 'preventDefault');
      component.onTriggerKeydown(event);
      expect(component.isOpen()).toBeTrue();
    });

    it('should not toggle on other keys', () => {
      const event = new KeyboardEvent('keydown', { key: 'Tab' });
      component.onTriggerKeydown(event);
      expect(component.isOpen()).toBeFalse();
    });

    it('should select option on Enter key', () => {
      component.toggleDropdown();
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      spyOn(event, 'preventDefault');
      component.onOptionKeydown(event, 'Italian');
      expect(component.selected()).toContain('Italian');
    });

    it('should not select option on other keys', () => {
      component.toggleDropdown();
      const event = new KeyboardEvent('keydown', { key: 'Tab' });
      component.onOptionKeydown(event, 'Italian');
      expect(component.selected()).not.toContain('Italian');
    });
  });

  describe('document click', () => {
    it('should close dropdown when clicking outside', () => {
      component.toggleDropdown();
      expect(component.isOpen()).toBeTrue();

      const outsideEvent = new MouseEvent('click');
      Object.defineProperty(outsideEvent, 'target', { value: document.body });
      component.onDocumentClick(outsideEvent);

      expect(component.isOpen()).toBeFalse();
    });

    it('should keep dropdown open when clicking inside', () => {
      component.toggleDropdown();
      fixture.detectChanges();

      const insideEvent = new MouseEvent('click');
      Object.defineProperty(insideEvent, 'target', { value: fixture.nativeElement });
      component.onDocumentClick(insideEvent);

      expect(component.isOpen()).toBeTrue();
    });
  });

  describe('ControlValueAccessor', () => {
    it('should handle null in writeValue', () => {
      component.writeValue(null as any);
      expect(component.selected()).toEqual([]);
    });

    it('should register onChange callback', () => {
      const spy = jasmine.createSpy('onChange');
      component.registerOnChange(spy);
      component.toggleOption('Italian');
      expect(spy).toHaveBeenCalledWith(['Italian']);
    });
  });
});

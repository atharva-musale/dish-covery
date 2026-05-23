import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipComponent } from './chip.component';
import { getElementBySelector } from '../../../testing';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('item', 'Test Item');
    fixture.componentRef.setInput('classes', 'test-class');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item text and set class names', () => {
    const chip = getElementBySelector('.chip', fixture);
    const chipTextElement = getElementBySelector('.chip-text', fixture);

    expect(chipTextElement?.hasTextContent('Test Item')).toBeTrue();
    expect(chip?.hasClass('test-class')).toBeTrue();
  });

  it('should emit removeButtonClick event with item value when remove button is clicked', () => {
    spyOn(component.removeButtonClick, 'emit');
    const removeButton = getElementBySelector('.remove-chip-button', fixture);
    removeButton?.click();

    expect(component.removeButtonClick.emit).toHaveBeenCalledWith('Test Item');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AddNewRestaurantDialogComponent } from './add-new-restaurant.dialog.component';

describe('AddNewRestaurantDialogComponent', () => {
  let component: AddNewRestaurantDialogComponent;
  let fixture: ComponentFixture<AddNewRestaurantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewRestaurantDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRestaurantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getElementBySelector } from './testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should display logo properly', () => {
    fixture.detectChanges();

    const headerImage = getElementBySelector('.logo', fixture);
    expect(headerImage?.hasTextContent('DishCovery')).toBeTrue();
  });

  describe('scrolled class', () => {
    it('should not have scrolled class initially', () => {
      const toolbar = getElementBySelector('app-toolbar', fixture);
      expect(toolbar?.hasClass('scrolled')).toBeFalse();
    });
  });
});

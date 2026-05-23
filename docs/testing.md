# Testing

## Framework

- **Test Runner:** Karma
- **Testing Library:** Jasmine
- **Browser:** Chrome (headless in CI)

## Running Tests

```bash
# Run all unit tests
yarn test

# Run tests in watch mode (default behavior)
yarn test

# Run with code coverage
yarn test --code-coverage
```

## Test Structure

Tests live alongside their source files with the `.spec.ts` suffix:

```
component-name/
├── component-name.component.ts
├── component-name.component.spec.ts
├── component-name.component.html
└── component-name.component.css
```

## Writing Tests

### Component Tests

Use Angular's `TestBed` to configure standalone components:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Setting Inputs

Use `fixture.componentRef.setInput()` for signal/input-based components:

```typescript
fixture.componentRef.setInput('restaurant', mockRestaurant);
fixture.detectChanges();
```

### Test Helpers

The project provides helper utilities in `src/app/testing/`:

- **`getElementBySelector(selector, fixture)`** — Query rendered DOM elements in tests

```typescript
import { getElementBySelector } from '../../testing';

const title = getElementBySelector('.restaurant-title', fixture);
expect(title!.hasTextContent('Pasta Palace')).toBeTrue();
```

### Service Fixtures

Service tests use dedicated fixture files (`*.service.fixtures.ts`) to keep mock data separate from test logic.

## Recommendations

- Keep tests focused — one behavior per `it()` block
- Use `OnPush` change detection in components; call `fixture.detectChanges()` after state changes
- Mock HTTP calls with `HttpClientTestingModule` for service tests
- Use barrel imports (`from '../../testing'`) for test utilities
- Name fixture files clearly: `*.fixtures.ts` or `*.service.fixtures.ts`

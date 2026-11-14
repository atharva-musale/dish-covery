# Project Architecture

## Overview

DishCovery is a restaurant review application built with Angular, using standalone components, zoneless change detection and Angular Material for UI. The codebase is organised into **core**, **features** and **shared** layers.

## Tech Stack

- **Framework:** Angular (standalone components, zoneless change detection, signal inputs)
- **UI Library:** Angular Material + CDK
- **State:** RxJS observable streams in root-provided services
- **Forms:** Typed reactive forms
- **Backend:** JSON Server (mock REST API on `localhost:3000`)
- **Testing:** Vitest + jsdom
- **Package Manager:** Yarn 1.x

## Folder Structure

```
src/
├── app/
│   ├── app.component.*          # Root shell: header, toolbar, restaurants grid
│   ├── app.config.ts            # Providers (zoneless CD, router, HttpClient)
│   ├── app.routes.ts            # Routes (currently empty – single-page layout)
│   ├── core/                    # App-level configuration
│   │   └── configurations/      # API_CONFIG injection token
│   ├── features/                # Feature areas, each split into pages/ and components/
│   │   ├── restaurants/
│   │   │   ├── pages/           # restaurants-grid (smart, injects services)
│   │   │   └── components/      # restaurant-teaser, restaurant-type-badge (presentational)
│   │   └── toolbar/
│   │       └── pages/           # toolbar (filters, counts, dialog triggers)
│   ├── shared/                  # Reusable, feature-agnostic building blocks
│   │   ├── api-services/        # Thin HTTP clients (RestaurantApiService)
│   │   ├── services/            # Stateful data services (RestaurantDataService)
│   │   ├── components/          # chip, multi-select-dropdown, rating-badge
│   │   ├── dialogs/             # add-new-restaurant, filter-dialog
│   │   └── models/              # Interfaces and enums
│   └── testing/                 # Test helpers (dialog mock, template helpers)
├── assets/
│   ├── db.json                  # JSON Server database
│   ├── data/                    # Static data (review-data)
│   └── images/                  # Restaurant images + fallback image
├── fixtures.ts                  # Aggregated service mocks for specs
└── styles.css                   # Global styles
```

### Layer Rules

| Layer      | Purpose                                                      | May import from        |
| ---------- | ------------------------------------------------------------ | ---------------------- |
| `core`     | App-wide configuration (injection tokens, settings)          | —                      |
| `shared`   | Reusable models, services, components and dialogs            | `core`, `shared`       |
| `features` | Feature-specific pages and components                        | `core`, `shared`, own feature |

Features must not import from other features; anything needed by more than one feature belongs in `shared`.

### Pages vs Components

- **`pages/`** — container components that inject services and own state/streams (e.g. `RestaurantsGridComponent`, `ToolbarComponent`).
- **`components/`** — presentational components that receive data via signal `input()`s and have no service dependencies (e.g. `RestaurantTeaserComponent`).

## Key Patterns

### Standalone Components

All components are standalone (no NgModules). Imports are declared directly in the `@Component` decorator.

### Zoneless Change Detection

The app is bootstrapped with `provideZonelessChangeDetection()`. All components use `ChangeDetectionStrategy.OnPush`, and UI updates are driven by the `async` pipe or signals.

### Barrel Exports & Path Aliases

Each folder exposes an `index.ts` barrel. Imports that cross a module boundary use the path aliases defined in `tsconfig.json`; imports within the same module stay relative.

| Alias              | Resolves to          |
| ------------------ | -------------------- |
| `@dish/core/*`     | `src/app/core/*`     |
| `@dish/shared/*`   | `src/app/shared/*`   |
| `@dish/fixtures`   | `src/fixtures.ts`    |

```typescript
// From a feature (crossing into shared/core)
import { RestaurantDataService } from '@dish/shared/services';
import { API_CONFIG } from '@dish/core/configurations';
import { RestaurantDataServiceFixtures } from '@dish/fixtures';

// Within shared (same module) – stay relative
import { MultiSelectDropdownComponent } from '../../components';
```

### Configuration via Injection Token

The API base URL is provided by the `API_CONFIG` token in `core/configurations`, with a root-level default of `http://localhost:3000`. Services read it with `inject(API_CONFIG)` instead of hard-coding URLs.

### Service Layer

- **`RestaurantApiService`** (`shared/api-services`) — stateless HTTP wrapper around the `/restaurants` endpoint (`getRestaurants$`, `addNewRestaurant`).
- **`RestaurantDataService`** (`shared/services`) — stateful service exposing:
  - `restaurants$` — all restaurants (with retry, error fallback to `[]`, and `shareReplay(1)`)
  - `filteredRestaurants$` — restaurants sorted by rating and filtered by the current `FilterState`
  - `filterState$` / `updateFilterState()` — filter state backed by a `BehaviorSubject`
  - `addNewRestaurant()` — persists a new review

> `RestaurantDataService` currently still performs its own HTTP calls; the intent is for it to delegate to `RestaurantApiService`.

All services are `providedIn: 'root'` and use `inject()` for dependencies.

## Data Flow

```
JSON Server (localhost:3000)
    ↕ HTTP (base URL from API_CONFIG)
RestaurantApiService / RestaurantDataService  (RxJS streams + filter state)
    ↕ inject()
Pages: ToolbarComponent, RestaurantsGridComponent  (async pipe)
    ↕ signal input()
Presentational components: RestaurantTeaser, RatingBadge, RestaurantTypeBadge
```

- The **toolbar** pushes filter changes (from its reactive form or the filter dialog) into `RestaurantDataService.updateFilterState()`, shows filtered/total counts, and opens the add-restaurant dialog.
- The **restaurants grid** subscribes to `filteredRestaurants$` and resolves each restaurant's image (`imageUrl` → `imageAssetsPath` → fallback image).
- The **root component** renders the header and toggles a `scrolled` class on the toolbar once the header leaves the viewport.

## Models

- **`RestaurantReviewData`** — core data interface (`id`, `restaurantName`, `rating`, `restaurantType[]`, `review`, optional `description`, `restaurantMapsLocation`, `imageUrl`, `imageAssetsPath`)
- **`RestaurantType`** — enum of cuisine categories (Italian, Chinese, Cafe, South Indian, etc.)
- **`FilterState`** — active filters (`restaurantType`, minimum `rating`); `null` means no filter

## Testing Support

- Service mocks live next to their services as `*.fixtures.ts` (e.g. `RestaurantDataServiceMock`, `RestaurantApiServiceMock`) and are re-exported via `src/fixtures.ts`; they are compiled through `tsconfig.fixtures.json`.
- Shared test helpers (dialog mock, template helpers) live in `app/testing/`.

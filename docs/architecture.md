# Project Architecture

## Overview

DishCovery is a restaurant review application built with Angular 21, using a standalone component architecture and Angular Material for UI.

## Tech Stack

- **Framework:** Angular 21 (standalone components, signals-ready)
- **UI Library:** Angular Material + CDK
- **State:** RxJS observables via services
- **Backend:** JSON Server (mock REST API)
- **Package Manager:** Yarn 1.x

## Folder Structure

```
src/
├── app/
│   ├── components/          # UI components
│   │   ├── dialogs/         # Dialog components (e.g., add-new-restaurant)
│   │   ├── rating-badge/    # Displays restaurant rating
│   │   ├── restaurant-teaser/  # Restaurant card preview
│   │   ├── restaurant-type-badge/  # Cuisine type label
│   │   ├── restaurants-grid/  # Grid layout for restaurant cards
│   │   ├── toolbar/         # App toolbar with filters
│   │   └── utils/           # Reusable utility components (chip, multi-select-dropdown)
│   ├── models/              # TypeScript interfaces and enums
│   ├── services/            # Data services (HTTP layer)
│   └── testing/             # Test utilities and helpers
├── assets/
│   ├── db.json              # JSON Server database
│   ├── data/                # Static data (review-data)
│   └── images/              # Static images
└── styles.css               # Global styles
```

## Key Patterns

### Standalone Components

All components are standalone (no NgModules). Imports are declared directly in the `@Component` decorator.

### Barrel Exports

Each feature folder uses `index.ts` barrel files to simplify imports:

```typescript
import { RestaurantsGridComponent, ToolbarComponent } from './components';
```

### Service Layer

Services are provided at root level (`providedIn: 'root'`) and use `HttpClient` to communicate with the JSON Server backend.

### Change Detection

Components use `ChangeDetectionStrategy.OnPush` for optimal performance.

## Data Flow

```
JSON Server (localhost:3000)
    ↕ HTTP
RestaurantDataService (RxJS Observable streams)
    ↕ Input bindings
Components (OnPush change detection)
```

## Models

- **`RestaurantReviewData`** — Core data interface (id, name, rating, type, review, image)
- **`RestaurantType`** — Enum of cuisine categories (Italian, Chinese, Cafe, etc.)

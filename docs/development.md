# Development

## Prerequisites

- **Node.js:** >= 22.11.0
- **Yarn:** >= 1.22.0 (< 2.0.0)
- **Angular CLI:** Installed via project dependencies (`yarn ng`)

## Setup

```bash
# Install dependencies
yarn install

# Start the mock API server
yarn server

# Start the development server (in a separate terminal)
yarn start
```

The app runs at `http://localhost:4200/` and the API at `http://localhost:3000/`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start dev server |
| `yarn server` | Start JSON Server (mock API on port 3000) |
| `yarn build` | Production build (output in `dist/`) |
| `yarn watch` | Build in watch mode (development config) |
| `yarn test` | Run unit tests with Karma |
| `yarn lint` | Lint with ESLint (Angular + TypeScript rules) |

## Code Quality

### Linting

ESLint is configured with:
- `@eslint/js` recommended rules
- `typescript-eslint` recommended + stylistic
- `angular-eslint` for Angular-specific rules

```bash
yarn lint
```

### Commit Conventions

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) enforced by:
- **Husky** — Git hooks (runs on `prepare`)
- **commitlint** — Validates commit message format

Format: `type(scope): description`

Examples:
```
feat(restaurants): add filter by cuisine type
fix(toolbar): correct dropdown alignment
docs: update architecture documentation
```

## Adding a New Component

```bash
yarn ng generate component components/my-component
```

The component will be standalone by default. Export it via the appropriate `index.ts` barrel file.

## Mock API (JSON Server)

The database lives at `src/assets/db.json`. JSON Server provides full REST endpoints:

- `GET /restaurants` — List all restaurants
- `POST /restaurants` — Add a new restaurant
- `GET /restaurants/:id` — Get a single restaurant
- `PUT /restaurants/:id` — Update a restaurant
- `DELETE /restaurants/:id` — Delete a restaurant

Changes to `db.json` persist while the server is running.

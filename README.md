# Qlic Frontend Web

Responsive Angular web application for monitoring water consumption, active alerts, connected devices, tank inventory, reports, support requests, and user preferences.

## Requirements

- Node.js 20.19+, 22.12+, or 24+
- npm 10 or newer

## Technology stack

- Angular 20 and TypeScript 5.9
- Angular Material and Angular CDK 20
- RxJS, HTML, and responsive SCSS
- Jasmine and Karma for automated tests

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

Local validation credentials:

- Email: `demo@qlic.com`
- Password: `Qlic2026!`

The application currently uses deterministic local data so the complete interface can be validated without external dependencies. Backend integration remains pending until the API contract and CORS configuration are ready for browser clients.

## Quality checks

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
npm audit --omit=dev --audit-level=high
```

## Main routes

- `/sign-in`
- `/create-account`
- `/dashboard`
- `/alerts`
- `/devices`
- `/reports`
- `/business`
- `/support`
- `/account`

Protected routes redirect to the sign-in screen when there is no local session.

## Visual system

The web interface follows the same visual language as the Qlic mobile application: blue primary actions, Poppins headings, Roboto body text, 12-pixel card radii, status colors, clear hierarchy, and responsive layouts adapted to desktop navigation.

## Rubric alignment

- Web application developed with Angular, TypeScript, Angular Material, HTML, and SCSS.
- English (`en-US`) is the default locale and Latin American Spanish (`es-419`) is available throughout the interface.
- Responsive layouts cover desktop and mobile widths while preserving the Qlic mobile visual system.
- Semantic landmarks, ARIA labels, keyboard focus states, a skip link, and reduced-motion support improve accessibility.
- The entry document includes title, description, keywords, and author metadata.
- The repository follows Conventional Commits and uses `main` and `develop` as its principal GitFlow branches.

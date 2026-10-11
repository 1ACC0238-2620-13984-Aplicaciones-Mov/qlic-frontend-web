# Qlic Frontend Web

Responsive Angular web application for monitoring water consumption, active alerts, connected devices, tank inventory, reports, support requests, and user preferences.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

Local validation credentials:

- Email: `demo@qlic.com`
- Password: `Qlic2026!`

The application uses deterministic local data. It does not require a backend for interface validation.

## Quality checks

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
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

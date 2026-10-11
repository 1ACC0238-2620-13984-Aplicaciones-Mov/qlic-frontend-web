# Local interface validation

Validation date: October 11, 2026.

## Automated checks

- Component and service tests completed in headless Chrome.
- Production bundle generated successfully.
- No browser console errors were observed on the dashboard.

## Verified flows

- Invalid credentials retain the entered email and display an accessible error banner.
- Valid local credentials open the dashboard.
- Protected routes require an active local session.
- Alert search can produce a clear empty state.
- Dashboard, alerts, devices, reports, business, support, and account routes render successfully.
- English is the default language and Spanish can be selected from the application shell.

## Responsive checks

All primary routes were checked at a 390 by 844 viewport. No route produced horizontal page overflow. Desktop validation confirmed the fixed top bar, sidebar navigation, metric grid, chart cards, and routed content region.

## Local credentials

- Email: `demo@qlic.com`
- Password: `Qlic2026!`

These credentials and all displayed records are intended only for local interface validation.

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const configuration = JSON.parse(
  await readFile(new URL('../firebase.json', import.meta.url), 'utf8'),
);
const angularConfiguration = JSON.parse(
  await readFile(new URL('../angular.json', import.meta.url), 'utf8'),
);

const headersByName = new Map(
  configuration.hosting.headers
    .flatMap((rule) => rule.headers)
    .map(({ key, value }) => [key, value]),
);

test('publishes the Angular browser bundle with SPA routing', () => {
  assert.equal(configuration.hosting.public, 'dist/qlic-frontend-web/browser');
  assert.deepEqual(configuration.hosting.rewrites, [
    { source: '**', destination: '/index.html' },
  ]);
});

test('builds production styles without CSP-incompatible inline handlers', () => {
  const production =
    angularConfiguration.projects['qlic-frontend-web'].architect.build.configurations.production;

  assert.equal(production.optimization.styles.inlineCritical, false);
  assert.equal(production.sourceMap, false);
});

test('sets the required browser security headers', () => {
  assert.match(headersByName.get('Content-Security-Policy'), /default-src 'self'/);
  assert.match(headersByName.get('Content-Security-Policy'), /script-src 'self'/);
  assert.match(headersByName.get('Content-Security-Policy'), /object-src 'none'/);
  assert.match(headersByName.get('Content-Security-Policy'), /frame-ancestors 'none'/);
  assert.equal(headersByName.get('Strict-Transport-Security'), 'max-age=31536000; includeSubDomains');
  assert.equal(headersByName.get('X-Content-Type-Options'), 'nosniff');
  assert.equal(headersByName.get('X-Frame-Options'), 'DENY');
  assert.equal(headersByName.get('Referrer-Policy'), 'strict-origin-when-cross-origin');
  assert.match(headersByName.get('Permissions-Policy'), /camera=\(\)/);
});

test('uses safe cache policies for the shell and fingerprinted assets', () => {
  const shellSources = ['/', '**/!(*.*)', '**/*.html'];
  const shellRules = configuration.hosting.headers.filter((rule) =>
    shellSources.includes(rule.source),
  );
  const assetRule = configuration.hosting.headers.find(
    (rule) => rule.source === '**/*.@(js|css)',
  );

  assert.deepEqual(
    shellRules.map((rule) => rule.source).sort(),
    shellSources.sort(),
  );
  for (const rule of shellRules) {
    assert.deepEqual(rule.headers, [
      { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
    ]);
  }
  assert.deepEqual(assetRule?.headers, [
    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
  ]);
});

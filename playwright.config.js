import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90 * 1000,
  fullyParallel: true,
  reporter: 'html',
  expect: { timeout: 20 * 1000 },
  use: {
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 30 * 1000,
    navigationTimeout: 60 * 1000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
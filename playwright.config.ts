import { chromium, defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // overall test wait time is 30 secs
  expect:{
    timeout: 5000 // 
  },

  reporter: 'html',

  use: {
   
    trace: 'on-first-retry',
    headless: false,
    browserName: 'chromium',
  },

  /* Configure projects for major browsers */
  
});

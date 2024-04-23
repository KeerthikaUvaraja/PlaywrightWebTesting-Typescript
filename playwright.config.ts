import { chromium, defineConfig, devices } from '@playwright/test';
import dotenv from "dotenv";

if(!process.env.NODE_ENV){
  require('dotenv').config({path:`${__dirname}//BaseURL//.env.local`});
}
else{
  require('dotenv').config({path:`${__dirname}//BaseURL//.env.${process.env.NODE_ENV}`});
}
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

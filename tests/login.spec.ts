const {test, expect} = require('@playwright/test');
import { loginPage } from "../Pages/login.page";

test("Test playwright", async ({page}) =>{
    const loginPagee = new loginPage(page, expect);
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await loginPagee.verifyLoginPage();
})

test("Test playwright2 ", async ({page}) =>{
 
    await page.goto("https://google.com");
    await page.title();
    await expect(page).toHaveTitle("Google");

})
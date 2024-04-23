const {test, expect} = require('@playwright/test');
import { loginPage } from "../Pages/login.page";
import { shoppingPage } from "../Pages/shopping.page";
import dotenv from "dotenv";

test("Validation error check ", async ({page}) =>{
    console.log("Verify validation errors are thrown in login page");
    const loginPagee = new loginPage(page, expect);
    const shopPage = new shoppingPage(page, expect);
    await page.goto(process.env.URL);
    await loginPagee.validationErrorsLoginPage();

})

test("Login successful check", async ({page}) =>{
    console.log("Verify login was successful");
    const loginPagee = new loginPage(page, expect);
    const shopPage = new shoppingPage(page, expect);
    //console.log(process.env.URL);
    await page.goto(process.env.URL);
    await loginPagee.verifyLoginPage();
    await shopPage.findFirstProduct();
})


import {Locator,Expect, Page} from '@playwright/test';
import dotenv from "dotenv"

export class loginPage{
    page: Page;
    expect: Expect;
    username: Locator;
    password: Locator;
    checkBox : Locator;
    errorTextEmpty: Locator;
    errorTextIncorrect: Locator;
    signIn: Locator;

    constructor(page:Page, expect: Expect){
        this.page = page;
        this.expect = expect;
        this.username = this.page.locator("#username");
        this.password = this.page.locator("#password");
        this.checkBox = this.page.locator('#terms');
        this.errorTextIncorrect = this.page.locator("[style*='block']");
        this.signIn = this.page.locator('#signInBtn');

    }
    //This function makes sure validation errors are thrown for login fields
    async validationErrorsLoginPage(){
        console.log("Validating Login page error");
        await this.signIn.click();
        let emptyError = await this.expect(this.errorTextIncorrect).toContainText("Empty username/password.");
        await this.username.fill(process.env.USERNAME!);
        await this.signIn.click();
        let emptyError2 = await this.expect(this.errorTextIncorrect).toContainText("Empty username/password.");
        await this.password.fill("empty");
        await this.signIn.click();
        let emptyError3 = await this.expect(this.errorTextIncorrect).toContainText("Incorrect username/password.");
        await this.password.clear();
        await this.password.fill(process.env.PASSWORD!);
        await this.signIn.click();
        console.log("Valid username and password were inputted and logged in");
    }

    async verifyLoginPage(){
        //here ! is providing type as non null value
        await this.username.fill(process.env.USERNAME!);
        await this.password.fill(process.env.PASSWORD!);
        await this.checkBox.click();
        await this.signIn.click();
    }
}
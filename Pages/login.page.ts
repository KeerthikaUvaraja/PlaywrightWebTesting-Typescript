import {Locator,Expect, Page} from '@playwright/test';

export class loginPage{
    page: Page;
    expect: Expect;
    username: Locator;
    password: Locator;
    checkBox : Locator;
    errorText: Locator;
    signIn: Locator;

    constructor(page:Page, expect: Expect){
        this.page = page;
        this.expect = expect;
        this.username = this.page.locator("#username");
        this.password = this.page.locator("#password");
        this.checkBox = this.page.locator('#terms');
        this.errorText = this.page.locator("[style*='block']");
        this.signIn = this.page.locator('#signInBtn');

    }

    async verifyLoginPage(){
        await this.username.fill('rahulshettyacademy');
        await this.password.fill('learning');
        await this.signIn.click();
        let messageError = await this.expect(this.errorText).toContainText("Incorrect");
        console.log(messageError);
        await this.checkBox.click();
        await this.signIn.click();
    }
}
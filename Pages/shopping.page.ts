import {Locator, Page, Expect} from '@playwright/test';

export class shoppingPage {
    page: Page;
    expect: Expect;
    itemTitle: Locator;


    constructor(page: Page, expect:Expect){
      this.page = page;
      this.expect = expect;
      this.itemTitle = this.page.locator(".card-body a");

    }

    async findFirstProduct(){
        let itemName = await this.itemTitle.first().innerText();
        console.log("First item name of shopping page: " + itemName);
    }
}
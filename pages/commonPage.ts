import { expect, Locator, Page } from "@playwright/test";

export class CommonPage {
  private page: Page;
  private searchField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.locator("//input[@type='text']");
  }

  async tableRecordSelector(value: string): Promise<void> {
    await this.page
      .getByRole("row", { name: value })
      .getByRole("button")
      .click();
  }

  async searchAndAdd(value: string): Promise<void> {
    await this.searchField.clear();
    await this.searchField.click();
    await this.searchField.fill(value);
    await this.tableRecordSelector(value);
  }

  async openHamburgerMenu(itemName: string): Promise<void> {
    await this.page
      .getByRole("row", {
        name: itemName,
      })
      .getByRole("button")
      .click();
  }
}

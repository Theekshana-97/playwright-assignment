import { expect, test } from "@playwright/test";
import { CommonPage } from "../pages/commonPage";
import testdata from "../data/testdata.json";

test.describe("Main Tested Feature", () => {
  let commonPage: CommonPage;

  test.beforeAll(async () => {});

  test.beforeEach(async ({ page }) => {
    commonPage = new CommonPage(page);
    await page.goto(testdata.url); // Can be added to beforeAll if the URL is the same for all tests
      });
  });

  test("Generic Test Case", async ({ page }) => {

    await test.step("Individual test steps", async () => {
      // Add your test steps here
    });

});

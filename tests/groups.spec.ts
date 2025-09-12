import { expect, test } from "@playwright/test";
import { CommonPage } from "../pages/commonPage";
import testdata from "../data/testdata.json";
import { logger } from "../utils/logger";

test.describe("Main Tested Feature", () => {
  let commonPage: CommonPage;

  test.beforeAll(async () => {});

  test.beforeEach(async ({ page }) => {
    commonPage = new CommonPage(page);
    await page.goto(testdata.url); // Can be added to beforeAll if the URL is the same for all tests
    logger.info(`Navigated to the URL ${testdata.url}`);
      });
  });

  test("Generic Test Case", async ({ page }) => {

    logger.info("Test started: Generic Test Case")
    await test.step("Individual test steps", async () => {
      // Add your test steps here
    });
    logger.info("Test Finished:  Generic Test Case")
});

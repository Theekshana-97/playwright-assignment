import { test, expect } from '@playwright/test';

const url = 'https://www.saucedemo.com/';
const user = 'standard_user';
const pass = 'secret_sauce';

// LOGIN
test('Login', async ({ page }) => {
  await page.goto(url);
  await page.fill('#user-name', user);
  await page.fill('#password', pass);
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);
});

// LOGOUT
test('Logout', async ({ page }) => {
  await page.goto(url);
  await page.fill('#user-name', user);
  await page.fill('#password', pass);
  await page.click('#login-button');

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  await expect(page).toHaveURL(url);
});

// VIEW PRODUCT
test('View Product', async ({ page }) => {
  await page.goto(url);
  await page.fill('#user-name', user);
  await page.fill('#password', pass);
  await page.click('#login-button');

  await page.click('.inventory_item_name');
  await expect(page.locator('.inventory_details_name')).toBeVisible();
});

// ADD TO CART
test('Add to Cart', async ({ page }) => {
  await page.goto(url);
  await page.fill('#user-name', user);
  await page.fill('#password', pass);
  await page.click('#login-button');

  await page.click('text=Add to cart');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

// REMOVE ITEM
test('Remove Item', async ({ page }) => {
  await page.goto(url);
  await page.fill('#user-name', user);
  await page.fill('#password', pass);
  await page.click('#login-button');

  await page.click('text=Add to cart');
  await page.click('text=Remove');

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});

// CHECKOUT
test('Checkout', async ({ page }) => {
  await page.goto(url);
  await page.fill('#user-name', user);
  await page.fill('#password', pass);
  await page.click('#login-button');

  await page.click('text=Add to cart');
  await page.click('.shopping_cart_link');

  await page.click('#checkout');
  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '12345');

  await page.click('#continue');
  await page.click('#finish');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
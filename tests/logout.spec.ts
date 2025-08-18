import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('User can log out successfully', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Log in
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Step 3: Click the menu button (☰)
  await page.click('#react-burger-menu-btn');

  // Step 4: Click the Logout link
  await page.click('#logout_sidebar_link');

  // Step 5: Verify that we're back on the login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
});

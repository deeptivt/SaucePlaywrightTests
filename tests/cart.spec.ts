import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test('Add product to cart and verify', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addFirstProductToCart();

  await page.click('.shopping_cart_link');
  const cartItem = page.locator('.cart_item');
  await expect(cartItem).toHaveCount(1);
});

import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('html').click();
  await page.goto('http://localhost:3000/');
  await page.getByRole('img', { name: 'Next.js logo' }).click();
});

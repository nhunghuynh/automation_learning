import {test, expect} from '@playwright/test';

test('TC01: Verify page title is Playwright', async ({page}) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('TC02: Verify Get Started button navigates to Installation page', async({page}) => {
    await page.goto('https://playwright.dev/');
    await page.click('text=Get Started');
    await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
});

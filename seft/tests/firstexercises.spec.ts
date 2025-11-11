import {test, expect} from '@playwright/test';

//Declare a group of test
test.describe('First Exercise - Playwright Demo', () => {
    test.beforeEach(async ({page}) => {
        //Open Home URL
        await page.goto('https://playwright.dev/');
    });

    test('TC01: Verify page title is Playwright', async ({page}) => {
        // await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('TC02: Verify Get Started button navigates to Installation page', async({page}) => {
        // await page.goto('https://playwright.dev/');
        await page.getByRole('link', {name: 'Get started'}).click(); 
        await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
    });
});

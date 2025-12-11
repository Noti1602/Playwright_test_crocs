import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { SearchPage } from '../pages/SearchPage.js';

test.describe('Crocs — authorization and search of goods', () => {
    test('Login and search Classic Cozzzy', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const searchPage = new SearchPage(page);

        await page.goto('/');
        await loginPage.login('bnoti1602@gmail.com', 'Noti1602');

        await searchPage.searchProduct('Classic Cozzzy');
        await searchPage.waitForResults();

        await expect(searchPage.searchResultsText).toHaveText('На запит "Classic Cozzzy" знайдено 3 од.')
        await expect(searchPage.searchResultsText).toContainText('3 од');

    });
    test('debug allure', async ({}) => {
        console.log('TEST RUN');
    });
});

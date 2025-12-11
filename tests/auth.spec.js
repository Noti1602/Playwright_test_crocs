import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('User can login to Crocs website', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto('/');
    await loginPage.login('bnoti1602@gmail.com', 'Noti1602');

});

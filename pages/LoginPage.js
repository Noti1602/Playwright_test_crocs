import { BasePage } from './BasePage'
import { expect } from '@playwright/test'

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);


        this.enterBtn = '[href="https://crocs.org.ua/account/login"]';
        this.emailInput = 'input[id="dwfrm_login_username"]';
        this.passwordInput = 'input[id="dwfrm_login_password"]';
        this.enterSecondBtn = 'input[type="submit"]';
        this.logoLink = '[class="logo__link"]';
    }
        async login(email, password) {

            await this.page.click(this.enterBtn);
            await this.page.fill(this.emailInput, email);
            await this.page.fill(this.passwordInput, password);
            await this.page.click(this.enterSecondBtn);
            await this.page.click(this.logoLink);

            await expect(this.page.locator('div.login-registration a[href="https://crocs.org.ua/account/edit"]')).toBeVisible();

        }
}
